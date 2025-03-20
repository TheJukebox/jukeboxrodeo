import { stat, readFileSync, readdirSync } from 'fs';
import { promisify } from 'util';
import markdownit from 'markdown-it';
import hljs from 'highlight.js';

const MARKDOWN_CONTENT_PATH: string = 'src/public/';
export type FileStatsTuple = [string, number, string, string];
export type FormattedFileStatsTuple = [string, string, string, string];
const stat_async = promisify(stat);

enum MONTH {
    "Jan" = 0,
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
}

function month_to_num(month: string) {
    return MONTH[month as keyof typeof MONTH];
}

export function render_markdown(path: string) {
    const md_parser = markdownit({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, {language: lang}).value;
                } catch (e) {
                    console.error('Failed to highlight string');
                }
            }
            return ''; // use external default escaping
        }
    });
    
    const raw_content: string = readFileSync(MARKDOWN_CONTENT_PATH+path, 'utf-8');
    return md_parser.render(raw_content);
}

function compare_date(i: string, j: string) {
    const date = new Date(i);
    const other = new Date(j);

    return other.getTime() - date.getTime();
}

function format_size_string(s: string, n: number) {
    //    1
    // 1000
    // get size of s
    // for difference in size, append spaces
    var s_len: number = s.length;
    var diff: number = n - s_len;
    for (var i = 0; i < diff; i++) {
        s = ' '+s;
    };
    return s;
}

function format_dt(dt: Date) {
    let day: string = dt.getDate().toString();
    let month: string = MONTH[dt.getMonth()];
    let time: string = dt.getHours() + ':' + dt.getMinutes();

    return day + ' ' + month + ' ' + time;
} 

export async function get_posts() {

    var posts_path: string = MARKDOWN_CONTENT_PATH+'content/'
    var posts: string[] = readdirSync(posts_path);
    var file_stats: FileStatsTuple[] = [
        [
            'drw-r--r--',
            128,
            '3 Feb 17:52',
            '.'
        ],
        [
            'drw-r--r--',
            160,
            "3 Feb 17:37",
            ".."
        ]
    ];
    var largest: number = 0;

    for (const post of posts) {
        try {
            const stats = await stat_async(posts_path + post);
            let dt_string: string = format_dt(stats.mtime);
            if (stats.size.toString().length > largest) {
                largest = stats.size.toString().length;
            }
            file_stats.push([
                '-rw-r--r--',
                stats.size,
                dt_string,
                post
            ]);
        } catch(err) {
            console.error('Error trying to get stats for ' + post + ': ' + err);
        }
    }

    var formatted_file_stats: FormattedFileStatsTuple[] = [];
    for (const stats of file_stats) {
        formatted_file_stats.push([
            stats[0],
            format_size_string(stats[1].toString(), largest),
            stats[2],
            stats[3]
        ]);
    }
    formatted_file_stats.sort((a, b) => compare_date(a[2], b[2]));
    return formatted_file_stats;
}