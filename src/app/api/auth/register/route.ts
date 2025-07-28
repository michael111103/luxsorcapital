// src/app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // 1) Parse dan validasi body
  const { name, email, password } = await req.json().catch(() => ({}));
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Name, email, and password are required" },
      { status: 400 }
    );
  }

  // 2) Cek apakah email sudah terdaftar
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 409 }
    );
  }

  try {
    // 3) Hash password & create user
    const hashed = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
      },
    });

    // 4) Buat kode verifikasi 6 digit
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.verification.create({
      data: {
        code,
        userId: user.id,
        expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 menit
      },
    });

    // 5) Kirim email via SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      secure: Number(process.env.SMTP_PORT!) === 465, // true untuk port 465
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "Kode Verifikasi REPYST",
      text: `Halo ${name},\n\nKode verifikasi Anda: ${code}\nBerlaku selama 15 menit.\n\nSalam,\nTim REPYST`,
    });

    // 6) Sukses
    return NextResponse.json(
      { ok: true, message: "Check your email for the verification code" },
      { status: 201 }
    );
  } catch (err: any) {
    // Tangani unique constraint race (jika dua request hampir bersamaan)
    if (err.code === "P2002" && err.meta?.target?.includes("email")) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
