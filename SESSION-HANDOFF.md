# SESSION-HANDOFF — Ascent Elevator

> Oturum özeti + devir notu. Bu belge kod/tasarım kararı içermez; strateji `PRODUCT.md`,
> görsel dil `DESIGN.md`, içerik envanteri `CONTENT.md`.
> Creative direction (kilitli): **Hybrid Monochrome Premium** — bkz. `DESIGN.md` Bölüm A.

---

## 1. Mevcut teknik durum

| Alan | Durum |
|---|---|
| Framework | Next.js **16.3.3** (App Router, Turbopack) |
| Runtime | React **19.2.8** / react-dom 19.2.8 |
| Dil | TypeScript 5 (strict) |
| Stil | Tailwind CSS **v4** (`@theme` + CSS custom properties), `src/app/globals.css` tek stil dosyası |
| Font | `next/font` — `Geist` + `Geist Mono` (**placeholder**, final aile TBD — `DESIGN.md` §A.4/§A.14) |
| Lint | `npm run lint` → **temiz** (0 hata / 0 uyarı) |
| Build | `npm run build` → **başarılı**, tüm sayfalar statik prerender |
| Dev server | `npm run dev` → `http://localhost:3000` (Turbopack). Oturum sırasında çalışıyordu; gerekirse yeniden başlat. |
| Dependency | **Hiç ekstra runtime dependency yok.** GSAP yok, motion kütüphanesi yok, UI kütüphanesi yok. Sadece `next` / `react` / `react-dom`. |

**Mevcut route'lar:**

| Route | Dosya | Durum |
|---|---|---|
| `/` | `src/app/page.tsx` | Tamamlanmış ana sayfa |
| `/cozumler` | `src/app/cozumler/page.tsx` | Tamamlanmış alt sayfa |
| `/servisler` | `src/app/servisler/page.tsx` | Tamamlanmış alt sayfa (ileride küçük polish gerekebilir) |
| `/_not-found` | (otomatik) | Next varsayılanı |

**Not:** `next dev` çalıştırıldığında `AGENTS.md` içindeki agent-files bloğunu yeniden yazar; içerik aynı olduğu için genelde git'te değişiklik görünmez.

---

## 2. Tamamlanan ana sayfa (`/`)

Bölüm sırası ve on/off durumu **`src/content/homepage.ts`** registry'sinden gelir. Akış:

| # | Bölüm | Component | Room | Scroll floor |
|---|---|---|---|---|
| 00 | Opening (ışık reveal) | `OpeningReveal` (`src/components/opening-reveal.tsx`) | dark | — |
| 01 | Hero | `Hero` (`src/components/hero.tsx`) | dark | — |
| 02 | Çözümler / Ne yapıyoruz özeti | `SolutionsSummary` (`src/components/solutions-summary.tsx`) | light | 01 Çözümler |
| 03 | Ascent Yaklaşımı | `ApproachSection` (`src/components/approach-section.tsx`) | dark | 02 Yaklaşım |
| 04 | Projeler *(conditional)* | `ProjectsSection` (`src/components/projects-section.tsx`) | dark | 03 Projeler *(kapalı)* |
| 05 | İletişim / Teklif kapanışı | `ClosingCta` (`src/components/closing-cta.tsx`) | light | 03 İletişim *(projeler kapalıyken)* |
| 06 | Footer | `SiteFooter` (`src/components/site-footer.tsx`, root layout) | dark (`--tone-10`) | — |

**Opening reveal:** SSR'de render edilir, ilk boyada koyu katman + merkezde ince dikey ışık; iki yarım yana ayrılır (`≤800ms`). CSS kendi tamamlar (JS'siz de hero görünür). Oturumda bir kez (`sessionStorage` + pre-paint inline script `layout.tsx`). İlk etkileşimde hızlı atlanır. `prefers-reduced-motion` → sadece kısa fade. Mobil → daha kısa.

**Projects section:** `src/content/projects.ts` boş olduğu için `projectsEnabled = false` → §04 render **edilmiyor**, nav'da "Projeler" **yok**, scroll floor'lar buna göre yeniden numaralanıyor. VERIFIED proje eklenince her şey otomatik açılır.

**Scroll elevator motifi — mevcut prototip durumu:**
- Desktop/laptop (`≥1024px`): sol tarafta sabit `ElevatorShaft` (`src/components/elevator-shaft.tsx`) — dikey ray + kat başına tick + çerçeveli küçük kabin + dikey kat etiketi. Kabin aktif kata yumuşak `top` geçişiyle oturur.
- Kat numaralandırması `activeFloors()`'tan türetilir (`homepage.ts`) — bölüm açılıp kapandıkça otomatik uyum.
- Polarite: `useActiveFloor` / `useSectionPolarity` ile bölüme göre light/dark.
- Footer'dan önce kaybolur (`useNearEnd`, `[data-shaft-end]`).
- Mobil (`≤1023px`): shaft yok; navbar içinde statik kat göstergesi (`≤400px` sadece numara).
- **Yapılmadı (bilinçli):** scroll-linked kabin hareketi, A/B yön kararı, final animasyon, GSAP.

