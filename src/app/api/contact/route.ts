// src/app/api/contact/route.ts
import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // pakai runtime Node

export async function POST(req: NextRequest) {
  const { name, email, issueType, message } = await req.json();

  // transporter Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER!,  // pastikan sudah di-set di env
      pass: process.env.GMAIL_PASS!,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,    // kirim ke diri sendiri
      replyTo: email,                 // balasan langsung ke user
      subject: `[Contact Form] ${issueType || "General Inquiry"}`,
      text: `
Name: ${name}
Email: ${email}
Issue: ${issueType}
Message:
${message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail send error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
