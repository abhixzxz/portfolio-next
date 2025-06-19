import type { Metadata } from "next";
import Image from "next/image";
import { createMetadata } from "@/common/metadata";
import { Camera } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Gallery | Abhiraj K - Visual Portfolio",
  description:
    "Explore my visual portfolio showcasing web development projects, UI/UX designs, and creative work.",
  alternates: {
    canonical: "https://abhirajk.vercel.app/gallery",
  },
  openGraph: {
    title: "Gallery | Abhiraj K - Visual Portfolio",
    description: "Visual showcase of web development and design projects",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K Portfolio Gallery",
      },
    ],
  },
});

const galleryImages = [
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp",
    alt: "Abhiraj K - Full Stack Developer from Kerala, India - Professional Headshot",
    title: "Professional Developer Portrait",
    category: "Professional",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp",
    alt: "Abhiraj K at Mykare Health - Senior Software Engineer working on healthcare solutions",
    title: "At Mykare Health",
    category: "Work",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp",
    alt: "Abhiraj K - Web Developer and UI/UX Designer - Creative Portrait",
    title: "Creative Developer Portrait",
    category: "Creative",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp",
    alt: "Abhiraj K - Software Engineer from Kerala - Professional Portfolio Shot",
    title: "Portfolio Image",
    category: "Professional",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp",
    alt: "Abhiraj K - React and Next.js Developer - Casual Professional Photo",
    title: "Tech Professional",
    category: "Casual",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp",
    alt: "Abhiraj K - Frontend Developer specializing in React and TypeScript",
    title: "Frontend Developer",
    category: "Professional",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk6.webp",
    alt: "Abhiraj K - Software Developer from Kochi, Kerala - Outdoor Portrait",
    title: "Outdoor Portrait",
    category: "Outdoor",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk7.webp",
    alt: "Abhiraj K - Full Stack JavaScript Developer - Professional Environment",
    title: "Professional Environment",
    category: "Work",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722158/AbhirajK/Abhirajk8.webp",
    alt: "Abhiraj K - Web Development Professional - Casual Business Portrait",
    title: "Business Portrait",
    category: "Professional",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722157/AbhirajK/Abhirajkfootball.webp",
    alt: "Abhiraj K playing football - Software Developer with passion for sports",
    title: "Football Enthusiast",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722156/AbhirajK/Abhirajk10.webp",
    alt: "Abhiraj K - Kerala-based Developer and Tech Enthusiast",
    title: "Tech Enthusiast",
    category: "Creative",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <section
        className="relative"
        aria-label="Abhiraj K's Photography Portfolio"
      >
        {/* Header Section */}
        <div className="relative overflow-hidden py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
              style={{
                fontFamily: "var(--font-bangers)",
                letterSpacing: "0.07em",
              }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                VISUAL GALLERY
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-16">
              Explore my visual portfolio showcasing professional moments,
              creative work, and personal interests that define my journey as a
              developer.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <article key={index} className="group relative">
                <div className="relative overflow-hidden rounded-3xl border border-slate-800/50 backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 p-2 transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:border-cyan-500/30">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-xl -z-10 transition-opacity duration-500" />

                  {/* Image Container */}
                  <figure className="relative">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                      <Image
                        className="object-cover object-center transition-all duration-500 group-hover:scale-110"
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        title={image.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        priority={index < 4}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                          {image.category}
                        </span>
                      </div>

                      {/* Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <h3 className="text-white font-semibold text-sm md:text-base">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </figure>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-cyan-500/60 to-purple-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">
                {galleryImages.length}
              </div>
              <div className="text-sm text-slate-400">Photos</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">5</div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">2024</div>
              <div className="text-sm text-slate-400">Latest</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
