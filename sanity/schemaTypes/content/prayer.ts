export default {
	name: "prayer",
	title: "Prayers & Devotionals",
	type: "document",
	fields: [
		{ name: "title", type: "string" },

		{
			name: "category",
			type: "string",
			options: {
				list: ["Rosary", "Novena", "Daily Prayer", "Special"],
			},
		},

		{ name: "content", type: "array", of: [{ type: "block" }] },
	],
};
