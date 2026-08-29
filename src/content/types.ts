/**
 * Shared content types (DESIGN.md §12, PRODUCT.md principle 4).
 * Keep small — this is a config layer, not a CMS.
 */

export type ContentStatus = "VERIFIED" | "DRAFT" | "TBD";

export type Polarity = "light" | "dark";

/**
 * A linkable catalog entry — a service area, solution family, project, …
 * `enabled` hides it everywhere; `order` sorts it; `status` gates publishing
 * (only VERIFIED is real; DRAFT/TBD are placeholders and never claimed as fact).
 */
export type CatalogEntry = {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: ContentStatus;
  enabled: boolean;
  order: number;
};

export const byOrder = <T extends { order: number }>(a: T, b: T) =>
  a.order - b.order;

export const visible = <T extends { enabled: boolean }>(e: T) => e.enabled;
