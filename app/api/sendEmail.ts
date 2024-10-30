import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, companyName, email, reachingOutFor, seenOn, message } = await request.json();

  // Set up your SMTP transport using environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS,  // Use environment variable
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nCompany: ${companyName}\nEmail: ${email}\nReaching out for: ${reachingOutFor}\nSeen on: ${seenOn}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || 'Failed to send email' }, { status: 500 });
  }
}
