import type { ContentStatus } from "./types";

/**
 * /servisler page content — STATUS: DRAFT.
 *
 * Neutral demo copy describing the *shape* of service work, not Ascent's
 * confirmed service scope, SLAs, response times, 7/24 coverage or contract
 * terms (CONTENT.md §4.3, §9-D). The service categories themselves come from
 * `catalog.ts` (`serviceCategories`).
 *
 * Process steps and scope principles are data-driven arrays — add / remove /
 * reorder here; empty arrays make the section disappear.
 */
export const servislerPage = {
  status: "DRAFT" as ContentStatus,

  hero: {
    crumb: "Servisler",
    heading: "Kurulumdan sonra da aynı disiplin.",
    intro:
      "Bir asansörün ömrü, devreye alındıktan sonra başlar. Servis tarafında düzenli kontrol, öngörülebilir müdahale ve şeffaf takip esastır.",
  },

  overview: {
    index: "01",
    label: "Servis alanları",
    heading: "Servis kapsamı",
    note: "Servis, kurulumdan modernizasyona uzanan bir yaşam döngüsü işidir.",
  },

  process: {
    index: "02",
    label: "Nasıl çalışır",
    heading: "Bir servis talebi nasıl ilerler",
    intro:
      "Aşağıdaki aşamalar tipik bir servis akışının çerçevesidir; kesin adımlar ve süreler sözleşmeye göre netleşir.",
    steps: [
      {
        id: "talep",
        title: "Talebin anlaşılması",
        text: "İhtiyaç, aciliyet ve sistem bilgisi netleştirilir.",
      },
      {
        id: "degerlendirme",
        title: "Teknik değerlendirme",
        text: "Yerinde veya uzaktan durum tespiti; kapsam ve öncelik belirlenir.",
      },
      {
        id: "mudahale",
        title: "Uygulama / müdahale",
        text: "Planlanan işlem yapılır; gerekli parça ve güvenlik adımları uygulanır.",
      },
      {
        id: "teslim",
        title: "Kontrol / teslim",
        text: "İşlem sonrası test, kısa rapor ve sistemin yeniden devreye alınması.",
      },
    ],
  },

  scope: {
    index: "03",
    label: "Kapsam prensipleri",
    heading: "Her serviste sabit kalan yaklaşım",
    principles: [
      {
        id: "degerlendirme",
        label: "Sistem değerlendirmesi",
        text: "Müdahaleden önce mevcut durumun bütüncül kontrolü.",
      },
      {
        id: "guvenlik",
        label: "Güvenlik önceliği",
        text: "Her adımda güvenlik ve ilgili standartlara uygunluğun gözetilmesi.",
      },
      {
        id: "kontrol",
        label: "Düzenli kontrol",
        text: "Önleyici yaklaşımla arıza öncesi tespit.",
      },
      {
        id: "raporlama",
        label: "Şeffaf raporlama",
        text: "Yapılan işin ve önerilerin yazılı olarak paylaşılması.",
      },
    ],
  },

  cta: {
    heading: "Mevcut asansörünüz için konuşalım.",
    text: "Bakım, onarım veya modernizasyon — durumu birlikte değerlendirelim.",
  },
} as const;
