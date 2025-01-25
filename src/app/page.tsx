import ThreeDCarousel from "@/components/ui/slider/Slider";
import AboutPage from "./about/page";
import HeroSection from "@/components/Hero/Hero";
import BlogPage from "./blog/page";
import FAQPage from "./faq/page";
import LandingPage from "./home/page";
import TestimonialServer from "./testimonials/page";

export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <AboutPage />
      <BlogPage />
      <ThreeDCarousel />
      <HeroSection />
      <TestimonialServer />
      <FAQPage />
    </div>
  );
}
