import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BigNumber } from "../../library/BigNumber";
import { BrowserFrame, FilterChip, ResultRow } from "../../library/Browser";
import { Booked, Bubble, CarTile, ChatPanel, QuickReplies, Tag, Thread, TypingDots, VehicleCard, type ThreadItem } from "../../library/Chat";
import { CtaEndCard } from "../../library/CtaEndCard";
import { Ground } from "../../library/Ground";
import { Icon } from "../../library/icons";
import { ListRow } from "../../library/ListBuild";
import { Logo } from "../../library/Logo";
import { countUp, easeInOut, enter, fadeUp, popIn, slideIn } from "../../library/motion";
import { Headline } from "../../library/Text";
import { Listening, VoiceOrb } from "../../library/Voice";
import { loadFonts } from "../../style/fonts";
import { C, FONT } from "../../style/tokens";
import copyJson from "./copy.json";
import timeline from "./timeline.json";

export type Lang = "en" | "fr";
type Copy = (typeof copyJson)["en"];

const B = timeline.beats;
const S = timeline.scenes;
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const linear = (f: number, a: number, d: number) => interpolate(f, [a, a + d], [0, 1], clamp);

/* ───────────────────────── 1 · Hook (dark) ───────────────────────── */

const NightPage: React.FC<{ c: Copy }> = ({ c }) => (
  <div
    style={{
      width: 860,
      borderRadius: 36,
      overflow: "hidden",
      background: C.card,
      fontFamily: FONT,
      filter: "brightness(0.5) saturate(0.8)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
    }}
  >
    <div style={{ height: 84, background: "#F3F4F6", display: "flex", alignItems: "center", gap: 12, padding: "0 24px" }}>
      {["#F87171", "#FBBF24", "#34D399"].map((col) => (
        <span key={col} style={{ width: 18, height: 18, borderRadius: 9, background: col }} />
      ))}
      <div
        style={{
          marginLeft: 10,
          flex: 1,
          height: 54,
          borderRadius: 27,
          background: C.card,
          border: "2px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          padding: "0 22px",
          fontSize: 24,
          fontWeight: 600,
          color: "#4B5563",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {c.hook.pageUrl}
      </div>
    </div>
    <div style={{ padding: 26 }}>
      <CarTile width="100%" height={430} iconSize={190} />
    </div>
  </div>
);

const ClosedSign: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 30px 14px 22px",
      borderRadius: 999,
      background: "rgba(251,191,36,0.14)",
      border: "2px solid rgba(251,191,36,0.55)",
      color: "#FCD34D",
      fontFamily: FONT,
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: 1,
      textTransform: "uppercase",
    }}
  >
    <Icon name="moon" size={36} color="#FCD34D" />
    {text}
  </div>
);

