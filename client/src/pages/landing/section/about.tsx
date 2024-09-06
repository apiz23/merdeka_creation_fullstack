import TypingAnimation from "@/components/magicui/typing-animation";
import bg4 from "@/assets/bg4.png";
import { Badge } from "@/components/shadcn/badge";
import { TbBrandShopee, TbBrandTiktok } from "react-icons/tb";
import { Globe } from "lucide-react";
import { Card, CardContent } from "@/components/shadcn/card";

export default function About() {
	return (
		<>
			<div className="bg-gradient-to-b from-yellow-100 to-red-600/70 md:pt-10 pt-32">
				<div className="md:block hidden min-h-screen"></div>
				<div className="min-h-screen py-44" id="about">
					<div className="max-w-[80vw] h-4/5 grid grid-cols-1 2xl:grid-cols-2 gap-4 mx-auto">
						<Card className="rounded-3xl col-span-1">
							<CardContent>
								<TypingAnimation
									className="lg:text-7xl text-black dark:text-white font-bold inter-var text-center uppercase my-10"
									text="About Us"
								/>
								<div className="p-4">
									<img src={bg4} alt="image" className="h-full md:h-3/4 p-2 mx-auto" />
								</div>
							</CardContent>
						</Card>
						<div className="col-span-1 space-y-4">
							<Card className="rounded-3xl">
								<CardContent>
									<div className="max-w-3xl mx-auto col-span-1 p-4 my-10">
										<p className="text-justify text-xs md:text-lg tracking-wider leading-7 font-medium ">
											Welcome to Merdeka Creation, your go-to platform for all things
											Merdeka! We bring you a curated selection of products and merchandise
											celebrating Malaysia's Independence Day. Partnering with sellers
											across the country, we offer a wide range of themed items—from
											clothing and accessories to decorations and collectibles. Our mission
											is to be your one-stop destination for unique, high-quality products
											that honor this significant occasion. Celebrate Merdeka with style
											and pride!
										</p>
									</div>
								</CardContent>
							</Card>
							<Card className="rounded-3xl">
								<CardContent>
									<div className="max-w-3xl mx-auto col-span-1 p-4 my-10">
										<h1 className="text-2xl text-center md:text-left mb-4 font-semibold">
											Keyword
										</h1>
										<div className="flex w-full flex-wrap gap-x-3 gap-y-2 mb-10">
											<Badge variant="default">Merdeka Collection</Badge>
											<Badge variant="default">Corporate Company</Badge>
											<Badge variant="default">Business</Badge>
											<Badge variant="default">Partnership</Badge>
											<Badge variant="default">E-Commerce</Badge>
										</div>
										<h1 className="text-2xl text-center md:text-left mb-4 font-semibold">
											Platform
										</h1>
										<div className="flex w-full flex-wrap gap-x-3 gap-y-2">
											<Badge variant="default" className="bg-orange-600 gap-2">
												<TbBrandShopee className="h-6 w-6" />
												Shopee
											</Badge>
											<Badge variant="default" className="gap-2">
												<TbBrandTiktok className="h-6 w-6" />
												Tiktok Shop
											</Badge>
											<Badge variant="default" className="bg-blue-600 gap-2">
												<Globe className="h-6 w-6" />
												Public Website
											</Badge>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-8 px-4 py-10 mx-auto "></div>
				</div>
			</div>
		</>
	);
}
