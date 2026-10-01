// Synthesize the music bed + SFX for a short from its timeline, then mix to -14 LUFS.
// usage: node scripts/audio.mjs [shortDir=src/shorts/chat360-ad] [--mix-only]
// Writes public/audio/<name>-bed.wav, <name>-sfx.wav and <name>-mix.wav.
// Swap the bed for an approved one: drop it in as <name>-bed.wav and run with --mix-only.
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const shortDir = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "src/shorts/chat360-ad";
const mixOnly = process.argv.includes("--mix-only");
const tl = JSON.parse(readFileSync(path.join(shortDir, "timeline.json"), "utf8"));
const name = path.basename(shortDir);
const OUT = "public/audio";
mkdirSync(OUT, { recursive: true });

const SR = 48000;
const DUR = tl.duration / tl.fps; // seconds
const N = Math.round(DUR * SR);
const BEAT = 60 / tl.bpm;
const BAR = 4 * BEAT;
const BAR0 = tl.barOffsetSec ?? 0;

// ---------- utilities ----------
let seed = 0x9e3779b9;
const rnd = () => {
  // mulberry32: deterministic noise, identical renders every time
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const noise = () => rnd() * 2 - 1;
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const stereo = () => ({ L: new Float32Array(N), R: new Float32Array(N) });
const add = (bus, i, v, pan = 0) => {
  if (i < 0 || i >= N) return;
  const a = (pan + 1) * 0.25 * Math.PI; // equal-power pan
  bus.L[i] += v * Math.cos(a);
  bus.R[i] += v * Math.sin(a);
};

class SVF {
  // Zavalishin TPT state-variable filter (stable under modulation)
  constructor() {
    this.ic1 = 0;
    this.ic2 = 0;
  }
  run(x, fc, q = 0.707) {
    const g = Math.tan((Math.PI * Math.min(fc, SR * 0.45)) / SR);
    const k = 1 / q;
    const a1 = 1 / (1 + g * (g + k));
    const a2 = g * a1;
    const a3 = g * a2;
    const v3 = x - this.ic2;
    const v1 = a1 * this.ic1 + a2 * v3;
    const v2 = this.ic2 + a2 * this.ic1 + a3 * v3;
    this.ic1 = 2 * v1 - this.ic1;
    this.ic2 = 2 * v2 - this.ic2;
    return { lp: v2, bp: v1, hp: x - k * v1 - v2 };
  }
}

// PolyBLEP saw (keeps the pad and bass from aliasing into harshness)
const polyblep = (t, dt) => {
  if (t < dt) {
    t /= dt;
    return t + t - t * t - 1;
  }
  if (t > 1 - dt) {
    t = (t - 1) / dt;
    return t * t + t + t + 1;
  }
  return 0;
};

// Freeverb-style room on a send bus
const reverb = (bus, { room = 0.84, damp = 0.25, wet = 1 } = {}) => {
  const scale = SR / 44100;
  const combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617].map((d) => Math.round(d * scale));
  const aps = [556, 441, 341, 225].map((d) => Math.round(d * scale));
  const out = stereo();
  for (const [ch, spread] of [
    ["L", 0],
    ["R", 23],
  ]) {
    const x = bus[ch];
    const y = out[ch];
    const cb = combs.map((d) => ({ buf: new Float32Array(d + spread), i: 0, f: 0 }));
    const ab = aps.map((d) => ({ buf: new Float32Array(d + spread), i: 0 }));
    for (let n = 0; n < N; n++) {
      const inp = x[n] * 0.015;
      let s = 0;
      for (const c of cb) {
        const o = c.buf[c.i];
        c.f = o * (1 - damp) + c.f * damp;
        c.buf[c.i] = inp + c.f * room;
        c.i = (c.i + 1) % c.buf.length;
        s += o;
      }
      for (const a of ab) {
        const o = a.buf[a.i];
        a.buf[a.i] = s + o * 0.5;
        a.i = (a.i + 1) % a.buf.length;
        s = o - s;
      }
      y[n] = s * wet;
    }
  }
  return out;
};

