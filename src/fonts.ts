import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadFiraCode } from "@remotion/google-fonts/FiraCode";

// Darwoft Design System v2: Fraunces (display), Inter (UI/body), Fira Code (mono).
loadFraunces("normal", { weights: ["300", "400"], subsets: ["latin"] });
loadFraunces("italic", { weights: ["300", "400"], subsets: ["latin"] });
loadInter("normal", {
  weights: ["300", "400", "500", "600"],
  subsets: ["latin"],
});
loadFiraCode("normal", { weights: ["500", "700"], subsets: ["latin"] });
