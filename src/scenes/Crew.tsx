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

export const Crew = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#151515",
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 110,
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
        Nuestra tripulación
      </Interactive.Div>

      <Interactive.Div
        name="Headline"
        style={{
          fontFamily: "Fraunces",
          fontWeight: 300,
          fontSize: 104,
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
        Todos los tripulantes, capacitados
        <br />
        para trabajar de manera <Accent>agéntica</Accent>.
      </Interactive.Div>

      <div
        style={{
          display: "flex",
          gap: 32,
          marginTop: 64,
          height: 470,
        }}
      >
        <Interactive.Div
          name="Clip card 1"
          style={{
            flex: 1,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            opacity: interpolate(frame, [34, 56], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [34, 64], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Video
            name="Pairing clip"
            src={staticFile("clips/C0452.mp4")}
            muted
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Interactive.Div>

        <Interactive.Div
          name="Clip card 2"
          style={{
            flex: 1,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            opacity: interpolate(frame, [42, 64], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [42, 72], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Video
            name="Team clip"
            src={staticFile("clips/C0463.mp4")}
            muted
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Interactive.Div>

        <Interactive.Div
          name="Clip card 3"
          style={{
            flex: 1,
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            opacity: interpolate(frame, [50, 72], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [50, 80], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Video
            name="Conversation clip"
            src={staticFile("clips/C0469.mp4")}
            muted
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Interactive.Div>
      </div>

      <Interactive.Div
        name="Caption"
        style={{
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: 44,
          letterSpacing: "-0.02em",
          color: "#B4B4BB",
          marginTop: 44,
          opacity: interpolate(frame, [76, 98], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Cada persona, en cada rol, trabaja junto a agentes de IA.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
