<script>
	import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';
	import { generateItems, makeGrid } from '$lib/grid';

	export let length = '300';
	export let seed = '5252';
	let size = '2px';

	let [items, itemsList] = generateItems(seed, length);
	let gridItems = 'rendering...';
	async function updateG() {
		let g = makeGrid(items, itemsList, size);
		gridItems = g;
	}
	updateG();
</script>

<h1>Hello</h1>
<div class="container">
	{@html gridItems}
	<!-- {#each items as _, i}
		<div class="row">
			{@html makeRow(itemsList[i], size)}
		</div>
	{/each} -->
</div>

<!-- 
    todo: 
    - sort out why this takes so long to draw 
    - handle async rendering better, at leaset use a loading screen
    - think about ways this could be done in paralle? maybe web workers?
-->
