<script>
	import { XoShiRo128PlusPlus } from 'prng-xoshiro/src/xoshiro128';
	import { gen_rand_seed, nextRGB, nextBinary } from '$lib/utils';
	import { createQueryStore } from '$lib/query';

	let rand = new XoShiRo128PlusPlus(5555555);
	console.log(rand.nextNumber());
	console.log(nextRGB(rand));

	const seed = createQueryStore('s');
</script>

<h1>Welcome to SvelteKit</h1>

{$seed}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input bind:value={$seed} />
