import { render_markdown } from './content/content.ts';
export const prerender = true

export function load() {
    return {
        greeting: render_markdown('jukebox.md'),
        latest: render_markdown('content/20250320-github.md'),
        date: "20250320"
    };
}
