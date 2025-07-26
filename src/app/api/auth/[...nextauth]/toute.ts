// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "../../../../lib/utils";

export const authOptions: NextAuthOptions = {
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
        // Pastikan ada email & password
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Ambil user dari DB
        const userFromDb = await getUserByEmail(credentials.email);
        if (!userFromDb) {
          return null;
        }

        // Cek password
        const isValid = await verifyPassword(
          credentials.password,
          userFromDb.password
        );
        if (!isValid) {
          return null;
        }

        // Mapping ke shape NextAuth.User
        const user: User = {
          id: String(userFromDb.id),           // harus string
          email: userFromDb.email || null,
          name: userFromDb.name || null,
        };

        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",  // hanya "jwt" atau "database"
  },

  secret: process.env.NEXTAUTH_SECRET!,  // pastikan ada di .env
};

// Handler NextAuth
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
