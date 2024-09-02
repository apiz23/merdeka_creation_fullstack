import Footer from "@/components/footer";
import About from "./section/about";
import Contact from "./section/contact";
import Hero from "./section/hero";
import Product from "./section/product";
import FAQ from "./section/faq";

export default function Landing() {
	return (
		<>
			<Hero />
			<About />
			<Product />
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
