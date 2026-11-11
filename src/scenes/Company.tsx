import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Accent, OverlineRule } from "../ui";

// Figures published on darwoft.com (home + who-we-are).
const stats = [
  { value: 16, prefix: "", suffix: "+", label: "años construyendo software" },
  { value: 250, prefix: "+", suffix: "", label: "tripulantes" },
  { value: 200, prefix: "+", suffix: "", label: "proyectos entregados" },
  { value: 45, prefix: "+", suffix: "", label: "MVPs lanzados" },
];

const Stats = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        left: 150,
        right: 150,
        bottom: 130,
        display: "flex",
        borderTop: "1px solid rgba(255,255,255,0.16)",
      }}
    >
      {stats.map((stat, i) => {
        const start = 50 + i * 9;
        const progress = interpolate(frame, [start, start + 36], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });

        return (
          <div
            key={stat.label}
            style={{
              flex: 1,
              paddingTop: 36,
              paddingLeft: i === 0 ? 0 : 40,
              borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.16)",
              opacity: progress,
              translate: `0px ${(1 - progress) * 30}px`,
            }}
          >
            <div
              style={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: 128,
                lineHeight: 0.95,
                color: "#F2F2F2",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {stat.prefix}
              {Math.round(stat.value * progress)}
              {stat.suffix}
            </div>
            <div
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: 36,
                color: "#B4B4BB",
                marginTop: 18,
              }}
            >
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Company = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#151515" }}>
      <Video
        name="Office b-roll"
        src={staticFile("clips/C0462.mp4")}
        muted
        objectFit="cover"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          scale: interpolate(frame, [0, 180], [1.06, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(12,13,13,0.86) 0%, rgba(12,13,13,0.62) 45%, rgba(12,13,13,0.94) 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 150, right: 150, top: 130 }}>
        <Interactive.Div
          name="Overline"
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9DB3C9",
            marginBottom: 32,
            opacity: interpolate(frame, [8, 26], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <OverlineRule />
          Quiénes somos
        </Interactive.Div>

        <Interactive.Div
          name="Headline"
          style={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: 124,
            lineHeight: 1.05,
            letterSpacing: "0.5px",
            color: "#F2F2F2",
            opacity: interpolate(frame, [14, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [14, 46], ["0px 44px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          De la idea a producción,
          <br />a <Accent>escala global</Accent>.
        </Interactive.Div>
      </div>

      <Stats />
    </AbsoluteFill>
  );
};
