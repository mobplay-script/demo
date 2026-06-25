# Website Company Profile — PT Cahayamas Jaya Raya

Dibangun dengan **Astro (static)** + **Tailwind CSS**, dengan form kontak **PHP + PHPMailer**.
Dirancang untuk di-deploy di **shared hosting** standar (cPanel) tanpa Node.js di server.

---

## Prasyarat (di komputer developer)

- Node.js 18+ (disarankan 20/22)
- npm
- Composer (untuk PHPMailer)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```
Buka http://localhost:4321

> Catatan: form kontak (`contact.php`) **tidak** berfungsi saat `npm run dev` karena server dev Astro bukan PHP. Form baru aktif setelah di-upload ke hosting (atau diuji via `php -S` lokal).

## Build untuk produksi

```bash
npm run build      # menghasilkan folder dist/
npm run preview    # pratinjau hasil build (opsional)
```

---

## Deploy ke shared hosting (cPanel)

1. **Install PHPMailer** (sekali saja):
   ```bash
   composer require phpmailer/phpmailer
   ```
   Folder `vendor/` akan dibuat. Pastikan ikut ter-build — letakkan perintah ini sebelum build, dan `vendor/` berada di dalam `public/` agar tersalin ke `dist/`.

   > Alternatif tanpa Composer: download PHPMailer manual dan taruh di `public/vendor/`.

2. **Build:** `npm run build`

3. **Konfigurasi SMTP:** salin `dist/config.php.example` → `dist/config.php`, isi kredensial email domain (dari cPanel > Email Accounts).

4. **Upload** seluruh isi folder `dist/` ke `public_html/` via cPanel File Manager / FTP (FileZilla).

5. Di cPanel:
   - Aktifkan **SSL** (Let's Encrypt) — gratis.
   - Set **PHP 8.0+** (Select PHP Version).
   - Buat akun email `info@...` jika belum ada.

6. Selesai. Uji form kontak dari halaman `/kontak`.

---

## Deploy demo ke Vercel (via GitHub)

Untuk menunjukkan ke klien. Situs ini static, jadi Vercel jalan tanpa konfigurasi tambahan.

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial: website company profile Cahayamas"
   git branch -M main
   git remote add origin https://github.com/USER/REPO.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New → Project** → import repo tadi.
3. Vercel otomatis mendeteksi **Astro** (Build: `astro build`, Output: `dist`). Klik **Deploy**.
4. Selesai — dapat URL `https://namanya.vercel.app` untuk dibagikan ke klien.

> **Catatan form di Vercel:** Vercel tidak menjalankan PHP, jadi `contact.php` tidak aktif di sini.
> Form memakai **mode demo** (`DEMO_MODE = true` di `src/pages/kontak.astro`): klik kirim
> menampilkan pesan sukses tanpa benar-benar mengirim. Saat deploy ke **shared hosting**,
> set `DEMO_MODE = false` agar form benar-benar POST ke `contact.php`.

## Struktur penting

| Lokasi | Isi |
|---|---|
| `src/data/site.ts` | Data terpusat: kontak, navigasi, 3 lini bisnis. **Edit di sini.** |
| `src/pages/` | Halaman (routing otomatis): index, tentang, bisnis, galeri, kontak |
| `src/components/` | Komponen reusable: Header, Footer, BisnisCard, dll |
| `src/content/galeri/` | Galeri — tambah file `.md` baru untuk entri baru |
| `public/contact.php` | Form handler (PHPMailer) — ikut ke `dist/` |
| `public/img/` | Gambar (logo, foto bisnis, galeri) |
| `public/.htaccess` | HTTPS, kompresi, cache, keamanan |

## Yang perlu disiapkan (aset)

Ganti placeholder berikut di `public/img/`:
- `logo.svg` — logo perusahaan (header)
- `og-image.jpg` — gambar preview share (1200×630)
- `bisnis/ship-chandler.jpg`, `bisnis/rempah.jpg`, `bisnis/arb-cigarette.jpg`
- `galeri/*.jpg` — foto dokumentasi (lalu sesuaikan path di `src/content/galeri/*.md`)

## Kustomisasi cepat

- **Warna brand:** `tailwind.config.mjs` (`brand`, `gold`)
- **Domain final:** ubah di `astro.config.mjs` (`site`), `src/data/site.ts` (`url`), dan `public/robots.txt`
- **Nomor WA / alamat / email:** `src/data/site.ts`
