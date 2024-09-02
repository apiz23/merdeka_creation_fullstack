import TypingAnimation from "@/components/magicui/typing-animation";
import bg3 from "@/assets/bg3.jpg";
import { Badge } from "@/components/ui/badge";
import { TbBrandShopee, TbBrandTiktok } from "react-icons/tb";
import { Globe } from "lucide-react";

export default function About() {
	return (
		<>
			<div className="bg-gradient-to-b from-yellow-100 to-white">
				<div className="md:block hidden min-h-screen"></div>
				<div className="min-h-screen py-96" id="about">
					<div className="grid grid-cols-2 md:grid-cols-10 gap-4 p-4">
						<div className="col-span-4 ps-4">
							<img src={bg3} alt="image" className="" />
						</div>
						<div className="max-w-3xl mx-auto col-span-6">
							<TypingAnimation
								className="lg:text-7xl text-black dark:text-white font-bold inter-var text-center uppercase"
								text="About Us"
							/>
							<p className="text-justify py-10 tracking-wide leading-7 font-serif px-2.5">
								Welcome to Merdeka Creation, your go-to platform for all things Merdeka!
								We bring you a curated selection of products and merchandise celebrating
								Malaysia's Independence Day. Partnering with sellers across the country,
								we offer a wide range of themed items—from clothing and accessories to
								decorations and collectibles. Our mission is to be your one-stop
								destination for unique, high-quality products that honor this
								significant occasion. Celebrate Merdeka with style and pride!
							</p>

							<h1 className="text-4xl mb-2 font-semibold">Keyword</h1>
							<div className="flex w-full flex-wrap gap-x-3 gap-y-2 mb-10">
								<Badge variant="default">Merdeka Collection</Badge>
								<Badge variant="default">Corporate Company</Badge>
								<Badge variant="default">Business</Badge>
								<Badge variant="default">Partnership</Badge>
								<Badge variant="default">E-Commerce</Badge>
							</div>
							<h1 className="text-4xl mb-2 font-semibold">Platform</h1>
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
					</div>
				</div>
			</div>
		</>
	);
}
