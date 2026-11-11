import { Composition } from "remotion";
import { DarwoftAIFirst } from "./DarwoftAIFirst";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="DarwoftAIFirst"
        component={DarwoftAIFirst}
        durationInFrames={1290}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
