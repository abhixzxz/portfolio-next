import type { Metadata } from "next";
import {
  Award,
  Calendar,
  ExternalLink,
  Sparkles,
  Trophy,
  Medal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Certifications | Abhiraj K",
  description:
    "View my professional certifications and achievements in software development, cloud computing, and technology leadership.",
  openGraph: {
    type: "website",
    url: "https://abhirajk.vercel.app/certificates",
    title: "Professional Certifications | Abhiraj K",
    description:
      "Software development and cloud computing certifications from AWS, Microsoft, and other leading platforms",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    category: "Cloud",
    icon: Trophy,
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    id: 2,
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-04-10",
    url: "https://www.cncf.io/certification/ckad/",
    category: "DevOps",
    icon: Medal,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    id: 3,
    title: "Professional Scrum Developer I (PSD I)",
    issuer: "Scrum.org",
    date: "2022-11-15",
    url: "https://www.scrum.org/professional-scrum-developer-i-certification",
    category: "Agile",
    icon: Award,
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    id: 4,
    title: "Node.js Certified Developer",
    issuer: "OpenJS Foundation",
    date: "2023-02-25",
    url: "https://openjsf.org/certification/",
    category: "Backend",
    icon: Sparkles,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023-06-05",
    url: "https://learn.microsoft.com/en-us/certifications/azure-developer/",
    category: "Cloud",
    icon: Trophy,
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    iconColor: "text-sky-400",
  },
  {
    id: 6,
    title: "Next.js Certification",
    issuer: "Vercel",
    date: "2023-02-25",
    url: "https://vercel.com/certifications/nextjs",
    category: "Frontend",
    icon: Medal,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
];

export default function CertificateShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Professional Achievements
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-bangers)",
              letterSpacing: "0.07em",
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              CERTIFICATIONS
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Showcasing my commitment to continuous learning and professional
            excellence in software development and cloud technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div key={cert.id} className="group relative">
                {/* Card */}
                <div
                  className={`
                  relative h-full p-8 rounded-3xl border backdrop-blur-sm
                  bg-gradient-to-br ${cert.color}
                  ${cert.borderColor} hover:border-opacity-60
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] hover:-translate-y-2
                  bg-slate-900/40
                `}
                >
                  {/* Glow Effect */}
                  <div
                    className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-br ${cert.color}
                    blur-xl -z-10 transition-opacity duration-500
                  `}
                  />

                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      bg-slate-800/60 ${cert.iconColor} border border-slate-700/50
                    `}
                    >
                      {cert.category}
                    </span>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity duration-300 text-slate-300 hover:text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 ${cert.iconColor}`}>
                    <IconComponent className="w-12 h-12" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-100 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-slate-300 font-medium">{cert.issuer}</p>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={cert.date}>
                        {new Date(cert.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`
                    absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl
                    bg-gradient-to-r ${cert.color.replace("/20", "/60")}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">6</div>
              <div className="text-sm text-slate-400">Certifications</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">4</div>
              <div className="text-sm text-slate-400">Platforms</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">2024</div>
              <div className="text-sm text-slate-400">Latest Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
