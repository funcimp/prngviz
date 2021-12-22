<script>
	import { page } from '$app/stores';
	import Grid from '$lib/grid.svelte';
	import RandomButton from '$lib/randomButton.svelte';
	import { onMount } from 'svelte';

	let length;
	let seed;

	onMount(() => {
		length = parseInt($page.query.get('len')) || 250;
		seed = $page.params.seed;
	});
</script>

<RandomButton bind:seed />
<br />
<Grid {length} {seed} />
