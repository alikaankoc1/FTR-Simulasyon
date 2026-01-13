// src/data/therapyData.js (Yeni Dosya)

const therapyPrograms = {
  
    "Bel": {
        title: "Bel Bölgesi İçin Özel FTR Programı",
        goal: "Bel ağrısını gidermek, karın ve sırt kaslarını güçlendirmek ve esnekliği artırmak.",
        duration: "6 Hafta",
        frequency: "Haftada 3 Seans",
        exercises: [
            {
                name: "Pelvik Tilt Egzersizi",
                description: "Sırt üstü yatın, dizler bükük. Karın kaslarınızı kasarak belinizi yere bastırın (5 saniye). 10 tekrar.",
            },
            {
                name: "Kedi-Deve Esnetmesi",
                description: "Dört ayak üzerinde durun. Sırtınızı yukarı doğru kamburlaştırın (kedi) ve sonra aşağı doğru çukurlaştırın (deve). 10 tekrar.",
            },
            {
                name: "Köprü Kurma",
                description: "Sırt üstü yatın, dizler bükük. Kalçayı kaldırın, omuzdan dize düz çizgi oluşturun. 3 saniye tutun, 10 tekrar.",
            },
        ],
        advice: [
            "Uzun süre oturmaktan kaçının; düzenli olarak kalkıp yürüyün.",
            "Uyurken dizlerinizin arasına yastık koyun.",
            "Ağır nesneleri kaldırırken dizlerinizi bükün, belinizi değil.",
        ]
    },

    // ------------------------------------
    // 2. BOYUN PROGRAMI (BOYUN)
    // ------------------------------------
    "Boyun": {
        title: "Boyun ve Omuz Çevresi FTR Programı",
        goal: "Boyun hareket açıklığını artırmak, gerginliği azaltmak ve duruşu iyileştirmek.",
        duration: "4 Hafta",
        frequency: "Günde 2 kez (5 dakika)",
        exercises: [
            {
                name: "Çene İçeri Çekme (Chin Tuck)",
                description: "Ayakta veya otururken, başınızı geriye çekerek gıdık oluşturmaya çalışın. 5 saniye tutun, 10 tekrar.",
            },
            {
                name: "Omuz Çevirme",
                description: "Omuzlarınızı yavaşça öne ve sonra geriye doğru geniş daireler çizerek çevirin. Her yöne 10 tekrar.",
            },
            {
                name: "Boyun Yan Esnetme",
                description: "Sağ kulağınızı sağ omzunuza doğru yaklaştırın (omuz sabit kalsın). 15 saniye tutun, iki taraf için de yapın.",
            },
        ],
        advice: [
            "Bilgisayar ekranınızı göz hizasına getirin.",
            "Telefonla konuşurken telefonu omuz ve baş arasına sıkıştırmayın.",
            "Boyun yastığınızın boynunuzu desteklediğinden emin olun.",
        ]
    },
    
    // ------------------------------------
    // 3. DİZ PROGRAMI (DİZ)
    // ------------------------------------
    "Diz": {
        title: "Diz Eklemi Güçlendirme ve Rehabilitasyon Programı",
        goal: "Diz çevresi kasları (özellikle kuadriseps) güçlendirmek ve eklem stabilitesini artırmak.",
        duration: "8 Hafta",
        frequency: "Haftada 4 Seans",
        exercises: [
            {
                name: "Düz Bacak Kaldırma (SLR)",
                description: "Sırt üstü yatarken bir bacağınızı düz tutun ve diz seviyesinde yavaşça kaldırın (30 cm). 5 saniye tutun, 10 tekrar.",
            },
            {
                name: "Duvar Oturma (Wall Squat)",
                description: "Sırtınız duvara dayalıyken dizler 90 derece bükülecek şekilde oturun. 30 saniye tutun, 3 tekrar.",
            },
            {
                name: "Topuk Kaydırma",
                description: "Sırt üstü yatarken topuğunuzu kalçanıza doğru kaydırarak dizi bükün. 10 tekrar.",
            },
        ],
        advice: [
            "Aşırı merdiven çıkmaktan kaçının.",
            "Yüksek etkili (koşma, zıplama) sporlar yerine yüzme ve bisiklet tercih edin.",
            "İdeal kilonuzu koruyarak diz eklemi üzerindeki yükü azaltın.",
        ]
    },
    
    // ------------------------------------
    // 4. KALÇA PROGRAMI (KALÇA)
    // ------------------------------------
    "Kalça": {
        title: "Kalça ve Pelvis Bölgesi Güçlendirme Programı",
        goal: "Kalça hareket açıklığını, gücünü ve yürüyüş stabilitesini artırmak.",
        duration: "6 Hafta",
        frequency: "Haftada 3 Seans",
        exercises: [
            {
                name: "Gluteal Köprü Kurma (Köprü)",
                description: "Sırt üstü yatın, dizler bükük. Kalçayı kaldırın ve kalça kaslarını sıkın. 5 saniye tutun, 10 tekrar.",
            },
            {
                name: "Yandan Bacak Kaldırma",
                description: "Yan yatın, üstteki bacağı düz tutarak yukarı kaldırın. Yavaşça indirin. 10 tekrar.",
            },
            {
                name: "Midye Kabuğu Egzersizi (Clamshell)",
                description: "Yan yatın, dizler bükük. Ayaklar birleşik kalırken üstteki dizinizi açın. 10 tekrar.",
            },
        ],
        advice: [
            "Sert zeminlerde uzun süre ayakta durmaktan kaçının.",
            "Kalça kaslarınızı aktif tutmak için sık sık gerinme hareketleri yapın.",
            "Ergonomik sandalyeler kullanın.",
        ]
    },
    
    // ------------------------------------
    // 5. OMUZ PROGRAMI (OMUZ)
    // ------------------------------------
    "Omuz": {
        title: "Omuz Eklemi Hareket ve Güçlendirme Programı",
        goal: "Omuz eklemi hareket açıklığını ve rotator manşet gücünü geri kazandırmak.",
        duration: "8 Hafta",
        frequency: "Haftada 5 Seans (günlük germe)",
        exercises: [
            {
                name: "Sarkaç Egzersizi (Pendulum)",
                description: "Öne doğru eğilin ve etkilenen kolunuzu serbest bırakın. Kolunuzla küçük daireler çizin. 1 dakika.",
            },
            {
                name: "İzometrik İç Rotasyon",
                description: "Dirseği 90 derece bükün. Elinizin dış tarafını duvara bastırın. 5 saniye tutun, 10 tekrar.",
            },
            {
                name: "Duvar Tırmanışı",
                description: "Yüzünüz duvara dönük durun. Parmak uçlarınızla yavaşça duvarda yukarı tırmanın. Ağrı sınırına kadar gidin.",
            },
        ],
        advice: [
            "Ağrılı omuz seviyesinin üzerine uzanmaktan kaçının.",
            "Uyurken omuz üzerine yatmaktan kaçının.",
            "Omuz hareketlerini zorlamadan, düzenli ve yavaş yapın.",
        ]
    },
    
    // ------------------------------------
    // 6. BİLEK PROGRAMI (BİLEK)
    // ------------------------------------
    "Bilek": {
        title: "El ve Bilek Rehabilitasyon Programı",
        goal: "Karpal tünel sendromu, tendinit gibi durumlarda bilek gücünü ve hareketini artırmak.",
        duration: "4 Hafta",
        frequency: "Günde 3 kez",
        exercises: [
            {
                name: "Bilek Fleksiyonu ve Ekstansiyonu",
                description: "Ön kolunuzu bir masaya dayayın. Bileğinizi önce yukarı (ekstansiyon) sonra aşağı (fleksiyon) bükün. 10 tekrar.",
            },
            {
                name: "El Sıkma Egzersizi",
                description: "Yumuşak bir topu 5 saniye boyunca sıkın ve bırakın. 10 tekrar.",
            },
            {
                name: "Parmak Germe",
                description: "Parmaklarınızı geriye doğru nazikçe çekerek avuç içini gerin. 15 saniye tutun.",
            },
        ],
        advice: [
            "Bilgisayar kullanırken ergonomik klavye ve fare kullanın.",
            "Ağır nesneleri bilekten değil, tüm kolunuzla kavrayın.",
            "Uzun süreli tekrarlayan hareketlerden kaçının.",
        ]
    },
};

export default therapyPrograms;