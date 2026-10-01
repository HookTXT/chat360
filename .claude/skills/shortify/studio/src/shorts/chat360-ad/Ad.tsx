import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BigNumber } from "../../library/BigNumber";
import { BrowserFrame, FilterChip, ResultRow } from "../../library/Browser";
import { CarPhoto } from "../../library/CarArt";
import { Booked, Bubble, ChatPanel, QuickReplies, Thread, TypingDots, VehicleCard, type ThreadItem } from "../../library/Chat";
import { CtaEndCard } from "../../library/CtaEndCard";
import { Ground } from "../../library/Ground";
import { Icon } from "../../library/icons";
import { ListRow } from "../../library/ListBuild";
import { Logo } from "../../library/Logo";
import { easeInOut, enter, fadeUp, popIn, slideIn } from "../../library/motion";
import { StepLadder } from "../../library/StepLadder";
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
/** Height a chat bubble needs for `lines` at `size` px (line-height 1.28, padding 0.55·size). */
const bubbleH = (lines: number, size: number) => Math.ceil(lines * size * 1.28 + 2 * Math.round(size * 0.55)) + 4;
/** Right edge of anything in the lower half stays ≤ 910 px (STYLE: keep clear of the buttons). */
const COL = { left: 110, width: 800 };

/* ───────────────────────── 1 · Hook (dark) ───────────────────────── */

const NightPage: React.FC<{ c: Copy }> = ({ c }) => (
  <div
    style={{
      width: 860,
      borderRadius: 36,
      overflow: "hidden",
      background: C.card,
      fontFamily: FONT,
      filter: "brightness(0.55) saturate(0.85)",
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
      <CarPhoto width="100%" height={420} paint="blue" roof="#111827" night />
    </div>
  </div>
);

const ClosedSign: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      padding: "16px 34px 16px 24px",
      borderRadius: 999,
      background: "rgba(11,23,22,0.82)",
      border: "3px solid rgba(255,255,255,0.75)",
      color: C.white,
      fontFamily: FONT,
      fontSize: 44,
      fontWeight: 900,
      letterSpacing: 2,
      textTransform: "uppercase",
    }}
  >
    <Icon name="moon" size={46} color={C.white} />
    {text}
  </div>
);

export const HookFrame: React.FC<{ c: Copy; f: number; size?: number; typing?: number; box?: [number, number] }> = ({
  c,
  f,
  size = 96,
  typing,
  box = [110, 790], // left, width: right edge stays inside the button zone through the push-in
}) => {
  const drift = interpolate(f, [0, 120], [1, 1.035], clamp);
  return (
    <AbsoluteFill style={{ transform: `scale(${drift})` }}>
      <div style={{ position: "absolute", left: 110, top: 330 }}>
        <NightPage c={c} />
      </div>
      <div style={{ position: "absolute", left: 164, top: 466, opacity: enter(f, 15, 6) * (0.8 + 0.2 * Math.abs(Math.sin(f / 9))) }}>
        <ClosedSign text={c.hook.closed} />
      </div>
      {/* The hook: the visitor's message, full size from frame 0. */}
      <div style={{ position: "absolute", left: box[0], width: box[1], top: 840, display: "flex", flexDirection: "column", gap: 40 }}>
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
            {/* Neutral avatar: who answers is the question the next shots answer. */}
            <TypingDots frame={f} p={enter(f, typing)} neutral />
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
      <Ground tone="dark" glowY={940} />
      <HookFrame c={c} f={f} typing={B.hook.typing} />
    </AbsoluteFill>
  );
};

/* ───────────────────────── 2 · Problem (dark) ───────────────────────── */

