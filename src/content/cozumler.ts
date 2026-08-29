import type { ContentStatus } from "./types";

/**
 * /cozumler page content — STATUS: DRAFT.
 *
 * Neutral demo copy that describes the *category* of work, not Ascent's
 * confirmed product gamma, technical parameters or scope (CONTENT.md §4.2,
 * §9-D). The solution families themselves come from `catalog.ts`
 * (`solutionFamilies`) — add / remove / reorder there.
 */
export const cozumlerPage = {
  status: "DRAFT" as ContentStatus,

  hero: {
    crumb: "Çözümler",
    heading: "Her yapı tipi için tanımlı bir asansör sistemi.",
    intro:
      "Dikey ulaşım tek bir ürün değil; binanın yüksekliğine, trafiğine ve mimarisine göre şekillenen bir sistem kararıdır. Aşağıdaki aileler bu kararın çerçevesini gösterir.",
  },

  overview: {
    index: "01",
    label: "Çözüm aileleri",
    heading: "Sistem aileleri",
    intro:
      "Her aile farklı bir kullanım senaryosuna göre planlanır. Kesin ürün gamı ve teknik parametreler proje bazında netleşir.",
  },

  // Section D — short selection guide (generic industry guidance, not a claim)
  guide: {
    index: "02",
    label: "Seçim rehberi",
    heading: "Doğru sistem nasıl belirlenir?",
    points: [
      "Kat sayısı ve seyahat yüksekliği taşıma kapasitesini ve tahrik tipini belirler.",
      "Kullanım yoğunluğu kabin sayısını, hızı ve bekleme süresi hedefini etkiler.",
      "Mimari beklentiler kabin tasarımını, kapı düzenini ve şaft yerleşimini şekillendirir.",
    ],
    closing:
      "Binanıza uygun sistemi birlikte belirleyelim.",
  },
} as const;
