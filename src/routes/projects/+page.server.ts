import { render_markdown } from '../content/content.js';

export function load() {
    return {
        content: render_markdown('projects/projects.md')
    };
}