// Render design/og-image.svg -> public/img/og-image.png (1200x630)
// Jalankan: node design/gen-og.mjs   (butuh @resvg/resvg-js)
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(here, 'og-image.svg'), 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true, defaultFontFamily: 'Arial' },
  background: '#081826',
});
const png = resvg.render().asPng();
const out = join(here, '..', 'public', 'img', 'og-image.png');
writeFileSync(out, png);
console.log('OK ->', out, '(' + png.length + ' bytes)');
