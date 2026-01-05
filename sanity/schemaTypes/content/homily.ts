export default {
	name: "homily",
	title: "Homilies & Reflections",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "date", type: "date" },
		{ name: "scripture", type: "string" },

		{
			name: "audio",
			title: "Audio (optional)",
			type: "url",
		},

		{ name: "content", type: "array", of: [{ type: "block" }] },

		{
			name: "category",
			type: "string",
			options: {
				list: ["Sunday", "Feast Day", "Special"],
			},
		},

		{ name: "seo", type: "seo" },
	],
};
