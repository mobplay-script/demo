// Sumber data terpusat — ubah di sini, otomatis berubah di seluruh situs.

export const site = {
  nama: 'PT Cahayamas Jaya Raya',
  namaPendek: 'Cahayamas Jaya Raya',
  tagline: 'Growing Together, Serving Better',
  deskripsi:
    'Perusahaan swasta nasional terintegrasi di bidang Perdagangan Umum, Penyuplai, dan Jasa. Logistik maritim, perdagangan rempah, dan distribusi tembakau.',
  // URL demo Vercel — ganti ke domain final saat sudah dibeli
  url: 'https://demo-psi-murex-88.vercel.app',
  email: 'info@cahayamasjayaraya.co.id',
  alamat: 'Jl. Palem Blok C No.27 RT.004 RW.013 Jatirasa, Bekasi 17424',
  // Untuk embed Google Maps (ganti dengan query/koordinat yang benar)
  mapsQuery: 'Jatirasa, Bekasi 17424',
  telepon: [
    { label: '0813-7517-8065', wa: '6281375178065' },
    { label: '0853-6116-8312', wa: '6285361168312' },
    { label: '0822-6622-2234', wa: '6282266222234' },
  ],
};

// Nomor WhatsApp utama (untuk floating button)
export const waUtama = site.telepon[0];

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Bisnis', href: '/bisnis' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Kontak', href: '/kontak' },
];

// 3 lini bisnis (dari Company Profile)
// `domain` menandai sumbu nyata perjalanan barang: dari laut, dari darat, ke pasar.
export const liniBisnis = [
  {
    slug: 'ship-chandler',
    domain: 'Laut',
    kategori: 'Supply & Services',
    nama: 'Layanan Ship Chandler',
    tag: 'Provisions · Technical Stores · Marine Services',
    ringkas:
      'Penyuplai dan penyedia jasa logistik maritim untuk kapal komersial, tanker, dan kargo di pelabuhan-pelabuhan utama.',
    poin: [
      'Provisions (Supply): pasokan bahan makanan segar, kering, beku, dan air bersih.',
      'Technical & Stores (Supply): suku cadang, peralatan dek, engine stores, dan oli/pelumas.',
      'Marine Services (Services): pengurusan kebutuhan kapal, pemeliharaan alat keselamatan, dan efisiensi logistik pelabuhan.',
    ],
  },
  {
    slug: 'rempah',
    domain: 'Darat',
    kategori: 'General Trading',
    nama: 'Perdagangan Rempah Dalam Negeri',
    tag: 'Lada · Cengkih · Pala · Kayu Manis · Kapulaga · Jahe',
    ringkas:
      'Perdagangan umum komoditas hasil bumi — menjembatani petani lokal dengan industri manufaktur, kuliner, jamu, dan kosmetik di seluruh nusantara.',
    poin: [
      'Komoditas: lada, cengkih, pala, kayu manis, kapulaga, dan jahe.',
      'Gudang Modern: penyimpanan dengan kadar air terkontrol agar kualitas rempah terjaga.',
      'B2B Trading: melayani pembelian partai besar dengan jaminan stabilitas stok industri.',
    ],
  },
  {
    slug: 'arb-cigarette',
    domain: 'Pasar',
    kategori: 'Supply',
    nama: 'Distribusi ARB Cigarette',
    tag: 'Ritel · Grosir · Agen Daerah · Cukai Resmi',
    ringkas:
      'Pusat suplai dan distributor resmi produk tembakau bermutu tinggi melalui merek ARB Cigarette.',
    poin: [
      'Distribusi skala besar ke jaringan ritel, grosir, dan agen daerah.',
      'Standardisasi kontinuitas pasokan dan kualitas kemasan produk.',
      'Kepatuhan penuh terhadap regulasi industri tembakau dan pita cukai nasional.',
    ],
  },
];
