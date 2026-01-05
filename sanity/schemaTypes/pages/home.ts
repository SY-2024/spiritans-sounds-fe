// Singleton
export default {
	name: "home",
	title: "Home Page",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "heroText", type: "text" },
		{ name: "heroImage", type: "image", options: { hotspot: true } },

		{
			name: "featuredHomily",
			type: "reference",
			to: [{ type: "homily" }],
		},

		{
			name: "ctaText",
			type: "string",
			title: "Call To Action Text",
		},

		{ name: "seo", type: "seo" },
	],
};
