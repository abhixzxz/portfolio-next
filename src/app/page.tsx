import { createMetadata } from "@/common/metadata";
import ThreeDCarousel from "@/components/ui/slider/Slider";
import HeroSection from "@/components/Hero/Hero";
import FAQPage from "./faq/page";
import LandingPage from "./home/page";
import TestimonialServer from "./testimonials/page";

export const metadata = createMetadata({
  title: "Abhiraj K - Senior Software Developer in Kottayam, Kerala",
  description:
    "Top-rated software developer in Kottayam, Kerala. Specializing in React.js, Next.js, and full-stack development services.",
});

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <LandingPage />
      <ThreeDCarousel />
      <HeroSection />
      <TestimonialServer />
      <FAQPage />
    </div>
  );
}
