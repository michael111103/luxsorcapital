// src/lib/utils.ts
import prisma from "./prisma";
import bcrypt from "bcryptjs";

// Cari user berdasarkan email
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

// Verifikasi password plain vs hash
export async function verifyPassword(
  plain: string,
  hashed: string
): Promise<boolean> {
  return bcrypt.compare(plain, hashed);
}
