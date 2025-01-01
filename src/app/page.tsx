import ThreeDCarousel from "@/components/ui/slider/Slider";
import AboutPage from "./about/page";
import HeroSection from "@/components/Hero/Hero";
import BlogPage from "./blog/page";
import FAQPage from "./faq/page";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="mt-20"></div>
      <AboutPage />
      <BlogPage />
      <ThreeDCarousel />
      <FAQPage />
    </div>
  );
}
