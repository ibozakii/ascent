# PRODUCT.md — Ascent Elevator

<!-- impeccable:product-schema 1 -->

> Bu belge ürün stratejisini, bilgi mimarisini ve içerik kurallarını tanımlar.
> Kod veya UI kararları burada değil, `DESIGN.md` içindedir.
> Durum: **Taslak / v0** — müşteri bilgileri alınana kadar birçok alan `TBD`.

---

# A. Ürün Kaydı (Impeccable şeması)

> Aşağıdaki bölümler, kurulu Impeccable sürümünün beklediği ürün kaydı şemasıdır.
> Yeni bilgi içermezler; tamamen bu dokümanın **B** kısmındaki mevcut içerikten (§0–§10) türetilmiştir.
> Çelişki halinde **B kısmı ve oradaki kararlar bağlayıcıdır.** `TBD` alanlar `TBD` kalır.

## Platform

web

## Users

- **Birincil kullanıcı önceliği `TBD`** — gerçek hedef segment (konut / ticari / kurumsal / ihracat) müşteri görüşmesinden sonra netleşecek (bkz. §2).
- Varsayımsal persona'lar (müşteriyle doğrulanacak — §2): P1 yapı/inşaat firması karar vericisi, P2 bina yöneticisi / site yönetimi, P3 mimar / iç mimar, P4 mülk sahibi / bireysel yatırımcı, P5 tesis / facility yöneticisi, P6 iş ortağı / tedarikçi / aday çalışan.
- Ortak durum ve amaç (§3): kullanıcı bu firmanın işini ciddiye alıp almadığını ~10 saniyede anlamak; ihtiyacına (yeni kurulum / bakım / onarım / modernizasyon) uygun bölümü hızlıca bulmak; teknik içeriği jargona boğulmadan anlamak; teklif/iletişim aksiyonunu sayfanın herhangi bir yerinden alabilmek; mobilde masaüstüyle eşdeğer gezinmek; (varsa) geçmiş işleri görmek.

## Product Purpose

- Yeni kurulan Ascent Elevator için güven veren, kurumsal ve **premium** bir dijital varlık oluşturmak (§1.1).
- **Birincil dönüşüm:** nitelikli talep (teklif isteği / iletişim formu gönderimi) toplamak (§1.1, §5.1).
- Marka algısını "yeni ama ciddi ve yüksek kalite" konumuna oturtmak (§1.1).
- Yapı, şirket büyüdükçe (yeni hizmet, proje, lokasyon, olası çok dillilik) genişlemeye uygun olmalı (§1.1).
- Başarı ölçütleri (hedef değerleri `TBD` — ölçüm altyapısı sonra kurulacak, §1.3): form gönderimi sayısı, iletişim CTA tıklama oranı, hizmet sayfalarında scroll derinliği, mobil/masaüstü dönüşüm farkının makul olması, Core Web Vitals (LCP/CLS/INP) hedef aralıkta.

## Positioning

- Ascent'in tek doğrulanmış gerçeği yeni kurulmuş olmasıdır; site konumu **sahte sinyal olmadan** kurulur — uydurma sertifika, istatistik, proje sayısı, deneyim yılı, iş ortağı marka, testimonial yok (§0, §6, §8).
- Schindler ve Astra'ya kıyasla görsel kalite, modernlik ve dijital deneyim açısından **belirgin şekilde daha premium, lüks, mimari ve çağdaş** (§1.2). Referans siteler yalnızca bilgi mimarisi ve içerik netliği açısından incelenir; metin, marka, görsel, layout kopyalanmaz (§0, §6.10).
- "Yeni firma dürüstlüğü": yenilik zayıflık gibi sunulmaz; modern yaklaşım / güncel teknoloji / kişisel ilgi çerçevesinde — ama bunlar iddia değil, **yaklaşım** olarak yazılır (§6.7).
- Güven; jargonsuz doğru teknik içerik, süreç şeffaflığı ve premium uygulama kalitesi (tasarım, performans, erişilebilirlik) üzerinden kurulur — yani Ascent'in şu an gerçekten sunabildiği şeyler (§8).

## Operating Context

