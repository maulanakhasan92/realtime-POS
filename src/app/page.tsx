import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Button>Hello!</Button>
			<Input placeholder="Type something..." />
			<DarkModeToggle />
		</>
	);
}
