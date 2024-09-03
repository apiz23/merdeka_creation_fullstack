import TypingAnimation from "@/components/magicui/typing-animation";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
	return (
		<>
			<div className="min-h-screen bg-gradient-to-b from-white to-yellow-100">
				<div className="w-4/5 my-20 mx-auto">
					<div className="p-4">
						<TypingAnimation
							className="lg:text-7xl text-black dark:text-white font-bold inter-var text-center uppercase"
							text="FAQ"
						/>
						<div className="space-y-4 my-10 max-w-3xl mx-auto">
							<p className="lg:text-6xl text-xl text-black dark:text-white font-bold inter-var text-center">
								We&apos;re here to answer all your question.
							</p>
							<p className="lg:text-lg text-sm text-black dark:text-white font-normal inter-var text-center">
								We are here to answer all your question.
							</p>
						</div>
						<div className="max-w-2xl mx-auto space-y-4 p-6">
							<Accordion type="single" collapsible>
								<AccordionItem value="item-1">
									<AccordionTrigger>
										What types of products are featured in your collections?
									</AccordionTrigger>
									<AccordionContent>
										Our collections feature a wide variety of products from our trusted
										partners, including apparel, accessories, home goods, and exclusive
										merchandise.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>
										How do I know if a product is available in stock?
									</AccordionTrigger>
									<AccordionContent>
										Product availability is updated regularly on our website. If a product
										is out of stock, it will be indicated on the product page.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>
										Is it only available during Merdeka Celebration?
									</AccordionTrigger>
									<AccordionContent>
										No, but most of the best seller will be only available during the
										Merdeka month
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
