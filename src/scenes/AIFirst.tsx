import {
  AbsoluteFill,
  AnimatedImage,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Accent, OverlineRule } from "../ui";

export const AIFirst = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#151515" }}>
      {/* Soft glow behind the mascot */}
      <div
        style={{
          position: "absolute",
          right: 60,
          top: 110,
          width: 860,
          height: 860,
          borderRadius: "50%",
          backgroundImage:
            "radial-gradient(closest-side, rgba(17,141,240,0.22), rgba(17,141,240,0) 100%)",
        }}
      />
      <Interactive.Div
        name="Astronaut"
        style={{
          position: "absolute",
          right: 110,
          top: 160,
          width: 760,
          height: 760,
          opacity: interpolate(frame, [10, 34], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0, durationInFrames],
            ["0px 24px", "0px -18px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.45, 0, 0.55, 1),
            },
          ),
        }}
      >
        <AnimatedImage
          src={staticFile("brand/astronaut.gif")}
          width={760}
          height={760}
          fit="contain"
        />
      </Interactive.Div>

      <AbsoluteFill
        style={{
          paddingLeft: 150,
          paddingRight: 900,
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
            marginBottom: 34,
            opacity: interpolate(frame, [6, 24], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <OverlineRule />
          El siguiente paso
        </Interactive.Div>

        <Interactive.Div
          name="Headline"
          style={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: 138,
            lineHeight: 1.04,
            letterSpacing: "0.5px",
            color: "#F2F2F2",
            opacity: interpolate(frame, [12, 38], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [12, 44], ["0px 46px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          Somos una
          <br />
          empresa
          <br />
          <Accent>AI-first</Accent>.
        </Interactive.Div>

        <Interactive.Div
          name="Subheadline"
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: 46,
            lineHeight: 1.4,
            letterSpacing: "-0.02em",
            color: "#B4B4BB",
            marginTop: 44,
            opacity: interpolate(frame, [36, 60], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [36, 66], ["0px 28px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          No se trata solo de construir más rápido, sino de construir sistemas
          que sigan siendo eficientes a escala.
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
