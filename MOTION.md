# MOTION.md — Ascent Elevator

> **Motion / Scroll Experience Spec — v2 (onaylı).**
> Homepage'in imza görseli: sağda büyük, abstract, premium bir **architectural
> elevator composition** + gerçek scroll-linked bir *elevator journey*.
> v1 (küçük sol shaft indicator) iptal edildi.

## Otorite / öncelik

- **`DESIGN.md`** — temel görsel sistem (renk token sözleşmesi, tipografi, grid,
  spacing, polarite ritmi, anti-pattern'ler).
- **`MOTION.md`** — motion davranışı için **authoritative**. Çelişkide bağlayıcı.
- `PRODUCT.md` / `CONTENT.md` değişmez.
- Homepage **içerik mimarisi FREEZE** — section sırası, id'leri, label'ları, room
  polariteleri, copy değişmez. Bu belge yalnızca visual motion layer + scene'i
  kapsar. Alt sayfalara dokunulmaz.

## Kapsam durumu

| Phase | Kapsam | Durum |
|---|---|---|
| **2** | Büyük elevator scene · GSAP + ScrollTrigger journey · hero→01→02→03 · arrival accent · footer exit · **desktop prototip (1600 / 1366)** | **Uygulandı** |
| 3 | Tablet static/limited scene · mobil polish · section choreography derinleştirme (Yaklaşım coordinated typography, İletişim final accent choreography) · LCP ölçümü · full QA | Bekliyor |

v1'den taşınan: brand accent token'ları (`--accent`, `--accent-strong`,
`--focus-ring`), logo asset altyapısı (`public/brand/`, `<Wordmark/>`),
`use-active-floor` (band ±35% + hold-last), navbar floor-slot fallback.

---

## Akış (projeler kapalı — 3 kat)

| # | Bölüm | Room | Kat | Cabin |
|---|---|---|---|---|
| 00 | Opening | dark | — | — |
| 01 | Hero | dark | — | rest (dip, `--cabin-p: 0`) |
| 02 | Çözümler | light | **01** | floor 01 (`p ≈ 0.33`) |
| 03 | Yaklaşım | dark | **02** | floor 02 (`p ≈ 0.67`) |
| 04 | İletişim | light | **03** | floor 03 (`p = 1`) — arrival |
| 05 | Footer | dark | — | scene exits before footer |

**Yön kilitli: UP.** Scroll aşağı → kabin yukarı (ascent metaforu). A/B iptal.

---

## 1. Elevator scene — form dili

Ekranın sağ ~%38'inde (`clamp(340px, 38vw, 660px)`), tam yükseklik, `fixed`,
`pointer-events: none`. Sabit **koyu** tonlar (section polaritesinden bağımsız —
her zaman füme/charcoal). Bir bina kesiti / asansör kuyusu okunur; ürün render'ı
veya oyun UI'ı değil.

CSS geometri (SVG/WebGL yok):

| Öğe | Rol |
|---|---|
| `.es-void` / `.es-deep` | kuyu iç yüzeyi + sağda daha derin recess (ışık/gölge step) |
| `.es-frame` | sol kenar — `--tone-5` lit structural edge (içeriği kuyudan ayıran mimari sınır) |
| `.es-frame-in` | iç çerçeve hairline |
| `.es-rail--l/--r` | iki dikey kılavuz rayı |
| `.es-datum` ×3 | kat datum çizgileri (mono numara ile); aktif kat → `--tone-4`'e yükselir |
| `.es-cable` | kabinin üstünden kuyu tepesine uzanan halat (`scaleY` ← `--cabin-p`) |
| `.es-counterweight` | karşı ağırlık — kabinin **tersine** hareket eder |
| `.es-cabin` | kabin: lintel beam · body (`--tone-8`) · iç recessed panel · merkez kapı seam · sill çizgisi · **minik kırmızı indicator** |
| `.es-label` | kabinle giden dikey mono etiket (`01 · Çözümler`) |

Motion sırasında: obje **scale edilmez, döndürülmez, bounce yapmaz.** Yalnızca
dikey `translateY` + halat `scaleY` + counterweight ters `translateY`.

### Renk / brand
`--es-*` token'ları `--tone-5..10` sabit değerleri. Accent (`--accent-dark`
`#f0564e`) yalnızca: kabin indicator (her zaman dim), arrival'da seam + indicator
(parlak), `:focus-visible`. Büyük kırmızı yüzey / gradient / glow yok.

---

## 2. Scroll journey — GSAP + ScrollTrigger

### Neden GSAP
`use-active-floor` (IntersectionObserver) yalnızca **ayrık** kat tespiti verir.
İstenen: kabinin scroll pozisyonuna **sürekli bağlı** (scrubbed), kata yaklaşırken
easing ile "ağır/mekanik" yavaşlayan, çoklu öğeyi (kabin + halat + counterweight +
label) tek ilerlemeye bağlayan bir journey; resize/refresh/geri-scroll'a dayanıklı.
ScrollTrigger `scrub` bunun için tasarlanmış araç. El ile rAF + scroll matematiği
daha fazla kod ve daha fazla edge-case demekti.

**GSAP yalnızca şunlar için:** kabin Y (`--cabin-p` scrub), kat geçişleri, datum/
label state, footer exit fade. **Pinning yok · snap yok · scroll-jack yok ·
scroll kontrolü kullanıcıda.**

