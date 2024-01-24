import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro学習者 | ブログ',
    description: 'Astro DEMO',
    site: 'https://ant2357-astro-demo.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}
