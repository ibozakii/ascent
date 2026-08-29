import type { Metadata } from "next";
import { SubpageHero } from "@/components/subpage-hero";
import { SectionSolutions, type SolutionRow } from "@/components/section-solutions";
import { SelectionGuide } from "@/components/selection-guide";
import { ClosingCta } from "@/components/closing-cta";
import { solutionFamilies, buildingTypes } from "@/content/catalog";
import { byOrder, visible } from "@/content/types";
import { cozumlerPage } from "@/content/cozumler";

export const metadata: Metadata = {
  title: "Çözümler — Ascent Elevator",
  description:
    "Ascent asansör sistem aileleri: yapının yüksekliğine, trafiğine ve mimarisine göre planlanan dikey ulaşım çözümleri.",
};

/**
 * /cozumler — solutions overview.
 *
 * A (light) subpage hero · B (dark) data-driven solution-family slabs
 * (SectionSolutions) · C the building-types band inside B (only when enabled
 * and non-empty) · D (light) short selection guide · E (dark) closing CTA ·
 * F footer (root layout).
 *
 * Detail routes (/cozumler/[slug]) are not built yet, so panels render WITHOUT
 * a per-item link — the panel content is the information, and one strong CTA
 * closes the page. The slug → href architecture stays in the content helpers,
 * ready to switch on.
 */
export default function CozumlerPage() {
  const { hero, overview, guide } = cozumlerPage;

  const rows: SolutionRow[] = solutionFamilies
    .filter(visible)
    .sort(byOrder)
    .map((family) => ({
      id: family.id,
      title: family.title,
      description: family.description,
      figure: family.figure,
      // href: solutionHref(family.slug) — enable once /cozumler/[slug] exists
    }));

  const band =
    buildingTypes.enabled && buildingTypes.items.length > 0
      ? { label: buildingTypes.label, items: buildingTypes.items }
      : undefined;

  return (
    <>
      <SubpageHero
        crumb={hero.crumb}
        heading={hero.heading}
        intro={hero.intro}
      />

      <SectionSolutions
        id="cozum-aileleri"
        index={overview.index}
        label={overview.label}
        heading={overview.heading}
        intro={overview.intro}
        rows={rows}
        band={band}
      />

      <SelectionGuide
        index={guide.index}
        label={guide.label}
        heading={guide.heading}
        points={guide.points}
        closing={guide.closing}
      />

      <ClosingCta polarity="dark" />
    </>
  );
}
