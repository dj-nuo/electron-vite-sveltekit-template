<script lang="ts">
  import { onMount } from "svelte";

  let homeDir = ''
  
  // getting package.json version using safe SYNC call to main process
  // see src/main/lib/utils.ts for implementation
  let packageVersion = ''
    onMount(()=>{
        packageVersion = window.electron.sendSync('appVersionSync', 'test arg')
    })

    // ASYNC call. Getting user home directory
    // see src/main/lib/utils.ts for implementation
    onMount(()=>{
        window.electron.send('homeDirPathAsync', 'async test arg')

        window.electron.receive('homeDirPathAsyncResponse', (data: any) => {
			homeDir = data
		});
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    Here is package version (sync) fron package.json : {packageVersion}
</div>

<div>
    Here is home dir (async): {homeDir}
</div>