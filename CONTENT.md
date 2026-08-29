# CONTENT.md — Ascent Elevator

> Yapılandırılmış içerik envanteri. Her bilgi **VERIFIED** veya **TBD** olarak işaretlidir.
> Strateji için `PRODUCT.md`, görsel dil için `DESIGN.md`.
> Durum: **v0** — neredeyse tüm şirkete özel bilgi `TBD`. Müşteri görüşmesinden sonra güncellenecek.

---

## 0. Durum Anahtarı

| Etiket | Anlamı | Sitede kullanım |
|--------|--------|-----------------|
| **VERIFIED** | Müşteriden yazılı/sözlü teyit alınmış, kaynağı belli | Yayınlanabilir, indekslenebilir |
| **TBD** | Bilinmiyor / doğrulanmamış / taslak | Yayınlanmaz. Bölüm gizlenir veya `noindex` placeholder kalır |
| **DRAFT** | Bizim yazdığımız, şirkete özel iddia içermeyen genel metin (ör. SSS sektör bilgisi) | Müşteri onayından sonra yayınlanabilir |
| **ASSUMPTION** | Çalışma varsayımı; doğrulanması gerekir | Yayınlanmaz |

**Altın kural:** Şüphe varsa `TBD`. Sertifika, istatistik, adres, telefon, proje sayısı, deneyim yılı, iş ortağı marka, hizmet kapsamı — hiçbiri teyitsiz yazılmaz.

---

## 1. Şirket Kimliği

| Alan | Değer | Durum |
|------|-------|-------|
| Marka adı | Ascent Elevator | **VERIFIED** |
| Yasal ticari unvan | — | **TBD** |
| Kuruluş yılı / tarihi | Yeni kurulmuş (kesin tarih yok) | **TBD** (yıl) / kuruluşun yeni olduğu **VERIFIED** |
| Şirket türü (Ltd./A.Ş.) | — | **TBD** |
| Vergi dairesi / no | — | **TBD** (yalnızca footer/yasal alanda gerekirse) |
| MERSIS / ticaret sicil no | — | **TBD** |
| Kısa tanım (1 cümle) | "Ascent Elevator yeni kurulmuş bir asansör firmasıdır." | **VERIFIED** (bundan fazlası TBD) |
| Uzun tanım / hikaye | — | **TBD** |
| Misyon / vizyon / değerler | — | **TBD** (varsa; yoksa uydurulmaz) |
| Slogan / tagline | — | **TBD** |
| Hedef pazar (konut / ticari / kurumsal / ihracat) | — | **TBD** |
| Hizmet verilen coğrafya (il/ilçe/bölge/ulusal) | — | **TBD** |

---

## 2. Marka Varlıkları

| Varlık | Durum | Not |
|--------|-------|-----|
| Logo (yatay / dikey / işaret) | **TBD** | Şimdilik "Ascent" kelime-işareti placeholder |
| Logo dosya formatları (SVG, PNG) | **TBD** | SVG tercih |
| Favicon / app icon | **TBD** | Şu an Next.js varsayılanı |
| Marka renkleri (primary / accent / nötr) | **TBD** | `DESIGN.md` §6 — palet kilitlenmedi |
| Marka tipografisi (varsa kurumsal font) | **TBD** | Yoksa `DESIGN.md`'deki geçici roller kullanılır |
| Marka kılavuzu / brand book | **TBD** | Varsa istenecek |
| Fotoğraf arşivi / çekim hakları | **TBD** | Gerçek proje foto'ları izinli olmalı |
| Video varlıkları | **TBD** | |
| Sunum / broşür / katalog PDF'leri | **TBD** | İçerik çıkarımı için faydalı |
| OG / paylaşım görseli | **TBD** | Marka gelince üretilecek |

---

## 3. Navigasyon ve Global Öğeler

> Etiketler **taslak**; kesin İA müşteri onayına bağlı (`PRODUCT.md` §4).

