import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreatorStats from "@/components/CreatorStats";
import CreatorCourses from "@/components/CreatorCourses";
import { Placeholder } from "@/components/ui";

export const metadata = { title: "PurePearl Studio – ByteSpace" };

export default function CreatorPage({ params }: { params: { slug: string } }) {
  if (params.slug !== "purepearl-studio") notFound();
  return (
    <main>
      <div className="grid-bg text-white">
        <Navbar />
        <section className="container-x pb-24 pt-10">
          <div className="flex items-center gap-6">
            <Placeholder className="h-[120px] w-[120px] shrink-0 rounded-3xl" />
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="font-display text-4xl font-semibold md:text-5xl">PurePearl Studio</h1>
                <span className="rounded-full bg-lime px-5 py-1.5 text-lg text-ink">Creator</span>
              </div>
              <p className="mt-2 text-xl">Passionate UI/UX, Web designer</p>
            </div>
          </div>
          <div className="mt-12 space-y-1 text-lg leading-9 md:text-xl">
            <p>Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!</p>
            <p>Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.</p>
          </div>
          <CreatorStats products={3} followers={12} />
        </section>
      </div>
      <CreatorCourses />
      <Footer />
    </main>
  );
}
