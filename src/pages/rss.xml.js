
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('posts');
  const tutorials = await getCollection('tutorials');

  const items = [...posts, ...tutorials]
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/${entry.collection}/${entry.id}/`,
      content: sanitizeHtml(parser.render(entry.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    }));

  return rss({
    title: 'Tquinonero · Web Developer Blog & Tutorials',
    description: 'Articles and step-by-step guides from a WordPress & Astro developer.',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
