<script>
	import * as d3 from 'd3';
	// import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';
	import { generateItems, makeGrid, gridData } from '$lib/grid';
	import { onMount } from 'svelte';

	export let length = '300';
	export let seed = '5252';
	// let size = '2px';

	// let [items, itemsList] = generateItems(seed, length);
	// let gridItems = 'rendering...';
	// async function updateG() {
	// 	let g = makeGrid(items, itemsList, size);
	// 	gridItems = g;
	// }
	// updateG();

	onMount(async () => {
		var gd = gridData(seed);

		var grid = d3.select('#grid').append('svg').attr('width', '900px').attr('height', '900px');
		var row = grid.selectAll('.row').data(gd).enter().append('g').attr('class', 'row');

		var column = row
			.selectAll('.square')
			.data(function (d) {
				return d;
			})
			.enter()
			.append('rect')
			.attr('class', 'square')
			.attr('x', function (d) {
				return d.x;
			})
			.attr('y', function (d) {
				return d.y;
			})
			.attr('width', function (d) {
				return d.width;
			})
			.attr('height', function (d) {
				return d.height;
			})
			.style('fill', (d) => `#${d.fill}`);
		// .style('stroke', '#222');
	});
</script>

<div id="grid" />

<h1>Hello</h1>
<div class="container">
	<!-- {@html gridItems} -->
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
	- consider moving over to d3? I think it would be better to use an SVG to make this
	  and it could open up other visualizations
	- with the move to d3, maybe ther are other visualizations that could also be cool?
	
-->