const Problem: React.FC<{ c: Copy; locale: string }> = ({ c, locale }) => {
  const f = useCurrentFrame();
  const b = B.problem;
  const dim = enter(f, b.dim, 10);
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="dark" glowY={1000} />
      <div style={{ position: "absolute", left: 110, top: 262, width: 860, display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 28px 12px 20px",
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.25)",
            color: C.whiteMuted,
            fontSize: 36,
            fontWeight: 800,
            ...fadeUp(enter(f, b.tag), 16),
          }}
        >
          <Icon name="xmark" size={36} color="#F87171" stroke={3} />
          {c.problem.tag}
        </div>
        <div style={{ opacity: 1 - 0.5 * dim }}>
          <Bubble from="generic" lines={c.problem.bubble} p={enter(f, b.bubble)} size={50} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 110, width: 860, top: 690 }}>
        <BigNumber
          frame={f}
          start={b.number}
          dur={b.numberDur}
          value={c.problem.value}
          locale={locale}
          lead={c.problem.lead}
          suffix={c.problem.suffix}
          size={260}
          color={C.white}
          muted={C.whiteMuted}
          label={c.problem.label.map((l) => (
            <div key={l}>{l}</div>
          ))}
          labelAt={b.label}
          labelColor={C.white}
          labelSize={54}
          source={c.problem.source}
          sourceAt={b.source}
          sourceColor="rgba(255,255,255,0.55)"
        />
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 3 · Answer (paper) ───────────────────────── */

const PANEL = { left: 110, top: 600, width: 800, height: 920, header: 128 };

