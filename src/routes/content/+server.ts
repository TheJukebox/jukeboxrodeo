
import { json } from '@sveltejs/kit';
import { get_posts, type FormattedFileStatsTuple } from './content.ts';

export async function GET() {
    console.log("content :: received GET request.");

    try {
        var post_data: FormattedFileStatsTuple[] = await get_posts();
        return json(post_data);
    } catch(err) {
        console.error('content :: There was some error: ', err);
        return json({error: 'Internal Server Error' }, {status: 500});
    }
};