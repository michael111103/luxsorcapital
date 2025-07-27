// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "../../../../lib/utils";

export const authOptions: NextAuthOptions = {
  // 1) Daftarkan provider: Google + Email/Password
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // 2) Validasi input
        if (!credentials?.email || !credentials.password) return null;

        // 3) Ambil user dari DB
        const userFromDb = await getUserByEmail(credentials.email);
        if (!userFromDb) return null;

        // 4) Verifikasi password
        const isValid = await verifyPassword(
          credentials.password,
          userFromDb.password
        );
        if (!isValid) return null;

        // 5) Kembalikan objek User sesuai shape NextAuth
        const user: User = {
          id: String(userFromDb.id),
          email: userFromDb.email,
          name: userFromDb.name,
        };

        return user;
      },
    }),
  ],

  // 6) Pakai JWT untuk session
  session: {
    strategy: "jwt",
  },

  // 7) Secret untuk enkripsi JWT
  secret: process.env.NEXTAUTH_SECRET!,

  // (Opsional) callback kalau mau inject properti ke token/session
  callbacks: {
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      if (token.user) {
        session.user = token.user as User;
      }
      return session;
    },
  },
};

// 8) Buat handler dan export untuk GET & POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
