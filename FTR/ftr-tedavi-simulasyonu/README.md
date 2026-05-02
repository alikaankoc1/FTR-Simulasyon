# FTR Tedavi Simülasyonu

Hasta formu → bölgeye göre örnek tedavi planı → tahmini iyileşme grafiği akışına sahip tek sayfa bir **simülasyon** arayüzüdür. Lisans bitirme projesi kapsamında gösterim amaçlıdır.

## Önemli uyarı

Bu uygulama **tıbbi tavsiye yerine geçmez**. Sunulan programlar, egzersiz metinleri ve grafikler tamamen demo içeriğidir; gerçek rahatsızlıkta uzman hekim veya fizyoterapist değerlendirmesi gereklidir.

## Gereksinimler

- [Node.js](https://nodejs.org/) (LTS önerilir)

## Kurulum ve çalıştırma

Depo kökünden:

```bash
cd FTR/ftr-tedavi-simulasyonu
npm install
npm run dev
```

Tarayıcıda genelde `http://localhost:5173` adresinde açılır.

## Diğer komutlar

| Komut | Açıklama |
|--------|----------|
| `npm run build` | Üretim derlemesi (`dist/`) |
| `npm run preview` | Derlemeyi yerel önizleme |
| `npm run lint` | ESLint kontrolü |
| `npm run test` | Birim testleri (Vitest) |

## Ekran görüntüsü

Rapor veya dokümantasyon için `docs/screenshot.png` ekleyebilir veya bu README’ye görsel yolu ile bağlantı verebilirsiniz.

## Teknolojiler

React 19, Vite, Recharts.
