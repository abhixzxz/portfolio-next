import { Metadata } from "next";
import FAQItem from "./components/FAQItem";

export const metadata: Metadata = {
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
};

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
    <article className="min-h-screen bg-black text-white">
      <header className="relative overflow-hidden py-8 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-zinc-800 opacity-90" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-tr from-cyan-700/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-7xl font-black mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-cyan-400"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            FAQ
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about my development services and
            process
          </p>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-3 md:px-4 py-8 md:py-16">
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 md:py-16 text-center">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl md:rounded-2xl p-6 md:p-12 border border-zinc-800">
          <h2
            className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-cyan-400"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            Still have questions?
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
            Feel free to reach out if you couldn&apos;t find the answer you were
            looking for.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-sm md:text-base rounded-lg md:rounded-xl hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </article>
  );
}
