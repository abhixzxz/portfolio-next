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

// Importing the custom fonts
const bangers = Bangers({
  weight: "400", // Default weight for Bangers
  variable: "--font-bangers",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  weight: ["100", "300", "400", "700"], // Specify the weights you want to use
  style: ["normal", "italic"], // Add italic styles as needed
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const londrinaSolid = Londrina_Solid({
  weight: ["100", "300", "400", "900"], // Specify weights for Londrina Solid
  variable: "--font-londrina-solid",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  weight: "400", // Sacramento supports only one weight
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
  ],
  authors: [{ name: "Abhiraj K", url: "https://abhiraj44.vercel.app/" }],
  creator: "Abhiraj K",
  openGraph: {
    title: "Abhiraj K - Best Software Developer in Kottayam",
    description:
      "Discover the portfolio of Abhiraj K, specializing in React, Next.js, and SEO-friendly web development.",
    url: "https://abhiraj44.vercel.app/",
    siteName: "Abhiraj K Portfolio",
    images: [
      {
        url: "https://abhiraj44.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K - Best Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiraj K - Best Software Developer in Kottayam",
    description:
      "Explore the expertise of Abhiraj K, a leading developer in Kerala, specializing in modern web technologies.",
    images: ["https://abhiraj44.vercel.app/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
