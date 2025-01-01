import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Abhiraj K - Best Software Developer in Kottayam",
  description:
    "Welcome to the portfolio of Abhiraj K, the best software developer in Kottayam, Kerala. Proficient in Next.js, React, Node.js, and SEO-friendly web development.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/manifest.json",
  keywords: [
    "Abhiraj K",
    "Best software developer in Kottayam",
    "Next.js portfolio",
    "React developer",
    "SEO-friendly developer",
    "Kochi developer",
    "Kottayam developer",
    "Ayarkkunnam developer",
    "Kollam developer",
    "Kerala web developer",
    "Freelance developer Kerala",
    "Web application developer",
    "Modern web technologies",
    "Full-stack developer Kerala",
    "Frontend developer Kerala",
    "Backend developer Kerala",
    "Node.js expert",
    "MongoDB developer",
    "SQL developer",
    "JavaScript expert",
    "TypeScript developer",
    "Custom web solutions",
    "Portfolio developer",
    "Responsive web design",
    "UI/UX specialist",
    "Progressive web apps",
    "Kottayam tech solutions",
    "Kollam tech expert",
    "Kochi web innovations",
    "Ayarkkunnam software specialist",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Node.js Expert",
    "Kerala Developer",
    "Kottayam Software Engineer",
    "Indian Web Developer",
    "South India Tech Expert",
    "Kerala IT Professional",
    "Kottayam Tech Solutions",
    "Next.js Development",
    "React Native Apps",
    "TypeScript Expert",
    "MongoDB Developer",
    "AWS Cloud Solutions",
    "API Development",
    "Frontend Specialist",
    "Backend Developer",
    "Database Expert",
    "Mobile App Developer",
    "E-commerce Solutions",
    "SaaS Development",
    "Enterprise Applications",
    "Startup Technology",
    "Digital Transformation",
    "Web Application Development",
    "Custom Software Solutions",
    "Cloud Architecture",
    "Technical Consulting",
    "Code Review Services",
    "Performance Optimization",
    "SEO Implementation",
    "JavaScript Development",
    "GraphQL Integration",
    "Docker Containerization",
    "CI/CD Implementation",
    "Microservices Architecture",
    "Problem Solver",
    "Technical Leader",
    "Project Management",
    "Agile Development",
    "Team Collaboration",
    "AI Integration",
    "Machine Learning",
    "Blockchain Development",
    "IoT Solutions",
    "Cloud Computing",
    "Business Solutions",
    "Digital Strategy",
    "Technology Consulting",
    "IT Services Kerala",
    "Software Solutions India",
    "Kottayam React Developer",
    "Kottayam Next.js Expert",
    "Kottayam Node.js Specialist",
    "Kottayam SEO Professional",
    "Kottayam Full Stack Developer",
    "Kottayam TypeScript Expert",
    "Kottayam AWS Developer",
    "Kottayam MongoDB Specialist",
    "Cochin React Developer",
    "Kochi Next.js Expert",
    "Trivandrum Node.js Developer",
    "Ernakulam SEO Specialist",
    "Thrissur Full Stack Developer",
    "Kozhikode React Native Expert",
    "Alappuzha Web Developer",
    "Kollam JavaScript Specialist",
    "Pala React Developer",
    "Ettumanoor Web Specialist",
    "Changanassery Full Stack Expert",
    "Ayarkkunnam Software Developer",
    "Vaikom React.js Expert",
    "abhirajk.vercel.app",
    "Abhiraj K Portfolio",
    "Abhiraj K Vercel Portfolio",
    "Abhiraj K Developer Website",
    "Abhiraj K Tech Blog",
    "Abhiraj K Cochin Developer",
    "Abhiraj K Infopark",
    "Abhiraj K Technopark",
    "Abhiraj K Smart City Kochi",
    "Abhiraj K Kerala IT Parks",
    "React Developer Abhiraj K Kottayam",
    "Full Stack Engineer Abhiraj K Kerala",
    "Next.js Expert Abhiraj K South India",
    "Node.js Specialist Abhiraj K Kerala",
    "Web Developer Abhiraj K Kottayam",
    "Pampady Node.js Developer",
    "Kumarakom Web Solutions",
    "Kanjirappally Tech Expert",
    "Infopark React Developer",
    "Technopark Next.js Expert",
    "Smart City Kochi Node.js Developer",
    "Infopark SEO Specialist",
    "Technopark Full Stack Expert",
    "Kerala IT Park Developer",
    "Abhiraj K Kottayam React Developer",
    "Abhiraj K Kerala Full Stack Developer",
    "Abhiraj K Next.js Developer Kottayam",
    "Abhiraj K Node.js Expert Kerala",
    "Abhiraj K SEO Specialist Kottayam",
    "Abhiraj K TypeScript Developer Kerala",
    "Abhiraj K MongoDB Expert Kottayam",
    "Abhiraj K AWS Developer Kerala",
    "abhirajk.vercel.app",
    "Abhiraj K Portfolio",
    "Abhiraj K Vercel Portfolio",
    "Abhiraj K Developer Website",
    "Abhiraj K Tech Blog",
    "Abhiraj K Cochin Developer",
    "Abhiraj K Infopark",
    "Abhiraj K Technopark",
    "Abhiraj K Smart City Kochi",
    "Abhiraj K Kerala IT Parks",
    "React Developer Abhiraj K Kottayam",
    "Full Stack Engineer Abhiraj K Kerala",
    "Next.js Expert Abhiraj K South India",
    "Node.js Specialist Abhiraj K Kerala",
    "Web Developer Abhiraj K Kottayam",
    "abhirajk.vercel.app portfolio",
    "Abhiraj K personal website",
    "Abhiraj K developer portfolio",
    "Abhiraj K project showcase",
    "Abhiraj K web portfolio",
    "Abhiraj K code portfolio",
    "Vercel developer Abhiraj K",
    "Vercel portfolio Kerala",
    "Vercel expert Kottayam",
    "Next.js Vercel developer",
    "Vercel full stack developer",
    "Abhiraj K GitHub projects",
    "Abhiraj K open source",
    "Abhiraj K Stack Overflow",
    "Abhiraj K LinkedIn profile",
    "Abhiraj K dev community",
    "React Vercel developer Kerala",
    "Next.js Vercel expert Kottayam",
    "TypeScript Vercel specialist",
    "Full stack Vercel development",
    "Modern web portfolio Abhiraj K",
    "Kerala Vercel developer",
    "Kottayam Vercel expert",
    "South India Vercel specialist",
    "Indian Next.js developer Vercel",
    "Kerala tech portfolio Vercel",
  ],
  authors: [
    {
      name: "Abhiraj K",
      url: "https://abhirajk.vercel.app/",
    },
  ],
  creator: "Abhiraj K",
  openGraph: {
    type: "website",
    title: "Abhiraj K - Best Software Developer in Kottayam",
    description:
      "Discover the portfolio of Abhiraj K, specializing in React, Next.js, and SEO-friendly web development.",
    url: "https://abhirajk.vercel.app/",
    siteName: "Abhiraj K Portfolio",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiraj K - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    images: ["https://abhirajk.vercel.app/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  verification: {},
  alternates: {
    canonical: "https://abhirajk.vercel.app",
    types: {
      "application/rss+xml": [
        {
          url: "https://abhirajk.vercel.app/feed.xml",
          title: "Abhiraj K - Full Stack Developer RSS Feed",
        },
      ],
    },
  },
};

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
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bangers.variable} ${josefinSans.variable} ${londrinaSolid.variable} ${sacramento.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="mb-[110px]"></div>
        {children}
      </body>
    </html>
  );
}
