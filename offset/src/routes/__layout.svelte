<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
	/>
	<!-- CSS Reset -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
	/>
	<!-- Milligram CSS -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
	/>
</svelte:head>

<main class="container">
	<slot />
</main>
<footer class="container"><a href="https://funcimp.biz/">funcimp</a></footer>

<style>
	:global(body, html, #svelte) {
		width: 100vw;
		min-height: 100vh;
	}
	:global(#svelte) {
		display: flex;
		flex-direction: column;
	}
	main {
		flex: 1;
		margin-top: 3rem;
	}
	footer {
		margin-top: auto;
		font-size: 0.8em;
		opacity: 0.5;
	}
</style>
