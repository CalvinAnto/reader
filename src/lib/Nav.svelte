<div class="navbar">
    <a href="/" class="hoverable site-name">Reader</a>
    <div class="input-container">
        <input type="text" name="search" id="search" placeholder="Search">
        <button>Search</button>
    </div>
    <ul>
        <a href="/" class="hoverable">Home</a>
        <a href="/browse" class="hoverable">Browse</a>
        <li class="hoverable">Random</li>
    </ul>
</div>

<style>
	.navbar {
		width: 100%;
		height: 75px;
		background-color: lime;
		display: flex;
        align-items: center;
	}

    ul {
        padding: 0;
        height: 100%;
        display: flex;
        list-style-type: none;
    }

    ul a, ul li {
        padding: 20px;
        display: flex;
        align-items: center;
    }

    .site-name {
        font-size: x-large;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 50px;
    }

    .input-container {
        padding: 10px;
    }

</style>
