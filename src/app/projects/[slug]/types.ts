/** @format */


export interface TGallery {
	projectspages: Projectspage[];
}

export interface Projectspage {
	projectslist: Projectslist[];
}

export interface Projectslist {
	id: string;
	galery: Galery[];
	description: string;
	title: string;
}

export interface Galery {
	id?: string;
	url: string;
}
