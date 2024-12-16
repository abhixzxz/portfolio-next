import Header from "@/components/ui/Header";
import ThreeDCarousel from "@/components/ui/slider/Slider";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="mt-20"></div>
      <AboutPage />
      <ThreeDCarousel />
    </div>
  );
}
