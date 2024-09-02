import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();
	const [seconds, setSeconds] = useState(5);

	useEffect(() => {
		if (seconds > 0) {
			const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			navigate("/");
		}
	}, [seconds, navigate]);

	return (
		<div className="grid h-screen place-content-center bg-white px-4">
			<div className="text-center">
				<h1 className="text-9xl font-black text-gray-200">404</h1>

				<p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Uh-oh!
				</p>
				<p className="mt-4 text-gray-500">We can't find that page.</p>

				<p className="mt-2 text-gray-500">
					Redirecting you to the homepage in {seconds} seconds...
				</p>

				<Link
					to="/"
					className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
}
