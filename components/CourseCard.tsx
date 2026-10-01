import Link from "next/link";
import { Avatars } from "./ui";
import { slugify } from "./data";

const courseImages: Record<string, string> = {
  "Learn Figma from Basic": "https://images.unsplash.com/photo-1542744094-3a31727223ec?auto=format&fit=crop&w=800&q=80",
  "Build Digital Asset": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
  "the Power of Big Data": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  "Balancing Productivity and Life": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  "Mastering Money Management": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  "From Idea to Startup Success": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
};

export default function CourseCard({ title }: { title: string }) {
  const imgSrc =
    courseImages[title] ||
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80";

  return (
    <article className="group rounded-[28px] border border-gray-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-[245px] w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-xs font-medium text-gray-700">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((m) => (
            <span
              key={m}
              className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 shadow-sm"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="truncate font-display text-2xl font-bold text-gray-900" title={title}>
          <Link href={`/courses/${slugify(title)}`} className="hover:text-[#2563eb] transition-colors">
            {title}
          </Link>
        </h3>
        <span className="shrink-0 font-bold text-gray-800 text-sm flex items-center gap-1">
          4.5 <span className="text-amber-400 text-base">★</span>
        </span>
      </div>
      <p className="mt-1 text-xs font-medium text-gray-500">
        by{" "}
        <Link href="/creators/purepearl-studio" className="font-semibold text-[#2563eb] hover:underline">
          purepearl studio
        </Link>
      </p>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3.5 py-1.5 text-xs font-medium text-gray-600 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 20v-6M6 20V10M18 20V4" />
          </svg>
          Beginner
        </span>
        <Avatars n={4} />
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-[#2563eb]">$25</span>
        <span className="text-xs font-medium text-gray-400">/lifetime</span>
      </div>
    </article>
  );
}

