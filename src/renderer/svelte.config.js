import adapter from '@sveltejs/adapter-static';
import { vitePreprocess as preprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, '..', '..', 'out', 'renderer');
console.log(buildDir);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],

	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: buildDir,
			assets: buildDir
		}),
		prerender: { entries: [] }
		// outDir: 'testDir'
	}
};

export default config;