| Öğe | Taslak metin | Durum | Not |
|-----|--------------|-------|-----|
| Nav — Ana Sayfa | "Ana Sayfa" | DRAFT | |
| Nav — Çözümler/Ürünler | "Çözümler" | **TBD** | Gerçek ürün gamı bilinmiyor |
| Nav — Servisler | "Servisler" | **TBD** | Alt kırılım: Bakım / Onarım / Modernizasyon |
| Nav — Projeler | "Projeler" | **TBD** | Yeni firma — bölüm olmayabilir |
| Nav — Kurumsal | "Kurumsal" | **TBD** | |
| Nav — Bilgi Merkezi/SSS | "Bilgi Merkezi" | **TBD** | |
| Nav — İletişim | "İletişim" | DRAFT | |
| Birincil CTA metni | "Teklif Al" (aday) | **TBD** | "Teklif İste" / "İletişime Geç" — müşteri tercihi |
| Birincil CTA hedefi | `/iletisim` (aday) | **TBD** | |
| Mobil hızlı aksiyon | "Ara" / telefon ikonu | **TBD** | Numara yok |
| Footer — kısa açıklama | — | **TBD** | |
| Footer — hızlı linkler | Nav ile aynı | DRAFT | |
| Footer — yasal linkler | KVKK / Gizlilik / Çerez | **TBD** | Metinler yok |
| Footer — sosyal medya | — | **TBD** | Hesap var mı bilinmiyor |
| Footer — telif satırı | "© {yıl} Ascent Elevator" | DRAFT | Unvan netleşince güncellenir |
| Dil seçenekleri | — | **TBD** | Çok dillilik ihtiyacı belirsiz |

---

## 4. Sayfa Bazlı İçerik Envanteri

### 4.1 Ana Sayfa

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| Hero başlık | Marka konumlandırma cümlesi | **TBD** |
| Hero alt metin | 1–2 cümle değer önermesi (iddiasız) | **TBD** |
| Hero CTA | Birincil + ikincil | **TBD** |
| Hero görseli | Mimari/dikey mekan | **TBD** |
| "Ne yapıyoruz" | Doğrulanmış hizmet kategorileri (2–5 madde) | **TBD** |
| Çözümler önizleme | Ürün ailesi başlıkları + kısa açıklama | **TBD** |
| Servisler önizleme | Bakım / Onarım / Modernizasyon kısa tanım | **TBD** |
| Yaklaşım / Neden Ascent | Doğrulanabilir farklılaşma (uydurma değil) | **TBD** |
| Projeler önizleme | Yalnızca VERIFIED proje varsa | **TBD** |
| İletişim/teklif bandı | Kapanış CTA + kısa güven cümlesi | **TBD** |

### 4.2 Çözümler / Ürünler

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| İndeks açıklaması | Ürün gamının genel çerçevesi | **TBD** |
| Ürün ailesi listesi | Gerçekten sunulan aileler (ör. yolcu / yük / panoramik / ev tipi / engelli platformu / yürüyen merdiven / yürüyen yol — **hangileri gerçek?**) | **TBD** |
| Her ürün ailesi için: kısa tanım | | **TBD** |
| — uygun bina/kullanım tipleri | | **TBD** |
| — teknik parametreler (kapasite, hız, durak, kuyu ölçüleri, tahrik tipi) | | **TBD** |
| — kabin / kaplama / tasarım seçenekleri | | **TBD** |
| — standart/mevzuat uygunluğu | | **TBD** (yalnızca belge varsa) |
| — görseller / teknik çizim | | **TBD** |
| — CTA (bu ürün için teklif) | | DRAFT |

> ⚠️ Yürüyen merdiven / yürüyen yol referans sitelerde var diye Ascent'e eklenmez. Yalnızca müşteri "evet bunu yapıyoruz" derse.

### 4.3 Servisler (şemsiye)

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| Servis yaklaşımı genel metni | | **TBD** |
| Kapsanan servis türleri | | **TBD** |
| Müdahale / yanıt süreleri (SLA) | | **TBD** |
| 7/24 acil servis var mı | | **TBD** |
| Servis bölgesi | | **TBD** |

#### 4.3.1 Bakım
| Alan | Durum |
|------|-------|
| Bakım tanımı / neden gerekli (genel sektör bilgisi) | DRAFT |
| Ascent'in bakım paket(ler)i ve kapsamı | **TBD** |
| Periyodik bakım sıklığı | **TBD** |
| Sözleşme türleri / süreleri | **TBD** |
| Yasal periyodik kontrol (A/B muayene) süreci — genel bilgi | DRAFT |
| Bakım kapsamına dahil / hariç kalemler | **TBD** |
| Yedek parça yaklaşımı | **TBD** |
| CTA | DRAFT |

