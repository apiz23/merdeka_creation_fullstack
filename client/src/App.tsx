import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Navbar from "./components/navbar";
import StickyCursor from "./components/stickyCursor";
import NotFound from "./pages/not-found";
import { Toaster } from "sonner";
import { Disclaimer } from "./components/disclaimer";

export default function App() {
	return (
		<>
			<Disclaimer />
			<Toaster richColors expand={true} />
			<div className="hidden md:block">
				<StickyCursor />
			</div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
