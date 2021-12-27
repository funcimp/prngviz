<script>
	import RandomButton from '$lib/randomButton.svelte';
	import { goto } from '$app/navigation';
	import { afterUpdate } from 'svelte';

	export let seed = null;
	export let length = 250;
	export let triggered = () => {};

	afterUpdate(() => {
		if (seed !== null) {
			goto(`/${seed}?len=${length}`, { keepfocus: true });
		}
	});
</script>

<input type="range" id="volume" name="volume" min="5" max="500" step="5" bind:value={length} />
<label for="volume">Length: {length}</label>

<RandomButton bind:seed {length} {triggered} />
