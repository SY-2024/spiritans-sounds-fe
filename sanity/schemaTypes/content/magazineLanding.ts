export default {
	name: "magazineLanding",
	title: "Unveiler Magazine Landing",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "subtitle", type: "text" },

		{
			name: "heroImage",
			type: "image",
			options: { hotspot: true },
		},

		{
			name: "aboutMagazine",
			title: "About the Magazine",
			type: "array",
			of: [{ type: "block" }],
		},

		{
			name: "mission",
			type: "array",
			of: [{ type: "block" }],
		},

		{
			name: "editorNote",
			title: "Editor's Note",
			type: "array",
			of: [{ type: "block" }],
		},

		{ name: "seo", type: "seo" },
	],
};
