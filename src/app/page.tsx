import { OpeningReveal } from "@/components/opening-reveal";
import { ElevatorScene } from "@/components/elevator-scene";
import { Hero } from "@/components/hero";
import { SolutionsSummary } from "@/components/solutions-summary";
import { ApproachSection } from "@/components/approach-section";
import { ProjectsSection } from "@/components/projects-section";
import { ClosingCta } from "@/components/closing-cta";
import { floorFor, isSectionEnabled } from "@/content/homepage";

/**
 * Homepage — short premium landing + corporate entry point.
 * Section order & on/off state come from `content/homepage.ts`.
 * 00 Opening · 01 Hero · 02 Çözümler özeti · 03 Ascent Yaklaşımı ·
 * 04 Projeler (yalnızca VERIFIED proje varsa) · 05 İletişim/Teklif · 06 Footer
 * (Footer lives in the root layout.)
 *
 * The `.home` wrapper insets desktop content to the left of the fixed
 * <ElevatorScene> (MOTION.md §4).
 */
export default function Home() {
  return (
    <>
      <OpeningReveal />
      <ElevatorScene />
      <div className="home">
        <Hero />
        {isSectionEnabled("solutions") && (
          <SolutionsSummary floor={floorFor("solutions")} />
        )}
        {isSectionEnabled("approach") && (
          <ApproachSection floor={floorFor("approach")} />
        )}
        {isSectionEnabled("projects") && (
          <ProjectsSection floor={floorFor("projects")} />
        )}
        {isSectionEnabled("closing") && (
          <ClosingCta floor={floorFor("closing")} />
        )}
      </div>
    </>
  );
}
