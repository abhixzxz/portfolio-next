import { Metadata } from "next";
import ContactClientForm from "./ClientContact";

export const metadata: Metadata = {
  title: "Contact | Abhiraj K - Full Stack Developer",
  description:
    "Get in touch with Abhiraj K - Full Stack Developer based in Kottayam, Kerala.",
  keywords: [
    "Contact Abhiraj K",
    "Hire Full Stack Developer",
    "Web Developer Kerala",
    "React Developer India",
  ],
};

export default function ContactPage() {
  return <ContactClientForm />;
}
