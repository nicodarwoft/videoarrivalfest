import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import "./fonts";
import { AIFirst } from "./scenes/AIFirst";
import { Clients } from "./scenes/Clients";
import { Company } from "./scenes/Company";
import { Crew } from "./scenes/Crew";
import { Intro } from "./scenes/Intro";
import { Lifecycle } from "./scenes/Lifecycle";
import { Outro } from "./scenes/Outro";
import { Result } from "./scenes/Result";

// Scene durations sum to 1395 frames; seven 15-frame fades overlap,
// so the composition is 1395 - 105 = 1290 frames (43s at 30fps).
export const DarwoftAIFirst = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Intro" durationInFrames={150}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Quiénes somos" durationInFrames={180}>
        <Company />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Clientes" durationInFrames={135}>
        <Clients />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="AI-first" durationInFrames={150}>
        <AIFirst />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Tripulantes" durationInFrames={195}>
        <Crew />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Ciclo agéntico" durationInFrames={240}>
        <Lifecycle />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Resultado" durationInFrames={180}>
        <Result />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence name="Cierre" durationInFrames={165}>
        <Outro />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
