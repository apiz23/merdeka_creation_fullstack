import { useEffect, useState } from "react";
import { Button } from "./shadcn/button";

export const Disclaimer = () => {
	const [showDisclaimer, setShowDisclaimer] = useState(false);

	useEffect(() => {
		if (!sessionStorage.getItem("disclaimerShown")) {
			setShowDisclaimer(true);
		}
	}, []);

	const closeDisclaimer = () => {
		setShowDisclaimer(false);
		sessionStorage.setItem("disclaimerShown", "true");
	};

	return (
		<div className="relative">
			{showDisclaimer && (
				<>
					<div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 text-center z-50">
						<div className="flex justify-center mx-auto max-w-4xl">
							<p className="p-2">
								<span className="text-red-500">Disclaimer</span>
								: All products featured are linked to external sellers on platforms like
								Shopee, TikTok Shop, and others. We are not responsible for the content
								or availability of these products. 
							</p>
							<Button
								variant="secondary"
								className="text-black px-4 py-2 mt-2 rounded"
								onClick={closeDisclaimer}
							>
								Got it!
							</Button>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
