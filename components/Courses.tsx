"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
const chips = ["Featured","Music","Drawing & Painting","Marketing","Animation","Social Media","UI/UX Design","Creative Marketing","Digital Illustration","Film & Video","Crafts","Freelance & Entrepreneurship","Graphic Design","Photography","Productivity","Web Development","Data Science","Cooking"];
const courses = ["Learn Figma from Basic","Build Digital Asset","the Power of Big Data","Balancing Productivity and Life","Mastering Money Management","From Idea to Startup Success"];
export default function Courses() {
  const [active, setActive] = useState("Featured");
  return (
    <>
      <section className="container-x py-24 text-center">
        <h2 className="h2">Discover Your Passion,<br />Build Your Skills</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-body md:text-xl">At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.</p>
        <div className="mx-auto mt-12 flex max-w-[1300px] flex-wrap justify-center gap-3">
          {chips.map(c => <button key={c} onClick={() => setActive(c)} aria-pressed={active === c}
            className={`rounded-full px-5 py-3 text-lg transition ${active === c ? "bg-lime" : "bg-surface hover:bg-slate-200"}`}>{c}</button>)}
          <button className="px-4 py-3 text-lg text-brand">+ More</button>
        </div>
        <div className="mt-16 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {courses.map(t => <CourseCard key={t} title={t} />)}
        </div>
      </section>
    </>
  );
}
