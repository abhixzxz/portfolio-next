import { testimonials } from "./data/testimonials";
import Testimonials from "./testimonialsClient";

export default function TestimonialServer() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
