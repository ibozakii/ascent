import type { CatalogEntry } from "./types";

/**
 * Projects / References (PRODUCT.md §4.4, CONTENT.md §4.4).
 *
 * Ascent is newly founded and has NO verified projects yet. This array stays
 * empty until the client confirms a real project WITH written permission
 * (CONTENT.md §9-F). Never add a fake project, logo or empty placeholder.
 *
 * To turn the Projects section + nav item ON: add at least one entry with
 * `status: "VERIFIED"` and `enabled: true`. Everything else adapts automatically
 * (homepage section, scroll floor numbering, navigation).
 */
export type Project = CatalogEntry & {
  location: string;
  buildingType: string;
  scope: string;
  year: string;
};

export const projects: Project[] = [
  // Example shape (do not ship — status must be VERIFIED and permission granted):
  // {
  //   id: "ornek-plaza",
  //   slug: "ornek-plaza",
  //   title: "Örnek Plaza",
  //   description: "…",
  //   location: "İstanbul",
  //   buildingType: "Ofis",
  //   scope: "2 adet yolcu asansörü kurulumu",
  //   year: "2026",
  //   status: "VERIFIED",
  //   enabled: true,
  //   order: 1,
  // },
];

export const verifiedProjects = projects.filter(
  (p) => p.enabled && p.status === "VERIFIED",
);

/** Single source of truth for "does the Projects section exist?" */
export const projectsEnabled = verifiedProjects.length > 0;
