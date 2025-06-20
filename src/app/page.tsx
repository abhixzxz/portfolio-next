import { createMetadata } from "@/common/metadata";
import ThreeDCarousel from "@/components/ui/slider/Slider";
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
      <LandingPage />
      <ThreeDCarousel />
      <TestimonialServer />
      <FAQPage />
    </div>
  );
}