#### 4.3.2 Onarım
| Alan | Durum |
|------|-------|
| Onarım hizmeti tanımı (genel) | DRAFT |
| Arıza tespiti / süreç adımları | **TBD** |
| Acil müdahale kapsamı ve süresi | **TBD** |
| Mahsur kalma / kurtarma prosedürü — genel bilgi | DRAFT |
| Garanti / iş sonrası taahhüt | **TBD** |
| CTA | DRAFT |

#### 4.3.3 Modernizasyon
| Alan | Durum |
|------|-------|
| Modernizasyon nedir / ne zaman gerekir (genel) | DRAFT |
| Kısmi vs. tam modernizasyon kapsamı | **TBD** |
| Ascent'in modernizasyon süreci | **TBD** |
| Enerji verimliliği / erişilebilirlik / güvenlik güncellemeleri | **TBD** |
| Bina kullanımını durdurmadan çalışma yaklaşımı | **TBD** |
| Örnek öncesi/sonrası | **TBD** |
| CTA | DRAFT |

### 4.4 Projeler / Referanslar

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| Proje kayıtları (isim, konum, bina tipi, yapılan iş, yıl, görsel) | **TBD** | Yeni firma — muhtemelen boş |
| Referans izni (müşteriden yazılı onay) | **TBD** | Her referans için gerekli |
| Müşteri görüşleri / testimonial | **TBD** | |
| Alternatif: "Yaklaşımımız / Süreç" bölümü (proje yokken) | DRAFT | Doğrulanabilir içerik |

### 4.5 Kurumsal / Hakkımızda

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| Kuruluş hikayesi | | **TBD** (yeni olduğu **VERIFIED**) |
| Kurucu(lar) / yönetim | | **TBD** |
| Ekip (isim, unvan, foto, kısa özgeçmiş) | | **TBD** |
| Yaklaşım / çalışma prensipleri | | **TBD** |
| Kalite / güvenlik politikası | | **TBD** |
| Sertifikalar / belgeler / üyelikler (TSE, ISO, CE, oda üyeliği, yetkili servis belgeleri) | | **TBD** — yalnızca belge fiziksel olarak varsa |
| Sigorta (mesleki sorumluluk vb.) | | **TBD** |
| İş ortakları / tedarikçi markalar | | **TBD** — teyitsiz marka logosu **yasak** |
| Kariyer / açık pozisyonlar | | **TBD** |
| İnsan kaynakları / başvuru kanalı | | **TBD** |

### 4.6 SSS / Bilgi Merkezi

| Blok | İçerik ihtiyacı | Durum |
|------|-----------------|-------|
| Genel sektör soruları (bakım sıklığı nedir, modernizasyon ne zaman gerekir, asansör muayenesi nedir, kırmızı/yeşil etiket, enerji sınıfı vb.) | DRAFT | Şirkete özel iddia yok; genel doğru bilgi |
| Terimler sözlüğü (kuyu, kabin, tahrik, regülatör, buffer, revizyon, A/B muayene…) | DRAFT | |
| Ascent'e özel sorular (fiyatlandırma, süre, bölge, sözleşme) | **TBD** | Yanıtlar müşteri bilgisine bağlı |
| İletişim yönlendirmesi | DRAFT | |

### 4.7 İletişim / Teklif

| Alan | Durum |
|------|-------|
| Telefon numarası / numaraları | **TBD** |
| E-posta adres(ler)i | **TBD** |
| WhatsApp / hızlı hat | **TBD** (kullanılacak mı belirsiz) |
| Fiziksel adres(ler) | **TBD** |
| Harita konumu / koordinat | **TBD** |
| Çalışma saatleri | **TBD** |
| Acil servis hattı (ayrı mı) | **TBD** |
| Teklif formu alanları | DRAFT (aşağıda) |
| Form gönderim hedefi (e-posta / CRM / servis) | **TBD** |
| Otomatik yanıt / teşekkür metni | **TBD** |
| Beklenen dönüş süresi ifadesi | **TBD** |
| KVKK aydınlatma / açık rıza metni | **TBD** (hukuki kaynak müşteriden) |

