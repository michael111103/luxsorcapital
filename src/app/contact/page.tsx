// app/contact/page.tsx
export const dynamic = "force-dynamic"; // kalau memang butuh dynamic

import ClientContactForm from "./ClientContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-white/70 mb-6">
          Have questions or feedback? Fill out the form below and we’ll get back to you within 24 business hours.
        </p>

        {/* ClientContactForm adalah file client yang akan memanggil useSearchParams */}
        <ClientContactForm />
      </div>
    </main>
  );
}
