# DESIGN.md — Ascent Elevator

> Görsel dil, layout felsefesi, motion ve erişilebilirlik ilkeleri.
> Durum: **Yön belgesi / v1.** Final marka kimliği (logo, renk, kurumsal font) müşteriden gelecek — burada **geçici** işaretlidir.
> **v1 creative direction:** Hybrid Monochrome Premium (onaylı) — bkz. **Bölüm A**.
> Ürün/İA kararları için `PRODUCT.md`, içerik envanteri için `CONTENT.md`.

---

# A. Onaylı Creative Direction — Hybrid Monochrome Premium (v1)

> Bu bölüm, onaylanmış ana creative direction'ın **bağlayıcı** kararlarıdır.
> Aşağıdaki **B kısmı** (orijinal §0–§13) yön ve arka plan olarak korunur; **çelişki halinde A kısmı bağlayıcıdır.**
> Final marka kimliği (logo, renk, kurumsal font) hâlâ `TBD` — A kısmı bunları kilitlemez; geldiğinde **§A.14**'e göre entegre edilir.

## A.1 Creative Direction

- **Ana yön:** Hybrid Monochrome Premium.
- **Tasarım ilkesi:** kontrollü açık/koyu **"oda" alternansı** — sayfa, art arda gelen aydınlık ve karanlık mekânlar dizisi gibi kurgulanır; her bölüm bir "oda", her geçiş bir eşik.
- **İkincil ilham kaynakları (tek sistem içinde — ayrı stiller değil):**
  - *Dark Architectural Luxury* → yalnızca **Opening, Hero ve dramatik full-bleed koyu alanların** kontrollü sinematik gücü için.
  - *Bright Precision Engineering* → yalnızca **teknik bilgi, servisler, süreç ve form alanlarının** berraklığı ve mühendislik disiplini için.
  - Bu ilhamlar **aynı tipografi, aynı grid, aynı token seti, aynı motion gramerini** kullanır. Site **tek bir tasarım sistemi** gibi görünmeli; "üç farklı site" hissi bir hatadır.
- **Premium hissi** renk kalabalığı veya efekt miktarıyla değil; **ışık, gölge, tipografi kalitesi, malzeme dürüstlüğü, oran, negatif alan ve motion kalitesiyle** kurulur.
- Tek cümle (B §0 ile uyumlu): **"Sessiz güç"** — burada ışık ve karanlığın kontrollü dengesi olarak.

## A.2 Color System

Final marka rengi `TBD`. Renk sistemi **bir HEX paleti değil, bir token sözleşmesidir**: değerler geçici, roller kalıcı.

### Nötr ton skalası (anlamsal — değerler geçici, kesin marka kararı değil)

Tek genişletilmiş nötr rampa: çok açık kırık beyazdan çok koyu mürekkebe. ~10–12 adım; hepsi hafif **sıcak-nötr** (tamamen nötr gri değil, soğuk-mavi değil). Rol adlandırması sabit; HEX değerleri marka + kontrast testiyle kalibre edilecek:

```
--tone-0    en açık kırık beyaz     (light "oda" zemini)
--tone-1    açık nötr               (light yükseltilmiş yüzey / alternatif zemin)
--tone-2    açık gri                (light hairline)
--tone-3    orta-açık gri
--tone-4    orta gri                (ikincil metin adayı)
--tone-5    orta gri                (devre dışı / düşük vurgu)
--tone-6    orta-koyu gri
--tone-7    koyu gri                (dark hairline)
--tone-8    çok koyu antrasit       (dark yükseltilmiş yüzey)
--tone-9    mürekkep                (dark "oda" zemini)
--tone-10   en koyu mürekkep        (footer / en derin alan)
```

### Anlamsal token yaklaşımı (light + dark eşlenik — ilk günden ikisi de tanımlı)

Bileşenler ham `--tone-*` kullanmaz; yalnızca anlamsal token:

```
--surface          bölüm zemini          (light: tone-0  / dark: tone-9)
--surface-raised   kart yerine hafif yükseltme (light: tone-1 / dark: tone-8)
--text             birincil metin        (light: tone-9..10 / dark: tone-0..1)  → gövde ≥ 4.5:1
--text-muted       ikincil metin         (küçük punto ≥ 4.5:1; büyük ≥ 3:1)
--hairline         1px ayrım çizgisi     (light: tone-2 / dark: tone-7)
--accent           tek accent            PLACEHOLDER — TBD
--accent-text      accent üzeri metin    (kontrast ≥ 4.5:1 garanti)
--focus-ring       odak halkası          (≥ 3:1; ayrı token)
--system-danger / --system-success   form durumları — accent'ten bağımsız, erişilebilir
```

### Tek accent alanı yaklaşımı

- Accent **yalnızca üç yerde:** birincil CTA, focus state, ve çok seçici interaction vurgusu (ör. aktif kat göstergesi işareti, form alanı odak hattı).
- Accent bir **bölge/zemin rengi değildir**; alan kaplamaz.
- Değer `TBD` — marka gelene kadar tek, düşük–orta kromalı, sofistike bir ton varsayılır. **Parlak kurumsal mavi/yeşil ve "lüks altın" kullanılmaz.**
- Accent olmadan da site tam çalışır (vurgu, taşıyıcı değil).

### Yasaklar

