import ShineBorder from "./magicui/shine-border";
import { Link } from "react-scroll";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/shadcn/sheet";
import { Button } from "./shadcn/button";
import { TbMenu2 } from "react-icons/tb";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
	const itemsLink = [
		{ name: "Home", target: "home" },
		{ name: "About", target: "about" },
		{ name: "Product", target: "product" },
		{ name: "Contact", target: "contact" },
	];

	return (
		<>
			<nav className="fixed top-2 left-0 right-0 z-50 pt-2 md:block hidden">
				<ShineBorder
					className="dark:bg-neutral-900 bg-neutral-50 relative p-4 max-w-xl mx-auto rounded-full border md:shadow-xl"
					color={["#FF0000", "#0000FF", "#FFFF00"]}
				>
					<SlideTabs itemsLink={itemsLink} />
				</ShineBorder>
			</nav>
			<Sheet>
				<SheetTrigger className="fixed top-2 left-0 z-50 block md:hidden">
					<Button
						variant="default"
						className="text-white text-3xl p-4 m-2 rounded-xl"
					>
						<TbMenu2 />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-4/5">
					<SheetHeader className="border-b">
						<SheetTitle className="font-semibold flex">
							<img src="/logo.png" alt="logo" className="h-10 w-10" />
							<p className="font-display p-1">Merdeka Creation</p>
						</SheetTitle>
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
							<p className="text-center text-gray-600 dark:text-gray-300 text-xs mb-4">
								©2024 Copyright: Merdeka Creation Sdn Bhd. All Rights Reserved.
							</p>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
}

const SlideTabs = ({
	itemsLink,
}: {
	itemsLink: { name: string; target: string }[];
}) => {
	const [position, setPosition] = useState<Position>({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			onMouseLeave={() => {
				setPosition((prev: any) => ({
					...prev,
					opacity: 0,
				}));
			}}
			className="relative mx-auto flex w-fit rounded-full"
		>
			{itemsLink.map((item, index) => (
				<Tab key={index} setPosition={setPosition} target={item.target}>
					{item.name}
				</Tab>
			))}
			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
	target,
}: {
	children: string;
	setPosition: Dispatch<SetStateAction<Position>>;
	target: string;
}) => {
	const ref = useRef<null | HTMLLIElement>(null);

	return (
		<Link to={target} smooth={true} duration={500}>
			<li
				ref={ref}
				onMouseEnter={() => {
					if (!ref?.current) return;

					const { width } = ref.current.getBoundingClientRect();

					setPosition({
						left: ref.current.offsetLeft,
						width,
						opacity: 1,
					});
				}}
				className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2 md:text-base"
			>
				{children}
			</li>
		</Link>
	);
};

const Cursor = ({ position }: { position: Position }) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-black md:h-10"
		/>
	);
};

type Position = {
	left: number;
	width: number;
	opacity: number;
};
