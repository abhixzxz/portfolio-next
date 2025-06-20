import type React from "react";
import {
  Bangers,
  Josefin_Sans,
  Londrina_Solid,
  Sacramento,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"],
  variable: "--font-londrina-solid",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  weight: "400",
  variable: "--font-sacramento",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://abhirajk.vercel.app/#person",
    name: "Abhiraj K",
    url: "https://abhirajk.vercel.app",
    jobTitle: "Full Stack Developer",
    image: "https://abhirajk.vercel.app/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      addressCountry: "India",
    },
    sameAs: [
      "https://github.com/abhixzxz",
      "https://www.facebook.com/abhi.rajk.12?mibextid=ZbWKwL",
      "https://x.com/bhiraj_k39869?t=vdXPv1FcU1o6UZ7dVem6CQ&s=09",
      "https://www.linkedin.com/in/abhiraj-k-0661a1235",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "AWS",
      "MongoDB",
      "TypeScript",
      "SEO",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
      url: "https://abhirajk.vercel.app",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0891b2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bangers.variable} ${josefinSans.variable} ${londrinaSolid.variable} ${sacramento.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen`}
      >
        <Header />
        <main className="relative min-h-screen">
          <div className="pb-20 lg:pb-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