export const HookFrame: React.FC<{ c: Copy; f: number; size?: number; typing?: number; box?: [number, number] }> = ({
  c,
  f,
  size = 96,
  typing,
  box = [110, 810], // left, width: right edge stays inside the button zone through the push-in
}) => {
  const drift = interpolate(f, [0, 120], [1, 1.035], clamp);
  return (
    <AbsoluteFill style={{ transform: `scale(${drift})` }}>
      <div style={{ position: "absolute", left: 110, top: 290 }}>
        <NightPage c={c} />
      </div>
      <div style={{ position: "absolute", left: 160, top: 424, opacity: enter(f, 15, 6) * (0.75 + 0.25 * Math.abs(Math.sin(f / 9))) }}>
        <ClosedSign text={c.hook.closed} />
      </div>
      {/* The hook: the visitor's message, full size from frame 0. */}
      <div style={{ position: "absolute", left: box[0], width: box[1], top: 790, display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              background: C.mintDeep,
              color: C.white,
              borderRadius: "60px 60px 16px 60px",
              padding: "34px 46px 40px",
              fontFamily: FONT,
              fontSize: size,
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: -size * 0.028,
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 3px rgba(42,211,163,0.35)",
            }}
          >
            {c.hook.lines.map((l) => (
              <div key={l} style={{ whiteSpace: "nowrap" }}>
                {l}
              </div>
            ))}
          </div>
        </div>
        {typing !== undefined && f >= typing ? (
          <div style={{ transform: "scale(1.25)", transformOrigin: "0% 0%" }}>
            <TypingDots frame={f} p={enter(f, typing)} />
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

const Hook: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Ground tone="dark" glowY={900} />
      <HookFrame c={c} f={f} typing={B.hook.typing} />
    </AbsoluteFill>
  );
};

/* ───────────────────────── 2 · Problem (dark) ───────────────────────── */

const Problem: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.problem;
  const dim = enter(f, b.dim, 10);
  const n = Math.round(countUp(f, b.number, b.numberDur, 4));
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="dark" glowY={1000} />
      <div style={{ position: "absolute", left: 110, top: 270, width: 860 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 26px 12px 18px",
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.25)",
            color: C.whiteMuted,
            fontSize: 32,
            fontWeight: 800,
            ...fadeUp(enter(f, b.tag), 16),
          }}
        >
          <Icon name="xmark" size={32} color="#F87171" stroke={3} />
          {c.problem.tag}
        </div>
        <div style={{ marginTop: 28, opacity: 1 - 0.55 * dim }}>
          <Bubble from="generic" lines={c.problem.bubble} p={enter(f, b.bubble)} size={50} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 800, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 26, color: C.white, ...fadeUp(enter(f, b.number), 30) }}>
          <span style={{ fontSize: 260, fontWeight: 900, letterSpacing: -10, lineHeight: 0.9, fontVariantNumeric: "tabular-nums" }}>
            {n}+
          </span>
          <span style={{ fontSize: 110, fontWeight: 900, letterSpacing: -3 }}>{c.problem.unit}</span>
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 58,
            fontWeight: 800,
            color: C.whiteMuted,
            textAlign: "center",
            lineHeight: 1.14,
            letterSpacing: -0.8,
            ...fadeUp(enter(f, b.label), 20),
          }}
        >
          {c.problem.label.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
        <div style={{ marginTop: 34, fontSize: 30, fontWeight: 600, color: "rgba(255,255,255,0.45)", ...fadeUp(enter(f, b.source), 14) }}>
          {c.problem.source}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 3 · Answer (paper) ───────────────────────── */

const PANEL = { left: 100, top: 420, width: 840, height: 1090, header: 128 };

const Answer: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.answer;
  const glide = enter(f, b.glide, 14, easeInOut);
  const logoW = interpolate(glide, [0, 1], [720, 330]);
  const logoCY = interpolate(glide, [0, 1], [900, 312]);
  const logoH = (logoW * 157) / 396;
  const press = linear(f, b.press, 10);
  const items: ThreadItem[] = [
    { key: "user", at: b.user, height: 100, render: () => <Bubble from="user" lines={c.answer.user} p={1} size={40} /> },
    { key: "tag1", at: b.tag1, height: 72, render: (p) => <Tag icon="clock" text={c.answer.tag1} p={p} /> },
    {
      key: "bot",
      at: b.typing,
      height: 290,
      render: () =>
        f < b.bot ? (
          <TypingDots frame={f} p={enter(f, b.typing)} />
        ) : (
          <Bubble from="bot" lines={c.answer.bot} p={enter(f, b.bot, 6)} size={38} reveal={linear(f, b.bot, b.botDur)} />
        ),
    },
    {
      key: "card",
      at: b.card,
      height: 452,
      render: (p) => <VehicleCard title={c.answer.cardTitle} meta={c.answer.cardMeta} cta={c.answer.cardCta} p={p} press={press} />,
    },
    { key: "tag2", at: b.tag2, height: 72, render: (p) => <Tag n={2} text={c.answer.tag2} p={p} /> },
    { key: "booked", at: b.booked, height: 130, render: (p) => <Booked title={c.answer.bookedTitle} sub={c.answer.bookedSub} p={p} /> },
  ];
  const push = interpolate(f, [b.booked, 180], [1, 1.025], clamp);
  // The widget grows with the conversation instead of sitting as an empty white box.
  const GAP = 22;
  const PAD = 30;
  const maxView = PANEL.height - PANEL.header;
  const content = items.reduce((h, it) => h + (it.height + GAP) * enter(f, it.at, 10, easeInOut), 2 * PAD - GAP);
  const panelH = PANEL.header + Math.min(maxView, Math.max(content, 140));
  return (
    <AbsoluteFill>
      <Ground tone="paper" glowY={900} />
      <div
        style={{
          position: "absolute",
          left: PANEL.left,
          top: PANEL.top,
          transform: `scale(${push})`,
          transformOrigin: "50% 80%",
          ...slideIn(enter(f, b.panel, 14), 0, 160),
        }}
      >
        <ChatPanel width={PANEL.width} height={panelH} title={c.chat.title} status={c.chat.status}>
          <Thread items={items} frame={f} viewport={maxView} gap={GAP} pad={PAD} />
        </ChatPanel>
      </div>
      <div style={{ position: "absolute", left: 540 - logoW / 2, top: logoCY - logoH / 2 }}>
        <Logo width={logoW} tone="paper" word={enter(f, b.logo, 14)} bubble={enter(f, b.logo + 8, 10)} shine={linear(f, b.logo + 12, 16)} />
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 4 · Twist (dark) ───────────────────────── */

const Skeleton: React.FC<{ chips: number; rows: number }> = ({ chips, rows }) => (
  <div style={{ position: "absolute", inset: 0, padding: "24px 26px", display: "flex", flexDirection: "column", gap: 18 }}>
    <div style={{ display: "flex", gap: 12, opacity: chips }}>
      {[150, 120, 210, 130].map((w, i) => (
        <div key={i} style={{ width: w, height: 58, borderRadius: 29, background: "#EEF0F2" }} />
      ))}
    </div>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ display: "flex", gap: 24, alignItems: "center", padding: 18, borderRadius: 28, border: "3px solid #F3F4F6", opacity: rows }}>
        <div style={{ width: 150, height: 100, borderRadius: 20, background: "#EEF0F2" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ width: 300, height: 30, borderRadius: 15, background: "#EEF0F2" }} />
          <div style={{ width: 180, height: 24, borderRadius: 12, background: "#F3F4F6" }} />
        </div>
      </div>
    ))}
  </div>
);

