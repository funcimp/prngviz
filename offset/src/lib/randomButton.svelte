<script>
	import { newSeed } from '$lib/utils';
	import { goto } from '$app/navigation';

	export let length = 250;
	export let notify = (s) => {};

	const handleClick = async () => {
		const seed = newSeed();
		goto(`/${seed}?len=${length}`, { keepfocus: false });
		notify(seed);
	};
</script>

<button on:click={handleClick}>generate random</button>
