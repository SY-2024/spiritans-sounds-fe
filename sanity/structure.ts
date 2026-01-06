// sanity/structure.ts
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			// 🔒 Home singleton
			S.listItem().title("Home Page").id("home").child(S.document().schemaType("home").documentId("home")),

			S.divider(),

			// 📄 Pages
			S.documentTypeListItem("page").title("Pages"),

			// ✝️ Homilies
			S.documentTypeListItem("homily").title("Homilies"),

			// 🙏 Prayers
			S.documentTypeListItem("prayer").title("Prayers & Devotionals"),

			// 🎵 Music
			S.documentTypeListItem("music").title("Music & Worship"),

			// 🎙 Radio
			S.documentTypeListItem("radio").title("Online Radio"),

			// 📚 Publications
			S.documentTypeListItem("publication").title("Publications"),

			// 🗞 News & Events
			S.documentTypeListItem("event").title("News & Events"),

			S.divider(),

			// 🎭 Unveiler Magazine
			S.listItem()
				.title("Unveiler Magazine")
				.child(
					S.list()
						.title("Unveiler Magazine")
						.items([
							S.documentTypeListItem("magazineLanding").title("Magazine Landing"),

							S.documentTypeListItem("magazineIssue").title("Issues"),
						])
				),

			S.divider(),

			// ⚙️ Singletons
			S.listItem()
				.title("Site Settings")
				.child(
					S.list()
						.title("Site Settings")
						.items([
							S.documentTypeListItem("contactPage").title("Contact Page"),
							S.documentTypeListItem("donationPage").title("Donations"),
							S.documentTypeListItem("newsletter").title("Newsletter"),
						])
				),
		]);