const Twist: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.twist;
  const strike = enter(f, b.strike, 12, easeInOut);
  const urlChars = Math.floor(interpolate(f, [b.url, b.url + b.urlDur], [0, c.twist.url.length], clamp));
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="dark" glowY={1100} />
      <div style={{ position: "absolute", left: 90, top: 236, width: 900, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Headline parts={[c.twist.h1]} p={enter(f, b.h1)} size={66} color={C.white} accent={C.mint} dim={strike} />
        <div
          style={{
            marginTop: 22,
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 30px 14px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.75)",
            fontSize: 30,
            fontWeight: 700,
            whiteSpace: "nowrap",
            ...popIn(enter(f, b.chip), 0.85),
          }}
        >
          <Icon name="link" size={32} color="rgba(255,255,255,0.75)" />
          {c.twist.linkChip}
          <span
            style={{
              position: "absolute",
              left: 14,
              top: "calc(50% - 4px)",
              height: 8,
              borderRadius: 4,
              width: `calc(${strike} * (100% - 28px))`,
              background: "#F87171",
            }}
          />
        </div>
        <div style={{ marginTop: 34 }}>
          <Headline parts={[c.twist.h2a, { accent: c.twist.h2b }]} p={enter(f, b.h2)} size={70} color={C.white} accent={C.mint} />
        </div>
        {/* The chat drives the page: the question lands, the site moves. */}
        <div style={{ marginTop: 30, width: 830, marginLeft: -10 }}>
          <Bubble from="user" lines={c.twist.query} p={enter(f, b.query)} size={34} />
        </div>
        <div style={{ marginTop: 20, ...slideIn(enter(f, b.browser, 10), 0, 120) }}>
          <BrowserFrame width={830} height={660} url={c.twist.url} typedChars={urlChars} caret={f >= b.url && f < b.url + b.urlDur + 8} onDark>
            <Skeleton chips={1 - enter(f, b.chips[0], 6)} rows={1 - enter(f, b.rows[0], 6)} />
            <div style={{ padding: "24px 26px" }}>
              <div style={{ display: "flex", gap: 12 }}>
                {c.twist.chips.map((t, i) => (
                  <FilterChip key={t} text={t} p={enter(f, b.chips[i], 6)} />
                ))}
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                {c.twist.rows.map(([title, meta], i) => (
                  <ResultRow
                    key={title}
                    title={title}
                    meta={meta}
                    p={enter(f, b.rows[i])}
                    highlight={i === 0 ? enter(f, b.pick, 8) : 0}
                    hue={(["blue", "slate", "teal"] as const)[i]}
                  />
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
        <div style={{ marginTop: 18, width: 830, marginLeft: -10, minHeight: 90 }}>
          {f >= b.pick ? <Bubble from="bot" lines={c.twist.reply} p={enter(f, b.pick)} size={34} /> : null}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 5 · List of 3 (paper) ───────────────────────── */

const VIS_TOP = 700;

/** Visual for one list item: hard cut out on the next item's beat, quick ease in. */
const Swap: React.FC<{ f: number; inAt: number; outAt?: number; children: React.ReactNode }> = ({ f, inAt, outAt, children }) => {
  if (f < inAt || (outAt !== undefined && f >= outAt)) return null;
  const pin = enter(f, inAt, 8);
  return (
    <div style={{ position: "absolute", left: 110, top: VIS_TOP, width: 830, opacity: pin, transform: `translateY(${(1 - pin) * 60}px)` }}>
      {children}
    </div>
  );
};

const List: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.list;
  const active = f < b.row2 ? 0 : f < b.row3 ? 1 : 2;
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="paper" glowY={1050} />
      <div style={{ position: "absolute", left: 110, top: 236, width: 860, display: "flex", flexDirection: "column", gap: 22 }}>
        <ListRow size={68} icon="comment" text={c.list.row1} p={enter(f, b.row1)} active={active === 0} tone="paper" />
        <ListRow size={68} icon="speaker" text={c.list.row2} p={enter(f, b.row2)} active={active === 1} tone="paper" />
        <div>
          <div style={{ fontSize: 46, fontWeight: 900, color: C.mintDeep, letterSpacing: -0.6, height: 58, ...fadeUp(enter(f, b.kicker), 14) }}>
            {c.list.kicker}
          </div>
          <ListRow size={68} icon="star" best text={c.list.row3} p={enter(f, b.row3)} active={active === 2} tone="paper" />
        </div>
      </div>

      <Swap f={f} inAt={b.row1} outAt={b.row2}>
        <BrowserFrame width={830} height={420} url={c.list.greetUrl} typedChars={c.list.greetUrl.length}>
          <div style={{ padding: 24 }}>
            <CarTile width="100%" height={276} iconSize={150} hue="teal" />
          </div>
        </BrowserFrame>
        <div style={{ marginTop: -40, marginLeft: 30 }}>
          <Bubble from="bot" lines={c.list.greet} p={enter(f, b.greet)} size={44} />
        </div>
        <div style={{ marginTop: 18 }}>
          <QuickReplies labels={c.list.replies} p={enter(f, b.replies)} />
        </div>
      </Swap>

      <Swap f={f} inAt={b.row2} outAt={b.row3}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 46, paddingTop: 30 }}>
          <VoiceOrb frame={f} size={280} />
          <Listening frame={f} text={c.list.listening} />
        </div>
        <div style={{ marginTop: 40 }}>
          <Bubble
            from="bot"
            lines={c.list.transcript}
            p={enter(f, b.transcript, 6)}
            size={38}
            reveal={linear(f, b.transcript, b.transcriptDur)}
          />
        </div>
      </Swap>

      <Swap f={f} inAt={b.row3}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, paddingTop: 40 }}>
          <Bubble from="user" lines={c.list.fr} p={enter(f, b.fr)} size={52} />
          <LangTag text={c.list.frTag} p={enter(f, b.frTag)} />
          <div style={{ height: 50 }} />
          <Bubble from="user" lines={c.list.en} p={enter(f, b.en)} size={52} />
          <LangTag text={c.list.enTag} p={enter(f, b.enTag)} />
        </div>
      </Swap>
    </AbsoluteFill>
  );
};

