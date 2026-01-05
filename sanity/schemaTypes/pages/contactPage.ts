export default {
	name: "contactPage",
	title: "Contact Page",
	type: "document",
	fields: [
		{ name: "address", type: "string" },
		{ name: "email", type: "string" },
		{ name: "phone", type: "string" },
		{ name: "socialLinks", type: "array", of: [{ type: "url" }] },
	],
};
