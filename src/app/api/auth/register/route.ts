// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Name, email, password required" }, { status: 400 });
  }
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }
  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  await prisma.verification.create({
    data: {
      code,
      userId: user.id,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000),
    },
  });
  // kirim email via SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
  });
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verification Code",
    text: `Hello ${name}, your code is ${code}`,
  });
  return NextResponse.json({ message: "Check your email for the code" }, { status: 201 });
}
