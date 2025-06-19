import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/common/metadata";

export const metadata: Metadata = createMetadata({
  title: "Abhiraj K - Senior Software Developer in Kottayam, Kerala",
  description:
    "Top-rated software developer in Kottayam, Kerala. Specializing in React.js, Next.js, and full-stack development. Professional web and mobile app development services in Ayarkunnam, Central Kerala.",
  alternates: {
    canonical: "https://abhirajk.vercel.app/",
    languages: {
      "en-US": "https://abhirajk.vercel.app/",
      "ml-IN": "https://abhirajk.vercel.app/",
    },
  },
  openGraph: {
    title: "Abhiraj K - Senior Software Developer in Kottayam, Kerala",
    description:
      "Professional software development services in Kottayam, Kerala",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K - Senior Software Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
});

export default function LandingPage() {
  return (
    <div className="min-h-screen ">
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center min-h-screen">
          <div className="space-y-6">
            <h2
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              Hi, I&apos;m Abhiraj
            </h2>
            <p className="text-lg md:text-xl text-cyan-400">
              As a leading senior software developer based in Kottayam, Kerala,
              I specialize in creating cutting-edge web and mobile solutions.
              With expertise in React.js, Next.js, and full-stack development, I
              deliver innovative digital experiences that drive business growth.
              From my base in Ayarkunnam, I serve clients across Kerala and
              beyond, bringing technical excellence and creative solutions to
              every project. Let&apos;s build something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="w-full flex items-center justify-center sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:from-cyan-600 hover:to-blue-600 text-center"
              >
                Contact Me
              </Link>
              <Link
                href="/blog"
                style={{
                  fontFamily: "var(--font-bangers)",
                  letterSpacing: "0.07em",
                }}
                className="w-full sm:w-auto border-2 border-cyan-600 text-cyan-600 px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-600 hover:text-white hover:shadow-lg text-center"
              >
                View Blogs
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div
              className="w-64 h-64 md:w-[700px] md:h-[600px] relative overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl group"
              style={{
                clipPath:
                  "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
              }}
            >
              <Image
                src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1737831467/abhiraj_tdwxdf.webp"
                alt="Abhiraj Profile - Senior Software Developer in Kottayam"
                fill
                className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
