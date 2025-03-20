import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = process.env.NODE_ENV === 'production' ? '/jukeboxrodeo' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
        paths: {
            base,
        },
		adapter: adapter(),
        prerender: {
            entries: ['*'],
            handleHttpError: ({ status, path }) => {
               if (status === 404) {
                   console.warn(`Ignoring 404 for ${path}`);
                   return;
               }
               throw new Error(`Prerendering failed at ${path} with status ${status}`);
            }
        }
	}
};

export default config;
