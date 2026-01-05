export default {
	name: "magazineIssue",
	title: "Magazine Issue",
	type: "document",
	fields: [
		{ name: "issueNumber", type: "string" },
		{ name: "publishDate", type: "date" },
		{ name: "cover", type: "image" },
		{
			name: "articles",
			type: "array",
			of: [{ type: "reference", to: [{ type: "article" }] }],
		},
		{
			name: "slug",
			type: "slug",
			options: { source: "issueNumber" },
		},
	],
};