### Mekanik
- `--cabin-p`: tek unitless ilerleme, 0 (hero dip) → 1 (floor 03). Scene
  elementinde CSS custom property; tüm alt öğeler bundan türetir:
  ```
  cabin  translateY: calc((86.5 - var(--cabin-p) * 62) * 1vh - 50%)
  cw     translateY: calc((8 + var(--cabin-p) * 70) * 1vh)
  cable  scaleY:     calc(0.12 + (1 - var(--cabin-p)) * 0.76)
  ```
- **Bir "leg" per floor section** (`[data-floor]`): `gsap.fromTo(scene,
  {--cabin-p: i/n}, {--cabin-p: (i+1)/n, ease: "power2.inOut",
  scrollTrigger: {trigger: sec, start: "top 88%", end: "top 42%", scrub: 1}})`.
  - `scrub: 1` → 1 sn gecikme = ağır/mekanik his.
  - `power2.inOut` → kata yaklaşırken hızlanıp yavaşlar (arrival).
  - Leg'ler arası (kat merkezde ↔ sonraki kat yaklaşıyor) kabin **bekler**
    (hiçbir trigger güncellemiyor).
- **Ayrık kat state:** her section için ayrı `ScrollTrigger.create({start: "top
  62%", end: "bottom 45%", onToggle → setActiveIndex(i)})` → datum `.is-active`
  + label metni + `data-arrived` (son kat).
- **Exit:** `gsap.to(scene, {autoAlpha: 0, y: "-4vh", scrollTrigger: {trigger:
  footer, start: "top 96%", end: "top 62%", scrub: true}})`.
- `gsap.context(fn, sceneRef)` + `ctx.revert()` cleanup; `ScrollTrigger.refresh()`
  mount + `load`'da.

---

## 3. Section coordination

| Section | Kat | Bu turda | Phase 3 |
|---|---|---|---|
| Çözümler | 01 | datum 01 active · label `01 Çözümler` · içerik `.r-up` reveal (mevcut) | — |
| Yaklaşım | 02 | datum 02 active · label · cabin floor 02 | hairline/typography coordinated reveal |
| İletişim | 03 | datum 03 active · **arrival**: seam + indicator kırmızı · label | CTA reveal choreography, final accent |

---

## 4. Responsive

| Viewport | Scene |
|---|---|
| **≥1024** (desktop prototip: 1600 / 1366) | tam GSAP journey. Genişlik `clamp(340px, 38vw, 660px)`; içerik `.home` shell'lerine `padding-inline-end: clamp(0px, 40vw, 620px)` (≥1024) ile scene'in soluna alınır |
| 1024–1366 | aynı, `clamp()` ile daha dar scene |
| **768–1023** (tablet) | scene `display: none` · navbar floor-slot fallback (mevcut). *Static/limited scene → Phase 3.* |
| **≤767** (mobile) | scene yok · navbar floor-slot; `≤400px` yalnızca numara |

Hero: mevcut grid (`1.4fr / 1fr`) korunur; `.hero__aside` boş spacer olarak kalır
(eski `.hf-*` abstraction kaldırıldı), scene onun üzerine çizer. Hero mimarisi
bozulmadı.

---

## 5. Reduced-motion (`prefers-reduced-motion: reduce`)

- GSAP / ScrollTrigger **hiç init edilmez.**
- Kabin **statik** — nötr konumda (`--cabin-p: 0.5`), hareket yok.
- Section state'leri doğru: `use-active-floor` → aktif datum `.is-active` + label
  (anında, transition yok) + son katta arrival accent.
- Exit: `useNearEnd` → `data-exiting` → `opacity: 0` anında.
- İçerik hiçbir zaman gizli kalmaz.

---

## 6. Performans

- Animasyonlanan: yalnızca `transform` (translateY / scaleY) + `opacity`.
  `--cabin-p` her frame CSS `calc()` ile yeniden çözülür — layout tetiklemez.
- `will-change` yok (GSAP gerekirse kendi yönetir; scene öğeleri hafif).
- CSS geometri (div + hairline), SVG/WebGL/video/3D yok.
- ScrollTrigger `scrub` rAF-throttled; her `scroll` event'inde JS hesap yok.
- Scene `position: fixed` + `pointer-events: none` → layout akışı dışında, CLS yok.
- Hedef 60fps. Bundle: `gsap` + `ScrollTrigger` (~ tree-shaken UMD, sadece
  homepage client component'inde).
- Not (Phase 3): hero `h1` opening reveal'de gecikmeli opacity — LCP ölçümü.

---

## 7. Değişmeyecekler / bu tur dışı

Alt sayfalar · content architecture · yeni section · pinning · snap ·
scroll-jack · parallax · WebGL/Three · ağır video/3D · tablet static scene ·
Yaklaşım/İletişim derin choreography · final QA turu.

---

## 8. v1'den kaldırılanlar

Küçük sol `.shaft` indicator + `ElevatorShaft` component · A/B cabin direction
(`resolveCabinDirection`, `?cabin=` param, `CABIN_DIRECTION_DEFAULT`) · `.hf-*`
hero abstraction. Yön artık sabit **UP**.
