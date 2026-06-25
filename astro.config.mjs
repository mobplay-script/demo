// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL demo Vercel (dipakai untuk sitemap & canonical URL).
  // Ganti ke domain final saat sudah dibeli.
  site: 'https://demo-psi-murex-88.vercel.app',
  output: 'static',
  integrations: [tailwind(), sitemap()],
  build: {
    // Hasil HTML berupa folder /tentang/index.html agar URL bersih tanpa .html
    format: 'directory',
  },
});
