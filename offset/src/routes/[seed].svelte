<script>
	import { page } from '$app/stores';
	import Grid from '$lib/grid.svelte';
	import RandomButton from '$lib/randomButton.svelte';
	import { onMount } from 'svelte';

	let seed;
	let length;

	let update = () => {
		location.reload();
	};

	onMount(async () => {
		length = parseInt($page.query.get('len')) || 250;
		seed = $page.params.seed;
	});

	const notify = (s) => {
		seed = null;
		update();
	};
</script>

<RandomButton {notify} />
{#if seed}
	<Grid {length} {seed} />
{:else}
	<h3>loading...</h3>
{/if}
