import { render_markdown } from '../content.ts';

export function load({params}) {
    return {
        content: render_markdown('content/'+params.post),
        title: params.post
    };
}