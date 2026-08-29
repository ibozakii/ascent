/**
 * Brand identity — single source (DESIGN.md §A.14, MOTION.md §4).
 *
 * The real logo (client PDF: `public/brand/ascent-logo.pdf`) is a full lockup —
 * a füme-grey ascending mark inside a ring + an `ASCENT ELEVATOR` wordmark in
 * the brand red (CMYK 0/100/100/0 ≈ #ED1C24). A clean symbol / wordmark split
 * can't be auto-extracted here without redesigning it, so:
 *
 *   - the UI keeps the TEXT wordmark placeholder for now (`<Wordmark />`);
 *   - accent tokens ARE derived from the real red (globals.css `--brand-red`);
 *   - real SVG assets + favicon + OG are TODO — see public/brand/README.md.
 */

import type { ContentStatus } from "./types";

/** Text wordmark placeholder — real logo is TBD (public/brand/README.md). */
export const wordmark = "ASCENT";

/** Reference red straight from the logo wordmark (CMYK 0/100/100/0). The
 *  working `--accent-*` tokens in globals.css are deepened from this for AA
 *  contrast; reconcile both when the vector source arrives. */
export const brandRed = "#ED1C24";

export type BrandAsset = {
  id: string;
  /** public path once produced */
  path: string;
  status: ContentStatus;
  note: string;
};

/** Asset manifest. `TBD` entries are not yet produced — never reference them
 *  from a component until status is `VERIFIED`. */
export const brandAssets: Record<string, BrandAsset> = {
  source: {
    id: "source",
    path: "/brand/ascent-logo.pdf",
    status: "VERIFIED",
    note: "Client-provided full lockup, vector (CorelDRAW export). Source of truth, not web-optimised.",
  },
  symbol: {
    id: "symbol",
    path: "/brand/ascent-symbol.svg",
    status: "TBD",
    note: "Badge / ascending mark only. Needs clean client vector.",
  },
  wordmarkSvg: {
    id: "wordmarkSvg",
    path: "/brand/ascent-wordmark.svg",
    status: "TBD",
    note: "Type-only wordmark. Needs clean client vector.",
  },
  lockup: {
    id: "lockup",
    path: "/brand/ascent-lockup.svg",
    status: "TBD",
    note: "Full lockup, default + inverse variant.",
  },
  favicon: {
    id: "favicon",
    path: "/icon.svg",
    status: "TBD",
    note: "Next metadata file convention. Currently the CRA default favicon.ico.",
  },
  og: {
    id: "og",
    path: "/brand/og.png",
    status: "TBD",
    note: "1200×630 share image.",
  },
};