const writeWav = (file, bus) => {
  const data = Buffer.alloc(N * 4);
  for (let i = 0; i < N; i++) {
    const d1 = (rnd() - rnd()) / 32768; // TPDF dither
    const d2 = (rnd() - rnd()) / 32768;
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round((bus.L[i] + d1) * 32767))), i * 4);
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round((bus.R[i] + d2) * 32767))), i * 4 + 2);
  }
  const h = Buffer.alloc(44);
  h.write("RIFF", 0);
  h.writeUInt32LE(36 + data.length, 4);
  h.write("WAVE", 8);
  h.write("fmt ", 12);
  h.writeUInt32LE(16, 16);
  h.writeUInt16LE(1, 20);
  h.writeUInt16LE(2, 22);
  h.writeUInt32LE(SR, 24);
  h.writeUInt32LE(SR * 4, 28);
  h.writeUInt16LE(4, 32);
  h.writeUInt16LE(16, 34);
  h.write("data", 36);
  h.writeUInt32LE(data.length, 40);
  writeFileSync(file, Buffer.concat([h, data]));
};

const peakNormalize = (bus, target) => {
  let p = 1e-9;
  for (let i = 0; i < N; i++) p = Math.max(p, Math.abs(bus.L[i]), Math.abs(bus.R[i]));
  const g = target / p;
  for (let i = 0; i < N; i++) {
    bus.L[i] *= g;
    bus.R[i] *= g;
  }
};

// ---------- music ----------
// Harmony: intro Am – F – G (tension, no drums), drop on C at 7.0 s, then I–V–vi–IV.
const CH = {
  Am: { root: 45, notes: [57, 60, 64, 67] }, // A2 | A3 C4 E4 G4
  F: { root: 41, notes: [53, 57, 60, 64] }, // F2 | F3 A3 C4 E4
  G: { root: 43, notes: [55, 59, 62, 67] }, // G2 | G3 B3 D4 G4
  C: { root: 48, notes: [55, 60, 64, 67] }, // C3 | G3 C4 E4 G4
};
const DROP = tl.music.drop;
const END = tl.music.end;
const HIT = tl.music.outroHit;
const sections = [
  { t0: 0, t1: 4, ch: "Am" },
  { t0: 4, t1: 6, ch: "F" },
  { t0: 6, t1: DROP, ch: "G" },
];
const loop = ["C", "G", "Am", "F"];
for (let t = DROP, k = 0; t < HIT; t += BAR, k++) sections.push({ t0: t, t1: Math.min(t + BAR, HIT), ch: k === 10 ? "F" : loop[k % 4] });
sections.push({ t0: HIT, t1: END, ch: "C" });
const chordAt = (t) => sections.find((s) => t >= s.t0 && t < s.t1) ?? sections[sections.length - 1];

