import { Metadata } from "next";
import { Award, Calendar, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Certifications | Abhiraj K",
  description: "View my professional certifications and achievements in software development, cloud computing, and technology leadership.",
  openGraph: {
    type: "website",
    url: "https://abhirajk.vercel.app/certificates",
    title: "Professional Certifications | Abhiraj K",
    description: "Software development and cloud computing certifications from AWS, Microsoft, and other leading platforms",
    siteName: "Abhiraj K Portfolio",
    images: [
      {
        url: "https://abhirajk.vercel.app/images/certificates-og.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K Certifications",
      },
    ],
  },
  alternates: {
    canonical: "https://abhirajk.vercel.app/certificates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const certificates = [
  {
    id: 1,
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2023-07-20",
    url: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    id: 2,
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-04-10",
    url: "https://www.cncf.io/certification/ckad/",
  },
  {
    id: 3,
    title: "Professional Scrum Developer I (PSD I)",
    issuer: "Scrum.org",
    date: "2022-11-15",
    url: "https://www.scrum.org/professional-scrum-developer-i-certification",
  },
  {
    id: 4,
    title: "Node.js Certified Developer",
    issuer: "OpenJS Foundation",
    date: "2023-02-25",
    url: "https://openjsf.org/certification/",
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023-06-05",
    url: "https://learn.microsoft.com/en-us/certifications/azure-developer/",
  },
  {
    id: 6,
    title: "Next.js Certification",
    issuer: "Vercel",
    date: "2023-02-25",
    url: "https://vercel.com/certifications/nextjs",
  },
];

export default function CertificateShowcase() {
  return (
    <div className="container mx-auto px-4 lg:py-[200px]   min-h-screen">
      <h2
        style={{
          fontFamily: "var(--font-bangers)",
          letterSpacing: "0.07em",
        }}
        className="text-4xl pb-4 text-center text-cyan-400 sm:text-5xl md:text-7xl font-black bg-clip-text  bg-gradient-to-r from-white via-gray-300 to-gray-500"
      >
        Professional Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white dark:bg-cyan-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-75" />
            <div className="relative p-8 h-full flex flex-col justify-between z-10">
              <div>
                <Award className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {cert.title}
                </h3>
                <p className="text-lg text-cyan-100 mb-4">{cert.issuer}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-cyan-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(cert.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