**Navbar (`SiteHeader`, root layout):** her sayfada sabit. Data-driven nav (`enabledNavItems`). Hero üzerinde şeffaf → scroll'da tanımlı yüzeye oturur. **Polarite adaptasyonu:** altındaki bölümün light/dark durumuna göre kutup değiştirir; CTA daima en yüksek kontrast öğe. Mobil: kompakt bar + menü sheet (`Esc`, scroll-lock, focus iadesi, `inert`). `≥1024px` full link satırı.

---

## 3. Tamamlanan alt sayfalar

### `/cozumler`

- **Section yapısı:** A SubpageHero (light) → B Çözüm aileleri slab listesi (dark) → C Kullanım alanları bandı (B içinde) → D Seçim rehberi (light) → E Kapanış CTA (dark) → F Footer.
- **Reusable component'ler:** `SubpageHero` (varsayılan light + "section" figürü), `SectionSolutions` (`src/components/section-solutions.tsx` — data-driven slab paneller, figür varyantları `shaft`/`strata`/`frame`), `SelectionGuide` (`src/components/selection-guide.tsx`), `ClosingCta` (`polarity="dark"`).
- **Content:** `src/content/cozumler.ts` (hero, overview, guide) + `src/content/catalog.ts` → `solutionFamilies` (aile listesi) + `buildingTypes` (kullanım alanları bandı).
- **Detay linkleri:** `/cozumler/[slug]` yok → paneller **linksiz** (bilgi panelin kendisinde); tek CTA kapatıyor.

### `/servisler`

- **Section yapısı:** A SubpageHero (dark, "scale" figürü) → B Servis alanları listesi (light) → C "Nasıl çalışır" dikey timeline (dark) → D Kapsam prensipleri tanım listesi (light) → E Servis CTA (dark) → F Footer.
- **Reusable component'ler:** `SubpageHero` (`polarity="dark"`, `figure="scale"` — ölçüm/muayene ritmi soyutlaması), `SectionCapabilities` (`src/components/section-capabilities.tsx` — data-driven servis listesi), `ProcessTimeline` (`src/components/process-timeline.tsx`), `ScopePrinciples` (`src/components/scope-principles.tsx`), `ClosingCta` (`polarity="dark"` + heading/text override).
- **Content:** `src/content/servisler.ts` (hero, overview, `process.steps[]`, `scope.principles[]`, cta) + `src/content/catalog.ts` → `serviceCategories`.
- **Detay linkleri:** `/servisler/[slug]` yok → servis satırları **linksiz**.

**Karakter farkı:** `/cozumler` = architectural systems (büyük panel + figür ağırlıklı). `/servisler` = precision service / technical care (daha sakin, line rhythm ağırlıklı, küçük abstraction).

---

## 4. Freeze durumu

