import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export default async function POST(req: Request, res: Response) {
  const { firstName, lastName, email, message } = await req.json();
  const name = `${firstName} ${lastName}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your Gmail address
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your Gmail password or App-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    throw new NextResponse("Error sending email. Please try again later.", {
      status: 500,
    });
  }
}
