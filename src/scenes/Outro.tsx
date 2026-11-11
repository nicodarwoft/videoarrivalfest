import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Accent } from "../ui";

export const Outro = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0C0D0D" }}>
      <Img
        name="Team photo"
        src={staticFile("photos/group-office.jpg")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 35%",
          scale: interpolate(frame, [0, durationInFrames], [1.08, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,13,13,0.80) 0%, rgba(12,13,13,0.86) 55%, rgba(12,13,13,0.96) 100%)",
        }}
      />

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingLeft: 150,
          paddingRight: 150,
        }}
      >
        <Img
          name="Logo"
          src={staticFile("brand/logo-horizontal-white.svg")}
          style={{
            height: 96,
            marginBottom: 64,
            opacity: interpolate(frame, [8, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />

        <Interactive.Div
          name="Headline"
          style={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: 140,
            lineHeight: 1.05,
            letterSpacing: "0.5px",
            color: "#F2F2F2",
            opacity: interpolate(frame, [18, 44], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [18, 50], ["0px 44px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Construyamos lo que
          <br />
          sigue, <Accent>juntos</Accent>.
        </Interactive.Div>

        <Interactive.Div
          name="Website"
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 44,
            color: "#FFFFFF",
            backgroundColor: "#118DF0",
            borderRadius: 9999,
            padding: "22px 56px",
            marginTop: 64,
            opacity: interpolate(frame, [44, 64], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [44, 72], [0.9, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.34, 1.56, 0.64, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          darwoft.com
        </Interactive.Div>

        <Interactive.Div
          name="Event"
          style={{
            fontFamily: "Fira Code",
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: "0.12em",
            color: "#9DB3C9",
            marginTop: 48,
            opacity: interpolate(frame, [60, 82], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          GOLD SPONSOR · CÓRDOBA TECH WEEK 2026 · STAND 16
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
