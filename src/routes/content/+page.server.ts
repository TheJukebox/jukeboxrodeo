import fs from 'fs/promises';
import type { PageServerLoad } from './$types';

export const prerender = true;

const MARKDOWN_CONTENT_PATH: string = 'src/public/'

const get_date = (name: string) => {
    const match = name.match(/(\d{8})/);
    return match ? match[1] : null;
};

const format_date = (name: string) => {
    const date = get_date(name)
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    const formatted = new Date(`${year}-${month}-${day}`);
    return formatted.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
};

export const load: PageServerLoad = async () => {
    const content = await fs.readdir(MARKDOWN_CONTENT_PATH+'content/');
    const posts = await Promise.all(
      content.map(async (post) => {
          const stats = await fs.stat(MARKDOWN_CONTENT_PATH+'content/'+post);
          return {
            name: post,
            size: stats.size,
            date: format_date(post),
          };
      })
    );
    
    posts.sort((a, b) => a.date.localeCompare(b.date));

    return { posts };
}
