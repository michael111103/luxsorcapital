// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // 1) Parse body dengan typing yang jelas
  const body = await req.json() as {
    name?: string;
    email?: string;
    password?: string;
  };
  const { name = "", email, password } = body;

  // 2) Validasi input
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email dan password wajib diisi" },
      { status: 400 }
    );
  }

  // 3) Cek duplikat email
  const existing = await prisma.user.findUnique({
    where: { email },
  });
  if (existing) {
    return NextResponse.json(
      { error: "Email sudah terdaftar" },
      { status: 409 }
    );
  }

  // 4) Hash password & simpan user
  const hashed = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  });

  // 5) Buat kode verifikasi dan simpan
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  await prisma.verification.create({
    data: {
      code,
      userId: user.id,
      expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 menit
    },
  });

  // 6) Kirim email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: Number(process.env.SMTP_PORT!) === 465,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Your verification code",
    text: `Halo ${name || email}, kode verifikasi kamu adalah: ${code}`,
  });

  // 7) Sukses
  return NextResponse.json(
    { message: "Kode verifikasi terkirim, silakan cek emailmu." },
    { status: 201 }
  );
}