- **Gradient yok** — tek istisna: görsel üstü, tek yönlü, düşük kontrastlı, tek renk içi okunabilirlik overlay'i. Çok renkli / mor-mavi gradient kesinlikle yasak.
- **Neon, glow, parıltı yasak.**
- **Aşırı renk yasak:** accent + sistem renkleri dışında ikinci bir kroma kaynağı sisteme girmez.
- **Açık/koyu bölüm geçişleri gradient ile değil, net tonal alanlarla** yapılır: bir bölüm `--surface: light` biter, sonraki `--surface: dark` başlar; arada blend zemin yok. (Motion tarafındaki yumuşak ton takası §A.12'de ayrı; o da renk karışımı değil, opaklık geçişi.)
- Renk asla tek bilgi taşıyıcısı değil (durum = renk + ikon/metin).

## A.3 Light/Dark Section Rhythm

Onaylı ana sayfa akışına (experience architecture v2) göre varsayılan polariteler. Bu bir **tasarım ilkesidir**; marka/görsel geldiğinde **§A.14'e göre kontrollü revizyona açıktır** (akış ve sıra değişmez, yalnızca polarite ayarı).

| # | Bölüm | Varsayılan polarite | Not |
|---|-------|---------------------|-----|
| 00 | Opening (ışık reveal) | **dark** | Koyu başlangıç, ışık hattı açılır |
| 01 | Hero | **dark** | Sinematik; Dark Architectural Luxury gücü burada |
| 02 | Yetkinlik / Ne Yapıyoruz | **light** | İlk "çıkış", ferahlama |
| 03 | Sistemler / Çözümler | **dark** | Full-bleed malzeme dramı |
| 04 | Servisler (Bakım · Onarım · Modernizasyon) | **light** | Bright Precision berraklığı; triptik |
| — | Ara servis CTA bandı | **dark** | Kısa, yoğun "durak" |
| 05 | Yaklaşım & Süreç | **light / light-dominant** | Evre 1 (ifade) light; Evre 2 (süreç merdiveni) light — istenirse tek koyu vurgu şeridi |
| 06 | Projeler / Yaklaşımımız | **flexible** | Galeri varsa dark full-bleed; boş-durum ise light sessiz |
| 07 | Kurumsal Özet | **light** | Sakin, editöryal |
| 08 | İletişim / Teklif | **güçlü final tonal alan** | Kapanışı mühürleyen belirgin polarite; form yüzeyi §A.11 (light / yüksek kontrastlı sakin) |
| 09 | Footer | **dark** | En derin ton (`--tone-10`), kapanış ağırlığı |

### Ritim kuralları

- İki komşu içerik bölümü **aynı polaritede uzun kalmaz** (monotonluk + okuma yorgunluğu). İstisna: "Hero → (kısa) → Çözümler" gibi bilinçli sinematik açılış.
- Polarite bir **bölüm özelliğidir**, bileşen özelliği değil: her bileşen bulunduğu bölümün `--surface`'ine göre doğru token'ları otomatik alır (§A.10).
- `flexible` bölümler içerik kesinleşince **tek polariteye sabitlenir**; sayfa içinde "yarı koyu yarı açık" bölüm olmaz.
- **Mobilde alternans korunur ama daha seyrek:** bazı komşu bölümler aynı polaritede birleşip daha uzun "odalar" oluşturabilir; geçiş sayısı azaltılır.

## A.4 Typography

Final font `TBD`. **Roller ve karakter kilitli; aile değil.**

| Rol | Karakter (bağlayıcı) | Kullanım | Geçici |
|-----|----------------------|----------|--------|
| **Display** | Büyük, editöryal, **mimari** karakter: yüksek kaliteli çağdaş grotesk (düşük kontrast, hafif dar) **veya** ince/çağdaş serif display. Hem light hem dark zeminde kusursuz. Optik boyutlu değişken font tercih. | Hero başlığı, bölüm başlıkları, büyük ifade cümleleri | `Geist` (yer tutucu) |
| **Body / UI** | Nötr, çok yüksek okunabilirlikte grotesk; karaktersiz ama kaliteli. | Paragraf, liste, nav, form, buton | `Geist Sans` |
| **Mono / Technical accent** | Tek aralıklı; mühendislik hissi. **Çok sınırlı.** | Yalnızca: kat numaraları (`01`), teknik parametre etiketleri, ölçü tabloları | `Geist Mono` |

### Kurallar

- **En fazla 2 aile** (display + body). Mono yalnızca aksan.
- **Başlıklar büyük, editöryal, mimari karakterde:** cömert punto, sıkı satır yüksekliği (1.05–1.15), büyük başlıkta hafif negatif tracking, sola dayalı. `clamp()` ile ölçeklenir, taşmaz. Dul/yetim kontrolü.
- **Polariteye göre ters kutup:** light bölümde koyu başlık, dark bölümde açık başlık — aynı ölçek, aynı ağırlık.
- **Mono + tracked uppercase kullanımı agresif şekilde sınırlı.** Küçük büyük-harf mono etiket yalnızca: bölüm numarası, kat göstergesi, teknik parametre etiketi. **Her bölümde tekrar eden tracked-uppercase "eyebrow" etiketi kullanılmaz** — bu AI-editorial / generic design tell'idir (§A.13).
- Hiyerarşi **punto + ağırlık + boşlukla** kurulur; renk veya kutu ile değil.
- Satır uzunluğu gövde 60–75 karakter; satır yüksekliği başlık 1.05–1.15, gövde 1.5–1.65.
- Değişken font; yalnızca kullanılan ağırlıklar; `font-display: swap`; `next/font` ile self-host (harici istek yok); FOUT/CLS yasak.

## A.5 Grid / Spacing

- **Kolon:** desktop **12**, tablet **8**, mobil **4** (büyük masaüstü + laptop 12). Tüm bölümler aynı grid'e oturar; keyfi hizalama yok.
- **Negatif alan bir tasarım öğesidir** — geniş, bilinçli, doldurulmaz. Bölüm dikey boşluğu: mobil ~64–80px, masaüstü ~120–192px.
- **Full-bleed ↔ contained değişimi ritmin parçası:** her bölüm `full-bleed` (dramatik koyu görsel alanları, kapanış) ile `contained` (max-width içinde ortalı: editöryal metin, servis triptiği, form) arasında bilinçli geçer. Komşu bölümler aynı arketipi art arda tekrarlamaz.
- **İçerik max-width:** ~1440–1600px (full-bleed görseller hariç); çok geniş ekranda içerik ortalanır.
- **Yatay gutter:** mobil 20–24px, tablet 32–48px, masaüstü 64–96px.
- **Responsive spacing token prensipleri:**
  - Tek spacing skalası, 4px kök: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 192`. Skala dışı değer yok.
  - Anlamsal token: `--space-section`, `--space-block`, `--space-inline` — Tailwind v4 `@theme` içinde.
  - `clamp()` ile akışkan ölçekleme; kırılımda ani sıçrama minimum.
  - Tek spacing ritmi tüm sayfada: başlığın **üstünde** altındakinden daha çok boşluk.
- Dokunma hedefleri min 44×44px; interaktif öğeler arası min 8px. Optik hizalama matematikselden önce.

## A.6 Imagery

- **Sanat yönü:** yüksek kontrastlı siyah-beyaz **veya** çok düşük doygunluklu mimari fotoğraf. **Tutarlı monokrom işleme tüm siteyi bağlar** (tek "film").
- **Konu:** asansör / malzeme / mekân detayları — şaft, hol, cephe, dikey boşluk, merdiven; fırçalı çelik, cam, ham beton, ışık-gölge kompozisyonu; ray, halat, mekanizma temiz kompozisyonda.
- **Işık** birincil dramatik araç; yönlü, güçlü gölge; dark alanlarda düşük-orta anahtar, light alanlarda net ve berrak.
- **Generic stock insan fotoğrafı yok** (gülümseyen ekip, el sıkışma, üniformalı teknisyen render'ı). Varsa: bağlam içinde, gerçek, mümkünse siluet; tercihen hiç figüran yok — mekân konuşsun.
- **Yerleşim:** dark bölümlerde full-bleed (zeminle birleşir), light bölümlerde çerçeveli / editöryal ikili düzen.
- **Görsel yokken (yeni firma gerçeği):**
  - **Gri placeholder kutu kullanılmaz. Skeleton / parıltı bloğu kullanılmaz.**
  - Görselsiz bölüm **tam tasarım** olarak kurulur: tipografi + negatif alan + hairline + tonal alan + ölçek. Görsel = sonradan eklenen zenginleştirme katmanı, eksik parça değil.
  - Görselin geleceği yer, o gelene kadar anlamlı bir tonal alan veya geniş boşluk olarak tasarlanır — kutulanmış "resim buraya gelecek" değil.
- **Teknik:** `next/image`, responsive `sizes`, AVIF/WebP, `priority` yalnızca hero; belirgin `alt` (dekoratifse boş `alt`); `aspect-ratio` sabit → CLS 0; hero görselinin mobil için küçük varyantı.
- Gerçek proje / marka görseli yalnızca izinli + `VERIFIED` (`CONTENT.md`).
- İkonografi: tek çizgi ağırlığı, geometrik, minimal; dekoratif illüstrasyon yok; her başlığa ikon yok; kütüphane henüz eklenmez.

## A.7 Sticky Navigation

- **Polarite adaptasyonu:** navbar, üzerinde bulunduğu bölümün polaritesine göre kutup değiştirir — dark bölümde açık metin/işaret, light bölümde koyu. Geçiş **yumuşak ton takası** (renk değil, opaklık/ton), scroll pozisyonuna bağlı, reduced-motion'da anlık.
- **Zemin:** opak veya çok yüksek opaklıkta bölüm `--surface`'i; **glassmorphism / blur yok**. Yalnızca ince alt `--hairline`.
- **Hero'da (en üst):** zeminsiz/şeffaf; kelime-işareti + ince link satırı + tek dolgulu CTA.
- **Hero'dan sonra:** ince solid bar (yükseklik token ~56–64px), bölüm polaritesine uyar. Opsiyonel: hızlı aşağı scroll'da gizlenir, yukarı scroll'da anında gelir; reduced-motion'da her zaman görünür.
- **CTA her zaman sayfadaki en yüksek kontrastlı öğedir** — dark barda açık/accent dolgulu, light barda koyu/accent dolgulu; polarite değişse de "en baskın buton" konumu sabit.
- **Scroll-spy:** aktif bölüm linkinde sessiz gösterge (hairline alt çizgi veya mono kat numarası), kuyu kabini ile senkron.
- **Mobil:** **tek kompakt sticky navbar** — kelime-işareti + **entegre statik floor indicator** (`03 · Yaklaşım` + minik ilerleme tırnağı) + kompakt birincil CTA + menü düğmesi. **Ayrı alt aksiyon çubuğu ve ayrı kat göstergesi pili yok.** Menü = alttan sheet (odak tuzağı, `Esc` / swipe-down, scroll kilidi, odak iadesi).
- Klavye erişimi, görünür `--focus-ring`, skip link ("İçeriğe geç"), `scroll-margin-top` = nav yüksekliği + boşluk, `env(safe-area-inset-*)` mobil.

## A.8 Opening Reveal

- **Koyu başlangıç** (Opening polaritesi dark ile tutarlı): viewport `--tone-9/10` civarı bir katmanla kaplı.
- **Merkezde minimal dikey ışık:** tam dikey merkezde ince, hafif parlayan tek hat. Kapı/panel çizimi yok — soyut ışık ve karanlık ayrılması.
- **Reveal:** ~120–150ms bekleme → hattın luminансı hafif yükselir → iki koyu yarım `translateX` ile zıt yöne kayar → altındaki hero görünür. **Toplam ≤ 800ms.**
- Hero HTML'i katmanın **altında zaten render** — LCP bloklanmaz; katman kalkması hero'yu itmez (CLS 0). Bitince katman DOM'dan kaldırılır.
- **Atlanabilir:** ilk scroll / tuş / pointer / touch → 120ms'de tamamlanır. Oturumda **bir kez** (`sessionStorage`); tekrar ziyaret → katman yok veya ≤200ms fade.
- **Mobil:** ~400ms veya yalnızca opacity fade; hat daha ince; parlama yok.
- **Reduced-motion:** katman yok; hero anında görünür (en fazla 150ms fade). İlk implementasyonun parçası.
- **Progressive enhancement:** JS/efekt hiç çalışmasa da hero tam görünür ve kullanılabilir. "Animasyon bitene kadar boş ekran" yasak.
- **Cinematic ama gimmick değil:** tek, kısa, sessiz an; tekrar oynatılmaz; sonrasında kullanıcı "kabin içinde" kalmaz — kuyu motifi yalnızca scroll başlayınca görünür.

## A.9 Scroll Elevator Motif

- **İnce dikey shaft line:** sol gutter'da (desktop/laptop), bir bina kesiti gibi okunan ince dikey hat.
- **Küçük cabin / indicator:** hat üzerinde küçük işaret (polariteye göre ışık segmenti / dolu segment).
- **Aktif floor label:** `01 Çözümler · 02 Servis · 03 Projeler · 04 Kurumsal · 05 İletişim` (navigasyon hedefleri; `03` proje yoksa düşer, kalanlar yeniden numaralanır). Tıkla-atla + scroll-spy.
- **Açık/koyu bölümlerde otomatik kontrast uyumu:** motif, bulunduğu bölümün polaritesine göre ton alır — dark'ta hafif parlayan açık hat, light'ta ince koyu hat. Her durumda kontrast ≥ 3:1.
- **Desktop / laptop:** zengin — hat + hareketli kabin + kat etiketi + tıkla-atla.
- **Tablet:** sadeleşir — ince hat + sade kabin + kısa etiket.
- **Mobil:** **statik floor indicator** (navbar'a entegre, §A.7); hareketli kabin yok; scroll-spy ile anlık güncellenen kat etiketi.
- **Hareket yönü — KARARA BAĞLANMADI; prototipte A/B test edilecek:**
  - A) scroll aşağı → kabin **yukarı** ("ascent" metaforu)
  - B) scroll aşağı → kabin **aşağı** (fiziksel scroll yönü)
  - Her iki varyantta: kat numaraları içeriğe göre `01 → 05` artar; düşük genlik; yumuşak easing; yalnızca `transform` / `opacity`.
- **Native scroll; scroll-jack yok; snap yok.** Kullanıcı hızlı geçerse motif anında güncel duruma oturur.
- **Görünürlük:** Opening + Hero'da gizli; 01→02 geçişinde "biner"; 02–08 boyunca görünür; kapanışta son kata "varır"; footer'dan önce görünümden çıkar.
- Reduced-motion: kabin hareketi durur; statik kat etiketi anlık güncellenir; hat sabit.
- **Asansör metaforu yalnızca burada** (ve gösterişsiz bölüm numaralandırmasında) görselleşir; başka bölümlerde tekrar edilmez (§A.13).

## A.10 Components / Surfaces

- **Kart ağırlıklı tasarımdan kaçınılır.** "Dashboard" hissi, ağır gölgeli kart ızgarası yok.
- **Kullanılacak arketipler:** hairline ile ayrım · split layout (metin / görsel) · full-bleed alan · editorial list (dikey liste — kart değil) · typography-led section · numaralı dikey merdiven (süreç).
- **Kart yalnızca** gerçekten eş değerli, taranabilir öğeler için (ör. servis triptiği) — o zaman da kenarlık ince/yok, gölge çok hafif/yok, ayrım boşlukla.
- **Her bileşen light VE dark yüzeyde çalışacak şekilde tasarlanır:** bileşen ham renk kullanmaz, yalnızca anlamsal token (`--surface`, `--text`, `--hairline`, `--accent`…). Bir bileşen bir bölüme konduğunda o bölümün polaritesini **otomatik miras alır** — ayrı "dark varyant" kodu değil, token çözümü.
- Nav, buton, input, link, gösterge — hepsi tek sistemin parçası; hiçbiri stok/varsayılan görünümde bırakılmaz.
- Yükseltme gerektiğinde (`--surface-raised`) kutu yerine ton farkı + hairline + boşluk.

## A.11 Forms

- **Dönüşüm alanında okunabilirlik premium görünümden önceliklidir.**
- **Yüzey:** form her zaman **light veya yüksek kontrastlı sakin bir yüzey**te. İletişim/Teklif bölümü güçlü tonal alan olsa da form paneli okunur, sakin bir yüzeyde durur. **Dark form yüzeyi tercih edilmez.**
- **Alanlar:** ince çerçeve veya alt-çizgi; kutu kalabalığı yok; etiketler alanın **üstünde** (içinde değil), okunur punto; placeholder etiket yerine geçmez.
- **Focus:** `--focus-ring` görünür, kontrast ≥ 3:1; klavye ve pointer için aynı; `outline: none` yasak.
- **Error:** renk + ikon + metin birlikte; `--system-danger`; alanın yanında/altında açık mesaj; `aria-describedby`; hata özeti odaklanabilir.
- **Success:** `--system-success` + ikon + metin; net teşekkür durumu; beklenen dönüş süresi (`TBD`).
- Zorunlu alan minimumda (`CONTENT.md` teklif formu); dokunma hedefleri cömert; KVKK onayı ve gönder butonu erişilebilir konumda.
- Sistem renkleri accent'ten bağımsız ve WCAG AA kontrastlı.

## A.12 Motion

- **Genel micro motion:** 200–400ms; doğal ease-out / hafif custom cubic-bezier; yaylı abartı yok.
- **Opening istisna:** ≤ 800ms (§A.8).
- **Düşük mesafe:** giriş animasyonlarında 8–24px öteleme; büyük uçuşlar yok.
- **Yalnızca `opacity` ve `transform`** animasyonlanır; `width/height/top/left/margin` veya layout tetikleyen özellik animasyonlanmaz. `will-change` yalnızca aktif animasyon süresince, sınırlı öğede.
- **Polarite geçişi:** komşu bölümler arası ton takası yumuşak opaklık geçişiyle (renk karışımı değil); scroll-linked, düşük genlik.
- **Scroll-linked animation yalnızca anlamlı yerlerde:** kuyu motifi kabin hareketi, süreç merdiveni hattının çizilmesi, navbar polarite takası. Dekoratif parallax yok (veya çok hafif, opsiyonel, reduced-motion + mobilde kapalı).
- **Bir kez oynar:** giriş animasyonları scroll yukarı/aşağı zıpladıkça tekrar tetiklenmez.
- **`prefers-reduced-motion: reduce`:** tüm non-essential animasyon kapatılır / anlık geçişe iner; scroll-linked hareket durur; opening kapısı atlanır; yalnızca çok kısa opacity geçişleri kalabilir. İlk implementasyonun parçası.
- **Mobil / tablet:** motion azaltılır — çoğu giriş yalnızca fade; scroll-linked minimum; kabin statik.
- **Performans:** 60fps hedef; long task > 50ms yok; `passive` listener / `IntersectionObserver` / `rAF`; her `scroll` olayında JS hesap yok; `visibilitychange`'de animasyon durur. Bütçe: LCP < 2.5s, CLS < 0.1 (~0), INP < 200ms. İlk ekran animasyonsuz tam render; motion sonra biner.

## A.13 Anti-patterns (bu yön için özellikle yasak)

B §11'e **ek** olarak bağlayıcı:

- ❌ Generic SaaS / startup landing page düzeni; "büyük hero + 3 kart + 4 özellik + CTA" klişesi.
- ❌ Template / hazır tema hissi; tüm bölümlerde aynı layout.
- ❌ **Glassmorphism / frosted blur / backdrop-filter** yüzeyler.
- ❌ **Neon, glow, ışık patlaması; cyberpunk** estetiği.
- ❌ Aşırı / çok renkli gradient; "mor-mavi" geçişler.
- ❌ Her elementin animate olması; scroll-jacking; zorunlu full-page snap; otomatik carousel.
- ❌ **Aşırı mono + tracked uppercase** — her bölümde tekrar eden mono eyebrow etiketleri; "broadsheet hairline + italic serif + tracked mono" AI-editorial default'u.
- ❌ Dev icon grid; her başlığa ikon; ikon şenliği.
- ❌ Küçük kart denizi; ağır gölgeli kart ızgarası.
- ❌ **Fake luxury gold** / parlak altın aksan; sahte metalik parıltı.
- ❌ Fake istatistik, sahte logo barı, uydurma testimonial, sahte proje (`PRODUCT.md` / `CONTENT.md` non-negotiable).
- ❌ **Asansör metaforunun her bölümde tekrarı** — dikey çizgiler, "yukarı" okları, kat numaraları her yerde. Metafor yalnızca kuyu motifinde (§A.9) ve gösterişsiz bölüm numaralandırmasında (`01–05`).
- ❌ Schindler / Astra layout, tipografi, renk, metin kopyası.
- ❌ Görsel gelene kadar gri placeholder kutu / skeleton tiyatrosu.
- ❌ Düşük kontrastlı "şık" gri-üzeri-gri metin; `outline: none`; anlamı yalnızca renkle veren durum.

## A.14 Brand Arrival Plan

Logo ve gerçek marka renkleri geldiğinde tasarım sistemi **yeniden yapılmadan** güncellenir:

1. **Logo varyantları:** light ve dark için ayrı varyant (veya tek nötr varyant + otomatik ton). `src/components/brand/` + `public/brand/` altında tek kaynaktan servis; şu anki "Ascent" kelime-işareti placeholder buradan gelir. Favicon / OG görseli aynı anda güncellenir.
2. **Accent token değişimi:** yalnızca `--accent`, `--accent-text`, `--focus-ring` (ve gerekiyorsa aktif-gösterge tonu) değerleri değişir. Accent bölge kaplamadığı için bu değişim layout'a dokunmaz. Marka birden çok renk getirirse: biri `--accent` olur; diğerleri en fazla çok sınırlı, opsiyonel ikincil vurgu token'ı — monokrom disiplin korunur.
3. **Kontrast kontrolü:** yeni accent ve (varsa) yeni nötr kalibrasyon, tüm anlamsal token çiftlerinde (light + dark) WCAG AA'ya karşı yeniden doğrulanır: gövde ≥ 4.5:1, büyük metin ≥ 3:1, UI/odak ≥ 3:1. Geçmeyen kombinasyon ton skalası adımıyla düzeltilir, layout ile değil.
4. **Nötr skala kalibrasyonu:** marka sıcak/soğuk bir nötr yön getirirse `--tone-0…10` değerleri kaydırılır; **rol adları ve adım sayısı sabit kalır**, bileşenler etkilenmez.
5. **Tipografi:** kurumsal font varsa `next/font` ile merkezi tanımdan tek yerde değiştirilir; §A.4'teki **roller ve karakter kriterleri** yeni aileyi kabul/ret ölçütüdür (display mimari-editöryal karakterde olmalı; değilse display için ayrı tamamlayıcı aile). Mono aynı sınırlı kullanımda kalır.
6. **Light/Dark ritmi:** §A.3 tablosu marka sonrası **tek seferlik kontrollü revizyona** açık (ör. marka çok açık/kurumsal ise bazı `dark` bölümler `light-dominant`e alınabilir) — **akış ve bölüm sırası değişmez**, yalnızca polarite ayarı.
7. **Geçiş garantisi:** yukarıdaki adımların hiçbiri grid, spacing, component yapısı, motion grameri veya bölüm mimarisini değiştirmez. Marka geçişi = token değerleri + logo asset + font ailesi; bileşen ve layout kodu sabit.

---

# B. Ayrıntılı Görsel Dil (v0 — korunan orijinal içerik)

> Aşağıdaki bölümler orijinal `DESIGN.md` içeriğidir; **kararlar ve numaralandırma korunmuştur.**
> A kısmı bu içeriği daraltır ve netleştirir; çelişki halinde **A bağlayıcıdır.**

## 0. Tasarım İlkesi Özeti

Ascent'in sitesi **bir asansör kataloğu değil, bir mimari deneyim** gibi hissettirmeli:
mühendislik hassasiyeti + lüks endüstriyel malzeme + çağdaş mimari sadelik.
Referanslar (Schindler, Astra) yalnızca *bilgi mimarisi* açısından incelenir — görsel dil, kompozisyon, tipografi ve motion tamamen özgün olacaktır.

Tek cümle: **"Sessiz güç."** Az öğe, çok boşluk, kusursuz hizalama, kontrollü hareket.

---

## 1. Hedeflenen Görsel Deneyim

- **Premium mimari + mühendislik + lüks endüstriyel.** Beton, fırçalanmış metal, cam, gölge, dikey perspektif; sıcak değil, rafine ve net.
- **Editöryal his.** Bir mimarlık dergisi / üst segment yapı markası gibi; kurumsal broşür gibi değil.
- **Malzeme dürüstlüğü.** Sahte 3D parıltılar, plastik mockup'lar, abartılı ışık patlamaları yok. Gerçek doku, gerçek gölge.
- **Dikeylik teması.** Asansör = dikey hareket. Kompozisyon, grid ve motion bu dikey ekseni zarifçe kullanır (ağır sembolizm olmadan).
- **Işık ve gölge** birincil dramatik araç — renk değil.
- **Ölçek hissi.** Büyük tipografi, geniş görseller, cömert boşluk ile "ciddi ve büyük" algısı; ama ferah, boğucu değil.

### Duygusal hedef
Kullanıcı siteye girince: *"Bunlar işini biliyor ve detaya önem veriyor."* — 5 saniyede.

---

## 2. Layout Felsefesi

- **Grid:** Rafine, tutarlı kolon sistemi (öneri: masaüstü 12 kolon, laptop 12, tablet 8, mobil 4). Tüm bölümler aynı grid'e oturur; keyfi hizalama yok.
- **Baseline / dikey ritim:** Tek bir spacing skalasına bağlı kalınır (bkz. §4). Bölüm aralıkları büyük ve tutarlı.
- **Negatif alan bir tasarım öğesidir**, doldurulacak boşluk değil. Yoğunluğa karşı bilinçli direniş.
- **Asimetri kontrollü kullanılır:** metin bloğu bir kolon grubunda, görsel karşı grupta; merkezlenmiş her şey yerine editöryal yerleşim.
- **Bölüm başına tek fikir.** Her ekran boyu bölge net bir mesaj taşır; bilgi yığını yok.
- **Kart sistemi minimumda.** Kart yalnızca gerçekten eş değerli, taranabilir öğeler için (ör. hizmet indeksi). Her şeyi kutuya koyan "dashboard" hissinden kaçınılır. Kart kullanılırsa: kenarlık ince veya yok, gölge çok hafif veya yok, ayrım boşlukla yapılır.
- **Kenardan kenara (full-bleed) görseller** ile ölçek; içerik kolonları dar ve okunur.
- **Sabit bir "kuyu" ekseni:** Sayfa boyunca ince dikey bir çizgi / r8 hat / ilerleme ekseni motifi bölümleri birbirine bağlayabilir (asansör kuyusu göndermesi — soyut, dekoratif değil işlevsel: bölüm/kat göstergesi).
- **Kat / bölüm numaralandırma:** `01 — 02 — 03` sistemi bölüm etiketleri olarak kullanılabilir; tipografik, gösterişsiz.

### Sayfa iskeleti (yön — bağlayıcı değil)
```
┌────────────────────────────────────────────┐
│  Persistent nav (sticky/floating)          │  ← her zaman erişilebilir
├────────────────────────────────────────────┤
│                                            │
│   01  HERO — marka ifadesi + birincil CTA  │
│       (opsiyonel: açılış kapı animasyonu)   │
│                                            │
├───┬────────────────────────────────────────┤
│ │ │  02  NE YAPIYORUZ — doğrulanmış         │
│ │ │      kategoriler, geniş boşluk          │
│kuyu│                                        │
│eksi│  03  ÇÖZÜMLER önizleme                  │
│ni │                                        │
│ │ │  04  SERVİSLER önizleme                 │
│ │ │                                        │
│ │ │  05  YAKLAŞIM / NEDEN ASCENT            │
│ │ │                                        │
│ │ │  06  (PROJELER — yalnızca VERIFIED)     │
├───┴────────────────────────────────────────┤
│  İLETİŞİM / TEKLİF bandı                    │
│  Footer                                     │
└────────────────────────────────────────────┘
        + kalıcı iletişim/teklif erişimi
```

---

## 3. Tipografi Prensipleri

> Font seçimi **geçici**. Aşağıdaki roller kesin; aileler müşteri marka kimliğiyle netleşecek.

### Roller
| Rol | Kullanım | Geçici yön |
|-----|----------|------------|
| **Display / Heading** | Hero, bölüm başlıkları | Yüksek kaliteli, karakterli bir grotesk veya çağdaş serif; geniş puntoda etkileyici. Adaylar: bir premium grotesk (ör. geniş harf aralıklı, düşük kontrast) — **PLACEHOLDER**. Şu an sistemde `Geist` var; final için değişecek. |
| **Body / UI** | Paragraf, liste, form, nav | Nötr, çok yüksek okunabilirlikte grotesk. Geçici: `Geist Sans`. |
| **Mono / Teknik** | Kat numaraları (`01`), teknik parametre etiketleri, ölçü tabloları | Tek aralıklı; mühendislik hissi. Geçici: `Geist Mono`. |

### Kurallar
- **En fazla 2 aile** (display + body). Mono yalnızca aksan olarak, sınırlı.
- **Ölçek:** Tipografik bir modüler skala (öneri oran ~1.25–1.333). Net adımlar; ara boyut icat edilmez.
- **Hero başlık** cömert; ama responsive olarak `clamp()` ile ölçeklenir, asla taşmaz.
- **Satır uzunluğu:** gövde metni 60–75 karakter; geniş ekranda kolon genişliği sınırlanır.
- **Satır yüksekliği:** başlıklar sıkı (1.05–1.15), gövde rahat (1.5–1.65).
- **Harf aralığı:** büyük başlıklarda hafif negatif; küçük büyük-harf etiketlerde pozitif tracking.
- **Hiyerarşi punto + ağırlık + boşlukla kurulur**, renk veya kutu ile değil.
- **Tüm-büyük-harf** yalnızca kısa etiketlerde (bölüm no, göz üstü başlık).
- **Dul/yetim satır** kontrolü hero ve başlıklarda.
- Değişken font tercih; yalnızca kullanılan ağırlıklar yüklenir; `font-display: swap`; mümkünse `next/font` ile self-host (harici istek yok).

---

## 4. Spacing Yaklaşımı

- **Tek spacing skalası** (öneri, `rem` tabanlı, 4px kök): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160, 192`. Skala dışı değer kullanılmaz.
- **Bölüm dikey boşluğu** büyük: mobil ~`64–80px`, masaüstü ~`120–192px`. Tutarlı.
- **Boşluk tokenları** tasarım sistemi olarak tanımlanır (`space-section`, `space-block`, `space-inline` gibi anlamsal isimler) — Tailwind v4 `@theme` içinde.
- **Yatay iç kenar boşluğu (gutter):** mobil `20–24px`, tablet `32–48px`, masaüstü `64–96px`, çok geniş ekranda içerik `max-width` ile ortalanır (öneri ~`1440–1600px` içerik sınırı, full-bleed görseller hariç).
- **Ritim > süsleme:** ayırıcı çizgi yerine boşluk; boşluk yetmiyorsa ince `1px` hairline.
- **Dokunma hedefleri** min `44×44px`; interaktif öğeler arası min `8px`.
- **Optik hizalama** matematikselden önce gelir (ikon/başlık, buton içi metin).

---

## 5. Görsel Kullanım Yönü

### Sanat yönü
- **Konu:** mimari (şaft, hol, cephe, dikey boşluk, merdiven), malzeme makroları (fırçalı çelik, beton, cam, düğme detayı), mühendislik (halat, ray, mekanizma — temiz kompozisyon), mekân içinde ölçek.
- **Işık:** doğal, yönlü, güçlü gölge; düşük-orta anahtar; dramatik ama net.
- **Renk:** görsellerde nötr/desatüre; malzemenin kendi rengi. Yapay renk katmanı yok.
- **İnsan:** varsa, bağlam içinde ve gerçek (kurgu stok gülümseme yok); mümkünse hiç figüran yok, mekân konuşsun.
- **Format:** çoğunlukla geniş / panoramik ve tam-genişlik; portre görseller editöryal ikili düzende.

### Teknik
- `next/image`, responsive `sizes`, modern format (AVIF/WebP), doğru `priority` yalnızca hero için.
- Belirgin `alt` metni (dekoratif ise boş `alt`).
- **Layout shift sıfır:** her görselin `width/height` veya `aspect-ratio` sabit.
- Placeholder: düşük çözünürlük blur veya nötr ton bloğu; parıltı/skeleton animasyonu ölçülü.
- Görsel yoksa: tipografi + boşluk + hairline ile zarif "görselsiz" bölüm tasarımı (yeni firma gerçeği — bkz. `PRODUCT.md` §4.4).
- **Marka görselleri, gerçek proje foto'ları `TBD`** — geldiğinde kolay değiştirilebilir olacak şekilde merkezi bir `content/` veya asset katmanından beslenir.
- İkonografi: tek çizgi ağırlığı, geometrik, minimal set; dekoratif illüstrasyon yok. (Kütüphane henüz eklenmeyecek — `PRODUCT.md` kapsamı.)

---

## 6. Renk — GEÇİCİ / KİLİTLENMEDİ

> **Final palet müşteri marka kimliğiyle belirlenecek. Aşağıdakiler yalnızca geliştirme sürecinde iskele içindir ve bağlayıcı değildir.**

### Geçici çalışma paleti (placeholder)
- **Zemin:** çok açık nötr / kırık beyaz (light), çok koyu nötr / mürekkep (dark).
- **Metin:** yüksek kontrastlı nötr gri-siyah / gri-beyaz.
- **Hairline / kenarlık:** düşük kontrastlı nötr.
- **Vurgu (accent):** **PLACEHOLDER — henüz seçilmedi.** Şimdilik tek, koyu, sofistike bir ton (ör. antrasit üstü tek aksan) varsayılır; parlak kurumsal mavi/yeşil *kullanılmaz* ta ki marka onayına dek.
- **Sistem renkleri** (form hata/başarı) erişilebilir kontrastla, marka aksanından bağımsız tanımlı.

### Renk kuralları (palet değişse de geçerli)
- **Nötr-ağırlıklı.** Renk enderdir ve anlamlıdır; her yerde değil.
- **Gradient kullanımı kısıtlı:** yalnızca çok ince, düşük kontrastlı, tek renk içi (ör. görsel üstü okunabilirlik overlay'i). **Ucuz çok renkli gradient yasak.**
- Kontrast: gövde metni **WCAG AA (≥4.5:1)**, büyük metin ≥3:1, UI/odak halkası ≥3:1.
- **Dark mode** ilk günden planlı (token'lar hem light hem dark için tanımlı). Sistem tercihine saygı; ileride manuel geçiş eklenebilir.
- Renk asla tek bilgi taşıyıcısı değil (durum + ikon/metin).
- Tüm renkler **anlamsal token** olarak Tailwind v4 `@theme` içinde; ham hex bileşende kullanılmaz → marka geldiğinde tek yerden değişir.

### Tema mimarisi (marka geçişini kolaylaştırmak için)
```
:root  → --background, --foreground, --hairline, --accent, --accent-fg, --muted ...
@media (prefers-color-scheme: dark) → aynı token'ların dark değerleri
@theme inline → token'ları Tailwind utility'lerine bağlar (bg-background, text-foreground ...)
```
Bileşenler yalnızca token'lara başvurur. Logo ve renkler geldiğinde: token değerlerini + `next/font` ailesini + logo asset'ini değiştir, bileşen kodu değişmez.

---

## 7. Responsive Tasarım Felsefesi

**Responsive bir özellik değil, temel gereksinimdir.** (bkz. Non-negotiables)

### Kırılım hedefleri (yön)
| Ad | Aralık (öneri) | Not |
|----|----------------|-----|
| Büyük masaüstü | ≥ 1600px | İçerik `max-width` ile ortalanır; full-bleed görseller nefes alır |
| Masaüstü | 1280–1599px | Referans tasarım genişliği |
| Laptop | 1024–1279px | Grid korunur, boşluk hafif azalır |
| Tablet | 768–1023px | Çok kolonlu bölümler 2 kolona / tek kolona iner; nav moduna geçiş |
| Mobil | 360–767px | Tek kolon; motion hafifletilir; nav mobil moda geçer |
| Küçük mobil | ~320–359px | Bozulmadan çalışmalı (taşma yok) |

### İlkeler
- **Mobil öncesi değil, içerik öncesi:** her bölüm önce en dar ekranda anlamlı olacak şekilde kurulur, sonra genişletilir.
- **Akışkan tipografi ve boşluk:** `clamp()` ile kademeli ölçekleme; kırılımda ani sıçrama minimum.
- **Yatay taşma yasak.** Her build'de kontrol; `overflow-x` kaynakları (geniş görsel, tablo, mono metin, motion transform) izole edilir.
- **Layout shift yasak (CLS ~0):** görsel/font/embed için yer ayrılır; geç yüklenen öğe içeriği itmez.
- **Touch:** kritik hiçbir işlev hover'a bağlı değil. Hover efektleri yalnızca ilerici zenginleştirme; `@media (hover: hover)` ile sınırlanır.
- **Dokunma hedefi** ve odak alanı mobilde cömert.
- **Navigasyon:** masaüstü ve mobilde farklı davranabilir (bkz. §8) ama işlev paritesi korunur — mobilde "eksik menü" olmaz.
- **Tablolar / teknik parametreler:** dar ekranda yatay kaydırılabilir kapsayıcı içinde veya tanım-listesi düzenine dönüşür; sayfayı taşırmaz.
- **Görseller:** `sizes` doğru; mobilde ağır hero görseli daha küçük varyant.
- Gerçek cihaz testi: en az bir düşük-orta segment Android ve bir iOS Safari.

---

## 8. Persistent (Kalıcı) Navigasyon Konsepti

**Kullanıcı menüye veya iletişim/teklif aksiyonuna ulaşmak için sayfanın başına dönmek zorunda kalmaz.** (Non-negotiable)

### Masaüstü
- **Sticky üst bar** (ince, sayfa ile birlikte kalır) — VEYA scroll'da incelen/gizlenip yukarı scroll'da beliren kompakt bar.
- İçerik: logo (`TBD` — şimdilik "Ascent" kelime işareti placeholder), ana bölüm linkleri, **belirgin birincil CTA: "Teklif Al" / "İletişim"**.
- Opsiyonel: sayfanın sol/sağ kenarında ince **dikey ilerleme / kat göstergesi** (`01…06`) — asansör kuyusu motifi; tıklanabilir bölüm atlama; tamamen dekoratif değil, işlevsel.
- Aktif bölüm vurgusu (scroll-spy) — hafif, gösterişsiz.

### Mobil / tablet
- **Kompakt üst bar:** kelime işareti + menü düğmesi + **her zaman görünür kompakt CTA** (ör. küçük "Teklif" düğmesi veya telefon ikonu — numara `TBD`).
- **Tam ekran veya alttan açılan menü paneli** (bottom sheet tercih edilebilir — başparmak erişimi). İçinde tüm bölümler + büyük birincil CTA.
- Opsiyonel **alt sabit aksiyon çubuğu (bottom bar)**: "Menü" + "Teklif Al" / "Ara" — başparmak bölgesinde, her scroll konumunda.
- Menü paneli: odak tuzağı, `Esc` ile kapanır, açıkken arka plan scroll kilidi, kapanınca odak düğmeye döner.

### Ortak kurallar
- Nav her zaman klavye ile erişilebilir; görünür odak halkası.
- `position: sticky` tercih (JS bağımlı gizle/göster minimumda; varsa reduced-motion'da anında).
- Nav yüksekliği bir token; `scroll-margin-top` ile ankor atlamalarında başlık nav altında kalmaz.
- CTA metni ve hedefi tek yerden konfigüre edilir (içerik `TBD` olduğundan).
- Nav, sayfa içeriğini örtmez / önemli alanı kapatmaz; güvenli alan (`env(safe-area-inset-*)`) mobilde dikkate alınır.

---

## 9. Motion Felsefesi

**Motion içeriği destekler; siteyi oyun/gimmick yapmaz.** Desktop daha zengin, mobil daha hafif.

### Amaç
- Hiyerarşiyi ve dikey hareket temasını pekiştirmek.
- Bölümler arası geçişte süreklilik hissi.
- Dikkatin doğru yere yönelmesi.
- **Süsleme veya "vay be" anı için değil.**

### İlkeler
- **Az ama kusursuz.** Birkaç iyi zamanlanmış hareket > çok sayıda efekt.
- **Hızlı ve incelikli:** çoğu geçiş `150–350ms`; büyük sahne hareketleri `400–700ms` üstü değil.
- **Easing:** doğal, hafif (standart "ease-out" / custom cubic-bezier); yaylı abartı yok.
- **Mesafe küçük:** giriş animasyonlarında `8–24px` ötelenme; büyük uçuşlar yok.
- **Scroll-linked hareket** (kuyu motifi, kat göstergesi) düşük genlikli ve `transform`/`opacity` ile GPU-dostu; scroll'u ele geçirmez (**scroll-jacking yok**).
- **Parallax** yalnızca çok hafif, opsiyonel, reduced-motion ve mobilde kapalı.
- İçerik animasyondan **bağımsız okunur:** JS/animasyon çalışmasa da her şey görünür ve kullanılabilir (progressive enhancement). "Animasyon bitene kadar boş ekran" yasak.
- **Bir kez oynar:** giriş animasyonları tekrar tetiklenmez (scroll yukarı/aşağı zıpladıkça titremez).

### Açılış "asansör kapısı" deneyimi
- Opsiyonel marka anı: sayfa açılışında rafine bir kapı açılma geçişi hero'yu ortaya çıkarır.
- **Kısa** (`≤ ~900ms`), atlanabilir (herhangi bir etkileşim / scroll anında tamamlanır), oturumda **bir kez** (tekrar ziyarette `sessionStorage` ile atlanır veya çok kısaltılır).
- Reduced-motion'da: kapı yok, hero anında görünür (belki çok hafif fade).
- Mobilde: daha kısa / sadeleştirilmiş, veya yalnızca fade.
- Açılıştan sonra kullanıcı "kabin içinde" kalmak zorunda değil — serbest sayfa.

### Scroll deneyimi (kuyu / kat motifi)
- Sayfa boyunca ince dikey eksen + hareket eden bir işaret (kabin/indikatör) scroll ile ilerler; bölüm numaraları (`01…06`) ile senkron.
- Bölüm/progress göstergesi; **navigasyonun bir parçası** olabilir (tıkla-atla).
- Genlik düşük; performans bütçesi içinde (§10); mobilde statik veya çok hafif.

### Reduced motion
- `@media (prefers-reduced-motion: reduce)`: tüm non-essential animasyon kapatılır veya anında geçişe indirgenir; parallax/scroll-linked hareket durur; açılış kapısı atlanır; yalnızca `opacity` tabanlı çok kısa geçişler kalabilir.
- Bu bir sonradan-ekleme değil, ilk implementasyonun parçası.

---

## 10. Animasyon Performans Kısıtları

- **Yalnızca `transform` ve `opacity` animasyonu.** `width/height/top/left/margin` veya layout tetikleyen özellikler animasyonlanmaz.
- **`will-change`** yalnızca aktif animasyon süresince, sınırlı sayıda öğede.
- **60fps hedef;** uzun görev (long task) > 50ms'den kaçın; ana thread'i bloklayan scroll handler yok (`passive` listener, `IntersectionObserver`, `requestAnimationFrame`).
- **Scroll-linked efektler** `IntersectionObserver` veya CSS `scroll-timeline` (destekte) ile; her `scroll` olayında JS hesap yok.
- **Core Web Vitals bütçesi (hedef):**
  - LCP < 2.5s (4G / orta cihaz) — hero görseli/metni animasyonla geciktirilmez
  - CLS < 0.1 (hedef ~0) — motion asla layout kaydırmaz
  - INP < 200ms — açılış animasyonu girişi bloklamaz
- **JS bütçesi:** motion için ağır kütüphane şart değil; önce CSS. Kütüphane gerekirse küçük, tree-shakeable, `PRODUCT.md` onayıyla.
- **İlk ekran (above the fold)** animasyon olmadan tam render olur; motion sonra bindirilir.
- **Mobil / düşük güç:** cihaz sınıfı veya `prefers-reduced-motion` / `deviceMemory` / `hover` sinyalleriyle motion katmanı hafifletilir.
- **Batarya / CPU:** sekme görünür değilken (`visibilitychange`) animasyon durur.
- **Test:** CPU 4x throttle + orta segment cihazda kabul kriteri; Lighthouse CI performans skoru izlenir.

---

## 11. Kaçınılması Gereken Tasarım Anti-Pattern'leri

- ❌ Ucuz / çok renkli / mor-mavi **gradient** ve "glow" efektleri.
- ❌ Her içeriği **karta** koymak; ağır gölgeli kart ızgarası; "dashboard" hissi.
- ❌ **Template / stok kurumsal** görünüm; jenerik "startup landing page" düzeni.
- ❌ Klişe asansör firması görselleri (parlak metal kabin render'ı, mutlu üniformalı teknisyen, mavi gökyüzü + bina montajı).
- ❌ **Stok "iş insanları el sıkışıyor / gülümsüyor"** fotoğrafları.
- ❌ **Scroll-jacking**, zorunlu tam-sayfa snap, kullanıcının scroll'unu ele geçiren efektler.
- ❌ **Otomatik oynayan** carousel / slider; sesli veya büyük video otomatik oynatma.
- ❌ İçeriği gizleyen ağır **giriş animasyonu**; "yükleniyor" tiyatrosu; uzun preloader.
- ❌ **Parallax** abartısı; hareket hastalığı yaratan büyük hareketler.
- ❌ **Hover'a bağlı** kritik menü/bilgi (touch'ta erişilemez).
- ❌ **Hamburger menü arkasında** her şeyi saklayıp masaüstünde de gizlemek.
- ❌ Sayfanın başına dönmeden ulaşılamayan navigasyon / CTA.
- ❌ **Yatay taşma**, kırılımda zıplayan layout, font yüklenince sıçrayan metin (FOUT/CLS).
- ❌ Düşük kontrastlı "şık" gri-üzeri-gri metin; erişilemez odak halkası; `outline: none`.
- ❌ Anlamı yalnızca **renkle** ileten durum göstergeleri.
- ❌ Aşırı font ailesi / ağırlık; dekoratif script fontlar.
- ❌ Gereksiz **ikon şenliği**; her başlığa ikon.
- ❌ Sahte sosyal kanıt: uydurma logo barı, "1000+ mutlu müşteri", yıldız puanları.
- ❌ Cookie/consent/pop-up bombardımanı; agresif exit-intent modalları.
- ❌ Referans sitelerden (Schindler/Astra) layout, tipografi, renk veya metin **kopyası**.

---

## 12. Uygulama Notları (mimari — UI değil)

Bunlar marka varlıklarının sonradan **kolay değişmesi** için:
- **Tema token'ları** tek dosyada (`globals.css` `@theme` + CSS değişkenleri). Bileşenler ham renk/spacing kullanmaz.
- **Tipografi** `next/font` ile merkezi; aile değişimi tek yerde.
- **Logo / marka varlıkları** tek bir yerden servis edilir (ör. `src/components/brand/` + `public/brand/`); şu an kelime-işareti placeholder.
- **İçerik** (nav etiketleri, CTA metni, bölüm başlıkları, iletişim bilgileri) koda gömülmez; `content/` katmanından (JSON/TS/MDX — `PRODUCT.md` netleşince) beslenir. `TBD` alanlar açıkça işaretli.
- **Motion parametreleri** (süre, easing, mesafe) token/config olarak; reduced-motion tek switch.
- **Kırılım değerleri** Tailwind v4 `@theme` içinde tanımlı, tutarlı.
- Ekstra UI kütüphanesi **yok** (bkz. `PRODUCT.md`) — tasarım sistemi ve içerik yapısı kesinleşene kadar.

---

## 13. Vazgeçilmezler / Non-negotiables

1. **Uydurma şirket bilgisi yok** — görsel/placeholder içerikte bile sahte logo, sahte müşteri, sahte rakam kullanılmaz. Eksik = `TBD` / gizli.
2. **Premium görsel kalite** — şablon, stok kurumsal, klişe asansör estetiği reddedilir. Güçlü tipografi, bol negatif alan, rafine grid, kaliteli mimari görsel, kontrollü motion.
3. **Sürekli erişilebilir navigasyon ve iletişim** — kullanıcı hiçbir scroll konumunda menüye/teklif CTA'sına ulaşmak için başa dönmez. Masaüstü ve mobil davranışı farklı olabilir, işlev paritesi şart.
4. **Tam responsive uygulama** — büyük masaüstü → küçük mobil, hepsinde profesyonel. Yatay taşma ve layout shift yok. Responsive temel gereksinim.
5. **Accessible / reduced motion** — WCAG AA kontrast, klavye + ekran okuyucu, görünür odak; `prefers-reduced-motion` ilk implementasyonda; touch'ta hover bağımlılığı yok.
6. **Performans odaklı animasyon** — yalnızca `transform`/`opacity`, CLS ~0, LCP/INP bütçesinde, mobilde hafifletilmiş, scroll-jacking yok.
7. **Referans sitelerini kopyalamayan özgün tasarım** — Schindler/Astra yalnızca bilgi mimarisi referansı; kimlik, kompozisyon, tipografi, renk, metin özgün.
