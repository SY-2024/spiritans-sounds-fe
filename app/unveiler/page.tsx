import { client } from "@/sanity/lib/client";
import { MAGAZINE_LANDING_QUERY } from "@/sanity/lib/queries";

export default async function MagazinePage() {
	const data = await client.fetch(MAGAZINE_LANDING_QUERY);

	return (
		<>
			<h1 className="text-4xl font-bold mb-4">{data?.title}</h1>
			<p className="text-lg text-neutral-300 mb-8">{data?.subtitle}</p>

			<article className="prose prose-invert">
				{data?.aboutMagazine?.map((block: any) => (
					<p key={block._key}>{block.children?.[0]?.text}</p>
				))}
			</article>
		</>
	);
}
