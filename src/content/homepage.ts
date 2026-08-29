import type { Polarity } from "./types";
import { projectsEnabled } from "./projects";

/**
 * Homepage section registry — the order, on/off state and scroll-elevator
 * floor of every homepage section, in one place (PRODUCT.md principle 4).
 *
 * Toggle a section: flip `enabled`. Reorder: move the row. The scroll-floor
 * numbering (§8) is DERIVED from this list, so disabling "projects"
 * automatically renumbers "İletişim" from 04 to 03.
 */

export type HomeSectionId =
  | "hero"
  | "solutions"
  | "approach"
  | "projects"
  | "closing";

export type HomeSection = {
  id: HomeSectionId;
  enabled: boolean;
  /** present only for sections that are scroll-elevator stops */
  floor?: { id: string; label: string; polarity: Polarity };
};

export const homeSections: HomeSection[] = [
  { id: "hero", enabled: true },
  {
    id: "solutions",
    enabled: true,
    floor: { id: "cozumler", label: "Çözümler", polarity: "light" },
  },
  {
    id: "approach",
    enabled: true,
    floor: { id: "yaklasim", label: "Yaklaşım", polarity: "dark" },
  },
  {
    id: "projects",
    enabled: projectsEnabled,
    floor: { id: "projeler", label: "Projeler", polarity: "dark" },
  },
  {
    id: "closing",
    enabled: true,
    // light band between the dark approach section and the dark footer —
    // a bright, calm conversion moment (DESIGN.md §A.3 rhythm, §A.11)
    floor: { id: "iletisim", label: "İletişim", polarity: "light" },
  },
];

export type Floor = {
  sectionId: HomeSectionId;
  id: string;
  label: string;
  polarity: Polarity;
  num: string;
};

/** Enabled scroll-elevator stops, numbered in document order. */
export function activeFloors(): Floor[] {
  return homeSections
    .filter(
      (s): s is HomeSection & { floor: NonNullable<HomeSection["floor"]> } =>
        s.enabled && s.floor != null,
    )
    .map((s, i) => ({
      sectionId: s.id,
      id: s.floor.id,
      label: s.floor.label,
      polarity: s.floor.polarity,
      num: String(i + 1).padStart(2, "0"),
    }));
}

export function isSectionEnabled(id: HomeSectionId): boolean {
  return homeSections.find((s) => s.id === id)?.enabled ?? false;
}

export function floorFor(sectionId: HomeSectionId): Floor | undefined {
  return activeFloors().find((f) => f.sectionId === sectionId);
}
