import { render_markdown } from '../content.ts';
import fs from 'fs';
export const prerender = true;

export function load({params}) {
    return {
        content: render_markdown('content/'+params.post),
        title: params.post
    };
}

export async function entries() {
    const posts = fs.readdirSync('src/public/content/')
    return posts.map(post => ({ post }));
}