#### Teklif formu — önerilen alanlar (DRAFT)
- İhtiyaç türü: Yeni kurulum / Bakım / Onarım / Modernizasyon / Diğer
- Bina türü: Konut / Ofis / Ticari / Endüstriyel / Kamu / Diğer *(TBD — segmentlere göre)*
- Konum (il / ilçe)
- Kat sayısı / durak *(opsiyonel)*
- Ad Soyad *(zorunlu)*
- Telefon *(zorunlu)*
- E-posta *(zorunlu)*
- Mesaj / detay *(opsiyonel)*
- KVKK onay kutusu *(zorunlu — metin TBD)*

---

## 5. Mikrokopya Envanteri (DRAFT — şirkete özel iddia içermez)

| Bağlam | Taslak metin | Durum |
|--------|--------------|-------|
| Form gönder butonu | "Teklif Talebi Gönder" | DRAFT |
| Form başarı | "Talebiniz alındı. En kısa sürede size döneceğiz." | DRAFT (süre eklenmez — TBD) |
| Form hata (genel) | "Bir şeyler ters gitti. Lütfen tekrar deneyin veya bize doğrudan ulaşın." | DRAFT |
| Zorunlu alan | "Bu alan gerekli." | DRAFT |
| Geçersiz e-posta | "Geçerli bir e-posta adresi girin." | DRAFT |
| 404 başlık | "Bu sayfayı bulamadık." | DRAFT |
| 404 aksiyon | "Ana sayfaya dön" | DRAFT |
| Çerez bildirimi | — | **TBD** (yasal) |
| Menü aç/kapa (aria-label) | "Menüyü aç" / "Menüyü kapat" | DRAFT |
| Skip link | "İçeriğe geç" | DRAFT |
| Boş projeler durumu | "İlk projelerimizi kısa süre içinde burada paylaşacağız." | DRAFT (yalnızca müşteri onaylarsa) |

---

## 6. Görsel / Medya İhtiyaç Listesi

| İhtiyaç | Kaynak | Durum |
|---------|--------|-------|
| Hero görseli (mimari, dikey mekan) | Müşteri arşivi veya lisanslı | **TBD** |
| Ürün/çözüm görselleri | Müşteri | **TBD** |
| Kabin / kaplama / detay makroları | Müşteri | **TBD** |
| Servis/saha fotoğrafları | Müşteri (izinli) | **TBD** |
| Proje öncesi/sonrası | Müşteri (izinli) | **TBD** |
| Ekip portreleri | Müşteri | **TBD** |
| Teknik çizim / şema | Müşteri | **TBD** |
| İkon seti | Sonra kararlaştırılacak (kütüphane henüz yok) | **TBD** |
| Video (varsa) | Müşteri | **TBD** |

> Görsel gelene kadar: `DESIGN.md` §5 — tipografi + boşluk + hairline ile görselsiz zarif bölüm tasarımı.

---

## 7. SEO / Meta İçerik Envanteri

| Sayfa | Title (TBD) | Meta description (TBD) | Durum |
|-------|-------------|------------------------|-------|
| Ana Sayfa | — | — | **TBD** (marka konumu netleşince) |
| Çözümler | — | — | **TBD** |
| Servisler + alt sayfalar | — | — | **TBD** |
| Projeler | — | — | **TBD** |
| Kurumsal | — | — | **TBD** |
| Bilgi Merkezi | — | — | **TBD** |
| İletişim | — | — | **TBD** |

| Global SEO alanı | Değer | Durum |
|------------------|-------|-------|
| Site adı | Ascent Elevator | **VERIFIED** |
| Varsayılan OG görseli | — | **TBD** |
| `Organization` JSON-LD (ad) | Ascent Elevator | **VERIFIED** |
| `Organization` JSON-LD (logo, url, sameAs) | — | **TBD** |
| `LocalBusiness` JSON-LD (adres, tel, coğrafya, saatler) | — | **TBD** |
| Doğrulanan hizmet alanı (areaServed) | — | **TBD** |
| robots.txt politikası | Yalnızca VERIFIED sayfalar `index` | DRAFT |
| Analytics aracı | — | **TBD** (KVKK uyumlu seçim) |

---

## 8. Yasal / Uyumluluk İçeriği

