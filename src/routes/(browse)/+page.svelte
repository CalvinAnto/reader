<script lang="ts">
	export let data;

</script>

<div class="main">
	<div class="container">
		<h1>Hello World</h1>
		<div class="cards">
			{#each data.mangaList as manga}
				<div class="item">
					<a href="/info/{manga.id}">
						<div class="card">
							<div style="text-overflow: '...'; white-space: nowrap; overflow: hidden; padding: 2px 10px">{manga.title}</div>
							<img src={manga.thumbnail} />
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.main {
		text-align: center;
	}

	.container {
		margin: 0 auto;
		width: 1152px;
		max-width: 1152px;
	}

	.cards {
		display: flex;
		flex-wrap: wrap;
	}

	.item {
		width: 25%;
	}

	@media screen and (min-width: 1500px) {
		.item {
			width: 20%;
		}

		.container {
			width: 1500px;
			max-width: 1500px;
		}
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {
		.item {
			width: 50%;
		}

		.container {
			width: 100%;
			max-width: 100%;
		}
	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.item {
			width: 50%;
		}

		.container {
			width: 600px;
			max-width: 600px;
		}
	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.item {
			width: 33.33%;
		}

		.container {
			width: 700px;
			max-width: 700px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.item {
			width: 25%;
		}

		.container {
			width: 800px;
			max-width: 800px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.item {
			width: 20%;
		}

		.container {
			width: 1100px;
			max-width: 1100px;
		}
	}

	@media only screen and (min-width: 1500px) {
		.item {
			width: 20%;
		}

		.container {
			width: 1400px;
			max-width: 1400px;
		}
	}


	.card {
		background-color: white;
		border: black solid;
		margin: 10px;
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
