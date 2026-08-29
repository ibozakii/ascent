import type { CatalogEntry, ContentStatus } from "./types";

/**
 * Reusable catalogs for the (not-yet-built) overview / detail pages
 * (/servisler, /cozumler). NOT rendered on the homepage — the homepage uses
 * the short `offerings` summary in site.ts.
 *
 * Everything is DRAFT demo content: generic industry category definitions, not
 * Ascent's confirmed services / product gamma / technical parameters
 * (CONTENT.md §4.2, §4.3, §9-D). Yürüyen merdiven / yürüyen yol deliberately
 * absent (CONTENT.md §4.2 warning) — add only when the client confirms.
 *
 * Add / remove / reorder / disable entries here; `SectionCapabilities` and
 * `SectionSolutions` render whatever is passed to them.
 */

/* --- Service categories (feeds SectionCapabilities on /servisler) --------- */
export type ServiceCategory = CatalogEntry;

export const serviceCategories: ServiceCategory[] = [
  {
    id: "asansor-sistemleri",
    slug: "asansor-sistemleri",
    title: "Asansör Sistemleri",
    description:
      "Binanın kullanım profiline göre planlanan yeni kurulum çözümleri.",
    status: "DRAFT",
    enabled: true,
    order: 1,
  },
  {
    id: "bakim",
    slug: "bakim",
    title: "Bakım",
    description:
      "Düzenli kontrol ve önleyici bakımla güvenli, kesintisiz işletme.",
    status: "DRAFT",
    enabled: true,
    order: 2,
  },
  {
    id: "onarim",
    slug: "onarim",
    title: "Onarım",
    description:
      "Arıza tespiti, hızlı müdahale ve sistemi standartlara geri getirme.",
    status: "DRAFT",
    enabled: true,
    order: 3,
  },
  {
    id: "modernizasyon",
    slug: "modernizasyon",
    title: "Modernizasyon",
    description:
      "Mevcut asansörlerde güvenlik, konfor ve enerji verimliliği güncellemesi.",
    status: "DRAFT",
    enabled: true,
    order: 4,
  },
];

/* --- Solution families (feeds SectionSolutions on /cozumler) ------------- */
export type SolutionFigure = "shaft" | "strata" | "frame";

export type SolutionFamily = CatalogEntry & { figure: SolutionFigure };

export const solutionFamilies: SolutionFamily[] = [
  {
    id: "yolcu",
    slug: "yolcu",
    title: "Yolcu Asansörleri",
    description:
      "Konut ve ofis binalarında günlük dikey ulaşım; sessiz çalışma ve öngörülebilir bekleme süresi önceliğiyle.",
    figure: "shaft",
    status: "DRAFT",
    enabled: true,
    order: 1,
  },
  {
    id: "yuk",
    slug: "yuk",
    title: "Yük Asansörleri",
    description:
      "Endüstriyel ve ticari yapılarda ağır yük ve büyük hacim taşıma; dayanıklılık ve servis kolaylığı ön planda.",
    figure: "strata",
    status: "DRAFT",
    enabled: true,
    order: 2,
  },
  {
    id: "panoramik",
    slug: "panoramik",
    title: "Panoramik Asansörler",
    description:
      "Mimari bir öğe olarak asansör: cam kabin, görünür hareket ve mekânla bütünleşen bir yerleşim.",
    figure: "frame",
    status: "DRAFT",
    enabled: true,
    order: 3,
  },
];

/* --- Building types alt-band (DRAFT) ------------------------------------
   Example structure types, not a claimed service-area list (PRODUCT.md §2,
   CONTENT.md §9). Set `enabled: false` or empty `items` and the band and its
   section disappear entirely — no component change. */
export const buildingTypes: {
  status: ContentStatus;
  enabled: boolean;
  label: string;
  items: string[];
} = {
  status: "DRAFT",
  enabled: true,
  label: "Kullanım alanları",
  items: ["Konut", "Ofis", "Otel", "AVM", "Sağlık", "Endüstri", "Kamu"],
};
