// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// NOTE: Sebelum deploy, set env vars di Vercel:
// GMAIL_USER = "michivan2003@gmail.com"
// GMAIL_PASS = "<YOUR_GMAIL_APP_PASSWORD>"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, issueType, message } = await req.json();

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,         // kirim ke sendiri
      replyTo: email,                     // reply langsung ke user
      subject: `[Contact Form] ${issueType}`,
      text: `
Name: ${name}
Email: ${email}
Issue: ${issueType}

Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
