"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu />
					<span className="sr-only">Open navigation menu</span>
				</Button>
			</SheetTrigger>

			<SheetContent side="right" className="p-6 space-y-2 bg-popover text-popover-foreground">
				{/* Accessible title (hidden visually) */}
				<VisuallyHidden>
					<DialogTitle>Mobile Navigation</DialogTitle>
				</VisuallyHidden>

				<SheetClose asChild>
					<Link href="/" className="block font-semibold hover:text-primary transition-colors py-2">
						Home
					</Link>
				</SheetClose>

				<SheetClose asChild>
					<Link href="/about" className="block hover:text-primary transition-colors py-2">
						About
					</Link>
				</SheetClose>
				<SheetClose asChild>
					<Link href="/unveiler" className="block hover:text-primary transition-colors py-2">
						Unveiler Magazine
					</Link>
				</SheetClose>

				<div className="pt-2">
					<p className="mb-3 text-sm font-semibold text-muted-foreground">Word & Worship</p>
					<div className="space-y-3 pl-2">
						<SheetClose asChild>
							<Link href="/homilies" className="block hover:text-primary transition-colors">
								Homilies
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href="/prayers" className="block hover:text-primary transition-colors">
								Prayers
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href="/music" className="block hover:text-primary transition-colors">
								Music
							</Link>
						</SheetClose>
					</div>
				</div>

				<div className="pt-2">
					<p className="mb-3 text-sm font-semibold text-muted-foreground">Media</p>
					<div className="space-y-3 pl-2">
						<SheetClose asChild>
							<Link href="/news" className="block hover:text-primary transition-colors">
								News / Events
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href="/radio" className="block hover:text-primary transition-colors">
								Online Radio
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href="/newsletter" className="block hover:text-primary transition-colors">
								Newsletter
							</Link>
						</SheetClose>
					</div>
				</div>

				<div className="pt-2">
					<p className="mb-3 text-sm font-semibold text-muted-foreground">Resources</p>
					<div className="space-y-3 pl-2">
						<SheetClose asChild>
							<Link href="/publications" className="block hover:text-primary transition-colors">
								Publications
							</Link>
						</SheetClose>
					</div>
				</div>

				<div className="pt-4">
					<SheetClose asChild>
						<Button asChild className="w-full">
							<Link href="/donations">Donate</Link>
						</Button>
					</SheetClose>
				</div>
			</SheetContent>
		</Sheet>
	);
}
