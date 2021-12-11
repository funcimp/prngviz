<script>
	import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';
	// import { createQueryStore } from '$lib/query';

	const seed = newSeed();
	let next = hexGen24bit(seed);
	let length = 300;
	let size = '2px';

	let items = [];
	for (let i = 0; i < length; i++) {
		items.push(next());
	}
	let itemsList = [];
	const offSet = (i, l) => l.slice(i, l.length).concat(l.slice(0, i));
	for (let i = 0; i < length; i++) {
		let b = toBit(fromHex(items[i]));
		if (b === 0) b = -1;
		itemsList.push(offSet(b * i, items));
	}
</script>

<div class="container">
	{#each items as _, i}
		<div class="row">
			{#each itemsList[i] as item}
				<div class="column" style="padding: 0; flex:0;">
					<div
						width="3"
						style="padding: 0; background-color:#{item}; width:{size}; height:{size};"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
