<script>
	import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';
	import Grid from '$lib/grid.svelte';

	const seed = newSeed();
	const length = 300;
</script>

<Grid {length} {seed} />
