<script>
	import * as d3 from 'd3';
	// import { newSeed, hexGen24bit, fromHex, toBit } from '$lib/utils';
	import { gridData } from '$lib/grid';
	import { onMount } from 'svelte';

	export let length = 300;
	export let seed = '5252';

	onMount(async () => {
		var gd = gridData(seed, length);

		var grid = d3.select('#grid').append('svg').attr('width', '900px').attr('height', '900px');
		var row = grid.selectAll('.row').data(gd).enter().append('g').attr('class', 'row');

		var column = row
			.selectAll('.square')
			.data((d) => d)
			.enter()
			.append('rect')
			.attr('class', 'square')
			.attr('x', (d) => d.x)
			.attr('y', (d) => d.y)
			.attr('width', (d) => d.width)
			.attr('height', (d) => d.height)
			.style('fill', (d) => `#${d.fill}`);
	});
</script>

<h1>Hello</h1>
<div class="container">
	<div id="grid" />
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
