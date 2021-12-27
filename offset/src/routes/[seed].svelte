<script>
	import { page } from '$app/stores';
	import Grid from '$lib/grid.svelte';
	import VisSelector from '$lib/visSelector.svelte';
	import { onMount } from 'svelte';

	let length;
	let seed;
	let ready = false;

	let triggered = () => {
		ready = false;
		console.log('triggered');
	};
	let rendered = () => {
		ready = true;
		console.log('rendered');
	};

	onMount(() => {
		length = parseInt($page.query.get('len')) || 250;
		seed = $page.params.seed;
	});
</script>

<VisSelector bind:seed bind:length {triggered} />
<br />
<Grid {length} {seed} {rendered} {ready} />