- **İçerik doğrulama iş akışı** (§6, §10, `CONTENT.md`): her şirket bilgisi `VERIFIED` veya `TBD`'dir; `TBD` yayınlanmaz (bölüm gizlenir veya `noindex` placeholder kalır); bir bilgi ancak müşteriden yazılı/sözlü teyit alınıp `CONTENT.md`'de `VERIFIED` işaretlenince kullanılır. "Bilmiyorum / henüz yok" cevabı öyle kaydedilir, uydurulmaz.
- **Müşteri bilgi toplama görüşmesi** (`CONTENT.md` §9): `TBD → VERIFIED` dönüşümünün kaynağı.
- **Referans siteler** yalnızca bilgi mimarisi çalışması için incelenir: `https://www.schindler.com.tr/tr.html`, `https://www.astraasansor.com/tr` — kopyalama yok.
- **Kardeş dokümanlar:** `DESIGN.md` (görsel dil, layout, motion, erişilebilirlik), `CONTENT.md` (durum etiketli içerik envanteri). `PRODUCT.md` strateji + bilgi mimarisi + içerik kurallarının sahibidir.
- **Kullanım bağlamı:** kullanıcı yeni bir firmayı hızlıca değerlendirmek için gelir (§1.2, §3), sıklıkla mobil; menüye ve teklif/iletişim CTA'sına her scroll konumundan ulaşabilmelidir (§5.3).
- Taslak sayfalar `VERIFIED` olana kadar `noindex`; yalnızca `VERIFIED` sayfalar `robots`/`sitemap`'e girer (§4.3, §7.1). Türkçe, kısa, kalıcı slug'lar; yapı ileride `/en/` genişlemesini engellemez (çok dillilik ihtiyacı `TBD`) (§4.3).
- Sektörün gerçek mevzuat bağlamı (periyodik A/B muayene, asansör yönetmeliği, kırmızı/yeşil etiket) yalnızca **genel sektör bilgisi** (`DRAFT`) olarak kullanılabilir; belge olmadan şirkete özel iddiaya dönüşmez (§8, `CONTENT.md` §4.3/§4.6).

## Capabilities and Constraints

