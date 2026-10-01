import React from "react";
import { Composition, Folder, Still } from "remotion";
import { LibraryPreview, LIBRARY_DURATION } from "./library/Preview";
import { Chat360Ad, Chat360Cover } from "./shorts/chat360-ad/Ad";
import timeline from "./shorts/chat360-ad/timeline.json";
import { FPS, H, W } from "./style/tokens";

// One folder per short. Library graphics live in src/library (see GRAPHICS.md).
export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="library">
      <Composition id="Library" component={LibraryPreview} durationInFrames={LIBRARY_DURATION} fps={FPS} width={W} height={H} />
    </Folder>
    <Folder name="chat360-ad-2026-10-01">
      <Composition
        id="Chat360Ad-FR"
        component={Chat360Ad}
        durationInFrames={timeline.duration}
        fps={FPS}
        width={W}
        height={H}
        defaultProps={{ lang: "fr" as const, withAudio: true }}
      />
      <Composition
        id="Chat360Ad-EN"
        component={Chat360Ad}
        durationInFrames={timeline.duration}
        fps={FPS}
        width={W}
        height={H}
        defaultProps={{ lang: "en" as const, withAudio: true }}
      />
      <Still id="Cover-FR" component={Chat360Cover} width={W} height={H} defaultProps={{ lang: "fr" as const }} />
      <Still id="Cover-EN" component={Chat360Cover} width={W} height={H} defaultProps={{ lang: "en" as const }} />
    </Folder>
  </>
);
