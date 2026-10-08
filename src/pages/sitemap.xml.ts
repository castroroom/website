import type { APIRoute } from 'astro';
import { SITE, imageUrl, pageImages } from '../data/images';

// Image URLs are listed with <image:loc> only: Google ignores the old
// caption/title/license/geo image-sitemap tags (deprecated Aug 2022).
const pages = ['/', '/teacher-training', '/schedule', '/events', '/about', '/purchase', '/contact'];

export const GET: APIRoute = () => {
  const urls = pages
    .map((path) => {
      const imgs = (pageImages[path] ?? [])
        .map((key) => `    <image:image><image:loc>${imageUrl(key)}</image:loc></image:image>`)
        .join('\n');
      return `  <url>\n    <loc>${SITE}${path}</loc>${imgs ? '\n' + imgs : ''}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