- **Doğrulanmış site yetenekleri / niyet** (§7.1, §5.1): App Router ile SSR/prerender öncelikli sayfalar; semantik HTML (tek `<h1>`, landmark'lar); sayfa başına `metadata` (title/description, OG, Twitter); `sitemap.xml` + `robots.txt` (yalnızca `VERIFIED`); canonical URL'ler; `Organization` JSON-LD (şimdilik yalnızca ad + site; logo/adres/telefon `VERIFIED` olunca); `LocalBusiness` JSON-LD yalnızca `VERIFIED` alanlarla; `next/image`; **yapılandırılmış teklif formu** (ihtiyaç tipi, bina tipi, konum, ad, telefon, e-posta, mesaj, KVKK onayı).
- **Dönüşüm kuralları** (§5.3): iletişim/teklif CTA'sı her ekranda ve her scroll konumunda erişilebilir; kullanıcı aksiyon için başa dönmez; form kısa, zorunlu alan minimumda; her hizmet detay sayfası sonunda bağlama özel CTA; net teşekkür durumu + beklenen dönüş süresi (süre `TBD`).
- **Aday üst seviye navigasyon** (taslak — kesin İA müşteri onayına bağlı, §4.1): Ana Sayfa; Çözümler/Ürünler (`TBD`); Servisler (Bakım / Onarım / Modernizasyon — hepsi `TBD`); Projeler/Referanslar (`TBD`, boş olabilir); Kurumsal/Hakkımızda (`TBD`); SSS/Bilgi Merkezi (`TBD`); İletişim/Teklif.
- **Terminoloji:** bakım ≠ onarım ≠ modernizasyon (ayrı sayfalar, §7.2); kuyu, kabin, tahrik, regülatör, buffer, revizyon, A/B muayene, kısmi/tam modernizasyon (`CONTENT.md` §4.6).
- **Teknik kısıtlar:** mevcut Next.js (App Router) kod tabanı — bu sürüm eğitim verisinden farklı olabilir, kod yazmadan önce `node_modules/next/dist/docs/` okunur (`AGENTS.md`); Tailwind v4; tasarım sistemi ve içerik kesinleşene kadar **ekstra UI / motion kütüphanesi yok** (§ `DESIGN.md` §12); performans bütçesi (Core Web Vitals) SEO'nun parçası (§7.1, `DESIGN.md` §10).
- **Açıkça belirsiz (TBD) ürün gerçekleri** (tam liste §9 ve `CONTENT.md`): yasal ticari unvan, kuruluş yılı/tarihi, logo ve marka varlıkları, marka renkleri, adres(ler), hizmet coğrafyası, telefon/e-posta/WhatsApp/çalışma saatleri, sunulan **gerçek** hizmet ve ürün listesi ve kapsamları, ürün aileleri + teknik parametreler + kabin/tasarım seçenekleri, bakım paketleri/periyot/SLA/garanti, modernizasyon kapsamı/süreci, sertifikalar/belgeler/sigortalar, ekip bilgileri, projeler/referanslar, testimonial'lar, sosyal medya, yasal metin kaynakları (KVKK/gizlilik/çerez), analytics tercihi, çok dillilik ihtiyacı, hedef segment önceliği ve iş modeli.

## Brand Commitments

- **Marka adı:** Ascent Elevator (`VERIFIED`). Telif satırındaki yasal unvan: `TBD`.
- **Kısa tanım** (`VERIFIED`, bundan fazlası `TBD`): "Ascent Elevator yeni kurulmuş bir asansör firmasıdır."
- **Dil / ton (bağlayıcı, §6.4–6.5):** açık, sade, profesyonel Türkçe; gereksiz jargon açıklanır; abartılı pazarlama sıfatları yok ("devrim niteliğinde", "sektörün en iyisi"); kendinden emin ama mütevazı; mühendislik ciddiyeti; premium ama gösterişsiz.
- **İddia hijyeni (bağlayıcı, §6.6):** her niteliksel iddia ya doğrulanabilir ya yumuşatılır ("hedefimiz", "yaklaşımımız"); sayısal iddia yalnızca `VERIFIED` ise.
- **Referans siteler bağlayıcı bir anti-referanstır (§6.10):** Schindler / Astra metinleri, marka kimliği, görsel tasarımı ve birebir layout'u kopyalanmaz; yalnızca bilgi mimarisi ilham kaynağıdır.
- **Logo, kelime-işareti, marka renkleri, marka tipografisi:** `TBD` — şu an "Ascent" kelime-işareti placeholder; kurumsal font teyit edilmedi.
- **Sahte sosyal kanıt yasağı (§6.1, §8):** uydurma logo barı, istatistik, testimonial, proje sayısı, deneyim yılı — asla.

## Evidence on Hand

- **Doğrulanmış:** şirketin yeni kurulmuş olduğu; marka adı "Ascent Elevator"; yukarıdaki tek cümlelik tanım (§0, `CONTENT.md` §1).
- **Referans siteler** (yalnızca bilgi mimarisi incelemesi için; kanıt değil, kopyalanmaz): `https://www.schindler.com.tr/tr.html`, `https://www.astraasansor.com/tr`.
- **Repodaki dokümanlar:** `PRODUCT.md`, `DESIGN.md`, `CONTENT.md` (durum anahtarı: `VERIFIED` / `TBD` / `DRAFT` / `ASSUMPTION`).
- **Var olan `DRAFT` içerik** (genel sektör bilgisi, şirkete özel iddia içermez): bakım / onarım / modernizasyon genel tanımları, yasal periyodik kontrol (A/B muayene) genel süreci, SSS + terimler sözlüğü, mikrokopya envanteri (`CONTENT.md` §4.3, §4.6, §5).
- **Gelecekteki işin uydurmaması gereken eksikler:** doğrulanmış tamamlanmış proje / referans / vaka çalışması **yok** (yeni firma — muhtemelen hiç yok); testimonial yok; sertifika / standart / belge teyidi yok; ekip biyografisi / fotoğrafı yok; gerçek istatistik yok; iş ortağı / tedarikçi marka izni yok; adres / telefon / e-posta / çalışma saati yok; logo veya marka paleti yok; fotoğraf arşivi veya kullanım hakkı yok; analytics verisi yok. Bunlardan biri eksikse ilgili bölüm gizlenir veya `noindex` placeholder kalır — uydurma içerikle doldurulmaz (§8, §6.2).

## Product Principles

1. **Doğrulanmamış hiçbir şirket bilgisi yayınlanmaz.** Şüphe varsa `TBD`; `TBD` içerik gizlenir veya `noindex` kalır. Bir bilgi ancak `CONTENT.md` içinde `VERIFIED` işaretlenince kullanılır (§6.1–6.3, §10).
2. **Güven, sahte sinyalle değil; şeffaflıkla ve yapılabilir kalite ile kurulur.** Yeni firma gerçeği zayıflık olarak sunulmaz; süreç anlatımı, jargonsuz doğru teknik içerik ve premium uygulama kalitesi taşıyıcıdır (§6.7, §8).
3. **Birincil hedef nitelikli talep toplamaktır.** İletişim/teklif aksiyonu her scroll konumunda erişilebilir; kullanıcı aksiyon almak için başa dönmez; form kısa ve yapılandırılmış (§1.1, §5).
4. **Yapı, şirket büyüdükçe genişlemeye hazırdır.** Yeni hizmet, ürün, proje, lokasyon ve olası çok dillilik eklendiğinde bilgi mimarisi ve içerik katmanı bozulmadan genişler; içerik koda gömülmez (§1.1, §4.3, `DESIGN.md` §12).
5. **Özgünlük bağlayıcıdır.** Schindler / Astra yalnızca bilgi mimarisi referansıdır; metin, kimlik, kompozisyon, tipografi, renk kopyalanmaz. Site referanslardan belirgin şekilde daha premium ve çağdaş hissettirir (§1.2, §6.10).

## Accessibility & Inclusion

- WCAG AA kontrast (gövde metni ≥4.5:1); klavye + ekran okuyucu ile kullanılabilir; görünür odak halkası (§10.5, `DESIGN.md` §13).
- `prefers-reduced-motion` ilk implementasyonun parçası — sonradan eklenmez.
- Touch cihazlarda kritik hiçbir işlev hover'a bağlı değildir.
- Anlam yalnızca renkle iletilmez (durum + ikon/metin).
- Tam responsive (büyük masaüstü → küçük mobil) temel gereksinimdir, sonradan düzeltilecek bir detay değildir; yatay taşma ve layout shift yok.
- KVKK aydınlatma metni, açık rıza metni, gizlilik ve çerez politikası gereklidir (hukuki kaynak müşteriden — `TBD`).

---

# B. Ayrıntılı Ürün Kaydı (v0 — korunan orijinal içerik)

> Aşağıdaki bölümler orijinal `PRODUCT.md` içeriğidir; **kararlar ve numaralandırma korunmuştur.**
> A kısmındaki şema bölümleri bu içerikten türetilmiştir.

## 0. Bağlam ve Kaynak Gerçek

- **Şirket:** Ascent Elevator
- **Doğrulanmış tek bilgi:** Yeni kurulmuş bir asansör firmasıdır.
- Diğer tüm şirket bilgileri (hizmetler, kapsam, ekip, konum, sertifikalar, referanslar) **müşteriden sonra alınacaktır** ve şu an `TBD`.
- **Referans siteler** (yalnızca bilgi mimarisi ve içerik netliği açısından incelenir; metin/marka/görsel/layout kopyalanmaz):
  - https://www.schindler.com.tr/tr.html
  - https://www.astraasansor.com/tr
- **Müşterinin referanslarda beğendiği yönler:**
  1. Hizmet ve ürünlerin anlaşılır kategorilere ayrılması
  2. Açıklayıcı, net, kolay anlaşılır içerik dili
  3. Asansör / yürüyen merdiven / bakım / servis / onarım bölümlerinin açık sunumu
  4. Güçlü, profesyonel kurumsal bilgi mimarisi
- **Ama:** Final sitede yalnızca Ascent'in gerçekten sunduğu **doğrulanmış** hizmetler yer alır.

---

## 1. Proje Hedefleri

### 1.1 İş hedefleri
- Yeni kurulan Ascent Elevator için güven veren, kurumsal ve **premium** bir dijital varlık oluşturmak.
- Nitelikli talep (teklif isteği / iletişim) toplamak — ana dönüşüm.
- Marka algısını "yeni ama ciddi ve yüksek kalite" konumuna oturtmak.
- İçerik ve yapı, şirket büyüdükçe (yeni hizmet, proje, lokasyon) genişlemeye uygun olmalı.

### 1.2 Deneyim hedefleri
- Schindler ve Astra'ya kıyasla görsel kalite, modernlik ve dijital deneyim açısından **belirgin şekilde daha premium, lüks, mimari ve çağdaş** bir site.
- Klişe asansör firması / stok kurumsal şablon hissinden kaçınmak.
- Motion ve scroll deneyimi markayı desteklemeli, gimmick'e dönüşmemeli.

### 1.3 Başarı ölçütleri (ölçüm altyapısı sonra kurulacak — hedefler `TBD`)
- Teklif / iletişim formu gönderimi sayısı
- İletişim CTA tıklama oranı
- Hizmet sayfalarında ortalama scroll derinliği
- Mobil ve masaüstü dönüşüm oranı farkının makul olması
- Core Web Vitals: LCP, CLS, INP hedef aralıkta (bkz. `DESIGN.md` performans bölümü)

---

## 2. Hedef Kullanıcılar (varsayımsal persona'lar — müşteriyle doğrulanacak)

| # | Persona | Kim | Sitede ne arıyor |
|---|---------|-----|------------------|
| P1 | **Yapı / inşaat firması karar vericisi** | Müteahhit, proje müdürü, teknik ofis | Yeni bina projesi için asansör tedariki, kapasite/hız/kabin seçenekleri, teklif alma |
| P2 | **Bina yöneticisi / site yönetimi** | Apartman/site yöneticisi, yönetim şirketi | Mevcut asansör için bakım anlaşması, arıza/onarım, modernizasyon |
| P3 | **Mimar / iç mimar** | Tasarım ofisi | Kabin tasarımı, ölçü/şaft gereksinimleri, estetik ve özelleştirme seçenekleri, teknik dokümantasyon |
| P4 | **Mülk sahibi / bireysel yatırımcı** | Villa, butik bina, ticari mülk sahibi | Küçük ölçekli asansör çözümü, güvenilir firma arayışı |
| P5 | **Tesis / facility yöneticisi** | AVM, otel, hastane, ofis binası teknik müdürü | Yüksek trafikli dikey ulaşım, servis SLA'leri, yürüyen merdiven/yol bakımı |
| P6 | **İş ortağı / tedarikçi / aday çalışan** | B2B partner, mühendis adayı | Kurumsal bilgi, ciddiyet sinyali, iletişim |

> Not: Ascent'in gerçek hedef segmenti (konut mu, ticari mi, kurumsal mi, ihracat mı) `TBD`. Persona önceliklendirmesi müşteri görüşmesinden sonra netleşecek.

---

## 3. Kullanıcı Amaçları (Jobs To Be Done)

- "Bu firmanın işini ciddiye alıp almadığını 10 saniyede anlamak istiyorum."
- "İhtiyacıma (yeni kurulum / bakım / onarım / modernizasyon) uygun bölümü hızlıca bulmak istiyorum."
- "Teknik olarak ne sunduklarını, jargona boğulmadan anlamak istiyorum."
- "Teklif almak / iletişime geçmek için sayfanın başına dönmek zorunda kalmadan aksiyon almak istiyorum."
- "Mobilde de masaüstündeki kadar rahat gezinmek istiyorum."
- "Daha önce ne yaptıklarını görmek istiyorum." (Projeler — içerik `TBD`)
- "Bakım anlaşmasının kapsamını ve servis sürelerini anlamak istiyorum." (kapsam `TBD`)

---

## 4. Bilgi Mimarisi Varsayımları

> **Bu bir taslaktır. Kesinleşmiş içerik değildir.** Bölümlerin varlığı ve isimleri müşteri doğrulamasına bağlıdır. Doğrulanmayan her hizmet bölümü `TBD` kalır ve yayına alınmaz.

### 4.1 Üst seviye navigasyon (aday)
1. **Ana Sayfa**
2. **Çözümler / Ürünler** — `TBD` (hangi ürün aileleri gerçekten sunuluyor?)
3. **Servisler** — şemsiye bölüm, aşağıdakileri kapsayabilir:
   - **Bakım** — `TBD`
   - **Onarım** — `TBD`
   - **Modernizasyon** — `TBD`
4. **Projeler / Referanslar** — `TBD` (yeni firma; referans olmayabilir — bkz. 4.4)
5. **Kurumsal / Hakkımızda** — `TBD`
6. **SSS / Bilgi Merkezi** — `TBD`
7. **İletişim / Teklif** — her zaman erişilebilir birincil CTA

### 4.2 Olası içerik hiyerarşisi
```
Ana Sayfa
├── Hero (marka ifadesi + birincil CTA)
├── Ne yapıyoruz (doğrulanmış hizmet kategorileri özeti)
├── Çözümler / Ürünler önizleme  → detay sayfaları
├── Servisler önizleme (Bakım / Onarım / Modernizasyon) → detay sayfaları
├── Neden Ascent (değer önermesi — iddiasız, doğrulanabilir)
├── Projeler önizleme (varsa) → Projeler sayfası
├── Kurumsal kısa özet → Hakkımızda
└── İletişim / Teklif bandı

Çözümler / Ürünler (indeks)
└── [Ürün ailesi] (detay)  ×N   — hepsi TBD
     ├── Kullanım senaryoları / uygun bina tipleri
     ├── Teknik parametre tablosu (kapasite, hız, durak — TBD)
     ├── Kabin / tasarım / özelleştirme seçenekleri (TBD)
     └── CTA: Bu ürün için teklif al

Servisler (indeks)
├── Bakım (detay)         — kapsam, periyot, SLA: TBD
├── Onarım (detay)        — süreç, acil müdahale: TBD
└── Modernizasyon (detay) — ne zaman gerekir, kapsam: TBD

Projeler / Referanslar
└── [Proje kaydı] ×N — TBD (izin alınmış, doğrulanmış olmalı)

Kurumsal / Hakkımızda
├── Kısa hikaye (yeni kurulmuş — VERIFIED)
├── Yaklaşım / değerler (iddiasız)
├── Ekip (TBD — isim/unvan/görsel yoksa bölüm gizli)
└── Belgeler / sertifikalar (TBD — yoksa bölüm yok)

SSS / Bilgi Merkezi
└── Soru-cevap + terimler sözlüğü (genel sektör bilgisi; şirkete özel iddia yok)

İletişim / Teklif
├── Teklif formu (yapılandırılmış: ihtiyaç tipi, bina tipi, konum, mesaj)
├── İletişim kanalları (telefon / e-posta / adres — hepsi TBD)
└── Konum / harita (TBD)
```

### 4.3 Yönlendirme / URL prensipleri
- Türkçe, kısa, kalıcı slug'lar: `/cozumler`, `/servisler/bakim`, `/projeler`, `/kurumsal`, `/iletisim`.
- Slug'lar içerik onaylanana kadar oluşturulmaz; taslak sayfalar `noindex`.
- Yapı, ileride `/en/` çok dilli genişlemeye engel olmayacak şekilde tasarlanır (çok dillilik ihtiyacı `TBD`).

### 4.4 Yeni firma gerçeği
- Ascent yeni kurulduğu için **Projeler / Referanslar bölümü boş olabilir.**
- Boş bölümü sahte içerikle doldurmak yasak.
- Alternatif yaklaşım (tasarımda hazır tutulacak): "Projeler" yerine geçici olarak "Yaklaşımımız" / "Süreç" gibi doğrulanabilir içerik; gerçek proje geldikçe bölüm etkinleşir.

---

## 5. Dönüşüm Hedefleri

### 5.1 Birincil dönüşüm
- **Teklif / iletişim formu gönderimi.**
- Form yapılandırılmış olmalı: ihtiyaç tipi (yeni kurulum / bakım / onarım / modernizasyon / diğer), bina tipi, konum (il/ilçe), ad, iletişim, mesaj, KVKK onayı.

### 5.2 İkincil dönüşümler
- Telefonu arama (mobilde `tel:` — numara `TBD`)
- E-posta gönderme (adres `TBD`)
- WhatsApp / hızlı iletişim (kanal kullanılacak mı `TBD`)
- Ürün/servis detay sayfasına ilerleme (mikro-dönüşüm)
- Bilgi Merkezi / SSS okuma (yardımcı dönüşüm)

### 5.3 Dönüşüm tasarım kuralları
- İletişim / teklif CTA'sı **her ekranda, her scroll konumunda** erişilebilir olmalı (bkz. `DESIGN.md` persistent navigation).
- Kullanıcı aksiyon almak için sayfanın başına dönmek zorunda kalmamalı.
- Form kısa tutulur; zorunlu alan minimumda.
- Her hizmet detay sayfasının sonunda bağlama özel CTA bulunur.
- Onay/teşekkür durumu net; beklenen dönüş süresi belirtilir (süre `TBD`).

---

## 6. İçerik Kuralları

1. **Uydurma yok.** Doğrulanmamış hiçbir bilgi yazılmaz: sertifika, istatistik, adres, telefon, proje sayısı, deneyim yılı, çözüm ortağı marka, personel sayısı, kapasite iddiası, "Türkiye'nin lideri" vb.
2. **TBD işaretleme.** Bilinmeyen her şirket bilgisi içerikte ve bu dokümanlarda açıkça `TBD` olarak işaretlenir. `TBD` içerik yayına alınmaz / `noindex` kalır / bölüm gizlenir.
3. **Doğrulama kaynağı.** Bir bilgi ancak müşteriden yazılı/sözlü teyit alınıp `CONTENT.md` içinde `VERIFIED` işaretlenince kullanılabilir.
4. **Dil.** Açık, sade, profesyonel Türkçe. Gereksiz teknik jargon açıklanır. Abartılı pazarlama sıfatlarından kaçınılır ("devrim niteliğinde", "sektörün en iyisi").
5. **Ton.** Kendinden emin ama mütevazı; mühendislik ciddiyeti; premium ama gösterişsiz.
6. **İddia hijyeni.** Her niteliksel iddia ya doğrulanabilir ya da yumuşatılır ("hedefimiz", "yaklaşımımız" gibi). Sayısal iddia yalnızca `VERIFIED` ise.
7. **Yeni firma dürüstlüğü.** "Yeni kurulmuş olmak" zayıflık gibi sunulmaz; modern yaklaşım / güncel teknoloji / kişisel ilgi çerçevesinde konumlanır — ama bunlar da iddia değil, yaklaşım olarak yazılır.
8. **Görsel içerik.** Stok "mutlu ofis insanları" görselleri kullanılmaz. Mimari / mühendislik / malzeme / dikey mekan odaklı görsel yön (bkz. `DESIGN.md`). Gerçek proje görseli yalnızca izinli ve `VERIFIED` ise.
9. **Yasal.** KVKK aydınlatma metni, çerez bildirimi, gizlilik politikası gerekli (metinler `TBD` — hukuki kaynak müşteriden).
10. **Referans sitelerden kopyalama yok.** Schindler/Astra metinleri, marka kimliği, görsel tasarım veya birebir layout kopyalanmaz; yalnızca bilgi mimarisi ilham kaynağı.

---

## 7. SEO Prensipleri

### 7.1 Teknik
- App Router ile sunucu tarafında render edilen, statik/prerender öncelikli sayfalar.
- Temiz semantik HTML: tek `<h1>`, mantıklı başlık hiyerarşisi, `<nav>`, `<main>`, `<footer>` landmark'ları.
- `metadata` API ile sayfa başına title/description; Open Graph ve Twitter kartları.
- `sitemap.xml` ve `robots.txt` (yalnızca `VERIFIED` sayfalar indekslenir).
- Canonical URL'ler; gereksiz parametre/duplicate yok.
- `JSON-LD` yapısal veri: `Organization` / `LocalBusiness` — **ancak alanlar `VERIFIED` olduğunda** (ad, logo, adres, telefon, coğrafi bölge). O zamana kadar minimal `Organization` (yalnızca ad + site).
- Görseller `next/image`, doğru boyut, `alt` metni, lazy-load.
- Performans SEO'nun parçası: Core Web Vitals hedefleri (bkz. `DESIGN.md`).

### 7.2 İçerik / anahtar kelime
- Niyet bazlı sayfa yapısı: "asansör bakım [şehir]", "asansör modernizasyonu nedir", "yeni bina asansör teklifi" gibi aramalar hedeflenebilir — **şehir/bölge `VERIFIED` olduğunda.**
- Her hizmet sayfası tek net konuya odaklanır (bakım ≠ onarım ≠ modernizasyon ayrı sayfalar).
- SSS / Bilgi Merkezi: gerçek kullanıcı sorularına yanıt; `FAQPage` yapısal verisi.
- Anahtar kelime doldurma yok; doğal dil.
- Yerel SEO (Google Business Profile) müşteri bilgisi sonrası planlanır (`TBD`).

### 7.3 Ölçüm
- Analytics ve Search Console kurulumu `TBD` (araç seçimi + KVKK uyumlu yapılandırma müşteri onayına bağlı).

---

## 8. Güven Oluşturma İhtiyaçları

Yeni bir firma için güven en kritik sorun. Sahte sinyal olmadan güven kurmak:

| İhtiyaç | Yaklaşım | Durum |
|---------|----------|-------|
| Firma gerçek mi? | Net kurumsal kimlik, gerçek iletişim bilgisi, adres, ticari unvan | `TBD` (bilgi bekleniyor) |
| İşi biliyorlar mı? | Açık, doğru, jargonsuz teknik içerik; süreç anlatımı; Bilgi Merkezi | Yapılabilir (genel sektör bilgisi) |
| Standartlara uyuyorlar mı? | İlgili yönetmelik/standartlara uygunluk ifadesi (TSE, CE, ilgili asansör yönetmeliği) | `TBD` — yalnızca belge varsa |
| Sorumluluk alıyorlar mı? | Servis/müdahale süreleri, garanti, sözleşme kapsamı şeffaflığı | `TBD` |
| Başkaları çalışmış mı? | Projeler / referanslar / müşteri görüşleri | `TBD` (yeni firma — olmayabilir) |
| Ekip kim? | İsim, unvan, kısa özgeçmiş, gerçek fotoğraf | `TBD` |
| Ulaşılabilir mi? | Persistent iletişim CTA, hızlı yanıt vaadi, birden çok kanal | Tasarımda garanti; içerik `TBD` |
| Modern/ciddi mi? | Premium tasarım kalitesi, performans, erişilebilirlik | Bu projenin çıktısı |

**Kural:** Güven sinyali eksikse boş bırakılır veya bölüm gizlenir — asla uydurulmaz.

---

## 9. Eksik / TBD Şirket Bilgileri (özet — tam liste `CONTENT.md`'de)

- Yasal ticari unvan, kuruluş tarihi/yılı
- Logo ve marka varlıkları
- Marka renkleri / görsel kimlik
- Adres(ler), hizmet verilen bölge/iller
- Telefon, e-posta, WhatsApp, çalışma saatleri
- Sunulan **gerçek** hizmet ve ürün listesi ve her birinin kapsamı
- Ürün aileleri, teknik parametreler, kabin/tasarım seçenekleri
- Bakım paketleri, periyotları, servis/müdahale süreleri (SLA), garanti şartları
- Modernizasyon kapsamı ve süreci
- Sertifikalar, belgeler, standart uygunlukları, sigortalar
- Ekip bilgileri (isim, unvan, foto)
- Projeler / referanslar (izinli, doğrulanmış)
- Müşteri görüşleri / testimonial
- Sosyal medya hesapları
- Yasal metinler (KVKK, gizlilik, çerez) kaynağı
- Analytics / ölçüm tercihi
- Çok dillilik ihtiyacı (İngilizce vb.)
- Hedef segment önceliği ve iş modeli detayı

---

## 10. Vazgeçilmezler / Non-negotiables

Bu maddeler üç dokümanda da ortaktır ve pazarlık konusu değildir:

1. **Uydurma şirket bilgisi yok.** Doğrulanmamış her bilgi `TBD`; yayına girmez.
2. **Premium görsel kalite.** Şablon / stok kurumsal / klişe asansör firması hissi kabul edilmez.
3. **Sürekli erişilebilir navigasyon ve iletişim.** Kullanıcı hiçbir scroll konumunda menüye ve teklif/iletişim CTA'sına erişmek için başa dönmek zorunda kalmaz.
4. **Tam responsive uygulama.** Büyük masaüstü, masaüstü, laptop, tablet, mobil — hepsinde profesyonel. Responsive sonradan düzeltilecek bir detay değil, temel gereksinim.
5. **Erişilebilirlik / reduced motion.** Touch cihazlarda kritik özellik hover'a bağlı olamaz; `prefers-reduced-motion` desteklenir; klavye ve ekran okuyucu ile kullanılabilir.
6. **Performans odaklı animasyon.** Motion, layout shift ve jank üretmez; içeriği destekler, gimmick olmaz; mobilde hafifletilir.
7. **Referans sitelerini kopyalamayan özgün tasarım.** Schindler / Astra yalnızca bilgi mimarisi referansı; metin, kimlik, görsel, layout kopyalanmaz.