const LangTag: React.FC<{ text: string; p: number }> = ({ text, p }) => (
  <div style={{ display: "flex", justifyContent: "flex-end", ...popIn(p, 0.85) }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 26px 12px 18px",
        borderRadius: 999,
        background: C.mintTint,
        color: C.mintDeep,
        fontFamily: FONT,
        fontSize: 34,
        fontWeight: 800,
      }}
    >
      <Icon name="language" size={36} color={C.mintDeep} stroke={2.2} />
      {text}
    </div>
  </div>
);

/* ───────────────────────── 6 · Proof (paper) ───────────────────────── */

const Proof: React.FC<{ c: Copy; locale: string }> = ({ c, locale }) => {
  const f = useCurrentFrame();
  const b = B.proof;
  return (
    <AbsoluteFill>
      <Ground tone="paper" glowY={880} />
      <div
        style={{
          position: "absolute",
          left: 110,
          width: 860,
          top: 560,
          transform: `scale(${interpolate(f, [0, 60], [1, 1.03], clamp)})`,
          transformOrigin: "50% 30%",
        }}
      >
        <BigNumber
          frame={f}
          start={b.number}
          dur={b.numberDur}
          value={34}
          suffix="%"
          locale={locale}
          size={360}
          color={C.mintDeep}
          label={c.proof.label.map((l) => (
            <div key={l}>{l}</div>
          ))}
          labelAt={b.label}
          labelColor={C.text}
          source={c.proof.source}
          sourceAt={b.source}
          sourceColor={C.textMuted}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 7 · CTA (dark) ───────────────────────── */

const Cta: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Ground tone="dark" glowY={760} />
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 400,
          transform: `scale(${interpolate(f, [0, 150], [1, 1.025], clamp)})`,
          transformOrigin: "50% 40%",
        }}
      >
        <CtaEndCard
          frame={f}
          line={c.cta.line}
          verb={c.cta.verb}
          word={c.cta.word}
          placeholder={c.cta.placeholder}
          url={c.cta.url}
          at={B.cta}
        />
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── Composition ───────────────────────── */

