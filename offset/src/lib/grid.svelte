<script>
	import * as d3 from 'd3';
	import Loading from '$lib/loading.svelte';
	import { gridData } from '$lib/grid';
	import { beforeUpdate, afterUpdate, tick } from 'svelte';

	export let length = 300;
	export let seed;
	export let rendered = () => {};
	export let ready = false;

	const drawGrid = () => {
		d3.select('#grid').selectAll('*').remove();
		if (!seed) {
			return;
		}
		let pixelSize = 2;
		let gd = gridData(seed, length, pixelSize);
		let gridSize = `${pixelSize * length}px`;
		let grid = d3.select('#grid').append('svg').attr('width', gridSize).attr('height', gridSize);
		let row = grid.selectAll('.row').data(gd).enter().append('g').attr('class', 'row');
		row
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
		rendered();
	};

	beforeUpdate(async () => {
		// console.log('before update', seed, ready);
		drawGrid();
	});
	afterUpdate(async () => {
		// console.log('after update', seed, ready);
	});
</script>

{#if ready}
	<h1>{seed}</h1>
{:else}
	<Loading />
{/if}
<div class="container">
	<div id="grid" hidden={!ready} />
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
