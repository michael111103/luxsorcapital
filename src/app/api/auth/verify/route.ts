import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  const { email, code } = await req.json();
  if (!email || !code) {
    return NextResponse.json({ error: "Missing" }, { status: 400 });
  }
  const v = await prisma.verification.findFirst({
    where: { code, user: { email } },
    orderBy: { createdAt: "desc" }
  });
  if (!v || v.expiresAt < new Date()) {
    return NextResponse.json({ error: "Invalid or expired" }, { status: 400 });
  }
  await prisma.user.update({ where: { id: v.userId }, data: { /* misal set verified flag */ } });
  await prisma.verification.deleteMany({ where: { userId: v.userId } });
  return NextResponse.json({ ok: true });
}
