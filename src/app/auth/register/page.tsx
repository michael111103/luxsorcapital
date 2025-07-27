// Tidak ada "use client" di sini, ini Server Component:
import { Metadata } from "next";
import RegisterForm from "../../components/auth/registerform";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function RegisterPage() {
  return (
    <main className="max-w-md mx-auto py-12">
      <h1 className="text-2xl font-bold mb-6 text-white">Sign Up</h1>
      {/* Ini harus merujuk ke default export di atas */}
      <RegisterForm />
    </main>
  );
}
