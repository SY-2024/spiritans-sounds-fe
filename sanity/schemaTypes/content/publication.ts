export default {
	name: "publication",
	title: "eBooks & Publications",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "description", type: "text" },
		{ name: "cover", type: "image" },
		{ name: "file", type: "file" },
		{
			name: "price",
			type: "string",
			options: { list: ["Free", "Paid"] },
		},
	],
};
