// app/page.tsx
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function HomePage() {
	const data = await client.fetch(HOME_QUERY);

	if (!data) return null;

	return (
		<main>
			{/* HERO */}
			<section className="relative h-[80vh] flex items-center justify-center text-white">
				{data.heroImage && (
					<Image src={data.heroImage.asset.url} alt={data.title} fill priority className="object-cover brightness-50" />
				)}

				<div className="relative z-10 max-w-3xl text-center px-6">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>

					<p className="text-lg md:text-xl text-gray-200 mb-8">{data.heroText}</p>

					{data.ctaText && (
						<button className="rounded-full bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition">
							{data.ctaText}
						</button>
					)}
				</div>
			</section>

			{/* FEATURED HOMILY */}
			{data.featuredHomily && (
				<section className="py-20 px-6 max-w-6xl mx-auto">
					<h2 className="text-3xl font-semibold text-center mb-12">Featured Homily</h2>

					<article className="bg-gray-50 rounded-3xl p-10 shadow-sm">
						<h3 className="text-2xl font-bold mb-2">{data.featuredHomily.title}</h3>

						<p className="text-sm text-gray-500 mb-6">
							{data.featuredHomily.scripture} · {new Date(data.featuredHomily.date).toDateString()}
						</p>

						<div className="prose max-w-none">
							<PortableText value={data.featuredHomily.content} />
						</div>
					</article>
				</section>
			)}
		</main>
	);
}
