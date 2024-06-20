<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page, navigating } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;

	let blobCache: Map<string, string> = new Map();

	$: overlayVisible = true;

	$: url = data.manga?.pages?.find((page) => page.page_no == currPage)?.url;

	$: currPage = parseInt($page.params.page);

	$: nextPage = () => {
		if (currPage >= data.totalPage) {
			return `/info/${$page.params.manga_id}`;
		}

		return `/reader/${$page.params.manga_id}/${currPage + 1}`;
	};

	$: prevPage = () => {
		if (currPage <= 1) return `/info/${$page.params.manga_id}`;

		return `/reader/${$page.params.manga_id}/${currPage - 1}`;
	};

	const preLoad = (amount: number) => {
		for (let i = 1; i <= amount; i++) {
			if (currPage + i > data.totalPage) return;
			let url = data.manga?.pages?.find((page) => page.page_no == currPage + i)?.url;
			let blobUrl;
			if (url) {
				blobUrl = blobCache.get(url);
			}

			if (!blobUrl) {
				fetchImageBlob(url);
			}
		}

		for (let i = 1; i <= amount; i++) {
			if (currPage - i < 1) return;
			let url = data.manga?.pages?.find((page) => page.page_no == currPage - i)?.url;

			let blobUrl;
			if (url) {
				blobUrl = blobCache.get(url);
			}

			if (!blobUrl) {
				fetchImageBlob(url);
			}
		}
	};

	const fetchImageBlob = async (url?: string) => {
		if (url) {
			try {
				const response = await fetch(url);
				const blob = await response.blob();

				let blobUrl = URL.createObjectURL(blob);

				blobCache.set(url, blobUrl);

				return blobUrl;
			} catch (error) {
				console.log('Fetch Error: ', error);
				return 'https://pp.tori.my.id/m/error.jpg';
			}
		}
	};

	let promise: any =  "";

	afterNavigate(async () => {
		await loadImage();
	});

	onMount(async () => {
		await loadImage();
	});

	const loadImage = async() => {
		let blobUrl: string | undefined;

		if (url) {
			blobUrl = blobCache.get(url);
		}

		if (blobUrl) {
			promise = blobUrl;
		} else {
			promise = fetchImageBlob(url);
		}

		preLoad(3);
	}

	const toggleOverlay = () => {
		overlayVisible = !overlayVisible;
	};
</script>

<div class="reader">
	<div class="overlay" hidden={overlayVisible}>
		<div class="topbar">
			<a href="/info/{data.manga?.id}">Close</a>
		</div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={toggleOverlay} class="empty-space"></div>
	</div>
	<div class="container">
		<div class="clicker" data-sveltekit-preload-data>
			<!-- <div class="loading">LOADING!</div> -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="bg" on:click={toggleOverlay}></div>
			{#await promise}
				<div class="loading">LOADING!</div>
			{:then imgSource}
				<img src={imgSource} alt="" />
			{/await}

			<a href={prevPage()} class="prev"><span /></a>
			<a href={nextPage()} class="next"><span /></a>
		</div>
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		height: 100vh;
		max-height: 100vh;
		width: fit-content;
	}

	img {
		display: block;
		width: auto;
		height: 100%;
	}

	.loading {
		display: flex;
		height: 100%;
		width: 720px;
		align-items: center;
		justify-content: center;
		font-size: xx-large;
		font-weight: bolder;
	}

	.clicker {
		position: relative;
		display: flex;
		height: 100%;
		width: fit-content;
		top: 0;
	}

	.next,
	.prev {
		position: absolute;
		background-color: gray;
		height: 100%;
		width: 45%;
		top: 0;
		opacity: 0;
	}

	.next {
		left: 55%;
	}

	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
		background-color: rgba(0, 0, 0, 0.3); /* Black background with opacity */
	}

	.overlay > .topbar {
		width: 100%;
		height: 75px;
		background-color: lime;
		display: flex;
		align-items: center;
	}

	.bg {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.empty-space {
		width: 100%;
		height: 100%;
	}
</style>
