import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame } from "remotion";
import { loadFonts } from "../style/fonts";
import { C, FONT, type Tone } from "../style/tokens";
import { BeforeAfter } from "./BeforeAfter";
import { BigNumber } from "./BigNumber";
import { BrowserFrame, FilterChip, ResultRow } from "./Browser";
import { Booked, Bubble, ChatPanel, Tag, Thread, TypingDots, type ThreadItem } from "./Chat";
import { CtaEndCard } from "./CtaEndCard";
import { Ground } from "./Ground";
import { ListRow } from "./ListBuild";
import { enter } from "./motion";
import { StepLadder } from "./StepLadder";
import { Listening, VoiceOrb } from "./Voice";

/** 3-second test of every library graphic (GRAPHICS.md). Placeholder copy only. */
const SEG = 90;

const Label: React.FC<{ id: string; name: string; tone: Tone }> = ({ id, name, tone }) => (
  <div
    style={{
      position: "absolute",
      top: 250,
      left: 0,
      right: 0,
      textAlign: "center",
      fontFamily: FONT,
      fontSize: 40,
      fontWeight: 800,
      color: tone === "dark" ? C.whiteMuted : C.textMuted,
    }}
  >
    {id} · {name}
  </div>
);

const Slot: React.FC<{ id: string; name: string; tone: Tone; children: (f: number) => React.ReactNode }> = ({ id, name, tone, children }) => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Ground tone={tone} />
      <Label id={id} name={name} tone={tone} />
      <div style={{ position: "absolute", left: 110, top: 400, width: 860 }}>{children(f)}</div>
    </AbsoluteFill>
  );
};

export const LIBRARY_DURATION = SEG * 8;

export const LibraryPreview: React.FC = () => {
  loadFonts();
  const items: ThreadItem[] = [
    { key: "u", at: 0, height: 100, render: () => <Bubble from="user" lines={["Do you have it in red?"]} p={1} size={40} /> },
    { key: "t", at: 8, height: 72, render: (p) => <Tag n={1} text="Step tag" p={p} /> },
    { key: "d", at: 14, height: 110, render: () => <TypingDots frame={0} p={1} /> },
    { key: "b", at: 30, height: 130, render: (p) => <Booked title="Confirmation" sub="Sub line" p={p} /> },
  ];
  return (
    <AbsoluteFill style={{ background: C.ink }}>
      <Sequence durationInFrames={SEG}>
        <Slot id="G1" name="Big number" tone="paper">
          {(f) => (
            <BigNumber frame={f} start={6} value={98} locale="en-CA" suffix="%" color={C.mintDeep} label="label under it" labelColor={C.text} source="Source: where it comes from" sourceColor={C.textMuted} />
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG} durationInFrames={SEG}>
        <Slot id="G2" name="List build" tone="paper">
          {(f) => (
            <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
              <ListRow icon="check" text="First item" p={enter(f, 4)} active={f < 30} tone="paper" size={68} />
              <ListRow icon="check" text="Second item" p={enter(f, 30)} active={f >= 30 && f < 56} tone="paper" size={68} />
              <ListRow icon="star" best text="Best item" p={enter(f, 56)} active={f >= 56} tone="paper" size={68} />
            </div>
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 2} durationInFrames={SEG}>
        <Slot id="G3" name="Step ladder" tone="dark">
          {(f) => <StepLadder frame={f} tone="dark" steps={[{ text: "First", at: 4 }, { text: "Then", at: 34 }, { text: "Then", at: 64 }]} />}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 3} durationInFrames={SEG}>
        <Slot id="G4" name="Before / after" tone="dark">
          {(f) => (
            <BeforeAfter onDark before={{ label: "Before", value: "4+ h" }} after={{ label: "After", value: "< 30 s" }} pBefore={enter(f, 4)} pAfter={enter(f, 24)} />
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 4} durationInFrames={SEG}>
        <Slot id="G5" name="Chat in action" tone="paper">
          {(f) => (
            <ChatPanel width={840} height={700} title="Chat360 AI" status="Online 24/7">
              <Thread items={items} frame={f} viewport={572} />
            </ChatPanel>
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 5} durationInFrames={SEG}>
        <Slot id="G6" name="CTA end card" tone="dark">
          {(f) => (
            <CtaEndCard
              frame={f}
              line="The CTA line, word for word."
              verb="Comment"
              word="WORD"
              placeholder="Add a comment…"
              url="chat360.ca"
              at={{ logo: 0, line: 12, word: 24, box: 34, type: 44, send: 60, url: 66 }}
            />
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 6} durationInFrames={SEG}>
        <Slot id="G7" name="Site tour" tone="dark">
          {(f) => (
            <BrowserFrame width={830} height={640} url="yourdealership.ca/inventory?filter=on" typedChars={Math.min(36, Math.floor(f * 1.5))} onDark>
              <div style={{ padding: "24px 26px" }}>
                <div style={{ display: "flex", gap: 12 }}>
                  {["Chip", "Filter", "Another"].map((t, i) => (
                    <FilterChip key={t} text={t} p={enter(f, 26 + i * 5)} />
                  ))}
                </div>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Result one", "Result two"].map((t, i) => (
                    <ResultRow key={t} title={t} meta="meta" p={enter(f, 44 + i * 6)} highlight={i === 0 ? enter(f, 64) : 0} />
                  ))}
                </div>
              </div>
            </BrowserFrame>
          )}
        </Slot>
      </Sequence>
      <Sequence from={SEG * 7} durationInFrames={SEG}>
        <Slot id="G8" name="Voice orb" tone="paper">
          {(f) => (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 46, paddingTop: 60 }}>
              <VoiceOrb frame={f} size={300} />
              <Listening frame={f} text="Listening…" />
            </div>
          )}
        </Slot>
      </Sequence>
    </AbsoluteFill>
  );
};
