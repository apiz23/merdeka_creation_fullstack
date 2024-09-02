import ShineBorder from "./magicui/shine-border";
import { Link } from "react-scroll";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { TbMenu2 } from "react-icons/tb";

export default function Navbar() {
	const itemsLink = [
		{ name: "Home", target: "home" },
		{ name: "About", target: "about" },
		{ name: "Contact", target: "contact" },
		{ name: "Product", target: "product" },
	];

	return (
		<>
			<nav className="fixed top-2 left-0 right-0 z-50 pt-2 md:block hidden">
				<ShineBorder
					className="dark:bg-neutral-900 bg-neutral-50 relative p-4 max-w-2xl mx-auto rounded-full border md:shadow-xl"
					color={["#FF0000", "#0000FF", "#FFFF00"]}
				>
					<p className="z-50 flex justify-between gap-5 font-semibold cursor-pointer">
						{itemsLink.map((item, index) => (
							<Link
								key={index}
								to={item.target}
								smooth={true}
								duration={500}
								className="text-black dark:text-white hover:text-red-800"
							>
								{item.name}
							</Link>
						))}
					</p>
				</ShineBorder>
			</nav>
			<Sheet>
				<SheetTrigger className="fixed top-2 left-0 z-50 block md:hidden">
					<Button className="bg-transparent dark:text-white text-black hover:bg-transparent text-3xl pt-4">
						<TbMenu2 />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-4/5">
					<SheetHeader>
						<SheetTitle>Merdeka Creation</SheetTitle>
					</SheetHeader>
					<div className="flex flex-col h-full">
						<div className="flex-1 overflow-y-auto">
							<ul className="list-none p-4 text-3xl font-mono pt-10">
								{itemsLink.map((item, index) => (
									<li key={index} className="mb-4">
										<Link
											to={item.target}
											smooth={true}
											duration={500}
											className="text-black dark:text-white hover:text-red-800"
										>
											<SheetClose>{item.name}</SheetClose>
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="p-4 border-t border-gray-200 dark:border-gray-700">
							<p className="text-center text-gray-600 dark:text-gray-300">
								Footer Content
							</p>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}
