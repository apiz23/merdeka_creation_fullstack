import { useForm } from "react-hook-form";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MdOutlineEmail } from "react-icons/md";
import confetti from "canvas-confetti";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Contact() {
	const { register, handleSubmit } = useForm();

	const sendEmail = async (
		to: string,
		cc: string,
		subject: string,
		message: string
	) => {
		const emailPromise = async () => {
			const backendUrl = import.meta.env.VITE_BACKEND_URL;

			const response = await fetch(`${backendUrl}/merdeka-creation/send-email`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ to, cc, subject, message }),
			});

			if (response.ok) {
				return "Email sent successfully!";
			} else {
				throw new Error("Failed to send email");
			}
		};

		toast.promise(emailPromise(), {
			loading: "Sending email...",
			success: (message) => {
				triggerConfetti();
				return message;
			},
			error: "Failed to send email",
		});
	};

	const onSubmit = async (data: any) => {
		const { name, email, contactNumber, message } = data;
		const subject = "New Contact Form Submission";
		const emailMessage = `
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Contact Number:</strong> ${contactNumber}</p>
			<p><strong>Message:</strong> ${message}</p>
		`;

		await sendEmail("piz230601@gmail.com", email, subject, emailMessage);
	};

	const onError = (errors: any) => {
		if (errors.name) {
			toast.error(errors.name.message);
		} else if (errors.email) {
			toast.error(errors.email.message);
		} else if (errors.contactNumber) {
			toast.error(errors.contactNumber.message);
		} else if (errors.message) {
			toast.error(errors.message.message);
		} else {
			toast.error("Please fill in all required fields correctly");
		}
	};

	return (
		<>
			<div
				className="min-h-screen pt-36 px-2 bg-gradient-to-b from-yellow-100 to-yellow-50 space-y-20"
				id="contact"
			>
				<div className="max-w-2xl mx-auto">
					<TypingAnimation
						className="lg:text-7xl text-black dark:text-white font-bold inter-var text-center uppercase"
						text="Contact Us"
					/>
				</div>

				<div className="relative bg-white grid md:grid-cols-2 grid-cols-1 gap-4 max-w-6xl md:mt-5 mx-auto p-10 rounded-xl shadow-lg border border-neutral-300">
					<BorderBeam size={350} duration={12} delay={9} />
					<div className="block">
						<MdOutlineEmail className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] mx-auto" />
						<p className="font-semibold text-center">Send Us an Email</p>
					</div>
					<form className="space-y-4" onSubmit={handleSubmit(onSubmit, onError)}>
						<div className="block">
							<Label className="mb-2">Name</Label>
							<Input
								type="text"
								placeholder="Ali bin Munir"
								{...register("name", { required: "Name is required" })}
							/>
						</div>
						<div className="block">
							<Label className="mb-2">Email</Label>
							<Input
								type="email"
								placeholder="email@provider.com"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
										message: "Enter a valid email address",
									},
								})}
							/>
						</div>
						<div className="block">
							<Label className="mb-2">Contact Number</Label>
							<Input
								type="text"
								placeholder="01-234567890"
								{...register("contactNumber", {
									required: "Contact number is required",
									pattern: {
										value: /^[0-9]{10,15}$/,
										message: "Contact number must be between 10 and 15 digits",
									},
								})}
							/>
						</div>
						<div className="block">
							<Label className="mb-2">Message</Label>
							<Textarea
								placeholder="Send your message here"
								{...register("message", { required: "Message is required" })}
							/>
						</div>
						<div className="flex justify-end w-full">
							<Button type="submit" variant="default">
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export function triggerConfetti() {
	const end = Date.now() + 3 * 1000;
	const colors = ["#ff0000", "#0000ff", "#ffff00", "#d1d5db"];
	const frame = () => {
		if (Date.now() > end) return;

		confetti({
			particleCount: 2,
			angle: 60,
			spread: 55,
			startVelocity: 60,
			origin: { x: 0, y: 0.5 },
			colors: colors,
		});
		confetti({
			particleCount: 2,
			angle: 120,
			spread: 55,
			startVelocity: 60,
			origin: { x: 1, y: 0.5 },
			colors: colors,
		});

		requestAnimationFrame(frame);
	};

	frame();
}
