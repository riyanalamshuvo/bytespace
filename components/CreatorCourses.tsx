"use client";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import FilterBar from "./FilterBar";
import { courseTitles } from "./data";

export default function CreatorCourses() {
  const [sort, setSort] = useState("relevant");
  const list = useMemo(() => (sort === "az" ? [...courseTitles].sort((a, b) => a.localeCompare(b)) : courseTitles), [sort]);
  return (
    <section className="container-x py-16">
      <FilterBar sort={sort} onSort={setSort} />
      <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {list.map(t => <CourseCard key={t} title={t} />)}
      </div>
    </section>
  );
}
