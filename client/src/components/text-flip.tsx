import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href }: any) => {
	return (
		<motion.a
			initial="initial"
			whileHover="hovered"
			href={href}
			target="_blank"
			className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-5xl md:text-6xl lg:text-7xl"
			style={{
				lineHeight: 0.8,
			}}
		>
			<div>
				{children.split("").map((l: any, i: any) => (
					<motion.span
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
			<div className="absolute inset-0">
				{children.split("").map((l: any, i: any) => (
					<motion.span
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className="inline-block"
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
		</motion.a>
	);
};