| Belge | Durum | Kaynak |
|-------|-------|--------|
| KVKK Aydınlatma Metni | **TBD** | Müşteri / hukuk danışmanı |
| Açık Rıza Metni (form) | **TBD** | Müşteri / hukuk danışmanı |
| Gizlilik Politikası | **TBD** | Müşteri / hukuk danışmanı |
| Çerez Politikası + banner | **TBD** | Müşteri / hukuk danışmanı |
| Kullanım Şartları (gerekirse) | **TBD** | Müşteri / hukuk danışmanı |
| Ticari elektronik ileti / İYS (form onayı) | **TBD** | Pazarlama izni alınacaksa |

> Bu metinler bizim tarafımızdan uydurulmaz; şablon doldurulsa bile müşteri/hukuk onayı şart.

---

## 9. Müşteri Bilgi Kontrol Listesi (yarınki görüşme için)

> Amaç: `TBD` alanları `VERIFIED`'a çevirmek. Her kaleme kaynak/tarih notu düşülecek. Cevap "bilmiyorum / henüz yok" ise **öyle kaydedilir, uydurulmaz.**

### A) Şirket kimliği
- [ ] Yasal ticari unvan (tam)
- [ ] Şirket türü (Ltd. / A.Ş. / şahıs)
- [ ] Kuruluş yılı (ve varsa ay)
- [ ] MERSIS / ticaret sicil no (footer/yasal için gerekirse)
- [ ] Vergi dairesi ve no (gerekirse)
- [ ] Şirketi 1–2 cümlede nasıl tanımlıyorsunuz?
- [ ] Bir slogan / tagline var mı?
- [ ] Misyon / vizyon / değerler yazılı mı? (varsa metni)

### B) Marka
- [ ] Logo dosyaları (SVG + PNG, yatay/dikey varyant)
- [ ] Marka renkleri (HEX kodları) — kesinleşti mi?
- [ ] Kurumsal font var mı? (lisans dahil)
- [ ] Marka kılavuzu / brand book var mı?
- [ ] Favicon / ikon
- [ ] Kullanılabilir fotoğraf/video arşivi + hakları

### C) Konum ve iletişim
- [ ] Fiziksel adres(ler) (tam)
- [ ] Genel telefon numarası
- [ ] Acil/servis hattı ayrı mı? Numarası?
- [ ] Genel e-posta adresi
- [ ] Bölüm bazlı e-posta (satış / servis / İK) var mı?
- [ ] WhatsApp hattı kullanılacak mı? Numarası?
- [ ] Çalışma saatleri
- [ ] Harita konumu (Google Maps linki / koordinat)
- [ ] Hizmet verdiğiniz iller / bölgeler (net liste)

### D) Hizmetler ve ürünler — EN KRİTİK
- [ ] Şu an **gerçekten** sunduğunuz hizmetler nelerdir? (madde madde)
- [ ] Yeni asansör kurulumu yapıyor musunuz?
- [ ] Hangi asansör türleri? (yolcu / yük / panoramik / ev tipi / hastane / engelli platformu / sedye / araç…)
- [ ] Yürüyen merdiven yapıyor musunuz? Yürüyen yol/bant?
- [ ] Bakım hizmeti veriyor musunuz? Paket yapınız nedir?
- [ ] Bakım periyodu ve sözleşme türleri
- [ ] Bakım kapsamına dahil / hariç olanlar
- [ ] 7/24 acil servis var mı? Hedef müdahale süresi?
- [ ] Onarım hizmeti kapsamı
- [ ] Modernizasyon yapıyor musunuz? Kısmi / tam?
- [ ] Yedek parça temini / stok yaklaşımı
- [ ] Kendi üretiminiz mi var, montaj/entegrasyon mu, ithal mi? (marka bağımlılığı)
- [ ] Kullandığınız/temsil ettiğiniz markalar — **web'de belirtmek için izniniz/yetkiniz var mı?**
- [ ] Teknik parametre aralıkları (kapasite kg, hız m/s, durak sayısı) — paylaşılabilir mi?
- [ ] Kabin / kaplama / tasarım özelleştirme seçenekleri

### E) Kalite, belge, uyumluluk
- [ ] Sahip olduğunuz belgeler: TSE, ISO 9001, CE, hizmet yeterlilik belgesi, yetkili servis belgesi…
- [ ] Oda / dernek üyelikleri (Asansör Sanayicileri, ilgili meslek odası…)
- [ ] Mesleki sorumluluk sigortası var mı?
- [ ] Asansör Yönetmeliği / ilgili standartlara uygunluk beyanı yapabilir miyiz?
- [ ] Belge görselleri/kopyaları paylaşılabilir mi?

