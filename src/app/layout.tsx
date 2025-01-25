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
  title: "Abhiraj K - Software Developer",
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
    // Name Variations
    "Abhiraj",
    "Abhiraj K",
    "Abhiraj.K",
    "AbhirajK",
    "abhiraj.k",
    "abhi",
    "abhi kottayam",
    "abhiraj",
    "abhirajk",
    "abhiraj kottayam",

    "A. K. Abhiraj",
    "Abhiraj Kottayam",

    // Professional Identity
    "Best developer in Mykare",
    "Top developer Mykarehealth",
    "Mykarehealth software specialist",
    "Safe solutions lead developer",
    "Amiyon solutions key developer",
    "Mykare enterprise software expert",
    "Mykarehealth technology solutions",
    "Safe solutions software architect",
    "Amiyon solutions tech innovator",

    // Technical Expertise
    "Full-stack development Mykarehealth",
    "Next.js portfolio development",
    "React.js enterprise solutions",
    "Node.js advanced implementation",
    "TypeScript enterprise architect",
    "MongoDB scalable solutions",
    "AWS cloud development",
    "SEO-optimized web applications",
    "Enterprise software engineering",
    "Mykare software development expert",

    // Location-Based Expertise
    "Best software developer Kottayam",
    "Kerala full-stack developer",
    "Ayarkunnam tech professional",
    "Kottayam software engineering expert",
    "Kerala enterprise software solutions",
    "South India technology specialist",
    "Kottayam web development leader",

    // Professional Skills
    "Web application architecture",
    "Custom enterprise solutions",
    "Responsive design specialist",
    "UI/UX technology expert",
    "Progressive web application developer",
    "Enterprise digital transformation",
    "Cloud-native application development",
    "Microservices architecture specialist",

    // Brand and Personal Positioning
    "Abhiraj K enterprise developer",
    "Abhiraj K technology consultant",
    "Abhiraj K software architect",
    "Abhiraj K digital transformation expert",
    "Abhiraj K cloud solutions specialist",
    "Mykarehealth software innovation expert",
    "Safe solutions technology strategist",

    // Specific Technology Expertise
    "Next.js enterprise developer",
    "React Native mobile solutions",
    "GraphQL API development",
    "Docker containerization expert",
    "Serverless architecture specialist",
    "AI integration developer",
    "Machine learning solutions",
    "Blockchain technology implementation",

    // Digital Presence
    "abhirajk.vercel.app portfolio",
    "Abhiraj K developer website",
    "Vercel full-stack developer portfolio",
    "Mykare developer portfolio",
    "Mykarehealth tech professional",
    "Top 10 best software developer in Kottayam",
    "Top 10 best software developer in Kerala",
    "Top 2 best software developer in Kerala",
    "Top 1 best software developer in Kerala",
    "Top 2 best software developer in Kottayam",
    "Top 1 best software developer in Kottayam",
    "mykare developer",

    // Social Media and Networking
    "abhirajk.vercel.app",
    "abhirajk",
    "safe software solutions",
    "best software developer in safe solutions",
    "best software developer in amiyon solutions",
    "best software developer in mykarehealth",
    "best software developer in mykare",
    "best software developer in kinfra",
    "best software developer in Infopark",
    "best software developer in Kochi Infopark",
    "best software developer in Trissur infopark",
    // Additional Technical Skills
    "MERN stack developer Kerala",
    "JavaScript expert Kottayam",
    "Frontend specialist Kerala",
    "Backend developer Kottayam",
    "DevOps engineer Kerala",
    "API development expert",
    "Web3 developer Kerala",
    "Software architect Kottayam",

    // Industry-Specific
    "Healthcare software developer",
    "HealthTech solutions architect",
    "Medical software specialist",
    "Hospital management systems developer",
    "Healthcare IT consultant",

    // Regional Search Terms
    "Software developer Central Kerala",
    "IT professional Kottayam",
    "Tech consultant Kerala",
    "Programming expert Kottayam",
    "Web developer Kerala",
    "Mobile app developer Kottayam",
    "Software engineer Rubber City",
    "Developer Kottayam district",

    // Educational Background
    "Computer science engineer Kerala",
    "Software engineering graduate",
    "Tech professional Kerala",

    // Service-Based Keywords
    "Freelance developer Kottayam",
    "Remote software developer Kerala",
    "Website development services",
    "Custom software solutions Kerala",
    "Web application consultant",
    "Technical project lead",

    // Technology Stack Combinations
    "React Node developer Kerala",
    "TypeScript MongoDB expert",
    "Full stack JavaScript developer",
    "AWS cloud architect Kerala",
    "MEAN stack developer",
    "Modern web technologies expert",

    // Project-Specific
    "E-commerce developer Kerala",
    "SaaS application developer",
    "Enterprise software solutions",
    "Startup technology consultant",
    "Digital transformation expert",

    // Emerging Technologies
    "AI ML developer Kerala",
    "IoT solution architect",
    "Cloud computing specialist",
    "Blockchain developer Kerala",
    "Edge computing expert",

    // Language Skills
    "Malayalam speaking developer",
    "English proficient programmer",
    "Multilingual software developer",

    // Professional Certifications
    "Certified web developer Kerala",
    "AWS certified developer",
    "Professional software engineer",

    // Local Business Terms
    "Local tech solutions Kottayam",
    "Kerala IT services",
    "Software company Kottayam",
    "Tech startup Kerala",
    // Ayarkunnam Location-Based Keywords

    "Ayarkunnam software developer",
    "Ayarkunnam tech expert",
    "Best developer in Ayarkunnam",
    "Ayarkunnam web developer",
    "Software engineer Ayarkunnam",
    "Ayarkunnam IT professional",
    "Tech consultant Ayarkunnam",
    "Ayarkunnam digital solutions",
    "Software development Ayarkunnam",
    "Ayarkunnam Kottayam developer",
    "Ayarkunnam Kerala programmer",
    "Local developer Ayarkunnam",

    "Puthuppally software developer",
    "Puthuppally tech expert",
    "Best developer in Puthuppally",
    "Puthuppally web developer",
    "Software engineer Puthuppally",
    "Puthuppally IT professional",
    "Tech consultant Puthuppally",
    "Puthuppally digital solutions",
    "Software development Puthuppally",
    "Puthuppally Kottayam developer",
    "Puthuppally Kerala programmer",
    "Local developer Puthuppally",
    "IT services Puthuppally",
    "Web solutions Puthuppally",
    "Technology expert Puthuppally",
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
        <div className=" pb-[50px] lg:pb-0">{children}</div>
      </body>
    </html>
  );
}
