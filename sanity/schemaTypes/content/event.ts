export default {
	name: "event",
	title: "News & Events",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "date", type: "datetime" },
		{ name: "location", type: "string" },
		{ name: "description", type: "text" },
		{ name: "image", type: "image" },
	],
};
