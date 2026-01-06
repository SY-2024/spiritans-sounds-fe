"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/lib/navigation";
import clsx from "clsx";

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 bg-white border-b">
			<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="font-bold text-xl">
					Catholic Ministry
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex gap-6">
					{MAIN_NAV.map((item) => {
						const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

						return (
							<Link
								key={item.href}
								href={item.href}
								className={clsx(
									"text-sm font-medium transition hover:text-black",
									isActive ? "text-black" : "text-gray-600"
								)}>
								{item.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</header>
	);
}
