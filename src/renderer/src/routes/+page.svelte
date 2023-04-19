<script lang="ts">
	import { onMount } from 'svelte';
	import { sleep } from '../../../shared/sharedUtils';

	// getting package.json version using safe SYNC call to main process
	// see src/main/lib/utils.ts for implementation
	let packageVersion = 'loading simulation with shared sleep() function in renderer';
	onMount(async () => {
		await sleep(2000);
		packageVersion = window.electron.sendSync('appVersionSync', 'test arg');
	});

	// ASYNC call. Getting user home directory
	// see src/main/lib/utils.ts for implementation
	let homeDir = 'loading simulation with shared sleep() function in main...';
	onMount(() => {
		window.electron.send('homeDirPathAsync', 'async test arg');

		window.electron.receive('homeDirPathAsyncResponse', (data: any) => {
			homeDir = data;
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
	Here is package version (sync) from package.json : {packageVersion}
</div>

<div>
	Here is home dir (async): {homeDir}
</div>
