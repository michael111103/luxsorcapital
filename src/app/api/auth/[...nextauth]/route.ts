// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail, verifyPassword } from "../../../../lib/utils";

const authOptions: NextAuthOptions = {
  // 1) Daftarkan provider Google & credentials (email/password)
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email:    { label: "Email",    type: "email"    },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Ambil user dari DB
        const userFromDb = await getUserByEmail(credentials.email);
        if (!userFromDb) return null;

        // Verifikasi password
        const isValid = await verifyPassword(
          credentials.password,
          userFromDb.password
        );
        if (!isValid) return null;

        // Kembalikan shape User yang NextAuth harapkan
        const user: User = {
          id:    String(userFromDb.id),
          name:  userFromDb.name,
          email: userFromDb.email,
        };
        return user;
      },
    }),
  ],

  // 2) Pakai JWT untuk session
  session: {
    strategy: "jwt",
  },

  // 3) Secret untuk enkripsi
  secret: process.env.NEXTAUTH_SECRET!,

  // 4) (Optional) Buang callbacks kalau tidak perlu custom fields
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) token.sub = user.id;
  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (token.sub) session.user!.id = token.sub;
  //     return session;
  //   },
  // },
};

// Buat handler NextAuth dan export sebagai route handler untuk GET & POST
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
