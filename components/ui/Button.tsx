import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={cn(
				"inline-flex items-center rounded-full px-6 py-3 font-semibold transition",
				variant === "primary" && "bg-primary text-primary-foreground hover:opacity-90",
				variant === "ghost" && "text-foreground hover:bg-surface",
				className
			)}
		/>
	);
}
