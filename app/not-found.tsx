import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main>
      <div className="grid-bg overflow-hidden text-white">
        <Navbar />
        <section className="container-x pb-28 pt-6 text-center">
          <p aria-hidden className="bg-gradient-to-b from-lime via-lime/70 to-transparent bg-clip-text font-display text-[clamp(150px,34vw,610px)] font-semibold leading-[0.85] text-transparent">404</p>
          <h1 className="relative -mt-[4vw] font-display text-4xl font-semibold leading-[1.2] sm:text-6xl md:text-[80px]">
            <span className="sr-only">404. </span>The page you are looking<br className="hidden md:block" /> for doesn&rsquo;t exist
          </h1>
          <p className="mt-10 text-lg md:text-xl">Try to use a correct url or go back to homepage to start again</p>
          <Link href="/" className="btn mt-10 text-xl">Back to Home</Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
