import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import pic1 from "@/assets/product-items/pic1.jpeg";
import pic8 from "@/assets/product-items/pic8.jpg";
import pic3 from "@/assets/product-items/pic3.jpeg";
import pic4 from "@/assets/product-items/pic4.jpeg";
import pic5 from "@/assets/product-items/pic5.jpeg";
import pic6 from "@/assets/product-items/pic6.jpeg";
import pic7 from "@/assets/product-items/pic7.jpeg";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CardType {
	urlPic: string;
	title: string;
	id: number;
	shop: string;
	url: string;
}

const cards: CardType[] = [
	{
		urlPic: pic1,
		title: "Baju-T Streetwear, Tshirt Retro",
		id: 1,
		shop: "tiktok",
		url: "https://vt.tiktok.com/ZS2SQm5gk/",
	},
	{
		urlPic: pic8,
		title: "1957 Merdeka Jersey",
		id: 2,
		shop: "hitfat",
		url: "https://hitfat.my/product/jersey-merdeka/",
	},
	{
		urlPic: pic3,
		title: "Tudung Minaz Merdeka Edition",
		id: 3,
		shop: "shopee",
		url: "https://shopee.com.my/CLEARENCE-MINAZ-MERDEKA-EDITION-i.50787026.29758612261?sp_atk=b33684f7-8da1-43ac-a60b-98b242fd59f4&xptdk=b33684f7-8da1-43ac-a60b-98b242fd59f4",
	},
	{
		urlPic: pic4,
		title: "Stylish Muffler Scarf Merdeka",
		id: 4,
		shop: "shopee",
		url: "https://shopee.com.my/%F0%9F%8E%80Merdeka-2024-Viral-%F0%9F%8E%80-Stylish-Muffler-Scarf-Merdeka-for-Adult-Men-by-H-H-Exclusive-i.302861004.28604445866?sp_atk=7beb16c3-3f16-4a1e-8aa4-afce633a58e0&xptdk=7beb16c3-3f16-4a1e-8aa4-afce633a58e0",
	},
	{
		urlPic: pic5,
		title: "Headband Merdeka",
		id: 5,
		shop: "tiktok",
		url: "https://vt.tiktok.com/ZS2SQtLGs/",
	},
	{
		urlPic: pic6,
		title: "Bendera Canvas Gantung",
		id: 6,
		shop: "tiktok",
		url: "https://vt.tiktok.com/ZS2SCdmbN/",
	},
	{
		urlPic: pic7,
		title: "Brooch Merdeka",
		id: 7,
		shop: "tiktok",
		url: "https://vt.tiktok.com/ZS2SCR8EY/",
	},
];

export default function Product() {
	return (
		<div className="min-h-screen pt-20" id="product">
			<div className="max-w-4xl mx-auto">
				<TypingAnimation
					className="lg:text-7xl text-black dark:text-white font-bold inter-var text-center uppercase"
					text="Product Collection"
				/>
			</div>
			<HorizontalScrollCarousel />
		</div>
	);
}

const HorizontalScrollCarousel = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<section ref={targetRef} className="relative h-[300vh]">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-4">
					{cards.map((card) => {
						return <Card card={card} key={card.id} />;
					})}
				</motion.div>
			</div>
		</section>
	);
};

const Card = ({ card }: { card: CardType }) => {
	return (
		<>
			<div className="group block min-w-[90vw] md:min-w-[30vw] overflow-hidden ">
				<img
					alt="pic"
					src={card.urlPic}
					className="rounded-bl-3xlrounded-tr-3xl object-cover h-[55vh] md:h-[60vh] w-full transition-transform duration-300 group-hover:scale-110"
				/>

				<div className="mt-10 sm:flex sm:items-center sm:justify-center sm:gap-4">
					<strong className="font-medium capitalize">{card.title}</strong>

					<span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

					<Badge variant="default" className="mt-0.5 sm:mt-0 capitalize">
						{card.shop}
					</Badge>
				</div>
				<Dialog>
					<DialogTrigger className="w-full py-3 flex md:justify-center justify-start">
						<Button className="w-[30vw] md:w-[10vw]">View</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{card.title}</DialogTitle>
							<DialogDescription>Detail regarding the product</DialogDescription>
						</DialogHeader>
						<img
							alt="pic"
							src={card.urlPic}
							className="rounded-bl-3xlrounded-tr-3xl object-cover rounded-lg shadow-xl"
						/>
						<div className="flow-root">
							<dl className="-my-3 divide-y divide-gray-100 text-sm">
								<div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Title</dt>
									<dd className="text-gray-700 sm:col-span-2">{card.title}</dd>
								</div>
								<div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
									<dt className="font-medium text-gray-900">Shop</dt>
									<dd className="text-gray-700 sm:col-span-2">{card.shop}</dd>
								</div>
							</dl>
						</div>
						<Link to={card.url} target="_blank">
							<Button variant="default" className="w-full tracking-wider">
								Buy
							</Button>
						</Link>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
};
