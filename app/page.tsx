import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Courses from "@/components/Courses";
import Categories from "@/components/Categories";
import Feature from "@/components/Feature";
import CreatorCta from "@/components/CreatorCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="relative grid-bg text-white">
        <Navbar />
        <Hero />
      </div>
      <Brands />
      <Courses />
      <Categories />
      <Feature />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
