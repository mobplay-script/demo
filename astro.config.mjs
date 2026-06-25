// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GANTI dengan domain final saat sudah dibeli (dipakai untuk sitemap & canonical URL)
  site: 'https://cahayamasjayaraya.co.id',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  build: {
    // Hasil HTML berupa folder /tentang/index.html agar URL bersih tanpa .html
    format: 'directory',
  },
});
