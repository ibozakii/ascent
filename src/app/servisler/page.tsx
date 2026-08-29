import type { Metadata } from "next";
import { SubpageHero } from "@/components/subpage-hero";
import {
  SectionCapabilities,
  type CapabilityRow,
} from "@/components/section-capabilities";
import { ProcessTimeline } from "@/components/process-timeline";
import { ScopePrinciples } from "@/components/scope-principles";
import { ClosingCta } from "@/components/closing-cta";
import { serviceCategories } from "@/content/catalog";
import { byOrder, visible } from "@/content/types";
import { servislerPage } from "@/content/servisler";

export const metadata: Metadata = {
  title: "Servisler — Ascent Elevator",
  description:
    "Ascent servis yaklaşımı: düzenli kontrol, öngörülebilir müdahale ve şeffaf takip. Bir servis talebinin nasıl ilerlediği ve her serviste sabit kalan prensipler.",
};

/**
 * /servisler — service overview.
 *
 * Calmer, process-led counterpart to /cozumler: A (dark) subpage hero with a
 * measurement-rhythm abstraction · B (light) data-driven service categories
 * (SectionCapabilities) · C (dark) a line-driven process timeline · D (light)
 * scope principles · E (dark) closing CTA · F footer.
 *
 * Detail routes (/servisler/[slug]) are not built yet → category rows render
 * WITHOUT a per-item link. Everything is DRAFT demo content from the content
 * layer; no service scope, SLA or contract term is claimed.
 */
export default function ServislerPage() {
  const { hero, overview, process, scope, cta } = servislerPage;

  const rows: CapabilityRow[] = serviceCategories
    .filter(visible)
    .sort(byOrder)
    .map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      // href: serviceHref(c.slug) — enable once /servisler/[slug] exists
    }));

  return (
    <>
      <SubpageHero
        polarity="dark"
        figure="scale"
        crumb={hero.crumb}
        heading={hero.heading}
        intro={hero.intro}
      />

      <SectionCapabilities
        id="servis-alanlari"
        index={overview.index}
        label={overview.label}
        heading={overview.heading}
        note={overview.note}
        rows={rows}
      />

      <ProcessTimeline
        index={process.index}
        label={process.label}
        heading={process.heading}
        intro={process.intro}
        steps={process.steps}
      />

      <ScopePrinciples
        index={scope.index}
        label={scope.label}
        heading={scope.heading}
        principles={scope.principles}
      />

      <ClosingCta polarity="dark" heading={cta.heading} text={cta.text} />
    </>
  );
}
