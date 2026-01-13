"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MobileNav from "./HeaderMobile";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-border bg-background">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="font-bold text-lg text-primary">
					Catholic Ministry
				</Link>

				{/* Desktop Navigation */}
				<NavigationMenu className="hidden md:block">
					<NavigationMenuList className="gap-4">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>

						{/* Word & Worship */}
						<NavigationMenuItem>
							<NavigationMenuTrigger>Word & Worship</NavigationMenuTrigger>
							<NavigationMenuContent>
								<MenuPanel>
									<MenuLink href="/homilies">Homilies & Reflections</MenuLink>
									<MenuLink href="/prayers">Prayers & Devotionals</MenuLink>
									<MenuLink href="/music">Music & Worship</MenuLink>
								</MenuPanel>
							</NavigationMenuContent>
						</NavigationMenuItem>

						{/* Media */}
						<NavigationMenuItem>
							<NavigationMenuTrigger>Media</NavigationMenuTrigger>
							<NavigationMenuContent>
								<MenuPanel>
									<MenuLink href="/news">News / Events</MenuLink>
									<MenuLink href="/radio">🎙 Online Radio</MenuLink>
									<MenuLink href="/newsletter">Newsletter</MenuLink>
								</MenuPanel>
							</NavigationMenuContent>
						</NavigationMenuItem>

						{/* High-priority Unveiler link */}
						<NavigationMenuItem>
							<Link
								href="/unveiler"
								className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground
               hover:opacity-90 transition">
								🎭 Unveiler Magazine
							</Link>
						</NavigationMenuItem>

						{/* Resources */}
						<NavigationMenuItem>
							<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
							<NavigationMenuContent>
								<MenuPanel>
									<MenuLink href="/publications">📚 eBooks & Publications</MenuLink>
								</MenuPanel>
							</NavigationMenuContent>
						</NavigationMenuItem>

						<NavLink href="/contact">Contact</NavLink>
					</NavigationMenuList>
				</NavigationMenu>

				{/* CTA */}
				<div className="hidden md:block">
					<Button asChild>
						<Link href="/donations">Donate</Link>
					</Button>
				</div>

				{/* Mobile */}
				<MobileNav />
			</div>
		</header>
	);
}

/* -------------------------------- */

function NavLink({ href, children }: any) {
	return (
		<NavigationMenuItem>
			<Link href={href} className="text-sm font-medium text-muted hover:text-foreground">
				{children}
			</Link>
		</NavigationMenuItem>
	);
}

function MenuPanel({ children }: any) {
	return <div className="grid w-56 gap-2 p-4">{children}</div>;
}

function MenuLink({ href, children }: any) {
	return (
		<Link href={href} className="rounded-md px-3 py-2 text-sm hover:bg-surface">
			{children}
		</Link>
	);
}
