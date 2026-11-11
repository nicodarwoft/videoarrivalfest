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
import { Accent, OverlineRule } from "../ui";

export const Intro = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#151515" }}>
      <Img
        name="Glass swirl"
        src={staticFile("glass/001.png")}
        style={{
          position: "absolute",
          width: 1320,
          right: -330,
          top: -150,
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 38%)",
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 38%)",
          opacity: interpolate(frame, [0, fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0, durationInFrames],
            ["0px 40px", "0px -30px"],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
          rotate: interpolate(frame, [0, durationInFrames], ["-4deg", "3deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(90deg, #151515 0%, #151515 38%, rgba(21,21,21,0.55) 62%, rgba(21,21,21,0) 85%)",
        }}
      />

      <Img
        name="Logo"
        src={staticFile("brand/logo-horizontal-white.svg")}
        style={{
          position: "absolute",
          left: 150,
          top: 120,
          height: 64,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />

      <AbsoluteFill
        style={{
          paddingLeft: 150,
          paddingRight: 150,
          justifyContent: "center",
        }}
      >
        <Interactive.Div
          name="Overline"
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8FA6BD",
            marginBottom: 36,
            opacity: interpolate(frame, [10, 30], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <OverlineRule />
          Darwin + Software = Darwoft
        </Interactive.Div>

        <Interactive.Div
          name="Headline"
          style={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: 150,
            lineHeight: 1.04,
            letterSpacing: "0.5px",
            color: "#F2F2F2",
            opacity: interpolate(frame, [18, 44], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [18, 50], ["0px 50px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Evolucionar está
          <br />
          en <Accent>nuestro nombre</Accent>.
        </Interactive.Div>

        <Interactive.Div
          name="Subheadline"
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: 52,
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            color: "#B4B4BB",
            marginTop: 44,
            maxWidth: 1400,
            opacity: interpolate(frame, [40, 64], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [40, 70], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Ingeniería de software nativa en IA, desde 2010.
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
