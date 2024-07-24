import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message, serviceType, phoneNumber } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER, // Your Gmail address
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // Your Gmail password or App-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: `Your Service is needed `,
    text: `Hi,\n My name is ${name}, i'm currently in need of you service as a ${serviceType}.\n If you are interested pls contact me at ${phoneNumber} and ${email} \n\n ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error: any) {
    throw new NextResponse(`Error sending email. Please try again later.${error.message}`, {
      status: 500,
    });
  }
}
