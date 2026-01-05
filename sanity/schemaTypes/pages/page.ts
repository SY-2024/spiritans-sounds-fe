export default {
	name: "page",
	title: "Pages",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "slug", type: "slug", options: { source: "title" } },
		{ name: "content", type: "array", of: [{ type: "block" }] },
		{ name: "image", type: "image", options: { hotspot: true } },
		{ name: "seo", type: "seo" },
	],
};
