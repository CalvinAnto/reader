import {Manga, getById} from "$lib/server/db"

export async function load({ params }: { params: {manga_id: number} }) {

    let id = params.manga_id

    let res = await fetch(`http://localhost:3000/manga/${id}`)
    let manga: Manga = await res.json();

	return {
		manga,
        totalPage: manga?.pages === undefined ? 0 : manga.pages.length
	};
}
