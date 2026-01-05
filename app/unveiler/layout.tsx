import MagazineNav from "@/components/magazine/MagazineNav";

export default function MagazineLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-neutral-950 text-white min-h-screen">
			<MagazineNav />
			<div className="max-w-6xl mx-auto px-4 py-10">{children}</div>
		</section>
	);
}
