/**
 * Bölgeye özel FTR simülasyon programları.
 * Egzersiz açıklamaları yaygın rehabilitasyon uygulamalarına dayanır; tanı/tedavi yerine geçmez.
 */
const therapyPrograms = {

    "Bel": {
        title: "Bel Bölgesi İçin Özel FTR Programı",
        goal: "Bel ağrısını azaltmaya yönelik core stabilitesi, pelvis kontrolü ve lomber hareketliliği geliştirmek.",
        duration: "6 Hafta",
        frequency: "Haftada 3 Seans",
        exercisesIntro:
            "Lomber (bel) bölgesi — bel ağrısı, bel fıtığı rehabilitasyonu ve oturarak çalışma kaynaklı gerginlik için evde sık önerilen dört temel FTR hareketi. Önce pelvis ve core farkındalığı, ardından mobilite ve kalça desteği hedeflenir.",
        exercises: [
            {
                name: "Pelvik Tilt Egzersizi (Posterior / Anterior)",
                description:
                    "Amaç: Lomber omurgaya binen yükü azaltmak için pelvis–bel ilişkisini kontrollü hareket ettirmek; derin karın (transversus abdominis) ve pelvik taban kaslarını uyarmak.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü, dizler bükük, ayak tabanları yerde kalça genişliğinde. Kollar yanlarda, omuzlar gevşek.\n\n" +
                    "Uygulama (posterior tilt): Nefes verirken karın kaslarınızı hafifçe içeri çekin; belinizin alt kısmını yavaşça yere doğru bastırın (bel çukuru azalır). Bu pozisyonu 5 saniye tutun. Nefes alarak başlangıca dönün. Ardından kontrollü şekilde hafif anterior tilt (belde küçük bir çukur) yapıp tekrar nötr pozisyona gelin. Hareket küçük ve ağrısız aralıkta kalmalıdır.\n\n" +
                    "Tekrar ve süre: 2 set × 10–15 tekrar; set arası 30 sn dinlenme. Günde 1–2 kez uygulanabilir.\n\n" +
                    "Dikkat: Bacaklara veya kalçaya iterek zorlamayın; hareket pelvis ve karından gelsin. Ağrı artarsa veya bacaklara yayılırsa durun ve uzman değerlendirmesi alın.",
            },
            {
                name: "Kedi–Deve Esnetmesi (Cat–Cow)",
                description:
                    "Amaç: Lomber ve torakal omurgada segment segment mobilite; sırt kaslarında gerginliği azaltmak ve hareket farkındalığını artırmak.\n\n" +
                    "Başlangıç pozisyonu: Dört ayak (eller omuz altında, dizler kalça altında). Baş, boyun ve sırt nötr hizada.\n\n" +
                    "Uygulama: Nefes verirken sırtınızı yukarı doğru yuvarlayın (kedi pozisyonu); başınızı göğsünüze yaklaştırın, karın kaslarınızı hafifçe sıkın. Nefes alırken kontrollü şekilde sırtınızı çukurlaştırın (deve); göğsünüzü öne açın, başınızı yukarı bakmadan uzatın. Her fazada 3–4 saniye tutabilirsiniz.\n\n" +
                    "Tekrar ve süre: 10–12 yavaş döngü (kedi + deve = 1 tekrar). Hareketler akıcı olmalı, zıplama veya sarsıntı olmamalı.\n\n" +
                    "Dikkat: El bileklerinde ağrı varsa yastık altına destek kullanın. Boyun bölgesinde ağrıda baş hareketini küçültün. Bel fıtığı şüphesinde ani aşırı ekstansiyondan kaçının.",
            },
            {
                name: "Gluteal Köprü (Hip Bridge)",
                description:
                    "Amaç: Gluteus maximus ve hamstringleri güçlendirerek beli desteklemek; oturma ve yürümede pelvis stabilitesini artırmak.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü, dizler bükük, ayaklar kalça genişliğinde. Karın hafif sıkı.\n\n" +
                    "Uygulama: Topuklardan iterek kalçanızı yavaşça kaldırın; omuzlar, kalça ve dizler mümkün olduğunca düz bir çizgi oluşturana kadar yükselin. Üstte glute kaslarını 3–5 saniye sıkın; beli aşırı çukurlaştırmayın. Kontrollü şekilde indirin, kalçayı yere “düşürmeyin”.\n\n" +
                    "Tekrar ve süre: 2–3 set × 10–12 tekrar. İlerleyen haftalarda tek bacaklı köprüye geçilebilir (yalnızca ağrısız ise).\n\n" +
                    "Dikkat: Dizlerin içe çökmemesine dikkat edin. Hamstring krampı olursa tekrar sayısını azaltın. Kalça ve bel ağrısı birlikte varsa hareketi küçük genlikte yapın.",
            },
            {
                name: "Kuş–Köpek (Bird Dog) — Core Stabilite",
                description:
                    "Amaç: Derin core ve çoklu ekstremite kontrolü ile lomber segmentleri stabilize etmek; günlük eğilme–uzanma hareketlerine hazırlık.\n\n" +
                    "Başlangıç pozisyonu: Dört ayak; omuzlar elin üzerinde, kalçalar diz hizasında. Karın hafif sıkı, sırt nötr.\n\n" +
                    "Uygulama: Sağ kolu öne, sol bacağı arkaya uzatın (ters çapraz); bel çukurunu aşırı büyütmeyin. 3–5 saniye tutun, başlangıca dönün. Diğer taraf.\n\n" +
                    "Tekrar ve süre: 2 set × 8–10 tekrar/taraf. Pelvik tilt ve köprü ağrısız yapılabiliyorsa eklenir.\n\n" +
                    "Dikkat: Denge için duvara yakın başlayın. Bacak veya kola yayılım, uyuşma varsa durun.",
            },
        ],
        advice: [
            "Uzun süre oturmada her 30–45 dakikada kısa yürüyüş ve hafif pelvik tilt yapın.",
            "Uyurken yan yatışta dizler arası yastık, sırt üstü yatışta diz altı destek bel yükünü azaltabilir.",
            "Ağır kaldırmada nesneyi vücuda yaklaştırın; belden değil bacak ve kalçadan güç alın.",
        ],
    },

    "Boyun": {
        title: "Boyun ve Omuz Çevresi FTR Programı",
        goal: "Servikal hareket açıklığı, derin boyun fleksörleri ve skapular stabiliteyi geliştirmek; günlük duruş yükünü azaltmak.",
        duration: "4 Hafta",
        frequency: "Günde 2 kez (5–10 dakika)",
        exercisesIntro:
            "Boyun bölgesi — boyun fıtığı, servikal gerginlik, baş ağrısı ve masa başı duruş bozukluğu için dört temel FTR uygulaması. Önce kontrollü hareket ve chin tuck, ardından skapular kontrol ve germe.",
        exercises: [
            {
                name: "Çene İçeri Çekme (Chin Tuck)",
                description:
                    "Amaç: “İleri baş” (forward head) duruşunu düzeltmek; derin servikal fleksörleri güçlendirmek ve boyun arkasındaki yapılara binen yükü azaltmak.\n\n" +
                    "Başlangıç pozisyonu: Dik oturma veya duvara sırt dayalı. Omuzlar gevşek, bakış ileri.\n\n" +
                    "Uygulama: Çenenizi geriye doğru çekin; sanki arkada bir raf varmış ve çenenizi ona yaklaştırıyormuşsunuz gibi (başı yukarı kaldırmadan). Boynunuzun arkasında hafif bir uzama hissi normaldir. Pozisyonu 5–10 saniye tutun, gevşetin.\n\n" +
                    "Tekrar ve süre: 10–15 tekrar, günde 2–3 kez. Bilgisayar başı çalışanlarda gün içinde kısa aralar halinde tekrarlanabilir.\n\n" +
                    "Dikkat: Çeneyi göğse bastırmayın; hareket yatay geri çekme olmalıdır. Baş dönmesi veya kol uyuşması olursa durun.",
            },
            {
                name: "Omuz Çevirme ve Skapular Sıkma",
                description:
                    "Amaç: Üst trapez gerginliğini azaltmak; kürek kemiklerinin omurgaya yaklaşması (retraksiyon) ile boyun–omuz kompleksini desteklemek.\n\n" +
                    "Başlangıç pozisyonu: Ayakta veya oturur, kollar yanlarda veya parmak uçları omuz hizasında.\n\n" +
                    "Uygulama (çevirme): Omuzlarınızı yavaşça öne, yukarı, geriye ve aşağı doğru geniş daireler çizerek hareket ettirin. 5–8 tekrar sonra yön değiştirin. Ardından kürek kemiklerinizi birbirine doğru sıkıp 5 saniye tutun (skapular retraksiyon), gevşetin.\n\n" +
                    "Tekrar ve süre: Çevirme her yönde 8–10 tekrar; skapular sıkma 10–15 tekrar.\n\n" +
                    "Dikkat: Omuzları kulaklara kaldırmayın. Boyun ağrısı artıyorsa sadece küçük genlikte çevirme yapın.",
            },
            {
                name: "Boyun Yan Esnetme (Lateral Fleksiyon)",
                description:
                    "Amaç: Üst trapez ve skalen kas grubunda kontrollü germe; servikal yan hareket açıklığını korumak.\n\n" +
                    "Başlangıç pozisyonu: Dik oturma, omuzlar aşağıda ve sabit (omuz kalkmasın).\n\n" +
                    "Uygulama: Sağ kulağınızı sağ omzunuza yaklaştırın (zorlamayın). Sol elinizle başınıza hafifçe ekstra germe verebilirsiniz. 15–20 saniye tutun. Başı yavaşça ortaya getirin; sol taraf için tekrarlayın.\n\n" +
                    "Tekrar ve süre: Her yanda 2–3 tekrar, günde 2 kez. Germe sonrası hafif boyun rotasyonu eklenebilir (ağrı yoksa).\n\n" +
                    "Dikkat: Omuzu yukarı kaldırmayın. Karıncalanma veya kol uyuşması varsa germeyi bırakın. Disk hernisi şüphesinde aşırı rotasyon ve çekme yapılmamalıdır.",
            },
            {
                name: "Kontrollü Boyun Rotasyonu",
                description:
                    "Amaç: Servikal rotasyon açıklığını ağrısız aralıkta korumak; günlük bakış (sürüş, bilgisayar) hareketlerine destek.\n\n" +
                    "Başlangıç pozisyonu: Dik oturma, omuzlar sabit, chin tuck hafif korunur.\n\n" +
                    "Uygulama: Başı yavaşça sağa çevirin, maksimum ağrısız noktada 3–5 saniye tutun. Ortaya dönün; sola tekrarlayın. Zorlamayın.\n\n" +
                    "Tekrar ve süre: Her yönde 8–10 tekrar, günde 2 kez. Yan esnetme sonrası uygulanabilir.\n\n" +
                    "Dikkat: Baş dönmesi, bulantı veya kol uyuşması olursa durun. Vertigo varsa rotasyon egzersizini uzman yönlendirmesiyle yapın.",
            },
        ],
        advice: [
            "Monitör üst kenarı göz hizasında; klavye ve fare dirsek 90° civarında olsun.",
            "Telefonu omuz ve kulak arasında sıkıştırmadan kısa konuşmalar yapın veya kulaklık kullanın.",
            "Yastık yüksekliği yan yatışta boynu nötr uzunlukta tutacak şekilde ayarlanmalıdır.",
        ],
    },

    "Diz": {
        title: "Diz Eklemi Güçlendirme ve Rehabilitasyon Programı",
        goal: "Kuadriseps ve hamstring kuvveti, diz fleksiyon–ekstansiyon açıklığı ve propriosepsiyonu güvenli şekilde geri kazanmak.",
        duration: "8 Hafta",
        frequency: "Haftada 4 Seans",
        exercisesIntro:
            "Diz bölgesi — menisküs, ön çapraz bağ sonrası rehabilitasyon, patellofemoral ağrı ve osteoartrit için dört temel FTR hareketi. Kuadriseps aktivasyonu, fleksiyon açıklığı ve kapalı zincir kuvvet birlikte hedeflenir.",
        exercises: [
            {
                name: "Düz Bacak Kaldırma (Straight Leg Raise – SLR)",
                description:
                    "Amaç: Diz ekstansiyonunu koruyarak vastus medialis obliquus (VMO) ve kuadriseps aktivasyonunu artırmak; eklem içi basıncı düşük tutmak.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü; etkilenen bacak düz, diğer bacak dizden bükülü veya altına yastık.\n\n" +
                    "Uygulama: Etkilenen bacakta quadriceps’i sıkın (diz kapağı yukarı). Bacağı diz düz kalacak şekilde yere paralel yaklaşık 20–30 cm kaldırın. 5 saniye tutun, yavaşça indirin. İndirirken diz bükülmemeli.\n\n" +
                    "Tekrar ve süre: 3 set × 10–15 tekrar. Tam diz kilidi (ekstansiyon kaybı) varsa önce fizyoterapistle değerlendirme gerekir.\n\n" +
                    "Dikkat: Belden kalkarak kaldırmayın; hareket kalçadan değil uyluktan gelsin. Ön dizde keskin ağrı olursa tekrar sayısını azaltın.",
            },
            {
                name: "Duvar Kayması / Duvar Oturma (Wall Squat)",
                description:
                    "Amaç: Kuadriseps ve glutealleri kapalı zincirde güçlendirmek; patellofemoral eklem için kontrollü yük.\n\n" +
                    "Başlangıç pozisyonu: Sırt duvara, ayaklar önde yaklaşık 30–40 cm, ayaklar kalça genişliğinde.\n\n" +
                    "Uygulama: Sırtınızı duvara kaydırarak yavaşça çömelin; dizler ayak parmaklarının önüne geçmesin (mümkünse). Dizler yaklaşık 45°–60° bükülünce (ağrı eşiğinize göre) 20–30 saniye tutun. Topuklardan iterek yukarı kalkın.\n\n" +
                    "Tekrar ve süre: 3 set × 8–10 tekrar veya 3 × 30 sn izometrik tutma. İlerledikçe açı derinliği artırılabilir.\n\n" +
                    "Dikkat: Dizler içe çökmemeli. Ön çapraz bağ yaralanması şüphesinde derin squat’tan kaçının; uzman onayı olmadan zıplama eklemeyin.",
            },
            {
                name: "Topuk Kaydırma (Heel Slide)",
                description:
                    "Amaç: Diz fleksiyon açıklığını (bükme) ağrısız aralıkta geri kazanmak; sinovyal sıvı dolaşımını desteklemek.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü, bacaklar uzatılmış. İsteğe bağlı altına kaygan bez veya plastik tabak.\n\n" +
                    "Uygulama: Etkilenen bacağın topuğunu yavaşça kalçaya doğru kaydırarak dizinizi bükün. Maksimum ağrısız bükme noktasında 3–5 saniye tutun. Yavaşça düz pozisyona geri kaydırın. Gerekirse ellerinizle topuğu hafifçe yardımcı edin.\n\n" +
                    "Tekrar ve süre: 3 set × 10–15 tekrar, günde 2–3 kez. Ameliyat sonrası protokollerde hedef açı fizyoterapist tarafından belirlenir.\n\n" +
                    "Dikkat: Zorlayıcı ani çekme yapmayın. Şişlik artıyorsa buz ve yüksekte dinlenme sonrası tekrarlayın.",
            },
            {
                name: "Ayakta Terminal Diz Ekstansiyonu",
                description:
                    "Amaç: Son derece diz düzleştirmede vastus medialis aktivasyonu; yürüyüş ve merdiven için eklem stabilitesi.\n\n" +
                    "Başlangıç pozisyonu: Ayakta, sağlam bacak hafif bükülü veya sandalyeye tutunarak; etkilenen bacak önde.\n\n" +
                    "Uygulama: Dizinizi tam açmaya çalışın (kilitlemeden); uyluk kasını sıkın, 5 saniye tutun. Yavaşça bükün.\n\n" +
                    "Tekrar ve süre: 3 set × 12–15 tekrar. Duvar squat öncesi veya sonrası eklenebilir.\n\n" +
                    "Dikkat: Arkada ağrı veya şişlik artıyorsa tekrar azaltın. Ameliyat sonrası protokole uygun açı kullanın.",
            },
        ],
        advice: [
            "Merdiven inip çıkarken sağlam bacak önce çıksın, inerken etkilenen bacak önce insin.",
            "Koşu ve zıplama yerine düz yüzeyde yürüyüş, bisiklet veya su içi yürüyüş tercih edin.",
            "Kilo yönetimi diz eklemine binen yükü doğrudan azaltır.",
        ],
    },

    "Kalça": {
        title: "Kalça ve Pelvis Bölgesi Güçlendirme Programı",
        goal: "Gluteus medius ve maximus kuvveti, kalça abdüksiyon kontrolü ve yürüyüş stabilitesini artırmak.",
        duration: "6 Hafta",
        frequency: "Haftada 3 Seans",
        exercisesIntro:
            "Kalça bölgesi — kalça ağrısı, trokanterik ağrı, pelvis dengesizliği ve bel–kalça birlikte şikâyetleri için dört temel FTR hareketi. Gluteal aktivasyon (clamshell → yan kaldırma → köprü) ve fleksör germe ile tamamlanır.",
        exercises: [
            {
                name: "Gluteal Köprü Kurma (Hip Bridge)",
                description:
                    "Amaç: Gluteus maximus’u güçlendirmek; oturma-kalkma ve merdiven çıkma gibi günlük hareketlerde kalça ekstansör desteği sağlamak; pelvis posterior kontrolünü iyileştirmek.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü, dizler bükük, ayak tabanları yerde kalça genişliğinde. Karın hafif sıkı, çene hafif içe.\n\n" +
                    "Uygulama: Topuklardan iterek kalçayı yavaşça kaldırın; omuz–kalça–diz hizası oluşana kadar yükselin. Üst pozisyonda glute kaslarını 5 saniye sıkın; beli aşırı çukurlaştırmayın. Nefes vererek kontrollü indirin.\n\n" +
                    "Tekrar ve süre: 2–3 set × 10–12 tekrar. Ağrısız ise ileri aşamada tek bacaklı köprü (8–10 tekrar/bacak) eklenebilir.\n\n" +
                    "Dikkat: Dizler içe çökmemeli. Hamstring krampı olursa kalça yüksekliğini biraz azaltın. Kalça önünde sıkışma hissi varsa ısınma için hafif kalça fleksör germesi yapılabilir.",
            },
            {
                name: "Yandan Bacak Kaldırma (Side-Lying Hip Abduction)",
                description:
                    "Amaç: Gluteus medius ve minimus’u izole ederek yürürken pelvis düşmesini (Trendelenburg) azaltmak; kalça stabilitesini artırmak.\n\n" +
                    "Başlangıç pozisyonu: Etkilenen taraf üstte yan yatış; alt bacak hafif bükülü, üst bacak düz ve vücut hizasında (kalça geriye kaymasın).\n\n" +
                    "Uygulama: Üst bacağı diz düz, ayak içe veya nötr bakacak şekilde yavaşça yukarı kaldırın; kalça kemeri çizgisini geçmeden (yaklaşık 30–40 cm). 2–3 saniye tutun, yavaşça indirin. Üst kalça öne kaymamalı.\n\n" +
                    "Tekrar ve süre: 2–3 set × 12–15 tekrar/taraf. Direnç bandı ile ilerletilebilir.\n\n" +
                    "Dikkat: Belden yan yatmayın; hareket yalnızca kalçadan gelsin. Bel veya lateral kalça ağrısı artarsa genliği küçültün.",
            },
            {
                name: "Midye Kabuğu Egzersizi (Clamshell)",
                description:
                    "Amaç: Kalça dış rotatörleri ve gluteus medius’un alt liflerini, diz ekstansiyonu olmadan aktive etmek; pelvis stabilizasyonunun erken aşaması.\n\n" +
                    "Başlangıç pozisyonu: Yan yatış, dizler yaklaşık 45° bükülü, ayaklar üst üste. Pelvis dikey; üst kalça geriye kaydırılmamalı.\n\n" +
                    "Uygulama: Ayaklar birleşik kalırken üst dizinizi yavaşça açın (dış rotasyon). Kalça hizasını koruyun; belden dönme yapmayın. Üst pozisyonda 2–3 saniye tutun, kapatın.\n\n" +
                    "Tekrar ve süre: 2–3 set × 15–20 tekrar/taraf. Direnç bandı uyluk üstüne yerleştirilerek zorluk artırılabilir.\n\n" +
                    "Dikkat: Bel ağrısı veya kalça ön ağrısı artıyorsa açıyı küçültün. Trokanterik ağrıda aşırı yüklenmeden önce uzman değerlendirmesi önerilir.",
            },
            {
                name: "Kalça Fleksör Germesi (Thomas Varyasyonu)",
                description:
                    "Amaç: İliopsoas ve ön kalça kas grubundaki gerginliği azaltmak; oturarak çalışanlarda pelvis anterior tiltini dengelemek.\n\n" +
                    "Başlangıç pozisyonu: Sırt üstü, yatak veya mat kenarında; etkilenen bacak dışarıda sarkıyor, diğer diz göğse yakın.\n\n" +
                    "Uygulama: Sarkıtılan bacağın ağırlığı ile kalça önünde hafif germe hissedin. 20–30 saniye tutun. Alternatif: ayakta lunge pozisyonunda ön kalça germesi (ağrı yoksa).\n\n" +
                    "Tekrar ve süre: 2–3 tekrar/taraf, günde 2 kez. Güçlendirme egzersizlerinden önce veya sonra uygulanabilir.\n\n" +
                    "Dikkat: Belde aşırı çukur oluşturmayın. Hamilelik veya akut kalça ön ağrısında germe açısını küçültün.",
            },
        ],
        advice: [
            "Uzun süre tek bacak üzerinde durmaktan kaçının; yürürken pelvisi düz tutmaya çalışın.",
            "Otururken kalça fleksörlerini germek (ayak tabanı yerde, diz 90°) gün içi gerginliği azaltabilir.",
            "Sert zeminde uzun ayakta beklemeyi kısaltın; mümkünse kısa yürüyüş molaları verin.",
        ],
    },

    "Omuz": {
        title: "Omuz Eklemi Hareket ve Güçlendirme Programı",
        goal: "Omuz hareket açıklığı, rotator manşet dayanıklılığı ve skapulohumeral ritmi iyileştirmek.",
        duration: "8 Hafta",
        frequency: "Haftada 5 Seans (günlük germe)",
        exercisesIntro:
            "Omuz bölgesi — donuk omuz, impingement, rotator manşet zayıflığı ve omuz ön ağrısı için dört temel FTR uygulaması. Önce hareket açıklığı (pendulum, duvar tırmanışı), ardından izometrik güçlendirme.",
        exercises: [
            {
                name: "Sarkaç Egzersizi (Codman / Pendulum)",
                description:
                    "Amaç: Omuz eklemini yerçekimi ile gevşetmek; sinovyal sıvı dolaşımını artırmak; kas spazmını azaltarak ağrısız hareket açıklığına hazırlık.\n\n" +
                    "Başlangıç pozisyonu: Sağlam el bir masaya veya sandalyeye dayalı; gövde öne eğik, etkilenen kol serbest sarkıyor.\n\n" +
                    "Uygulama: Gövdeyi hafifçe hareket ettirerek kolunuzun öne-arkaya, yana ve küçük daireler çizmesini sağlayın. Kol kaslarını kasarak zorlamayın; hareket pasif olsun.\n\n" +
                    "Tekrar ve süre: 1–2 dakika, günde 3–4 kez. Özellikle sabah tutukluğu veya ameliyat sonrası erken dönemde uygulanır.\n\n" +
                    "Dikkat: Baş dönmesi olursa eğimi azaltın. Akut travma veya çıkık şüphesinde uzman onayı olmadan yapmayın.",
            },
            {
                name: "İzometrik İç Rotasyon (Duvara Bastırma)",
                description:
                    "Amaç: Subskapularis ve iç rotator grubunu eklem hareketi olmadan güçlendirmek; omuz ön kapsülü koruyarak stabilite.\n\n" +
                    "Başlangıç pozisyonu: Duvara yan durun; etkilenen dirsek 90° bükülü, ön kol duvara paralel.\n\n" +
                    "Uygulama: Eli duvara doğru hafifçe bastırın (maksimum güç değil, orta şiddet). 5–10 saniye tutun, gevşetin. Ağrı olmadan nefesinizi tutmayın.\n\n" +
                    "Tekrar ve süre: 10–15 tekrar, günde 2–3 kez. Dış rotasyon ve abdüksiyon izometrikleri de eklenebilir (aynı prensiple).\n\n" +
                    "Dikkat: Bastırma sırasında omuz yükselmesin. Keskin omuz ön ağrısı varsa açıyı küçültün veya fizyoterapistle değerlendirin.",
            },
            {
                name: "Duvar Tırmanışı (Finger Walk)",
                description:
                    "Amaç: Omuz fleksiyon ve abdüksiyon açıklığını ağrı eşiğinin hemen altında artırmak; donuk omuz (adheziv kapsülit) evrelerinde yaygın.\n\n" +
                    "Başlangıç pozisyonu: Yüz duvara, parmak uçları omuz hizasında.\n\n" +
                    "Uygulama: Parmak uçlarınızla yavaşça duvarda yukarı “tırmanın”; dirsek düz kalsın. Ağrısız maksimum yüksekliğe ulaşınca 5 saniye tutun. Aynı şekilde yavaşça inin.\n\n" +
                    "Tekrar ve süre: 10–15 tekrar, günde 3–5 kez. Yan duvar tırmanışı abdüksiyon için eklenebilir.\n\n" +
                    "Dikkat: Vücudu duvara yaslayarak omuzu kaldırmayın; hareket parmaklardan gelsin. Ağrı 7/10’un üzerine çıkarsa durun.",
            },
            {
                name: "Dış Rotasyon İzometrik (Elbow at Side)",
                description:
                    "Amaç: Rotator manşet (özellikle infraspinatus/teres minor) ve dış rotatorları eklem hareketi olmadan güçlendirmek.\n\n" +
                    "Başlangıç pozisyonu: Oturur veya ayakta; dirsek 90° bükülü, üst kol vücuda yapışık. Havlu rulo koltuk altında olabilir.\n\n" +
                    "Uygulama: Elinizi dışarı doğru duvara veya dirence hafifçe bastırın. 5–10 saniye tutun, gevşetin. İç rotasyon ile dengeli çalışın.\n\n" +
                    "Tekrar ve süre: 10–15 tekrar, günde 2–3 kez. Ağrısız ise lastik bantla aktif dış rotasyon eklenebilir.\n\n" +
                    "Dikkat: Dirsek vücuttan ayrılmasın. Ön omuz sıkışması hissinde açıyı küçültün veya pendulum ile ısının.",
            },
        ],
        advice: [
            "Uyurken etkilenen omuz üzerine yatmayın; yastıkla kol desteklenebilir.",
            "Ani yukarı kaldırma ve ağır çanta taşımadan kaçının; sırt çantası tek omuzda ağır olmasın.",
            "Bilgisayar kullanımında dirsek ve omuz hizasını koruyun.",
        ],
    },

    "Bilek": {
        title: "El ve Bilek Rehabilitasyon Programı",
        goal: "Önkol kas dengesi, bilek ROM ve kavrama dayanıklılığını artırmak; tekrarlayan yük yaralanmalarını önlemeye yönelik farkındalık.",
        duration: "4 Hafta",
        frequency: "Günde 3 kez",
        exercisesIntro:
            "Bilek bölgesi — karpal tünel sendromu, tenosinovit, el bileği burkulması sonrası ve tekrarlayan klavye yükü için dört temel FTR uygulaması. Hareket açıklığı, germe, kavrama ve sinir kaydırma birlikte ele alınır.",
        exercises: [
            {
                name: "Bilek Fleksiyon ve Ekstansiyon (ROM)",
                description:
                    "Amaç: Bilek eklem hareket açıklığını korumak; fleksör ve ekstansör kasların kontrollü çalışması.\n\n" +
                    "Başlangıç pozisyonu: Ön kol masada, bilek hafifçe kenar dışında; avuç aşağı veya yukarı bakabilir.\n\n" +
                    "Uygulama: Bileği yavaşça aşağı (fleksiyon) ve yukarı (ekstansiyon) hareket ettirin. Her yönde uç noktada 2–3 saniye tutun. Radial/ulnar deviasyon eklenebilir (ağrı yoksa).\n\n" +
                    "Tekrar ve süre: 2 set × 10–15 tekrar/yön, günde 3 kez. Sabah tutukluğu için ılık su altında hafif hareket faydalı olabilir.\n\n" +
                    "Dikkat: Keskin ağrı veya şişlik artışı olursa durun. Akut kırık veya immobilizasyon sonrası protokole uyun.",
            },
            {
                name: "El Sıkma ve Kavrama Güçlendirme",
                description:
                    "Amaç: Önkol fleksörleri ve intrinsik el kaslarını kademeli yüklemek; günlük kavrama işlevini desteklemek.\n\n" +
                    "Başlangıç pozisyonu: Oturur, dirsek destekli; yumuşak top, sünger veya terapi putty.\n\n" +
                    "Uygulama: Nesneyi tüm parmaklarla eşit şekilde sıkın; 5 saniye tutun, yavaşça bırakın. Tam ağrısız ise putty ile parmak yayma ve pinch (başparmak–işaret) eklenebilir.\n\n" +
                    "Tekrar ve süre: 2–3 set × 10–15 tekrar. Şiddeti haftalık %10–15 artırma kuralına uyun (ağrı artmamalı).\n\n" +
                    "Dikkat: Gece ağrısı ve uyuşma varsa yalnızca sıkma değil, median sinir germesi ve ergonomi de ele alınmalıdır (uzman önerisi).",
            },
            {
                name: "Parmak ve Önkol Germe",
                description:
                    "Amaç: Fleksör ve ekstansör tendonlarında gerginliği azaltmak; tekrarlayan klavye/fare kullanımına bağlı yükü dengelemek.\n\n" +
                    "Başlangıç pozisyonu: Kol uzatılmış, avuç yukarı veya aşağı.\n\n" +
                    "Uygulama (fleksör germe): Kol düz, avuç yukarı; diğer el parmakları geriye doğru nazikçe çeker. 15–30 saniye tutun. Ekstansör germe: avuç aşağı, hafifçe aşağı bükülerek germe.\n\n" +
                    "Tekrar ve süre: Her germe 2–3 tekrar, günde 3–5 kez (özellikle çalışma aralarında).\n\n" +
                    "Dikkat: Uyuşukluk ve gece uyanmaları artıyorsa karpal tünel değerlendirmesi gerekebilir; germe ağrıyı artırmamalıdır.",
            },
            {
                name: "Median Sinir Kaydırma (Nöral Mobilizasyon — Hafif)",
                description:
                    "Amaç: Önkol fleksörleri ve karpal tünel bölgesinde sinir mobilitesini nazikçe desteklemek; parmak uyuşması şikâyetinde yardımcı olabilir.\n\n" +
                    "Başlangıç pozisyonu: Oturur, kol destekli; omuz gevşek, dirsek yarı bükük.\n\n" +
                    "Uygulama: Bilek, dirsek ve boyun pozisyonunu tek seferde değiştirmeden: bileği hafif ekstansiyon, parmakları açma, dirseği düzleştirme sırasıyla “açma”; ardından ters sırayla “kapama”. Hareket yavaş ve ağrısız.\n\n" +
                    "Tekrar ve süre: 5–10 yavaş tekrar, günde 2–3 kez. Germe egzersizleriyle birlikte uygulanabilir.\n\n" +
                    "Dikkat: Karıncalanma artarsa durun. Akut travma, şiddetli uyuşma veya güç kaybında önce hekim/fizyoterapist değerlendirmesi şarttır.",
            },
        ],
        advice: [
            "Klavye ve fare yüksekliği dirsek hizasında; bilek nötr, havada asılı kalmasın.",
            "Ağır nesneleri tek bilekten değil, önkol ve avuçla kavrayarak taşıyın.",
            "50 dakika çalışma / 10 dakika bilek–parmak hareket molası kuralını uygulayın.",
        ],
    },
};

export default therapyPrograms;
