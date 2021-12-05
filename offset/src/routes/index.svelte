<script>
	import { XoShiRo128PlusPlus } from 'prng-xoshiro';
	import { gen_rand_seed, nextRGB, nextBinary } from '../lib/utils.js';
	let rand = new XoShiRo128PlusPlus(gen_rand_seed());
	console.log(rand.nextNumber());
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
