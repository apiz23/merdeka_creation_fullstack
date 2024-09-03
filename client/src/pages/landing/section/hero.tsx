import { ReactLenis } from "@studio-freight/react-lenis";
import { Link } from "react-scroll";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import bg1 from "@/assets/bg1.jpg";
import bg2 from "@/assets/bg2.jpg";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function SmoothScrollHero() {
	return (
		<div className="dark:bg-black bg-yellow-100 min-h-screen">
			<ReactLenis
				root
				options={{
					lerp: 0.05,
				}}
			>
				<HeroSection />
			</ReactLenis>
		</div>
	);
}

const SECTION_HEIGHT = 1500;

const HeroSection = () => {
	return (
		<div
			style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
			className="relative w-full"
		>
			<MerdekaHero />
			<VelocityScroll
				text="jiwa merdeka | 67"
				default_velocity={5}
				className="font-display uppercase bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 text-transparent bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
			/>
			<CenterImage />
			<ParallaxImages />
		</div>
	);
};

const CenterImage = () => {
	const { scrollY } = useScroll();

	const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
	const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

	const backgroundSize = useTransform(
		scrollY,
		[0, SECTION_HEIGHT + 500],
		["170%", "100%"]
	);
	const opacity = useTransform(
		scrollY,
		[SECTION_HEIGHT, SECTION_HEIGHT + 500],
		[1, 0]
	);

	return (
		<motion.div
			className="sticky top-0 h-screen w-full"
			style={{
				clipPath,
				backgroundSize,
				opacity,
				backgroundImage: `url(${bg1})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		/>
	);
};

const ParallaxImages = () => {
	return (
		<div className="mx-auto max-w-5xl px-4 pt-[200px]">
			<ParallaxImg
				src="https://i.pinimg.com/736x/4e/1d/6b/4e1d6b5eddf822c08a00e6abdfb81689.jpg"
				alt="An example of a space launch"
				start={-200}
				end={200}
				className="w-1/3 rounded-lg shadow-xl"
			/>
			<ParallaxImg
				src={bg2}
				alt="An example of a space launch"
				start={50}
				end={-250}
				className="mx-auto w-2/3 rounded-lg shadow-xl"
			/>
			<ParallaxImg
				src="https://plus.unsplash.com/premium_photo-1670855108637-d98722738a92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0aW9uYWwlMjBkYXklMjBtYWxheXNpYXxlbnwwfHwwfHx8MA%3D%3D"
				alt="Orbiting satellite"
				start={-200}
				end={50}
				className="ml-auto w-1/3 rounded-lg shadow-xl"
			/>
			<ParallaxImg
				src="https://i.pinimg.com/564x/1d/04/45/1d0445b1090ddbb03af21b8cbde44686.jpg"
				alt="Orbiting satellite"
				start={20}
				end={-300}
				className="ml-28 w-5/12 rounded-lg shadow-xl"
			/>
		</div>
	);
};

const ParallaxImg = ({
	className,
	alt,
	src,
	start,
	end,
}: {
	className?: string;
	alt: string;
	src: string;
	start: number;
	end: number;
}) => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [`${start}px end`, `end ${end * -1}px`],
	});

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

	const y = useTransform(scrollYProgress, [0, 1], [start, end]);
	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

	return (
		<motion.img
			src={src}
			alt={alt}
			className={className}
			ref={ref}
			style={{ transform, opacity }}
		/>
	);
};

const MerdekaHero = () => {
	return (
		<div
			className="h-fit py-36 bg-cover bg-yellow-100"
			id="home"
			style={{
				backgroundImage: "url('/bg-hero.svg')",
			}}
		>
			<img src="/logo.png" alt="logo" className="h-52 w-52 mx-auto" />
			<div className="max-w-3xl mx-auto">
				<TypingAnimation
					className="lg:text-7xl font-bold inter-var text-center uppercase bg-gradient-to-r from-blue-600 via-red-500 to-yellow-400 text-transparent bg-clip-text"
					text="Merdeka Creation"
				/>

				<p className="text-center p-6 text-sm text-neutral-500">
					Our website features a curated collection of merchandise and products
					celebrating Hari Merdeka, Malaysia's Independence Day. Explore a variety of
					themed items that honor this significant occasion.
				</p>
				<div className="flex justify-center p-4">
					<Link to="contact" smooth={true} duration={500}>
						<Button variant="default" className="rounded-full">
							Contact us to learn more or ask any questions.
						</Button>{" "}
					</Link>
				</div>
			</div>
		</div>
	);
};
