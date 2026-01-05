import { type SchemaTypeDefinition } from "sanity";
import home from "./pages/home";
import page from "./pages/page";
import donationPage from "./pages/donationPage";
import contactPage from "./pages/contactPage";

import homily from "./content/homily";
import prayer from "./content/prayer";
import music from "./content/music";
import radio from "./content/radio";
import publication from "./content/publication";
import magazineIssue from "./content/magazineIssue";
import magazineLanding from "./content/magazineLanding";
import article from "./content/article";
import event from "./content/event";
import newsletter from "./content/newsletter";

import seo from "./shared/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		home,
		page,
		donationPage,
		contactPage,
		homily,
		prayer,
		music,
		radio,
		publication,
		magazineIssue,
		magazineLanding,
		article,
		event,
		newsletter,
		seo,
	],
};
