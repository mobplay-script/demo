import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Galeri / dokumentasi kegiatan — tinggal tambah file .md baru di src/content/galeri/
const galeri = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeri' }),
  schema: z.object({
    judul: z.string(),
    tanggal: z.coerce.date(),
    kategori: z.string().default('Kegiatan'),
    // Path gambar relatif terhadap /public (mis. /img/galeri/foto1.jpg)
    gambar: z.string(),
    urutan: z.number().default(0),
  }),
});

export const collections = { galeri };
