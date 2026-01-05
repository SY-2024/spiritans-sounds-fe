export default {
	name: "music",
	title: "Music & Worship",
	type: "document",
	fields: [
		{ name: "title", type: "string" },
		{ name: "artist", type: "string" },
		{ name: "audioUrl", type: "url" },
		{ name: "lyrics", type: "array", of: [{ type: "block" }] },
	],
};
