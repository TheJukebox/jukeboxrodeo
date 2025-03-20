import { render_markdown } from './content/content.ts';

export function load() {
    return {
        greeting: render_markdown('jukebox.md'),
        latest: render_markdown('content/vulkan-vscode-setup.md'),
        date: "20240101"
    };
}