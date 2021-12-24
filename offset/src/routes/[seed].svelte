<script>
	import { page } from '$app/stores';
	import Grid from '$lib/grid.svelte';
	import VisSelector from '$lib/visSelector.svelte';
	import { onMount } from 'svelte';

	let length;
	let seed;

	onMount(() => {
		length = parseInt($page.query.get('len')) || 250;
		seed = $page.params.seed;
	});
</script>

<VisSelector bind:seed bind:length />
<br />
<Grid {length} {seed} />
