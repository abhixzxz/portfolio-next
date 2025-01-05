import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Certificates | Abhiraj K - Professional Certifications",
  description:
    "View my professional certifications and achievements in web development, cloud computing, and software engineering.",
  keywords: [
    "Professional Certifications",
    "Web Development Certificates",
    "AWS Certifications",
    "Technical Achievements",
    "Developer Credentials",
    "Software Engineering Qualifications",
  ],
  openGraph: {
    title: "Professional Certifications | Abhiraj K",
    description: "Showcase of technical certifications and achievements",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-certificates.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Certificates = () => {
  return (
    <div className="min-h-screen pb-5 lg:pb-0 bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Certificates</h1>
      <h2 className="text-2xl text-center text-gray-400">
        Coming Soon.........
      </h2>
    </div>
  );
};

export default Certificates;
