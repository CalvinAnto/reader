import {Manga} from '$lib/server/db'

export async function load({}) {

    let res = await fetch("http://localhost:3000/manga")
    let mangaList: Manga[] = await res.json();

    return {
        mangaList
    }
}