import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Accent, OverlineRule } from "../ui";

// Client logos shown under "Trusted by" on darwoft.com.
const logos = [
  "logo_intel_e3e6db1abf.svg",
  "logo_coca_cola_082a84b6c6.svg",
  "logo_mcafee_f166aefaf2.svg",
  "logo_bridgestone_10ebb19629.svg",
  "logo_claro_5ac1e3d5af.svg",
  "logo_ypf_891591f67c.svg",
  "logo_abinbev_f867a78bd8.svg",
  "logo_naranjax_f50f1fe33c.svg",
];

const LogoGrid = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 28,
        marginTop: 56,
      }}
    >
      {logos.map((logo, i) => {
        const start = 34 + i * 4;
        const progress = interpolate(frame, [start, start + 24], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });

        return (
          <div
            key={logo}
            style={{
              height: 150,
              borderRadius: 16,
              backgroundColor: "#1C1C1E",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: progress,
              translate: `0px ${(1 - progress) * 26}px`,
            }}
          >
            <Img
              src={staticFile(`logos/${logo}`)}
              style={{
                maxWidth: 230,
                height: 58,
                objectFit: "contain",
                // The SVGs use currentColor; force them to off-white.
                filter: "brightness(0) invert(0.95)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const Clients = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#101111",
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
          marginBottom: 30,
          opacity: interpolate(frame, [6, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <OverlineRule />
        Confían en nosotros
      </Interactive.Div>

      <Interactive.Div
        name="Headline"
        style={{
          fontFamily: "Fraunces",
          fontWeight: 300,
          fontSize: 120,
          lineHeight: 1.05,
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
        Más un socio
        <br />
        que <Accent>un proveedor</Accent>.
      </Interactive.Div>

      <LogoGrid />

      <Interactive.Div
        name="Locations"
        style={{
          fontFamily: "Fira Code",
          fontWeight: 500,
          fontSize: 32,
          letterSpacing: "0.12em",
          color: "#8FA6BD",
          marginTop: 56,
          opacity: interpolate(frame, [70, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        USA · ARGENTINA · COLOMBIA
      </Interactive.Div>
    </AbsoluteFill>
  );
};
