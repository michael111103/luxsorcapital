// src/lib/data.ts
// Semua teks, link, dan data konten di satu tempat.
// Edit file ini untuk mengganti copy, harga, atau link tanpa menyentuh komponen.

export const SITE = {
  name: "LUXSOR",
  nameSuffix: "CAPITAL",
  telegram: "https://t.me/luxsorcapital",
  telegramHandle: "t.me/luxsorcapital",
  email: "tanya@luxsorcapital.com",
  phone: "+62 8xx-xxxx-xxxx", // TODO: ganti dengan nomor kontak asli kamu
  year: 2026,
};

// Ganti fungsi ini kapan saja dengan foto asli. Untuk sekarang pakai
// placeholder gelap senada tema supaya layout tetap presisi.
export const ph = (label: string, w = 800, h = 450) =>
  `https://placehold.co/${w}x${h}/0b0b0d/f5f5f5?font=montserrat&text=${encodeURIComponent(
    label
  )}`;

export const NAV_LINKS = [
  { label: "Kenapa Luxsor", href: "#kenapa" },
  { label: "Kurikulum", href: "#kurikulum" },
  { label: "Bonus", href: "#bonus" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  eyebrow: "Trading Community & Signal Desk",
  headline: [
    { text: "Kuasai ", accent: false },
    { text: "Forex & Gold", accent: true },
    { text: " Selama 1 Dekade Terakhir Pasar Bergerak.", accent: false },
  ],
  sub: "89% member kami paham cara membaca market dalam waktu 3 minggu, bukan 3 tahun.",
  videoTitle: "Apa itu Luxsor Capital?",
  videoSubtitle: "Luxsor Capital",
};

export const WHY = {
  eyebrow: "Kenapa Luxsor Capital?",
  bubbles: [
    {
      handle: "j.reyhan",
      name: "J. Reyhan",
      role: "Head Analyst",
      time: "08/6, 09.14",
      text: "DXY breakdown minggu ini bukan noise. Kalau close di bawah 104.20, target berikutnya area demand lama.",
    },
    {
      handle: "a.pratama",
      name: "A. Pratama",
      role: "Gold Desk",
      time: "11/6, 21.40",
      text: "XAUUSD reject di supply H4, momentum masih milik seller. Tunggu konfirmasi sebelum entry.",
      source: "Data source: Luxsor Capital via TradingView.",
    },
  ],
  boldText:
    "Karena belajar trading forex & gold sendirian itu mahal dan buang waktu. Di Luxsor Capital kamu gak cuma dapat sinyal, kamu akan masuk ke cara berpikir desk trader yang sudah belasan tahun di market finansial.",
  restText:
    "Lihat cara mereka membaca market secara macro, mengelola risk per posisi, dan cara mengambil keputusan secara real-time.",
};

export const CURRICULUM_GRID = [
  { icon: "layers", category: "Forex Trading", title: "Order Flow & Liquidity" },
  { icon: "waves", category: "Forex Trading", title: "Harmonic Pattern Trading" },
  { icon: "newspaper", category: "Fundamental", title: "Fundamental Research" },
  { icon: "target", category: "Investing", title: "Portfolio Alpha" },
  { icon: "lineChart", category: "Forex Trading", title: "Technical Research" },
  { icon: "wallet", category: "Risk", title: "Money Management" },
  { icon: "brain", category: "Psikologi", title: "Mindset & Disiplin" },
  { icon: "landmark", category: "Macro", title: "Central Bank Playbook" },
  { icon: "shieldCheck", category: "Eksekusi", title: "Broker & Execution Security" },
] as const;

export const CURRICULUM_INTRO = {
  number: "01",
  boldText:
    "Kebanyakan orang menghabiskan bertahun-tahun belajar trading dengan cara yang salah, rugi dulu baru ngerti.",
  restText:
    "Di Luxsor Capital kalian akan dipandu dari nol sampai mahir lewat kurikulum sistematis yang mencakup keuangan pribadi, trading forex & gold, sampai analisa institusional. Semua dipandu mentor aktif yang hidupnya memang di market ini.",
};

export const COMMUNITY = {
  number: "02",
  images: [
    { label: "The Big Cycle — Market Rise & Decline" },
    { label: "Trading Summit — On Stage" },
    { label: "Gold Before & After Rate Decision" },
    { label: "Live Trading Floor Session" },
  ],
  boldText:
    "Hampir semua orang yang sukses secara finansial dikelilingi oleh orang-orang yang mendorong mereka naik, bukan menarik mereka turun.",
  restText:
    "Setiap tahun kamu bisa mendapatkan akses ke event eksklusif tahunan untuk belajar bareng dan networking bareng mereka yang punya tujuan sama: bebas secara finansial.",
};

export const EDUCATION_MODULES = [
  {
    number: "03",
    image: "/gambar3.png",
    label: "Forex & Gold Investing",
    title: "Forex & Gold Investing",
    accent: "Investing",
    boldText:
      "Kebanyakan orang buka posisi karena FOMO dan rugi karena tidak tahu kapan masuk dan kapan keluar.",
    restText:
      "Luxsor Capital mengubah cara kamu berpikir: dari spekulan menjadi investor yang berpikir seperti fund manager dan bank besar. Bukan teori — ini framework nyata yang dipakai desk trading profesional. Kamu akan menguasai cara membaca siklus market sebelum publik sadar, strategi entry & exit berbasis data, alokasi portofolio yang tahan banting, riset fundamental pair dan komoditas dari nol, hingga cara membaca indikator makro yang dipakai institusi untuk bergerak sebelum harga naik.",
  },
  {
    number: "04",
    image: "/gambar4.jpeg",
    label: "A minimalist 3D render of a glowing brain made of frosted glass and circuit-like lines, merged with a candlestick trading chart, symbolizing trading psychology and discipline. Monochrome black, white, and silver color palette, frosted glass and liquid metal textures, futuristic premium fintech aesthetic. Dark atmospheric studio background, deep black to charcoal gradient with soft cinematic rim lighting, no text, no logo, centered composition, wide 16:9 landscape format, exactly 877x480 pixels, ultra-clean, 4k.
",
    title: "Forex & Gold Trading",
    accent: "Trading",
    boldText: "90% trader ritel gagal. Kamu tidak harus jadi salah satunya.",
    restText:
      "Kebanyakan orang kalah di market bukan karena strategi yang salah, tapi karena belum menguasai satu hal yang tidak diajarkan di mana-mana: psikologi dan sistem yang benar. Di Luksor Capital ini kamu belajar cara membaca emosi sendiri saat trading, mengenali bias seperti overconfidence, herding, dan fear of loss sebelum bias itu menguras akun. Kamu juga akan memahami bagaimana market maker bermain, cara membaca order flow untuk keuntunganmu, dan bagaimana menerapkan strategi scalping, swing, serta day trading sesuai karakter kamu sendiri.",
  },
  {
    number: "05",
    image: "/gambar5.jpeg",
    label: "Macro & Fundamental",
    title: "Macro & Fundamental Analysis",
    accent: "Analysis",
    boldText:
      "Banyak orang trading forex bertahun-tahun tanpa pernah mengerti apa yang sebenarnya menggerakkan harga.",
    restText:
      "Padahal, mereka yang memahami fondasinya itulah yang selangkah lebih maju, baik sebagai trader, analyst, maupun fund manager. Di modul ini, kamu belajar makro dari nol secara praktis, bukan hafalan teori, dibawakan langsung oleh praktisi berpengalaman. Kamu akan memahami bagaimana kebijakan bank sentral membentuk arah pasar, bagaimana inflasi dan suku bunga bekerja di balik layar, apa itu correlation & hedging dan mengapa itu mengubah cara mengelola risiko, hingga cara membaca data ekonomi terbaru yang membentuk masa depan market.",
  },
] as const;

export const BONUS = {
  eyebrow: "Bonus yang kalian dapatkan setelah bergabung menjadi member",
  items: [
    {
      number: "01",
      title: "Live Market Update",
      boldText:
        "Market forex & gold berubah setiap saat. Strategi yang bekerja di Januari belum tentu relevan di Maret.",
      restText:
        "Dengan sesi update, kamu tidak akan ketinggalan pergeseran tren, narasi baru, dan peluang yang sedang terbuka di market langsung dari desk yang aktif trading setiap harinya.",
    },
    {
      number: "02",
      title: "Real Time Macro Update",
      boldText:
        "Crash terbesar di forex & gold hampir selalu dipicu oleh faktor makro, bukan hanya teknikal.",
      restText:
        "Dengan pemahaman makro yang selalu update secara real-time, kamu tahu kapan harus agresif dan kapan harus melindungi modal. Bukan cuma menebak. Bukan panik. Tapi mengambil keputusan berdasarkan data, fakta, dan angka yang ada.",
      chat: {
        name: "J. Reyhan",
        time: "02/04, 20.32",
        lines: [
          "Ceasefire baru diumumkan hari ini, tanker masih belum bisa lewat Selat Hormuz.",
          "800–1000 pip masih terbuka, market so far react positif.",
          "Kemungkinan volatilitas berlanjut 2–3 minggu ke depan, keep cash minimal 20% untuk jaga-jaga.",
        ],
      },
    },
    {
      number: "03",
      title: "Trading & Investment Ideas",
      boldText: "Ide trading terbaik bukan hanya soal profit.",
      restText:
        "Kita akan memberikan monthly trade/investment ideas dengan thesis yang jelas untuk bantu kalian memiliki framework berpikir gimana cara dunia market bekerja, dan bisa belajar memancing ikan sendiri.",
      chat: {
        name: "A. Pratama",
        time: "13/3, 23.58",
        lines: [
          "H4 chart dari XAUUSD menunjukkan ada rejection di area supply signifikan, potensi koreksi pada timeframe pendek.",
          "Bigger timeframe masih menunjukkan kita dalam range besar.",
        ],
        chart: true,
      },
    },
  ],
};

export const TYPE_SECTION = {
  eyebrow: "Kamu Ada di Tipe Mana?",
  title: "Di Dunia ini Ada 2 Tipe Orang,",
  cardA: { label: "Orang Yang Mau Melompat", highlight: "Untuk Merubah Hidupnya", img: "Take The Leap" },
  cardB: { label: "Dan Yang Mau", highlight: "Berdiam Diri.", img: "Stay Still" },
  cta: "Take Action Sekarang",
};

export const TESTIMONIALS = [
  { name: "R. Alamsyah", role: "Full-time Trader", title: "Dari Karyawan Kantoran ke Full-time Trader" },
  { name: "M. Fadillah", role: "Gold Trader", title: "Akhirnya Paham Cara Baca Macro" },
  { name: "S. Wulandari", role: "Forex Trader", title: "Konsisten Profit Setelah 6 Bulan" },
  { name: "D. Kurniawan", role: "Algo Trader", title: "Berhasil Deploy EA Pertama Saya" },
  { name: "N. Habibie", role: "Swing Trader", title: "Sistem Trading yang Akhirnya Klik" },
];

export const QUOTE = {
  text: "If A Man Empties His Purse Into His Head, No Man Can Take It Away",
  author: "Benjamin Franklin",
};

export const FAQS = [
  {
    q: "Apakah trading forex & gold pasti mendapatkan keuntungan?",
    a: "Tidak. Trading selalu mengandung risiko dan tidak ada yang bisa menjamin profit. Yang kami ajarkan adalah framework, manajemen risiko, dan cara berpikir yang dipakai trader profesional agar keputusan kamu lebih terukur, bukan janji keuntungan pasti.",
  },
  {
    q: "Apakah butuh modal yang besar untuk mulai trading?",
    a: "Tidak. Kamu bisa mulai belajar dan latihan dengan akun demo terlebih dahulu. Modul kami juga membahas position sizing supaya kamu tahu cara mengatur risiko sesuai modal yang kamu punya, sekecil apa pun itu.",
  },
  {
    q: "Saya benar-benar awam tentang forex, apakah akan menjadi masalah?",
    a: "Tidak. Kurikulum kami dirancang dari nol, mulai dari dasar keuangan pribadi sampai analisa institusional, jadi kamu tidak perlu pengalaman sebelumnya untuk mulai.",
  },
  {
    q: "Saya masih muda, apakah umur akan menjadi masalah?",
    a: "Tidak. Justru semakin dini kamu memahami cara kerja market dan manajemen risiko, semakin banyak waktu yang kamu punya untuk membangun kebiasaan trading yang sehat.",
  },
  {
    q: "Belum punya income yang besar, apakah tetap bisa mencapai kebebasan finansial dari trading?",
    a: "Kebebasan finansial dibangun dari kebiasaan dan sistem, bukan besar kecilnya modal awal. Kami membantu kamu membangun fondasi dan disiplin itu dari sekarang.",
  },
  {
    q: "Tidak di-support oleh teman dan keluarga, apakah tetap bisa menjadi trader yang sukses?",
    a: "Bisa. Di Luxsor Capital kamu akan masuk ke komunitas dengan tujuan yang sama, sehingga kamu tetap punya lingkungan yang mendorong kamu maju meskipun lingkungan sekitar belum paham.",
  },
];

export const FOOTER_DISCLAIMER =
  "Trading forex, emas, dan instrumen leverage lainnya mengandung risiko tinggi dan tidak cocok untuk semua investor. Kinerja masa lalu tidak menjamin hasil di masa depan. Seluruh materi, sinyal, dan analisa di Luxsor Capital bersifat edukasi dan bukan merupakan saran keuangan atau ajakan untuk bertransaksi.";
