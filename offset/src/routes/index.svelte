<script>
	import { XoShiRo128PlusPlus } from 'prng-xoshiro/src/xoshiro128';
	import { newSeed, hexGen24bit } from '$lib/utils';
	// import { createQueryStore } from '$lib/query';

	const seed = newSeed();
	let next = hexGen24bit(seed);

	let items = [];
	for (let i = 0; i < 1000; i++) {
		items.push(next());
	}
</script>

<h1>Hi</h1>
<div class="container">
	<div class="row">
		{#each items as item}
			<div class="column">
				<div width="3" style="background-color:#{item}; width:5px; height:5px;" />
			</div>
		{/each}
	</div>
</div>
<!-- <input bind:value={$seed} /> -->
