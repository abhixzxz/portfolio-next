import type { Metadata } from "next";
import { createMetadata } from "@/common/metadata";
import ContactClientForm from "./ClientContact";

export const metadata: Metadata = createMetadata({
  title: "Contact | Abhiraj K - Full Stack Developer",
  description:
    "Get in touch with Abhiraj K - Full Stack Developer based in Kottayam, Kerala.",
  alternates: {
    canonical: "https://abhirajk.vercel.app/contact",
  },
  openGraph: {
    title: "Contact | Abhiraj K - Full Stack Developer",
    description: "Get in touch with Abhiraj K for your next project",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-contact.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <ContactClientForm />
    </div>
  );
}
