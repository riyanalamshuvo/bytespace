import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareButton from "@/components/ShareButton";
import CourseTabs, { lessons } from "@/components/CourseTabs";
import { Placeholder } from "@/components/ui";
import { courseTitles, slugify } from "@/components/data";

const includes = ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"];

export function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: `${courseTitles.find(t => slugify(t) === params.slug) ?? "Course"} – ByteSpace` };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const name = courseTitles.find(t => slugify(t) === params.slug);
  if (!name) notFound();
  return (
    <main className="relative">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-[900px] lg:h-[1200px]" />
      <div className="relative text-white"><Navbar /></div>
      <div className="container-x relative">
        <header className="flex flex-wrap items-start justify-between gap-6 text-white">
          <div>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight md:text-5xl">{name}: A Comprehensive Guide</h1>
            <p className="mt-3 text-2xl font-medium">Unlock the Power of Digital Creation with Expert Guidance</p>
            <p className="mt-8 text-xl">by <a href="/creators/purepearl-studio" className="text-lime">purepearl studio</a></p>
            <ul className="mt-6 flex flex-wrap gap-4 text-xl text-ink">
              {["Intermediate", "4.8 (172 reviews)", "199 Students"].map(b => <li key={b} className="rounded-full bg-white px-6 py-3"><span className="mr-2 text-brand" aria-hidden>{b.startsWith("4.8") ? "★" : b === "Intermediate" ? "▮" : "●"}</span>{b}</li>)}
            </ul>
          </div>
          <ShareButton />
        </header>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_440px]">
          <div>
            <div className="relative grid h-[300px] place-items-center rounded-[48px] bg-gradient-to-br from-slate-200 to-slate-100 sm:h-[450px] lg:h-[600px]">
              <button aria-label="Play course preview" className="grid h-24 w-24 place-items-center rounded-full bg-white/90 text-3xl text-brand shadow-lg transition hover:scale-105">▶</button>
            </div>
            <CourseTabs />
          </div>

          <aside className="rounded-[40px] border border-line bg-white p-8 shadow-xl sm:p-10 lg:sticky lg:top-6">
            <h2 className="font-display text-2xl font-semibold">112 Lessons (24 hours)</h2>
            <ol className="mt-8 space-y-4 text-lg">
              {lessons.map(([t, m], i) => <li key={t} className="flex gap-3"><span>{String(i + 1).padStart(2, "0")}</span><span className="flex-1">{t}</span><span className="text-brand">{m}</span></li>)}
            </ol>
            <p className="mt-6 text-body">99 more videos</p>
            <p className="mt-10 text-lg leading-8 text-body">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <p className="mt-8 text-5xl font-semibold text-brand">$25<span className="text-lg font-normal text-body">/lifetime</span></p>
            <button className="btn mt-6 w-full text-xl">Enroll Now</button>
            <h3 className="mt-10 font-display text-2xl font-semibold">This course include</h3>
            <ul className="mt-6 space-y-5 text-lg text-body">{includes.map(i => <li key={i} className="flex items-center gap-3"><span aria-hidden className="h-5 w-6 rounded-sm border-2 border-brand" />{i}</li>)}</ul>
            <hr className="my-8 border-line" />
            <div className="flex items-center gap-4"><Placeholder className="h-16 w-16 rounded-full" /><div><p className="text-xl font-medium">PurePearl Studio</p><p className="text-body">Professional Creator</p></div></div>
            <p className="mt-6 text-lg leading-8 text-body">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <a href="/creators/purepearl-studio" className="mt-6 inline-flex rounded-full border border-line px-6 py-3 text-lg transition hover:border-brand">See Full Profile</a>
          </aside>
        </div>
      </div>
      <div className="relative mt-24"><Footer /></div>
    </main>
  );
}
