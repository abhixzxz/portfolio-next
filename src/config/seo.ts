import { Metadata } from "next";

interface MetadataOptions extends Partial<Metadata> {
  pageName?: string;
}

const defaultMetadata: Metadata = {
  title: "Abhiraj K - Software Developer",
  description:
    "Welcome to the portfolio of Abhiraj K, the best software developer in Kottayam, Kerala. Proficient in Next.js, React, Node.js, and SEO-friendly web development.",
  keywords: [
    "Abhiraj K",
    "Software Developer",
    "Full Stack Developer",
    "Kottayam",
    "Kerala",
    "React.js",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Abhiraj K", url: "https://abhirajk.vercel.app/" }],
  creator: "Abhiraj K",
  openGraph: {
    type: "website",
    title: "Abhiraj K - Software Developer",
    description:
      "Welcome to the portfolio of Abhiraj K, the best software developer in Kottayam, Kerala.",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: "https://abhirajk.vercel.app",
  },
};

export function createMetadata(options: MetadataOptions = {}): Metadata {
  const { pageName, ...rest } = options;

  const title = pageName
    ? `${pageName} | ${defaultMetadata.title}`
    : defaultMetadata.title;

  return {
    ...defaultMetadata,
    ...rest,
    title,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(rest.openGraph || {}),
      title: rest.openGraph?.title ?? title,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...(rest.twitter || {}),
      title: rest.twitter?.title ?? title,
    },
  };
}

export const jsonLd = {
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
