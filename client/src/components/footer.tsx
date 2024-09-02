import { Link } from "react-router-dom";
import { FlipLink } from "./text-flip";

export default function Footer() {
	return (
		<div
			className="relative h-[800px]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-[800px] w-full">
				<div className="bg-gradient-to-b from-yellow-50 to-yellow-400 py-8 px-12 h-full w-full flex flex-col justify-between">
					<div className="grid grid-col-1 md:grid-cols-2 md:gap-20">
						<div className="col-span-1">
							<section className="grid place-content-start md:place-content-center gap-2 py-2 md:px-8 md:py-24 text-black">
								<FlipLink href="https://x.com/piz230601">Twitter</FlipLink>
								<FlipLink href="https://linkedin.com/in/muh-hafizuddin">
									Linkedin
								</FlipLink>
								<FlipLink href="https://github.com/apiz23">GitHUb</FlipLink>
							</section>
						</div>
						<div className="grid grid-cols-1 py-10 md:px-32 md:py-24 text-right font-semibold">
							<div className="gap-2 col-span-1">
								<h3 className="text-2xl mb-2 uppercase text-neutral-600">About</h3>
								<ul>
									<li className="mb-2">
										<Link to="/" target="_blank" className="hover:text-blue-600">
											Home
										</Link>
									</li>
									<li>
										<Link
											to="https://github.com/apiz23?tab=repositories"
											target="_blank"
											className="hover:text-blue-600"
										>
											Projects
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex justify-between items-end gap-4">
						<h1 className="text-[7vw] leading-[1] md:leading-[0.8] tracking-tight font-medium pt-10">
							Merdeka Creation
						</h1>
						<p className="text-xs text-justify">
							©2022 Copyright: Merdeka Creation Sdn Bhd. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
