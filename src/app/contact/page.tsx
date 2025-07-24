// app/contact/page.tsx
import ClientForm from "./clientform";

export const metadata = {
  title: "Contact Us – QUARK",
  description:
    "Ada pertanyaan, kendala, atau usul fitur? Isi form di bawah, kami akan membalas dalam 24 jam kerja.",
};

export default function ContactPage() {
  return <ClientForm />;
}
