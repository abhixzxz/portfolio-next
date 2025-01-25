import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Abhiraj K - Visual Portfolio",
  description:
    "Explore my visual portfolio showcasing web development projects, UI/UX designs, and creative work.",
  keywords: [
    "Portfolio Gallery",
    "Web Development Projects",
    "UI/UX Designs",
    "Creative Portfolio",
    "Abhiraj K Projects",
    "Kerala Developer Portfolio",
  ],
  openGraph: {
    type: "website",
    url: "https://abhirajk.vercel.app/gallery",
    title: "Gallery | Abhiraj K",
    description: "Visual showcase of web development and design projects",
    siteName: "Abhiraj K Portfolio",
    images: [
      {
        url: "https://abhirajk.vercel.app/og-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Abhiraj K Portfolio Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://abhirajk.vercel.app/gallery",
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

const Gallery = async () => {
  return (
    <section aria-label="Abhiraj K's Photography Portfolio">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
              alt="Abhiraj K - Full Stack Developer from Kerala, India - Professional Headshot"
              title="Abhiraj K - Professional Developer Portrait"
              width={500}
              height={300}
              priority
              loading="eager"
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
              alt="Abhiraj K at Mykare Health - Senior Software Engineer working on healthcare solutions"
              title="Abhiraj K at Mykare Health"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
              alt="Abhiraj K - Web Developer and UI/UX Designer - Creative Portrait"
              title="Abhiraj K - Creative Developer Portrait"
              width={500}
              height={300}
            />
          </figure>
        </article>

        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
              alt="Abhiraj K - Software Engineer from Kerala - Professional Portfolio Shot"
              title="Abhiraj K - Portfolio Image"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp"
              alt="Abhiraj K - React and Next.js Developer - Casual Professional Photo"
              title="Abhiraj K - Tech Professional"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp"
              alt="Abhiraj K - Frontend Developer specializing in React and TypeScript"
              title="Abhiraj K - Frontend Developer"
              width={500}
              height={300}
            />
          </figure>
        </article>

        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk6.webp"
              alt="Abhiraj K - Software Developer from Kochi, Kerala - Outdoor Portrait"
              title="Abhiraj K - Outdoor Portrait"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk7.webp"
              alt="Abhiraj K - Full Stack JavaScript Developer - Professional Environment"
              title="Abhiraj K - Professional Environment"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722158/AbhirajK/Abhirajk8.webp"
              alt="Abhiraj K - Web Development Professional - Casual Business Portrait"
              title="Abhiraj K - Business Portrait"
              width={500}
              height={300}
            />
          </figure>
        </article>

        <article className="grid gap-4">
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722157/AbhirajK/Abhirajkfootball.webp"
              alt="Abhiraj K playing football - Software Developer with passion for sports"
              title="Abhiraj K - Football Enthusiast"
              width={500}
              height={300}
            />
          </figure>
          <figure>
            <Image
              className="rounded-lg object-cover object-center"
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722156/AbhirajK/Abhirajk10.webp"
              alt="Abhiraj K - Kerala-based Developer and Tech Enthusiast"
              title="Abhiraj K - Tech Enthusiast"
              width={500}
              height={300}
            />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Gallery;