| Alan | Durum |
|---|---|
| **Homepage (`/`)** | **Büyük ölçüde FREEZE.** Opening / Hero / Navbar / section mimarisi + görsel sistemi değiştirilmez. |
| **`/cozumler`** | **FREEZE.** Section yapısı + görsel dil onaylı. |
| **`/servisler`** | **Çalışıyor, kabul edildi.** İleride küçük görsel polish turu gerekebilir (bkz. §8). Mimariye dokunulmaz. |
| Paylaşılan design system (`globals.css` token'ları, `SiteHeader`, `SiteFooter`, `ClosingCta`, `SubpageHero`, `Reveal`) | Toplamsal genişletmeye açık; **mevcut davranışı bozacak değişiklik yapılmaz.** Her değişiklik sonrası homepage + /cozumler görsel doğrulanmalı. |

**Bu alanlara sebepsiz müdahale edilmemeli.** Değişiklik yalnızca: (a) gerçek müşteri içeriği geldiğinde content layer güncellemesi, (b) açıkça onaylanmış polish turu, (c) marka assets entegrasyonu (`DESIGN.md` §A.14 planına göre).

---

## 5. Henüz yapılmayan route'lar

| Route | Ne zaman |
|---|---|
| `/kurumsal` | Kurumsal içerik + (varsa) ekip/belge bilgisi geldiğinde |
| `/iletisim` | İletişim bilgileri + KVKK metinleri + form gönderim hedefi geldiğinde |
| `/projeler` | **Yalnızca** en az bir VERIFIED proje + yazılı yayın izni geldiğinde (`src/content/projects.ts`'e eklenince otomatik açılır) |
| `/cozumler/[slug]` | Çözüm ailesi başına doğrulanmış teknik parametre + kabin seçenekleri geldiğinde (slug tabanlı, `solutionFamilies`'ten beslenir) |
| `/servisler/[slug]` | Servis türü başına doğrulanmış kapsam/SLA geldiğinde (slug tabanlı, `serviceCategories`'ten beslenir) |
| `/bilgi-merkezi` (SSS) | Genel sektör içeriği + terimler sözlüğü onaylandığında (opsiyonel) |

---

## 6. Müşteri verisi durumu

**Kritik:** Gerçek şirket bilgileri, ürünler, servisler, marka kimliği ve proje/referans bilgileri **henüz tam gelmedi.**

- Sitedeki **tüm** hizmet başlıkları, ürün aileleri, süreç adımları, prensipler, slogan ve açıklama metinleri **DRAFT / nötr demo** içeriktir.
- **DRAFT içerikler gerçek şirket iddiası olarak kabul edilmemeli.** Ekranda görünür "DRAFT/TBD" etiketi yok; durum bilgisi yalnızca content dosyalarında (`status: "DRAFT"` + dosya yorumları).
- Doğrulanmış tek bilgi: marka adı "Ascent Elevator" ve "yeni kurulmuş bir asansör firması" olduğu (`CONTENT.md` §1).

**Gerçek bilgiler geldiğinde önce güncellenecek dosyalar (component'lere business copy hardcode edilmez):**

| Dosya | Sorumluluk |
|---|---|
| `src/content/site.ts` | wordmark, routes, nav, CTA'lar, hero copy, homepage §02/§03/§05/footer metinleri |
| `src/content/catalog.ts` | `serviceCategories`, `solutionFamilies` (+figür), `buildingTypes` |
| `src/content/cozumler.ts` | /cozumler sayfa metinleri |
| `src/content/servisler.ts` | /servisler metinleri + `process.steps` + `scope.principles` |
| `src/content/projects.ts` | `projects[]` (VERIFIED kayıt eklenince section + nav + floor otomatik açılır) |
| `src/content/homepage.ts` | homepage section registry (aç/kapat/sırala) + scroll floor türetmesi |
| `src/content/types.ts` | ortak tipler / helper'lar |
| `src/app/globals.css` `:root` + `.room-*` | marka renkleri gelince `--tone-*` + `--accent-*` (tek yer) — `DESIGN.md` §A.14 |
| `src/app/layout.tsx` | `next/font` ailesi (kurumsal font gelince tek yer), `metadata` / OG |

Bir bilgi ancak müşteriden yazılı/sözlü teyit alınıp `CONTENT.md`'de `VERIFIED` işaretlenince kullanılır (`PRODUCT.md` prensip 1).

---

## 7. Müşteriden beklenen ana bilgiler (checklist)

- [ ] Resmi ticari unvan, kuruluş yılı, şirket türü, MERSIS/vergi no
- [ ] Logo (SVG light/dark), favicon, marka renkleri (HEX), kurumsal font (+ lisans), marka kılavuzu
- [ ] **Gerçekten sunulan ürün listesi** — asansör türleri, yürüyen merdiven/yol var mı, teknik parametre aralıkları, kabin/kaplama seçenekleri
- [ ] **Gerçekten sunulan servis listesi** — bakım paket yapısı/periyot, onarım kapsamı, modernizasyon kapsamı, 7/24 acil servis + hedef müdahale süresi, yedek parça yaklaşımı
- [ ] Hizmet verilen iller/bölgeler (net liste)
- [ ] İletişim: telefon(lar), e-posta(lar), adres(ler), çalışma saatleri, WhatsApp kullanılacak mı, acil hat
- [ ] Projeler/referanslar (ad, konum, bina tipi, iş, yıl) + **isimle yayın için yazılı izin**; testimonial alınabilir mi
- [ ] Fotoğraf/video arşivi + kullanım hakları (mimari/malzeme/saha; stok insan fotoğrafı yok)
- [ ] Sertifikalar/belgeler (TSE, ISO, CE, hizmet yeterlilik, yetkili servis), oda/dernek üyelikleri, mesleki sorumluluk sigortası — **yalnızca fiziksel belge varsa**
- [ ] Gerçek çalışma süreci (servis akışı, adımlar, süreler)
- [ ] Temsil edilen/kullanılan markalar — **web'de belirtme izni/yetkisi var mı**
- [ ] Teklif formu alanları + gönderim hedefi (e-posta/CRM) + otomatik yanıt metni + beklenen dönüş süresi
- [ ] Yasal: KVKK aydınlatma + açık rıza + gizlilik + çerez metinleri (kaynak müşteri/hukuk); telifteki yasal unvan
- [ ] Domain (elinizde mi, hangisi) + hosting/e-posta altyapısı + analytics tercihi (KVKK uyumlu)
- [ ] Dil: tek dil (TR) mi, +EN gerekli mi; SEO hedefleri (niyet bazlı sayfalar, yerel SEO, Google Business Profile)
- [ ] Hedef segment önceliği (konut / ticari / kurumsal / ihracat), yayına hedef tarih

Tam liste: `CONTENT.md` §9.

---

## 8. Bilinen açık noktalar / sonraki polish

- `/servisler` hero "scale" abstraction bazı ekranlarda fazla soluk olabilir (tone-8/tone-9) — bilinçli restraint, istenirse bir tık artırılabilir.
- `/servisler` genel spacing + "nasıl çalışır" timeline'ında ek premium polish daha sonra yapılabilir.
- **Tüm metinler** gerçek müşteri bilgisiyle yeniden gözden geçirilecek (şu an DRAFT).
- Logo / font / marka renkleri hâlâ **TBD** — `DESIGN.md` §A.14 marka geçiş planı hazır (token değeri + logo asset + font ailesi; layout/component kodu değişmeden).
- `/iletisim` olmadığı için bazı CTA/nav hedefleri (`/iletisim`, `/kurumsal`, `/servisler`, `/projeler`, ...) şimdilik **404**. Bilinçli — sahte hedef yok.
- Final elevator animation **yapılmadı** (statik prototip). A/B scroll yönü **seçilmedi**.
- **GSAP eklenmedi.** Tüm motion CSS-first + minimal JS state.
- Gerçek görsel asset'ler (mimari/malzeme fotoğrafı, teknik çizim) **kullanılmadı** — görselsiz tasarım esas alındı; asset geldiğinde zenginleştirme katmanı.
- `next dev` `AGENTS.md` bloğunu yeniden yazıyor (zararsız).

---

## 9. Yarın önerilen devam sırası

**Önce:** müşteriden gelen gerçek bilgileri işle (`CONTENT.md`'de `TBD → VERIFIED`).

Sonra duruma göre:

- **A)** Content layer'ı VERIFIED verilerle güncelle (yukarıdaki dosyalar) — component'e dokunmadan
- **B)** `/servisler` için küçük görsel polish turu (onaylıysa)
- **C)** `/kurumsal` sayfası (kurumsal içerik geldiğinde)
- **D)** `/iletisim` sayfası (iletişim bilgileri + KVKK + form hedefi geldiğinde)
- **E)** `/projeler` — **yalnızca** VERIFIED proje + yayın izni varsa
- **F)** Detail pages (`/cozumler/[slug]`, `/servisler/[slug]`) — doğrulanmış teknik/kapsam verisiyle
- **G)** Final motion / elevator animation / (gerekirse) GSAP — ayrı, onaylı tur
- **H)** Responsive + accessibility + performance + final QA (Lighthouse / CWV, gerçek cihaz testi)

