/**
 * Site content + config — the single source of truth for the homepage
 * (DESIGN.md §12, PRODUCT.md principle 4). Add / remove / reorder / disable
 * without touching component code.
 *
 * NOTHING here is a confirmed company fact. Brand name is VERIFIED; every other
 * string is DRAFT / TBD neutral demo copy (CONTENT.md). No claim is made about
 * services, scope, certificates, SLAs, numbers or references.
 */

import type { ContentStatus } from "./types";
import { projectsEnabled } from "./projects";

// Brand identity lives in ./brand (DESIGN.md §A.14). Re-exported for existing
// call sites; new code should import from "@/content/brand" or use <Wordmark />.
export { wordmark } from "./brand";

/* --- Routes ------------------------------------------------------------------
   Canonical top-level paths. Detail pages are slug-based and data-driven — no
   per-product route logic. Sub-pages are NOT built yet; links resolve once they
   exist. */
export const routes = {
  home: "/",
  solutions: "/cozumler",
  services: "/servisler",
  projects: "/projeler",
  about: "/kurumsal",
  contact: "/iletisim",
} as const;

/** Planned detail-route templates (built later, from catalog slugs). */
export const detailRouteTemplates = {
  solutions: "/cozumler/[slug]",
  services: "/servisler/[slug]",
} as const;

export const solutionHref = (slug: string) => `${routes.solutions}/${slug}`;
export const serviceHref = (slug: string) => `${routes.services}/${slug}`;

/* --- Navigation ------------------------------------------------------------- */
export type NavItem = {
  id: string;
  label: string;
  href: string;
  enabled: boolean;
};

export const navItems: NavItem[] = [
  { id: "solutions", label: "Çözümler", href: routes.solutions, enabled: true },
  { id: "services", label: "Servisler", href: routes.services, enabled: true },
  { id: "projects", label: "Projeler", href: routes.projects, enabled: projectsEnabled },
  { id: "about", label: "Kurumsal", href: routes.about, enabled: true },
  { id: "contact", label: "İletişim", href: routes.contact, enabled: true },
];

export const enabledNavItems = navItems.filter((n) => n.enabled);

/* --- CTAs ----------------------------------------------------------------- */
export const primaryCta = {
  label: "Teklif Al", // CONTENT.md §3 — aday metin
  href: routes.contact,
} as const;

export const secondaryCta = {
  label: "Ne yapıyoruz",
  href: "#cozumler", // homepage solutions summary (same-page scroll)
} as const;

/* --- Hero (STATUS: DRAFT — neutral demo copy, no company claim) ----------- */
export const hero = {
  status: "DRAFT" as ContentStatus,
  titleLines: [
    { text: "Dikey ulaşım —", tone: "strong" },
    { text: "bir binanın", tone: "strong" },
    { text: "sessiz mühendisliği.", tone: "soft" },
  ],
  lede:
    "Hassas mühendislik, dürüst malzeme ve zamanla değişmeyen bir kalite. Dikey ulaşıma yaklaşımımızı tanımlayan üç ilke.",
} as const;

/* --- SECTION 02 · Çözümler / Ne Yapıyoruz özeti --------------------------
   Homepage-level summary: 3–4 top-level areas, each linking to its overview
   page. NOT the confirmed service list (CONTENT.md §4.1, §9-D). Add / remove /
   reorder entries here; the component renders whatever is `enabled`. */
export const offerings = {
  status: "DRAFT" as ContentStatus,
  index: "Çözümler",
  heading: "Kurulumdan bakıma, tek bir disiplin.",
  items: [
    {
      id: "asansor-sistemleri",
      slug: "asansor-sistemleri",
      title: "Asansör Sistemleri",
      description: "Yeni yapılar için planlanan dikey ulaşım çözümleri.",
      status: "DRAFT",
      enabled: true,
      order: 1,
      href: routes.solutions,
    },
    {
      id: "bakim-servis",
      slug: "bakim-servis",
      title: "Bakım & Servis",
      description: "Düzenli bakım, arıza müdahalesi ve kesintisiz işletme.",
      status: "DRAFT",
      enabled: true,
      order: 2,
      href: routes.services,
    },
    {
      id: "modernizasyon",
      slug: "modernizasyon",
      title: "Modernizasyon",
      description:
        "Mevcut asansörlerde güvenlik, konfor ve verimlilik güncellemesi.",
      status: "DRAFT",
      enabled: true,
      order: 3,
      href: routes.services,
    },
  ],
} as const;

/* --- SECTION 03 · Ascent Yaklaşımı (STATUS: DRAFT) --------------------------
   One strong editorial statement + 2–3 approach principles. Approach framing
   only (PRODUCT.md §6.6–6.7) — no statistics, no superlatives. */
export const approach = {
  status: "DRAFT" as ContentStatus,
  index: "Yaklaşım",
  statement:
    "Yeni bir firmayız; yeni bir yaklaşım değil. Mühendislik disiplinini ilk projeden itibaren standart kabul ediyoruz.",
  principles: [
    "Her projede aynı titizlik — ölçekten bağımsız.",
    "Devreye almadan önce eksiksiz test; sonrasında takipte kalmak.",
    "Söz verilen kapsam, yazılı kapsamla aynıdır.",
  ],
  link: { label: "Ascent'i tanıyın", href: routes.about },
} as const;

/* --- SECTION 05 · İletişim / Teklif kapanışı (STATUS: DRAFT) ------------- */
export const closing = {
  status: "DRAFT" as ContentStatus,
  index: "İletişim",
  heading: "Projenizi konuşalım.",
  text: "Yeni kurulum, bakım veya modernizasyon — kısa bir mesajla başlayın, size dönelim.",
  secondaryLabel: "İletişim bilgileri",
} as const;

/* --- SECTION 06 · Footer (STATUS: DRAFT / legal TBD) --------------------
   Legal pages don't exist yet (CONTENT.md §8). Items with no `href` are not
   rendered — add the paths here when the documents are ready and they appear
   automatically, no component change. */
export type LegalLink = { label: string; href?: string };

export const footer: {
  status: ContentStatus;
  tagline: string;
  legalStatus: ContentStatus;
  legalItems: LegalLink[];
  copyrightName: string;
} = {
  status: "DRAFT",
  tagline: "Dikey ulaşımda mühendislik.",
  legalStatus: "TBD",
  legalItems: [
    { label: "KVKK Aydınlatma Metni" },
    { label: "Gizlilik Politikası" },
    { label: "Çerez Politikası" },
  ],
  copyrightName: "Ascent Elevator", // legal trade name is TBD (CONTENT.md §1)
};
