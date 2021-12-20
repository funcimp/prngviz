<script>
	import { getStores, navigating, page, session } from '$app/stores';
	import Grid from '$lib/grid.svelte';

	const seed = $page.params.seed;
	const length = parseInt($page.query.get('len')) || 250;
</script>

<Grid {length} {seed} />