export const Chat360Ad: React.FC<{ lang: Lang; withAudio?: boolean }> = ({ lang, withAudio = true }) => {
  loadFonts();
  const c = copyJson[lang] as Copy;
  const seq = (k: keyof typeof S) => ({ from: S[k].from, durationInFrames: S[k].to - S[k].from });
  return (
    <AbsoluteFill style={{ backgroundColor: C.ink }}>
      <Sequence {...seq("hook")}>
        <Hook c={c} />
      </Sequence>
      <Sequence {...seq("problem")}>
        <Problem c={c} />
      </Sequence>
      <Sequence {...seq("answer")}>
        <Answer c={c} />
      </Sequence>
      <Sequence {...seq("twist")}>
        <Twist c={c} />
      </Sequence>
      <Sequence {...seq("list")}>
        <List c={c} />
      </Sequence>
      <Sequence {...seq("proof")}>
        <Proof c={c} locale={c.locale} />
      </Sequence>
      <Sequence {...seq("cta")}>
        <Cta c={c} />
      </Sequence>
      {withAudio ? <Audio src={staticFile("audio/chat360-ad-mix.wav")} /> : null}
    </AbsoluteFill>
  );
};

/** Cover (Instagram + YouTube): the hook frame, bigger and bolder, logo under it; all inside the 3:4 grid crop. */
export const Chat360Cover: React.FC<{ lang: Lang }> = ({ lang }) => {
  loadFonts();
  const c = copyJson[lang] as Copy;
  return (
    <AbsoluteFill>
      <Ground tone="dark" glowY={820} />
      <HookFrame c={c} f={0} size={100} box={[90, 840]} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 1330, display: "flex", justifyContent: "center" }}>
        <Logo width={480} tone="dark" />
      </div>
    </AbsoluteFill>
  );
};