const Answer: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.answer;
  const glide = enter(f, b.glide, 14, easeInOut);
  const logoW = interpolate(glide, [0, 1], [720, 300]);
  const logoCY = interpolate(glide, [0, 1], [900, 296]);
  const logoH = (logoW * 157) / 396;
  const press = linear(f, b.press, 10);
  const items: ThreadItem[] = [
    { key: "user", at: b.user, height: 100, render: () => <Bubble from="user" lines={c.answer.user} p={1} size={40} /> },
    {
      key: "bot",
      at: b.typing,
      height: bubbleH(c.answer.bot.length, 38),
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
      height: 380,
      render: (p) => <VehicleCard title={c.answer.cardTitle} meta={c.answer.cardMeta} cta={c.answer.cardCta} p={p} press={press} roof="#111827" />,
    },
    { key: "booked", at: b.booked, height: 124, render: (p) => <Booked title={c.answer.bookedTitle} sub={c.answer.bookedSub} p={p} /> },
  ];
  const push = interpolate(f, [b.booked, 180], [1, 1.02], clamp);
  // The widget grows with the conversation instead of sitting as an empty white box.
  const GAP = 22;
  const PAD = 22; // FR's 3-line reply must still fit once the visitor's message scrolls away
  const maxView = PANEL.height - PANEL.header;
  const content = items.reduce((h, it) => h + (it.height + GAP) * enter(f, it.at, 10, easeInOut), 2 * PAD - GAP);
  const panelH = PANEL.header + Math.min(maxView, Math.max(content, 140));
  return (
    <AbsoluteFill>
      <Ground tone="paper" glowY={980} />
      {/* The two steps, big, above the widget: what the AI just did. */}
      <div style={{ position: "absolute", left: COL.left, top: 392 }}>
        <StepLadder
          frame={f}
          tone="paper"
          size={54}
          width={COL.width}
          steps={[
            { text: c.answer.tag1, at: b.step1 },
            { text: c.answer.tag2, at: b.step2, doneAt: b.step2Done },
          ]}
        />
      </div>
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

/** The dealer's inventory page before the search; each placeholder hands off to its real element. */
const Skeleton: React.FC<{ chips: number; rows: number[] }> = ({ chips, rows }) => (
  <div style={{ position: "absolute", inset: 0, padding: "24px 26px", display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", gap: 12, opacity: chips, height: 62 }}>
      {[150, 120, 260].map((w, i) => (
        <div key={i} style={{ width: w, height: 58, borderRadius: 29, background: "#EEF0F2" }} />
      ))}
    </div>
    {rows.map((o, i) => (
      <div key={i} style={{ display: "flex", gap: 26, alignItems: "center", padding: 18, borderRadius: 28, border: "3px solid #F3F4F6", opacity: o, marginTop: i === 0 ? 6 : 0 }}>
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
  const url = c.twist.urlBase + c.twist.urlSearch;
  const urlChars = c.twist.urlBase.length + Math.floor(interpolate(f, [b.url, b.url + b.urlDur], [0, c.twist.urlSearch.length], clamp));
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="dark" glowY={1100} />
      <div style={{ position: "absolute", left: 90, top: 236, width: 900, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Headline parts={[c.twist.h1]} p={enter(f, b.h1)} size={58} color={C.white} accent={C.mint} dim={strike} />
        <div
          style={{
            marginTop: 22,
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "16px 34px 16px 24px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            border: "2px solid rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.8)",
            fontSize: 34,
            fontWeight: 700,
            whiteSpace: "nowrap",
            ...popIn(enter(f, b.chip), 0.85),
          }}
        >
          <Icon name="link" size={36} color="rgba(255,255,255,0.8)" />
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
        <div style={{ marginTop: 30 }}>
          <Headline parts={[c.twist.h2a, { accent: c.twist.h2b }]} p={enter(f, b.h2)} size={64} color={C.white} accent={C.mint} />
        </div>
        {/* The question lands, then the site does the search. */}
        <div style={{ marginTop: 26, width: COL.width, marginLeft: -60 }}>
          <Bubble from="user" lines={c.twist.query} p={enter(f, b.query)} size={36} />
        </div>
        <div style={{ marginTop: 18, marginLeft: -60, ...slideIn(enter(f, b.browser, 10), 0, 120) }}>
          <BrowserFrame width={COL.width} height={640} url={url} typedChars={urlChars} caret={f >= b.url && f < b.url + b.urlDur + 8} onDark urlSize={23}>
            <Skeleton chips={1 - enter(f, b.chips[0], 6)} rows={b.rows.map((r) => 1 - enter(f, r, 4))} />
            <div style={{ padding: "24px 26px" }}>
              <div style={{ display: "flex", gap: 12, height: 62 }}>
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
                    p={enter(f, b.rows[i], 6)}
                    highlight={i === 0 ? enter(f, b.pick, 8) : 0}
                    paint={(["blue", "silver", "red"] as const)[i]}
                  />
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ───────────────────────── 5 · List of 3 (paper) ───────────────────────── */

const VIS_TOP = 760;

/** Visual for one list item: hard cut out on the next item's beat, quick ease in. */
const Swap: React.FC<{ f: number; inAt: number; outAt?: number; children: React.ReactNode }> = ({ f, inAt, outAt, children }) => {
  if (f < inAt || (outAt !== undefined && f >= outAt)) return null;
  const pin = enter(f, inAt - 3, 8);
  return (
    <div style={{ position: "absolute", left: COL.left, top: VIS_TOP, width: COL.width, opacity: pin, transform: `translateY(${(1 - pin) * 60}px)` }}>
      {children}
    </div>
  );
};

const LangPill: React.FC<{ text: string; p: number }> = ({ text, p }) => (
  <div
    style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      flexShrink: 0,
      background: C.mintTint,
      border: `3px solid ${C.mintDeep}`,
      color: C.mintDeep,
      fontFamily: FONT,
      fontSize: 28,
      fontWeight: 900,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...popIn(p, 0.7),
    }}
  >
    {text}
  </div>
);

const LangPair: React.FC<{ user: string[]; bot: string[]; tag: string; pUser: number; pBot: number }> = ({ user, bot, tag, pUser, pBot }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
      <LangPill text={tag} p={pUser} />
      <Bubble from="user" lines={user} p={pUser} size={42} />
    </div>
    <Bubble from="bot" lines={bot} p={pBot} size={42} />
  </div>
);

const List: React.FC<{ c: Copy }> = ({ c }) => {
  const f = useCurrentFrame();
  const b = B.list;
  const active = f < b.row2 ? 0 : f < b.row3 ? 1 : 2;
  const speaking = f >= b.speak;
  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <Ground tone="paper" glowY={1080} />
      <div style={{ position: "absolute", left: COL.left, top: 232, width: 830, display: "flex", flexDirection: "column", gap: 18 }}>
        {/* The subject for the three rows below: "Chat360… speaks first." */}
        <div style={{ fontSize: 52, fontWeight: 900, color: C.mintDeep, letterSpacing: -1, ...fadeUp(enter(f, b.header, 6), 14) }}>{c.list.header}</div>
        <ListRow size={68} icon="comment" text={c.list.row1} p={enter(f, b.row1)} active={active === 0} tone="paper" />
        <ListRow size={68} icon="speaker" text={c.list.row2} p={enter(f, b.row2 - 3)} active={active === 1} tone="paper" />
        <div>
          <div style={{ fontSize: 56, fontWeight: 900, color: C.mintDeep, letterSpacing: -1, height: 70, ...fadeUp(enter(f, b.kicker), 14) }}>
            {c.list.kicker}
          </div>
          <ListRow size={68} icon="star" best text={c.list.row3} p={enter(f, b.row3 - 3)} active={active === 2} tone="paper" />
        </div>
      </div>

      <Swap f={f} inAt={b.row1} outAt={b.row2}>
        <BrowserFrame width={COL.width} height={380} url={c.list.greetUrl} typedChars={c.list.greetUrl.length} urlSize={23}>
          <div style={{ padding: 22 }}>
            <CarPhoto width="100%" height={240} paint="teal" body="sedan" />
          </div>
        </BrowserFrame>
        <div style={{ marginTop: 22 }}>
          <Bubble from="bot" lines={c.list.greet} p={enter(f, b.greet)} size={44} />
        </div>
        <div style={{ marginTop: 16 }}>
          <QuickReplies labels={c.list.replies} p={enter(f, b.replies)} />
        </div>
      </Swap>

      <Swap f={f} inAt={b.row2} outAt={b.row3}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 34, paddingTop: 0 }}>
          <VoiceOrb frame={f} size={240} />
          <Listening frame={f} text={speaking ? c.list.speaking : c.list.listening} icon={speaking ? "speaker" : "mic"} />
        </div>
        <div style={{ marginTop: 34, display: "flex", flexDirection: "column", gap: 16 }}>
          <Bubble from="user" lines={c.list.ask} p={enter(f, b.ask)} size={40} />
          {f >= b.transcript ? (
            <Bubble from="bot" lines={c.list.transcript} p={enter(f, b.transcript, 6)} size={40} reveal={linear(f, b.transcript, b.transcriptDur)} />
          ) : null}
        </div>
      </Swap>

      <Swap f={f} inAt={b.row3}>
        <div style={{ display: "flex", flexDirection: "column", gap: 44, paddingTop: 20 }}>
          <LangPair user={c.list.fr} bot={c.list.frBot} tag={c.list.frTag} pUser={enter(f, b.fr)} pBot={enter(f, b.frBot)} />
          <LangPair user={c.list.en} bot={c.list.enBot} tag={c.list.enTag} pUser={enter(f, b.en)} pBot={enter(f, b.enBot)} />
        </div>
      </Swap>
    </AbsoluteFill>
  );
};

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
          width: 830,
          top: 600,
          transform: `scale(${interpolate(f, [0, 60], [1, 1.03], clamp)})`,
          transformOrigin: "50% 30%",
        }}
      >
        <BigNumber
          frame={f}
          start={b.number}
          dur={b.numberDur}
          value={c.proof.value}
          suffix={c.proof.suffix}
          locale={locale}
          size={340}
          color={C.mintDeep}
          label={c.proof.label.map((l) => (
            <div key={l}>{l}</div>
          ))}
          labelAt={b.label}
          labelColor={C.text}
          labelSize={60}
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
      <Ground tone="dark" glowY={800} />
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 400,
          transform: `scale(${interpolate(f, [0, 150], [1, 1.02], clamp)})`,
          transformOrigin: "50% 40%",
        }}
      >
        <CtaEndCard
          frame={f}
          line={c.cta.line}
          verb={c.cta.verb}
          word={c.cta.word}
          placeholder={c.cta.placeholder}
          dm={{ from: c.cta.dmFrom, text: c.cta.dmText, button: c.cta.dmButton }}
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
        <Problem c={c} locale={c.locale} />
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
      <Ground tone="dark" glowY={860} />
      <HookFrame c={c} f={0} size={100} box={[90, 840]} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 1360, display: "flex", justifyContent: "center" }}>
        <Logo width={460} tone="dark" />
      </div>
    </AbsoluteFill>
  );
};
