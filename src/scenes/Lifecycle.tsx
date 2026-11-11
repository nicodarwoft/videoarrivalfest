import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Accent, OverlineRule } from "../ui";

// Darwoft's agentic development lifecycle, as described on darwoft.com.
const steps = [
  {
    number: "01",
    title: "Tripulantes",
    text: "Definen los objetivos del proyecto.",
  },
  {
    number: "02",
    title: "Orquestador",
    text: "Coordina a los agentes en cada etapa.",
  },
  {
    number: "03",
    title: "Agentes especializados",
    text: "Trabajan en cada etapa del desarrollo.",
  },
  {
    number: "04",
    title: "Agentes revisores",
    text: "Controlan la calidad de cada entrega.",
  },
];

const Flow = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", alignItems: "stretch", marginTop: 70 }}>
      {steps.map((step, i) => {
        const start = 40 + i * 26;
        const enter = interpolate(frame, [start, start + 26], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const arrow = interpolate(frame, [start + 14, start + 34], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        // Each card lights up in turn once the flow is on screen.
        const activeStart = 150 + i * 16;
        const active = interpolate(
          frame,
          [activeStart, activeStart + 10],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );

        return (
          <div
            key={step.number}
            style={{ display: "flex", flex: i < steps.length - 1 ? 1 : 0.846 }}
          >
            <div
              style={{
                flex: 1,
                borderRadius: 20,
                padding: "36px 34px 40px",
                backgroundColor: "#1C1C1E",
                border: `2px solid rgba(66,255,202,${0.12 + active * 0.75})`,
                boxShadow: `0 0 ${active * 60}px rgba(66,255,202,${active * 0.18})`,
                opacity: enter,
                translate: `0px ${(1 - enter) * 40}px`,
              }}
            >
              <div
                style={{
                  fontFamily: "Fira Code",
                  fontWeight: 700,
                  fontSize: 30,
                  color: "#42FFCA",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: 42,
                  lineHeight: 1.15,
                  color: "#F2F2F2",
                  marginTop: 22,
                  minHeight: 98,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: 32,
                  lineHeight: 1.4,
                  color: "#B4B4BB",
                  marginTop: 16,
                }}
              >
                {step.text}
              </div>
            </div>
            {i < steps.length - 1 ? (
              <div
                style={{
                  width: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: arrow,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12h15m-6-6 6 6-6 6"
                    stroke="#118DF0"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export const Lifecycle = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101111",
        paddingLeft: 120,
        paddingRight: 120,
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
          marginBottom: 28,
          opacity: interpolate(frame, [6, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <OverlineRule />
        Ciclo de desarrollo agéntico
      </Interactive.Div>

      <Interactive.Div
        name="Headline"
        style={{
          fontFamily: "Fraunces",
          fontWeight: 300,
          fontSize: 112,
          lineHeight: 1.06,
          letterSpacing: "0.5px",
          color: "#F2F2F2",
          opacity: interpolate(frame, [12, 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [12, 42], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Los agentes ejecutan.
        <br />
        <Accent>Las personas deciden.</Accent>
      </Interactive.Div>

      <Flow />

      <Interactive.Div
        name="Closing line"
        style={{
          alignSelf: "flex-start",
          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: 38,
          color: "#101111",
          backgroundColor: "#42FFCA",
          borderRadius: 9999,
          padding: "20px 44px",
          marginTop: 60,
          opacity: interpolate(frame, [176, 196], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [176, 204], ["0px 24px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        El equipo revisa el trabajo y toma las decisiones finales.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
