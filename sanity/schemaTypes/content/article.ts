export default {
	name: "article",
	title: "Magazine Article",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "author", type: "string" },
		{ name: "content", type: "array", of: [{ type: "block" }] },
		{ name: "image", type: "image" },
		{
			name: "slug",
			type: "slug",
			options: { source: "title" },
		},
	],
};