---

## 10. DO NOT DO NEXT WITHOUT APPROVAL

Aşağıdakiler **açık onay olmadan yapılmaz:**

- ❌ **Yeni route oluşturma** (`/kurumsal`, `/iletisim`, `/projeler`, `/*/[slug]`, vs.)
- ❌ **Yeni section ekleme** (mevcut sayfalara veya yeni sayfalara)
- ❌ **Homepage redesign** veya homepage'in görsel/mimari sistemine müdahale
- ❌ **`/cozumler` veya `/servisler`'in tasarımına sebepsiz müdahale**
- ❌ **GSAP veya herhangi bir yeni dependency ekleme**
- ❌ **DRAFT içerikleri VERIFIED kabul etme** — hiçbir hizmet/ürün/sayı/sertifika/proje doğrulanmadan gerçekmiş gibi sunulmaz
- ❌ **Fake proje / referans / testimonial / logo barı / istatistik üretme**
- ❌ Marka rengi/font/logo'yu "geçici" değerlerle kalıcıymış gibi kilitleme

Şüphe varsa: `PRODUCT.md` prensipleri + `DESIGN.md` Bölüm A + bu belgenin §4 (Freeze) ve §6 (Müşteri verisi) bölümleri bağlayıcıdır.

---

*Bu belge `SESSION-HANDOFF.md` olarak proje kökünde: `C:\Users\User\Desktop\ascent-elevator\SESSION-HANDOFF.md`*
