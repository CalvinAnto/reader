export class Manga {
	public id: number;
	public thumb: string;
	public thumbnail?: string;
	public title: string;
	public pages?: Page[];

	constructor(id: number, thumb: string, title: string, pages?: Page[]) {
		this.id = id;
		this.thumb = thumb;
		this.title = title;
		this.pages = pages;
	}
}

export class Page {
	public no: number;
	public img: string;
	public thumbnail?: string;
	public url?: string
	public page_no?: number;

	constructor(no: number, img: string) {
		this.no = no;
		this.img = img;
	}
}

const mangaList = new Array<Manga>();

export const insert = (id: number, thumb: string, title: string, pages?: Page[]) => {
	mangaList.push(new Manga(id, thumb, title, pages));
};

export const getById = (id: number) => {
	return mangaList.find((manga) => manga.id == id);
};

export const getAll = () => {
	return mangaList;
};