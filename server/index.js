const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the Merdeka Creation API!");
});

let transporter;
try {
	const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

	if (!SMTP_EMAIL || !SMTP_PASSWORD) {
		throw new Error("SMTP credentials not provided in environment variables.");
	}

	transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: SMTP_EMAIL,
			pass: SMTP_PASSWORD,
		},
	});
} catch (error) {
	console.error("Failed to configure email transporter:", error);
}

app.post("/merdeka-creation/send-email", async (req, res) => {
	const { to, subject, message, cc } = req.body;

	if (!to || !subject || !message || !cc) {
		return res.status(400).json({ message: "Missing required fields" });
	}

	try {
		const mailOptions = {
			from: process.env.SMTP_EMAIL,
			to,
			cc,
			subject,
			html: message,
		};

		await transporter.sendMail(mailOptions);
		console.log("Email sent successfully");
		return res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error("Failed to send email:", error);
		return res.status(500).json({ message: "Failed to send email" });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
