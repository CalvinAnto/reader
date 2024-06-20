<script>
	export let data;
</script>

<div class="info">
	<div class="details">
		<div class="img-side">
			<img src="{data.manga?.thumbnail}" />
			<a href="/reader/{data.manga?.id}/1"><button>Read</button></a>
		</div>
		<div>
			<h1>{data.manga?.title}</h1>
			<p>Description</p>
		</div>
	</div>
	<div class="thumbnails">
		
	</div>
</div>

<style>

	.info {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		gap: 20px;
	}

	button {
		width: 100%;
	}

	.details {
		display: flex;
        width: 1000px;
		height: 300px;
		border: black solid;
		padding: 10px;
		background-color: darkcyan;
		gap: 20px;
	}

	.thumbnails {
		width: 1000px;
		height: 2000px;
		border: black solid;
	}

	.img-side {
		display: flex;
		flex-direction: column;
		gap: 10px;
		height: 100%;
		justify-content: center;
	}

	img {
		display: block;
		height: 80%;
		width: auto;
	}

	a {
		display: flex;
	}

</style>
