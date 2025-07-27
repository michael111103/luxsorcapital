// src/app/api/auth/verify/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  const { email, code } = await req.json();
  if (!email || !code) {
    return NextResponse.json({ error: "Missing email or code" }, { status: 400 });
  }

  // Urutkan berdasarkan expiresAt (waktu kadaluarsa) terbaru
const v = await prisma.verification.findFirst({
  where: { code, user: { email } },
  orderBy: { expiresAt: "desc" },
});


  if (!v || v.expiresAt < new Date()) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
  }

  // Tandai user verified (misal kamu punya flag `isVerified`)
  await prisma.user.update({
    where: { id: v.userId },
    data: { isVerified: true },
  });
  // Hapus semua kode verifikasi user itu
  await prisma.verification.deleteMany({ where: { userId: v.userId } });

  return NextResponse.json({ ok: true });
}