const buildBed = () => {
  const bus = stereo();
  const send = stereo(); // reverb send
  const S = (t) => Math.round(t * SR);

  // Sidechain: duck pad/bass on every kick after the drop
  const duck = new Float32Array(N).fill(1);
  const kicks = [];
  for (let t = DROP; t < HIT - 1e-6; t += BEAT) kicks.push(t);
  kicks.push(HIT);
  for (const t of kicks) {
    for (let i = 0; i < S(0.32); i++) {
      const n = S(t) + i;
      if (n >= N) break;
      const x = i / S(0.32);
      duck[n] = Math.min(duck[n], 0.35 + 0.65 * Math.pow(x, 0.6));
    }
  }

  // Pad: 3 detuned PolyBLEP saws per note, low-passed; opens up at the drop.
  {
    const voices = [];
    for (const s of sections) {
      for (const m of CH[s.ch].notes) voices.push({ t0: s.t0, t1: s.t1, f: mtof(m) });
    }
    const filtL = new SVF();
    const filtR = new SVF();
    const L = new Float32Array(N);
    const R = new Float32Array(N);
    for (const v of voices) {
      const dets = [-0.11, 0, 0.12];
      const ph = dets.map(() => rnd());
      const a0 = S(v.t0);
      const a1 = Math.min(N, S(v.t1 + 0.25));
      for (let n = a0; n < a1; n++) {
        const t = n / SR;
        const att = Math.min(1, (t - v.t0) / (v.t0 < DROP ? 0.6 : 0.03));
        const rel = t > v.t1 ? Math.max(0, 1 - (t - v.t1) / 0.25) : 1;
        let l = 0;
        let r = 0;
        dets.forEach((d, j) => {
          const f = v.f * Math.pow(2, d / 12);
          const dt = f / SR;
          ph[j] = (ph[j] + dt) % 1;
          const sv = 2 * ph[j] - 1 - polyblep(ph[j], dt);
          if (j === 0) l += sv;
          else if (j === 2) r += sv;
          else {
            l += sv * 0.7;
            r += sv * 0.7;
          }
        });
        L[n] += l * att * rel;
        R[n] += r * att * rel;
      }
    }
    for (let n = 0; n < N; n++) {
      const t = n / SR;
      const cutoff = t < 6 ? 700 + 300 * (t / 6) : t < DROP ? 1000 + 2600 * ((t - 6) / (DROP - 6)) : 2400;
      const lv = t < DROP ? 0.05 : 0.032;
      const l = filtL.run(L[n], cutoff, 0.8).lp * lv * (t < DROP ? 1 : duck[n]);
      const r = filtR.run(R[n], cutoff, 0.8).lp * lv * (t < DROP ? 1 : duck[n]);
      bus.L[n] += l;
      bus.R[n] += r;
      send.L[n] += l * 0.5;
      send.R[n] += r * 0.5;
    }
  }

  // Night clock: soft woodblock on every beat before the drop.
  for (let t = 0; t < DROP - 1e-6; t += BEAT) {
    const f = new SVF();
    const accent = Math.abs(((t - BAR0) / BAR) % 1) < 1e-6 ? 1 : 0.7;
    for (let i = 0; i < S(0.06); i++) {
      const x = i / SR;
      const v = (f.run(noise(), 1900, 6).bp * 0.9 + Math.sin(2 * Math.PI * 1150 * x) * 0.5) * Math.exp(-x / 0.012) * 0.10 * accent;
      add(bus, S(t) + i, v, 0.15);
      add(send, S(t) + i, v * 0.4);
    }
  }

  // Riser into the drop: noise through a rising band-pass + an upward sine sweep.
  {
    const [r0, r1] = tl.music.riser;
    const f = new SVF();
    let ph = 0;
    for (let n = S(r0); n < S(r1); n++) {
      const x = (n / SR - r0) / (r1 - r0);
      const fc = 400 * Math.pow(20, x);
      ph += (2 * Math.PI * (180 + 900 * x * x)) / SR;
      const v = (f.run(noise(), fc, 2.5).bp * 0.9 + Math.sin(ph) * 0.12) * Math.pow(x, 2) * 0.22;
      add(bus, n, v, Math.sin(x * 9) * 0.4);
      add(send, n, v * 0.6);
    }
  }

  // Drums (drop → outro hit)
  const kick = (t, g = 1) => {
    let ph = 0;
    for (let i = 0; i < S(0.45); i++) {
      const x = i / SR;
      const f = 48 + 110 * Math.exp(-x / 0.035);
      ph += (2 * Math.PI * f) / SR;
      const click = i < S(0.004) ? noise() * 0.35 * (1 - i / S(0.004)) : 0;
      add(bus, S(t) + i, (Math.sin(ph) * Math.exp(-x / 0.22) + click) * 0.42 * g);
    }
  };
  const clap = (t, g = 1) => {
    const f = new SVF();
    for (let i = 0; i < S(0.25); i++) {
      const x = i / SR;
      const bursts = [0, 0.011, 0.022].reduce((a, o) => a + (x >= o ? Math.exp(-(x - o) / (o === 0.022 ? 0.09 : 0.006)) : 0), 0);
      const v = f.run(noise(), 1400, 1.2).bp * bursts * 0.22 * g;
      add(bus, S(t) + i, v, -0.05);
      add(send, S(t) + i, v * 1.4);
    }
  };
  const hat = (t, g = 1, open = false) => {
    const f = new SVF();
    const tau = open ? 0.09 : 0.022;
    for (let i = 0; i < S(open ? 0.3 : 0.06); i++) {
      const x = i / SR;
      add(bus, S(t) + i, f.run(noise(), 8000, 0.9).hp * Math.exp(-x / tau) * 0.09 * g, 0.3);
    }
  };
  const crash = (t, g = 1) => {
    const f = new SVF();
    for (let i = 0; i < S(1.8); i++) {
      const x = i / SR;
      const v = f.run(noise(), 6000, 0.7).hp * Math.exp(-x / 0.5) * 0.13 * g;
      add(bus, S(t) + i, v, (rnd() - 0.5) * 0.6);
      add(send, S(t) + i, v * 0.5);
    }
  };
  for (const t of kicks) kick(t, t === HIT ? 1.15 : 1);
  for (let t = DROP; t < HIT - 1e-6; t += BEAT) {
    const pos = Math.round(((t - BAR0) % BAR) / BEAT); // beat index in bar
    if (pos === 1 || pos === 3) clap(t);
    hat(t + BEAT / 2, 1, pos === 3 && Math.round((t - DROP) / BEAT) % 8 === 7);
    hat(t + BEAT / 4, 0.35);
    hat(t + (3 * BEAT) / 4, 0.45);
  }
  for (const t of [DROP, 13, 17, 23, 25, HIT]) crash(t, t === DROP || t === HIT ? 1.2 : 0.8);

  // Bass: 8th-note root pulse + sub, ducked by the kick.
  {
    const f = new SVF();
    let ph = 0;
    let sub = 0;
    for (let n = S(DROP); n < Math.min(N, S(HIT + 0.9)); n++) {
      const t = n / SR;
      const s = chordAt(t);
      const root = mtof(CH[s.ch].root);
      const inEighth = ((t - DROP) % (BEAT / 2)) / (BEAT / 2);
      const gate = t < HIT ? Math.exp(-inEighth * 2.2) * 0.8 + 0.2 : Math.exp(-(t - HIT) / 0.35);
      const dt = root / SR;
      ph = (ph + dt) % 1;
      const saw = 2 * ph - 1 - polyblep(ph, dt);
      sub += (2 * Math.PI * (root / 2)) / SR;
      const v = (f.run(saw, 520 + 900 * gate, 1.1).lp * 0.16 + Math.sin(sub) * 0.17) * gate * duck[n];
      add(bus, n, v);
    }
  }

  // Pluck arp: 16ths over chord tones, an octave up, with a dotted-8th echo.
  {
    const steps = [0, 1, 2, 3, 2, 1, 3, 2];
    for (let t = DROP, k = 0; t < HIT - 1e-6; t += BEAT / 4, k++) {
      const s = chordAt(t);
      const m = CH[s.ch].notes[steps[k % steps.length]] + 12;
      const fr = mtof(m);
      const vel = k % 4 === 0 ? 1 : 0.62;
      const f = new SVF();
      let ph = rnd();
      for (let i = 0; i < S(0.22); i++) {
        const x = i / SR;
        ph = (ph + fr / SR) % 1;
        const sq = ph < 0.5 ? 1 : -1;
        const v = f.run(sq, 900 + 3800 * Math.exp(-x / 0.05), 1.4).lp * Math.exp(-x / 0.07) * 0.045 * vel;
        const pan = k % 2 ? 0.35 : -0.35;
        add(bus, S(t) + i, v, pan);
        add(bus, S(t + 0.375) + i, v * 0.35, -pan);
        add(send, S(t) + i, v * 0.6);
      }
    }
  }

  // Outro: last chord stab rings out, everything fades by the end.
  {
    for (const m of [...CH.C.notes, 72]) {
      const fr = mtof(m);
      let ph = rnd();
      const f = new SVF();
      for (let i = 0; i < S(END - HIT); i++) {
        const x = i / SR;
        ph = (ph + fr / SR) % 1;
        const saw = 2 * ph - 1 - polyblep(ph, fr / SR);
        const v = f.run(saw, 2600 * Math.exp(-x / 0.6) + 500, 0.9).lp * Math.exp(-x / 0.45) * 0.03;
        add(bus, S(HIT) + i, v, (m % 3) * 0.2 - 0.2);
        add(send, S(HIT) + i, v);
      }
    }
  }

  const wet = reverb(send, { room: 0.86, damp: 0.3 });
  for (let n = 0; n < N; n++) {
    bus.L[n] += wet.L[n] * 0.9;
    bus.R[n] += wet.R[n] * 0.9;
  }
  return bus;
};

