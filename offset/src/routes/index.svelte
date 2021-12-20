<script>
	import { newSeed } from '$lib/utils';
	import { goto } from '$app/navigation';

	const handleClick = () => {
		const length = 250;
		const seed = newSeed();
		goto(`/${seed}?len=${length}`);
	};
</script>

<button on:click={handleClick}>generate random</button>
