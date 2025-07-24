import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { Coffee } from "lucide-react";

type AuthLayoutProps = {
	children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className="relative bg-muted flex min-h-svh flex-col items-center justify-center gap-6 md:p-10">
			<div className="absolute top-4 right-4">
				<DarkModeToggle />
			</div>
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="flex items-center gap-2 self-center font-medium">
					<div className="flex items-center p-2 bg-teal-500 justify-center rounded-md">
						<Coffee className="h-6 w-6" />
					</div>
					XXX Cafe
				</div>
				{children}
			</div>
		</div>
	);
}
