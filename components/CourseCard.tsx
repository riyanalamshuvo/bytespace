import Link from "next/link";
import { Avatars, Placeholder } from "./ui";
import { slugify } from "./data";

export default function CourseCard({ title }: { title: string }) {
  return (
    <article className="rounded-card border border-line p-5">
      <div className="relative">
        <Placeholder className="h-[245px] rounded-3xl" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-sm text-body">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map(m => <span key={m} className="rounded-full bg-white/60 px-3 py-1.5 backdrop-blur">{m}</span>)}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="truncate font-display text-2xl font-semibold" title={title}><Link href={`/courses/${slugify(title)}`} className="hover:text-brand">{title}</Link></h3>
        <span className="shrink-0 text-body">4.5 <span className="text-slate-300">★</span></span>
      </div>
      <p className="text-sm text-body">by <a className="text-brand" href="/creators/purepearl-studio">purepearl studio</a></p>
      <div className="mt-5 flex items-center gap-4"><span className="rounded-full bg-surface px-4 py-2 text-sm">Beginner</span><Avatars n={4} /></div>
      <p className="mt-5 text-2xl font-semibold text-brand">$25<span className="text-sm font-normal text-body">/lifetime</span></p>
    </article>
  );
}
