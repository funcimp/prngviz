<script>
	import { newSeed } from '$lib/utils';
	import { goto } from '$app/navigation';

	export let length = 250;
	export let seed = null;

	const handleClick = async () => {
		seed = newSeed();
		goto(`/${seed}?len=${length}`, { keepfocus: true });
	};
</script>

<button on:click={handleClick}>generate random</button>
