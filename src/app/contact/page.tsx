// app/contact/page.tsx
import ClientForm from "./clientform";

export const metadata = {
  title: "Contact Us – QUARK",
  description:
    "Have questions, issues, or feature requests? Fill out the form and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return <ClientForm />;
}