### F) Referanslar ve sosyal kanıt
- [ ] Tamamlanmış proje var mı? (yeni firma — normal ise "yok")
- [ ] Varsa: proje adı, konum, bina tipi, yapılan iş, yıl
- [ ] Bu projeleri web'de **isimle** paylaşma izniniz var mı? (yazılı onay)
- [ ] Müşteri görüşü / testimonial alabilir miyiz? Kimden?
- [ ] Devam eden görüşme/anlaşmalar duyurulabilir mi?

### G) Kurumsal / ekip
- [ ] Kurucu(lar) ve yönetim — isim, unvan
- [ ] Ekipte web'de tanıtmak istediğiniz kişiler (isim, unvan, foto, kısa bio)
- [ ] Kaç kişilik ekip? (yazmak isterseniz)
- [ ] Kariyer sayfası / açık pozisyon olacak mı?

### H) Dijital ve pazarlama
- [ ] Sosyal medya hesapları (Instagram, LinkedIn, YouTube…) — linkler
- [ ] Google Business Profile var mı?
- [ ] Alan adı (domain) elinizde mi? Hangisi?
- [ ] E-posta altyapısı / kurumsal e-posta sağlayıcısı
- [ ] Analytics tercihiniz var mı? (KVKK uyumlu kurulum yapacağız)
- [ ] Form talepleri nereye düşsün? (e-posta adresi / CRM)
- [ ] Ticari elektronik ileti (bülten/kampanya) göndermeyi planlıyor musunuz? (İYS gerekebilir)

### I) İçerik ve dil
- [ ] Site tek dil mi (Türkçe), İngilizce de gerekli mi?
- [ ] İçerikleri siz mi vereceksiniz, biz mi yazıp onaylatacağız?
- [ ] Kaçınmak istediğiniz ifadeler / rakiplerden ayrışma noktanız
- [ ] Yayına hedef tarih

### J) Yasal
- [ ] KVKK aydınlatma metni / gizlilik / çerez politikası — sizde var mı, hukuk danışmanınız mı hazırlayacak?
- [ ] Telif satırında görünecek yasal unvan

---

## 10. İçerik İş Akışı

1. Görüşmeden gelen her cevap bu dosyada ilgili satıra işlenir; durum `TBD → VERIFIED` (veya `TBD` olarak kalır, "müşteri: henüz yok" notuyla).
2. `VERIFIED` içerik `content/` katmanına (yapı `PRODUCT.md` netleşince) taşınır.
3. Yalnızca `VERIFIED` sayfalar `robots`/`sitemap`'e girer.
4. `DRAFT` metinler müşteri onayından sonra `VERIFIED` sayılır.
5. Bir bilgi sonradan değişirse: önce bu dosya, sonra içerik katmanı güncellenir.

---

## 11. Vazgeçilmezler / Non-negotiables

1. **Uydurma şirket bilgisi yok.** Sertifika, istatistik, adres, telefon, proje/deneyim sayısı, iş ortağı marka, hizmet kapsamı — teyitsiz asla yazılmaz. Şüphe = `TBD`.
2. **Premium görsel kalite.** İçerik, `DESIGN.md`'deki editöryal/mimari yönü besleyecek şekilde yazılır; stok kurumsal klişe dil ve görsel kullanılmaz.
3. **Sürekli erişilebilir navigasyon ve iletişim.** İletişim/teklif bilgisi ve CTA metni tek yerden yönetilir; her sayfada ve her scroll konumunda erişilebilir kalır (içerik `TBD` olsa da yapı hazır).
4. **Tam responsive uygulama.** İçerik uzunlukları (başlık, tablo, teknik parametre) tüm ekran boyutlarında taşmadan çalışacak şekilde planlanır.
5. **Accessible / reduced motion.** Tüm metinlerde `alt`, `aria-label`, skip-link mikrokopyası tanımlı; anlam yalnızca renkle verilmez.
6. **Performans odaklı animasyon.** İçerik, animasyon çalışmasa da tam okunur; kritik bilgi motion arkasına saklanmaz.
7. **Referans sitelerini kopyalamayan özgün içerik.** Schindler/Astra metinleri kopyalanmaz; yalnızca hangi bilgi kategorilerinin bulunması gerektiği konusunda referans alınır.