// ---------- SFX ----------
const buildSfx = () => {
  const bus = stereo();
  const send = stereo();
  const S = (t) => Math.round(t * SR);
  const put = (n, v, pan = 0, rev = 0) => {
    add(bus, n, v, pan);
    if (rev) add(send, n, v * rev);
  };
  const fx = {
    pop: (n0, g) => {
      let ph = 0;
      for (let i = 0; i < S(0.09); i++) {
        const x = i / SR;
        ph += (2 * Math.PI * (520 + 700 * Math.exp(-x / 0.018))) / SR;
        put(n0 + i, Math.sin(ph) * Math.exp(-x / 0.03) * 0.30 * g, 0.1, 0.3);
      }
    },
    tick: (n0, g) => {
      const f = new SVF();
      for (let i = 0; i < S(0.03); i++) {
        const x = i / SR;
        put(n0 + i, (Math.sin(2 * Math.PI * 2600 * x) * 0.6 + f.run(noise(), 5000, 2).bp) * Math.exp(-x / 0.006) * 0.22 * g, -0.1, 0.2);
      }
    },
    click: (n0, g) => {
      const f = new SVF();
      for (let i = 0; i < S(0.02); i++) {
        const x = i / SR;
        put(n0 + i, (f.run(noise(), 3500, 1.5).bp * 1.2 + Math.sin(2 * Math.PI * 1500 * x) * 0.4) * Math.exp(-x / 0.004) * 0.3 * g);
      }
    },
    thud: (n0, g) => {
      let ph = 0;
      for (let i = 0; i < S(0.25); i++) {
        const x = i / SR;
        ph += (2 * Math.PI * (70 + 60 * Math.exp(-x / 0.03))) / SR;
        put(n0 + i, Math.sin(ph) * Math.exp(-x / 0.09) * 0.35 * g, 0, 0.2);
      }
    },
    clock: (n0, g) => {
      const f = new SVF();
      for (let i = 0; i < S(0.05); i++) {
        const x = i / SR;
        put(n0 + i, (f.run(noise(), 2200, 5).bp + Math.sin(2 * Math.PI * 1250 * x) * 0.5) * Math.exp(-x / 0.01) * 0.28 * g, 0.2, 0.3);
      }
    },
    whoosh: (n0, g, len = 0.42) => {
      // peaks on the cut: starts before it
      const f = new SVF();
      const a = n0 - S(len * 0.75);
      for (let i = 0; i < S(len); i++) {
        const x = i / S(len);
        const env = Math.pow(Math.sin(Math.PI * Math.min(1, x * 1.15)), 2);
        const fc = 350 * Math.pow(12, x);
        put(a + i, f.run(noise(), fc, 1.6).bp * env * 0.55 * g, -0.6 + 1.2 * x, 0.25);
      }
    },
    swish: (n0, g) => fx.whoosh(n0, 0.55 * g, 0.26),
    scratch: (n0, g) => {
      const f = new SVF();
      for (let i = 0; i < S(0.22); i++) {
        const x = i / S(0.22);
        put(n0 + i, f.run(noise(), 4200 * Math.pow(0.3, x), 3).bp * Math.sin(Math.PI * x) * 0.35 * g, 0.2);
      }
    },
    impact: (n0, g) => {
      let ph = 0;
      const f = new SVF();
      for (let i = 0; i < S(1.4); i++) {
        const x = i / SR;
        ph += (2 * Math.PI * (34 + 70 * Math.exp(-x / 0.08))) / SR;
        const v = Math.sin(ph) * Math.exp(-x / 0.45) * 0.5 + f.run(noise(), 900, 0.7).lp * Math.exp(-x / 0.12) * 0.25;
        put(n0 + i, v * g, 0, 0.35);
      }
    },
    chime: (n0, g) => {
      for (const [fr, off, amp] of [
        [1318.5, 0, 1],
        [1975.5, 0.09, 0.8],
        [2637, 0.09, 0.25],
      ]) {
        for (let i = 0; i < S(0.9); i++) {
          const x = i / SR;
          const v = (Math.sin(2 * Math.PI * fr * x) + 0.2 * Math.sin(2 * Math.PI * fr * 2.76 * x)) * Math.exp(-x / 0.28) * 0.11 * amp * g;
          put(n0 + S(off) + i, v, off ? 0.25 : -0.25, 0.6);
        }
      }
    },
    typing: (n0, g, len) => {
      for (let t = 0; t < len; t += 0.06 + rnd() * 0.05) fx.click(n0 + S(t), 0.45 * g * (0.7 + rnd() * 0.3));
    },
    count: (n0, g, len) => {
      let k = 0;
      for (let t = 0; t < len; t += 0.1, k++) {
        const f0 = 1800 + k * 90;
        for (let i = 0; i < S(0.025); i++) {
          const x = i / SR;
          put(n0 + S(t) + i, Math.sin(2 * Math.PI * f0 * x) * Math.exp(-x / 0.006) * 0.18 * g, 0, 0.2);
        }
      }
    },
    stab: (n0, g) => {
      for (const m of CH.C.notes.map((x) => x + 12)) {
        let ph = rnd();
        const fr = mtof(m);
        const f = new SVF();
        for (let i = 0; i < S(0.5); i++) {
          const x = i / SR;
          ph = (ph + fr / SR) % 1;
          const saw = 2 * ph - 1 - polyblep(ph, fr / SR);
          put(n0 + i, f.run(saw, 3000 * Math.exp(-x / 0.12) + 400, 1).lp * Math.exp(-x / 0.18) * 0.06 * g, 0, 0.6);
        }
      }
    },
    riser: () => {}, // part of the music bed
  };
  for (const e of tl.sfx) {
    const fn = fx[e.s];
    if (!fn) throw new Error(`Unknown sfx ${e.s}`);
    const n0 = Math.round((e.f / tl.fps) * SR);
    fn(n0, e.g ?? 1, e.len ? e.len / tl.fps : undefined);
  }
  const wet = reverb(send, { room: 0.8, damp: 0.35 });
  for (let n = 0; n < N; n++) {
    bus.L[n] += wet.L[n] * 0.7;
    bus.R[n] += wet.R[n] * 0.7;
  }
  return bus;
};

