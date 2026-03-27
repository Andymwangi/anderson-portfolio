import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = esc(body.name);
    const email = esc(body.email);
    const service = esc(body.service);
    const budget = esc(body.budget);
    const timeline = esc(body.timeline);
    const message = esc(body.message);

    if (!name || !email || !service || !budget || !timeline || !message) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email || ""));
    if (!emailOk) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subjectLine = `Contact: ${service} — ${name}`;

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
      replyTo: String(body.email),
      to: process.env.GMAIL_EMAIL,
      subject: subjectLine,
      html: `
        <h1>New contact enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget band:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(body.message).replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email.", error: (error as Error).message },
      { status: 500 },
    );
  }
}
