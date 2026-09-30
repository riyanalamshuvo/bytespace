"use client";
import { useMemo, useState } from "react";
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import FilterBar from "./FilterBar";

const base = ["Learn Figma from Basic", "Build Digital Asset", "the Power of Big Data", "Balancing Productivity and Life", "Mastering Money Management", "From Idea to Startup Success"];
const all = Array.from({ length: 45 }, (_, i) => base[i % base.length]);
const chips = ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"];
const PER_PAGE = 9;

const Icon = ({ d, children }: { d?: string; children?: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{d ? <path d={d} /> : children}</svg>
);

export default function CoursesBrowser() {
  const [q, setQ] = useState("");
  const [chip, setChip] = useState("Featured");
  const [sort, setSort] = useState("relevant");
  const [page, setPage] = useState(1);

  const list = useMemo(() => {
    const l = all.filter(t => t.toLowerCase().includes(q.trim().toLowerCase()));
    return sort === "az" ? [...l].sort((a, b) => a.localeCompare(b)) : l;
  }, [q, sort]);
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  const cur = Math.min(page, pages);
  const view = list.slice((cur - 1) * PER_PAGE, cur * PER_PAGE);

  return (
    <>
      <div className="grid-bg text-white">
        <Navbar />
        <section className="container-x pb-24 pt-10 text-center">
          <h1 className="font-display text-4xl font-semibold md:text-[54px]">Find Your Next Course</h1>
          <form role="search" onSubmit={e => e.preventDefault()} className="mx-auto mt-10 flex max-w-[800px] flex-col gap-4 sm:flex-row">
            <label className="flex h-[65px] flex-1 items-center gap-3 rounded-full bg-white px-6 text-slate-400 focus-within:ring-4 focus-within:ring-lime/60">
              <Icon><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></Icon>
              <input value={q} onChange={e => { setQ(e.target.value); setPage(1); }} placeholder="Search" aria-label="Search courses" className="w-full bg-transparent text-xl text-ink outline-none placeholder:text-slate-400" />
            </label>
            <div className="relative">
              <select aria-label="Search in" className="btn h-[60px] w-full appearance-none pr-12 text-xl sm:w-auto">
                <option>Courses</option><option>Creators</option><option>Topics</option>
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 9l7 7 7-7" /></svg>
            </div>
          </form>
        </section>
      </div>

      <section className="container-x py-16">
        <FilterBar sort={sort} onSort={setSort} />

        <div className="mt-10 flex flex-wrap gap-3">
          {chips.map(c => (
            <button key={c} onClick={() => setChip(c)} aria-pressed={chip === c}
              className={`rounded-full px-6 py-4 text-xl transition ${chip === c ? "bg-lime" : "bg-surface hover:bg-slate-200"}`}>{c}</button>
          ))}
        </div>

        {view.length ? (
          <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {view.map((t, i) => <CourseCard key={`${cur}-${i}`} title={t} />)}
          </div>
        ) : (
          <p className="mt-24 text-center text-xl text-body">No courses match &ldquo;{q}&rdquo;. Try a different search.</p>
        )}

        <nav aria-label="Pagination" className="mt-20 flex items-center justify-center gap-5 text-2xl font-medium">
          <button aria-label="Previous page" disabled={cur === 1} onClick={() => setPage(cur - 1)} className="grid h-[60px] w-[70px] place-items-center rounded-full border border-line disabled:opacity-40">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => setPage(n)} aria-current={n === cur ? "page" : undefined} className={`px-2 ${n === cur ? "text-slate-300" : "hover:text-brand"}`}>{n}</button>
          ))}
          <button aria-label="Next page" disabled={cur === pages} onClick={() => setPage(cur + 1)} className="grid h-[60px] w-[70px] place-items-center rounded-full border border-line disabled:opacity-40">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </nav>
      </section>
    </>
  );
}