// ---------- render ----------
const bedFile = path.join(OUT, `${name}-bed.wav`);
const sfxFile = path.join(OUT, `${name}-sfx.wav`);
const mixFile = path.join(OUT, `${name}-mix.wav`);
if (!mixOnly) {
  const bed = buildBed();
  peakNormalize(bed, 0.5);
  writeWav(bedFile, bed);
  const sfx = buildSfx();
  peakNormalize(sfx, 0.5);
  writeWav(sfxFile, sfx);
  console.log("wrote", bedFile, sfxFile);
}
if (!existsSync(bedFile) || !existsSync(sfxFile)) throw new Error("bed/sfx stems missing");

// Mix: bed under the SFX, gentle bus glue, exact length, fade the last 0.25 s,
// then two-pass loudnorm to -14 LUFS / -1 dBTP (STYLE.md → Sound).
const pre = path.join(OUT, `${name}-premix.wav`);
const graph = `[0:a]volume=0.85[b];[1:a]volume=1.0[s];[b][s]amix=inputs=2:normalize=0,acompressor=threshold=0.35:ratio=2.5:attack=8:release=120,atrim=0:${DUR},afade=t=out:st=${DUR - 0.25}:d=0.25[m]`;
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", bedFile, "-i", sfxFile, "-filter_complex", graph, "-map", "[m]", "-ar", String(SR), pre]);
const measure = (file) => {
  const r = spawnSync("ffmpeg", ["-hide_banner", "-i", file, "-af", "loudnorm=I=-14:TP=-1.0:LRA=11:print_format=json", "-f", "null", "-"], {
    encoding: "utf8",
  });
  const err = r.stderr;
  return JSON.parse(err.slice(err.lastIndexOf("{"), err.lastIndexOf("}") + 1));
};
const m1 = measure(pre);
const ln = `loudnorm=I=-14:TP=-1.0:LRA=11:measured_I=${m1.input_i}:measured_TP=${m1.input_tp}:measured_LRA=${m1.input_lra}:measured_thresh=${m1.input_thresh}:offset=${m1.target_offset}:linear=true`;
// Limiter after loudnorm: AAC encoding adds peak, so leave real headroom (-1.5 dBFS).
execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", pre, "-af", `${ln},alimiter=limit=0.84:attack=3:release=60:level=disabled`, "-ar", String(SR), "-c:a", "pcm_s16le", mixFile]);
const m2 = measure(mixFile);
console.log(`premix  I=${m1.input_i} LUFS  TP=${m1.input_tp} dBTP`);
console.log(`mix     I=${m2.input_i} LUFS  TP=${m2.input_tp} dBTP  LRA=${m2.input_lra}  -> ${mixFile}`);
