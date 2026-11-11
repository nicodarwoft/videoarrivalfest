import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  interpolateColors,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { OverlineRule } from "../ui";

export const Result = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#151515" }}>
      <Img
        name="Glass symbol"
        src={staticFile("glass/dw01.png")}
        style={{
          position: "absolute",
          width: 1100,
          right: -260,
          bottom: -170,
          opacity: 0.5,
          translate: interpolate(
            frame,
            [0, durationInFrames],
            ["0px 20px", "0px -20px"],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
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
            opacity: interpolate(frame, [6, 24], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <OverlineRule />
          El resultado
        </Interactive.Div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 44,
            marginTop: 10,
          }}
        >
          <Interactive.Div
            name="From"
            style={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: 150,
              color: "#F2F2F2",
              opacity: interpolate(frame, [14, 34], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            De
          </Interactive.Div>

          <div style={{ position: "relative" }}>
            <Interactive.Div
              name="Twelve"
              style={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: 330,
                lineHeight: 1,
                fontVariantNumeric: "tabular-nums",
                color: interpolateColors(
                  frame,
                  [62, 84],
                  ["#F2F2F2", "#5E5E66"],
                ),
                opacity: interpolate(frame, [20, 42], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                translate: interpolate(
                  frame,
                  [20, 50],
                  ["0px 50px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  },
                ),
              }}
            >
              12
            </Interactive.Div>
            <Interactive.Div
              name="Strike"
              style={{
                position: "absolute",
                left: -10,
                right: -10,
                top: "54%",
                height: 10,
                borderRadius: 10,
                backgroundColor: "#F0285A",
                transformOrigin: "left center",
                scale: interpolate(frame, [62, 84], ["0 1", "1 1"], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
              }}
            />
          </div>

          <Interactive.Div
            name="Months to"
            style={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: 150,
              color: "#F2F2F2",
              opacity: interpolate(frame, [30, 50], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            meses a
          </Interactive.Div>

          <Interactive.Div
            name="Three"
            style={{
              fontFamily: "Fraunces",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 430,
              lineHeight: 1,
              paddingRight: 40,
              backgroundImage:
                "linear-gradient(120deg, #42FFCA 0%, #118DF0 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              opacity: interpolate(frame, [80, 100], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [80, 116], [0.7, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.34, 1.56, 0.64, 1),
                output: "perceptual-scale",
              }),
            }}
          >
            3.
          </Interactive.Div>
        </div>

        <Interactive.Div
          name="Explanation"
          style={{
            fontFamily: "Inter",
            fontWeight: 300,
            fontSize: 50,
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
            color: "#B4B4BB",
            marginTop: 20,
            maxWidth: 1600,
            opacity: interpolate(frame, [104, 126], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Proyectos que antes llevaban 12 meses, hoy se entregan en 3.
        </Interactive.Div>

        <Interactive.Div
          name="ISO badge"
          style={{
            alignSelf: "flex-start",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 34,
            color: "#F2F2F2",
            backgroundColor: "#1C1C1E",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 9999,
            padding: "20px 40px",
            marginTop: 48,
            opacity: interpolate(frame, [122, 142], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [122, 150], ["0px 24px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <span style={{ color: "#42FFCA", fontFamily: "Fira Code" }}>
            ISO 42001
          </span>
          {"  ·  "}Segunda empresa de Argentina en certificar su gestión de IA
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
