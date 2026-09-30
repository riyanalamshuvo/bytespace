"use client";
import { useState } from "react";
import { Placeholder } from "./ui";

const tabs = ["About", "Lesson", "Reviews"] as const;
const description = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
  "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
];
const keyPoints = ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"];
const modules = [
  ["Module 1: Introduction to Digital Assets", "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."],
  ["Module 2: Design Principles for Impact", "Explore 'Visual Hierarchy and Composition' and 'Color Theory and Typography.' Learn the principles that make digital assets clear and memorable."],
  ["Module 3: Advanced Techniques in Digital Creation", "Move beyond the basics with 'Layering and Effects' and 'Working with Vector and Raster Assets.' Build the technical range to bring complex ideas to life."],
  ["Module 4: User-Centric Design Strategies", "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."],
  ["Module 5: Interactive Media and Engagement", "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."],
  ["Module 6: Project Showcase and Critique", "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."],
  ["Module 7: Optimizing Digital Assets for Various Platforms", "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."],
];
export const lessons = [["Introduction to Digital Assets", "12 mins"], ["Design Principles for Impacts", "21 mins"], ["Advanced Techniques in Digital Creation", "16 mins"]];

const summary = [[5, 720, 92], [4, 120, 36], [3, 21, 9], [2, 12, 3], [1, 16, 5]];
const reviews = [
  { name: "PurePearl Studio", stars: 5, text: "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"" },
  { name: "Albert Flores", stars: 5, text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", stars: 5, text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
  { name: "Brooklyn Simmons", stars: 5, text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
];
const Stars = ({ n, className = "" }: { n: number; className?: string }) => (
  <span className={`tracking-wider ${className}`} role="img" aria-label={`${n} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map(i => <span key={i} className={i <= n ? "text-[#4B4B55]" : "text-slate-300"}>★</span>)}
  </span>
);

export const Check = () => <span aria-hidden className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-sm text-white">✓</span>;

export default function CourseTabs() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("About");
  const [rating, setRating] = useState<"all" | number>("all");
  const shown = rating === "all" ? reviews : reviews.filter(r => r.stars === rating);
  return (
    <div className="mt-16">
      <div role="tablist" className="flex gap-4">
        {tabs.map(t => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
            className={`rounded-full px-6 py-3.5 text-xl transition ${tab === t ? "bg-lime" : "bg-surface hover:bg-slate-200"}`}>{t}</button>
        ))}
      </div>
      <div role="tabpanel" className="mt-14">
        {tab === "About" && (
          <>
            <h2 className="font-display text-2xl font-semibold">Description</h2>
            <div className="mt-8 space-y-8 text-lg leading-8 text-body">{description.map((p, i) => <p key={i}>{p}</p>)}</div>
            <h2 className="mt-12 font-display text-2xl font-semibold">Sneak Peak</h2>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">{[1, 2, 3, 4].map(i => <Placeholder key={i} className="h-[156px] rounded-2xl" />)}</div>
            <h2 className="mt-12 font-display text-2xl font-semibold">Key Points</h2>
            <ul className="mt-8 space-y-5 text-xl text-body">{keyPoints.map(k => <li key={k} className="flex items-center gap-3"><Check />{k}</li>)}</ul>
          </>
        )}
        {tab === "Lesson" && (
          <>
            <h2 className="font-display text-2xl font-semibold">Explore the Modules</h2>
            <p className="mt-6 text-lg leading-8 text-body">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>
            <h3 className="mt-10 font-display text-2xl font-semibold">Lesson List</h3>
            <ul className="mt-8 space-y-9">
              {modules.map(([title, text]) => (
                <li key={title} className="flex gap-5">
                  <span aria-hidden className="grid h-[90px] w-[90px] shrink-0 place-items-center rounded-3xl bg-lime">
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l6-3v10l-6-3z" fill="currentColor" /></svg>
                  </span>
                  <div><p className="text-lg">{title}</p><p className="mt-1 text-lg leading-8 text-body">{text}</p></div>
                </li>
              ))}
            </ul>
            <h3 className="mt-12 font-display text-2xl font-semibold">Lesson Content</h3>
            <p className="mt-6 text-lg leading-8 text-body">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>
            <h3 className="mt-10 font-display text-2xl font-semibold">Lesson Progress Tracking</h3>
            <p className="mt-6 text-lg leading-8 text-body">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
            <div className="mt-10 rounded-3xl border border-line p-5">
              <p>Learning Progress</p>
              <p className="mt-2 text-5xl font-semibold">55%</p>
              <div className="mt-3 h-2.5 rounded-full bg-slate-200" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
            </div>
          </>
        )}
        {tab === "Reviews" && (
          <>
            <h2 className="font-display text-2xl font-semibold">What Learners Are Saying</h2>
            <p className="mt-6 text-lg leading-8 text-body">Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>
            <div className="mt-10 flex flex-col gap-8 rounded-[40px] border border-line p-8 sm:flex-row sm:items-center sm:p-12">
              <div className="grid h-[175px] w-full place-items-center rounded-2xl bg-lime sm:w-[160px]"><div className="text-center"><p>Ratings</p><p className="text-5xl font-semibold">4.7</p></div></div>
              <ul className="flex-1 space-y-3.5">
                {summary.map(([star, count, w]) => (
                  <li key={star} className="flex items-center gap-4">
                    <div className="h-2.5 flex-1 rounded-full bg-slate-200"><div className="h-full rounded-full bg-lime" style={{ width: `${w}%` }} /></div>
                    <Stars n={star} className="text-2xl" /><span className="w-10 text-right text-lg text-body">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="mt-12 font-display text-2xl font-semibold">Individual Reviews:</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {(["all", 5, 4, 3, 2, 1] as const).map(r => (
                <button key={r} onClick={() => setRating(r)} aria-pressed={rating === r} className={`rounded-full px-6 py-3.5 text-lg transition ${rating === r ? "bg-lime" : "bg-surface hover:bg-slate-200"}`}>
                  {r === "all" ? "All rating" : <><span aria-hidden>★</span> {r}</>}
                </button>
              ))}
            </div>
            <ul className="mt-8 space-y-8">
              {shown.map(r => (
                <li key={r.name} className="rounded-[40px] border border-line p-8 sm:p-12">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4"><Placeholder className="h-16 w-16 rounded-full" /><div><p className="text-xl">{r.name}</p><p className="text-body">UI/UX Designer</p></div></div>
                    <span className="text-body">a year ago</span>
                  </div>
                  <Stars n={r.stars} className="mt-8 block text-3xl" />
                  <p className="mt-6 text-lg leading-8 text-body">{r.text}</p>
                </li>
              ))}
              {!shown.length && <li className="text-lg text-body">No {rating}-star reviews yet.</li>}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
