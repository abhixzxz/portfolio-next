import type { Metadata, Viewport } from "next";
import { createMetadata } from "@/common/metadata";
import FAQItem from "./components/FAQItem";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = createMetadata({
  title: "FAQ | Abhiraj K - Frequently Asked Questions",
  description:
    "Common questions about my development services, process, and expertise.",
  keywords: [
    "Developer FAQ",
    "Web Development Questions",
    "Hire Developer",
    "Development Process",
    "Technical Consultation",
    "Project Timeline",
    "Development Costs",
    "Kerala Developer FAQ",
  ],
  openGraph: {
    title: "FAQ | Abhiraj K - Full Stack Developer",
    description: "Answers to common questions about web development services",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-faq.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://abhirajk.vercel.app/faq",
  },
});

const faqs = [
  {
    question: "What services do you offer as a Full Stack Developer?",
    answer:
      "I offer comprehensive web development services including frontend development with React and Next.js, backend development with Node.js, database design and implementation, cloud solutions with AWS, mobile app development, and technical consulting. I specialize in creating scalable, performant, and SEO-friendly applications.",
  },
  {
    question: "What is your development process?",
    answer:
      "My development process follows an agile methodology: 1) Initial consultation and requirement gathering, 2) Project planning and architecture design, 3) Iterative development with regular client updates, 4) Testing and quality assurance, 5) Deployment and maintenance. I emphasize clear communication and collaboration throughout the process.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and requirements. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. I provide detailed timelines during the initial consultation and maintain transparency throughout the development process.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, I offer ongoing maintenance and support services to ensure your application remains secure, up-to-date, and performs optimally. This includes regular updates, bug fixes, security patches, and feature enhancements as needed.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, AWS, MongoDB, MySQL, and more. I stay current with industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I maintain regular communication through scheduled video calls, email updates, and project management tools. Clients receive weekly progress reports and have access to a project dashboard for real-time updates.",
  },
  {
    question: "What is your approach to responsive design?",
    answer:
      "I implement mobile-first, responsive design principles using modern CSS frameworks like Tailwind CSS. All applications are thoroughly tested across different devices and browsers to ensure consistent user experience.",
  },
  {
    question: "How do you ensure project security?",
    answer:
      "Security is paramount in my development process. I implement industry-standard security practices, including secure authentication, data encryption, regular security audits, and compliance with relevant data protection regulations.",
  },
  {
    question: "Do you provide SEO optimization?",
    answer:
      "Yes, I implement SEO best practices in all web projects, including semantic HTML, optimized meta tags, structured data, performance optimization, and integration with analytics tools to monitor and improve search engine visibility.",
  },
  {
    question: "How can I get started with a project?",
    answer:
      "You can get started by reaching out through my contact form or email. We'll schedule an initial consultation to discuss your requirements, timeline, and budget. I'll then provide a detailed proposal outlining the development approach and next steps.",
  },
] as const;

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <article className="relative text-white">
        {/* Header Section */}
        <header className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="text-sm font-medium text-purple-300">
                Common Questions
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                FREQUENTLY ASKED
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about my development services and
              process
            </p>
          </div>
        </header>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-3xl border backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 ease-out hover:scale-[1.01] hover:-translate-y-1"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-xl -z-10 transition-opacity duration-500" />

                  <FAQItem question={faq.question} answer={faq.answer} />

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-cyan-500/60 to-purple-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="relative p-12 rounded-3xl border border-slate-800/50 backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-xl -z-10" />

              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                  STILL HAVE QUESTIONS?
                </span>
              </h2>

              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Feel free to reach out if you couldn't find the answer you were
                looking for.
              </p>

              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
