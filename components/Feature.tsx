import React from "react";
import { LimeSpring } from "./Shapes3D";

const checks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function Feature() {
  return (
    <>
      {/* Feature Section 1: Professional Growth */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#f8fafc]">
        {/* Layered Soft Ambient Glows matching screenshot */}
        <div className="absolute top-[-10%] left-[15%] w-[650px] h-[650px] rounded-full bg-[#f2ff9e]/50 blur-[130px] pointer-events-none" />
        <div className="absolute top-[-5%] right-[-5%] w-[550px] h-[550px] rounded-full bg-[#dbeafe]/60 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#e0e7ff]/70 blur-[150px] pointer-events-none" />

        <div className="relative z-10 container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Headline & Stats */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Your Path to Professional <br /> Growth Starts Here!
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <dl className="mt-12 flex items-center gap-10 sm:gap-14">
              <div>
                <dt className="text-4xl sm:text-5xl font-extrabold text-[#2563eb] tracking-tight">12K</dt>
                <dd className="mt-2 text-sm sm:text-base text-gray-500 font-medium">Students</dd>
              </div>
              <div>
                <dt className="text-4xl sm:text-5xl font-extrabold text-[#2563eb] tracking-tight">70+</dt>
                <dd className="mt-2 text-sm sm:text-base text-gray-500 font-medium">Courses</dd>
              </div>
              <div>
                <dt className="text-4xl sm:text-5xl font-extrabold text-[#2563eb] tracking-tight">16</dt>
                <dd className="mt-2 text-sm sm:text-base text-gray-500 font-medium">Creators</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Graphic Composition */}
          <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[520px] flex items-center">
              
              {/* Main White Course Card */}
              <div className="relative z-10 bg-white rounded-[28px] p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/90 w-[330px] sm:w-[370px] shrink-0">
                {/* Course Thumbnail Image */}
                <div className="relative h-[165px] sm:h-[185px] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31727223ec?auto=format&fit=crop&w=800&q=80"
                    alt="Learn Figma from Basic"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                {/* Course Info */}
                <div className="mt-4 px-1">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    Learn Figma from Basic
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#2563eb]">
                    by <span className="hover:underline">purepearl studio</span>
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600 flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                      Beginner
                    </span>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-[#2563eb]">$25</span>
                    <span className="text-xs font-medium text-gray-400">/lifetime</span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Lime Spring Asset */}
              <div className="absolute right-[-10px] sm:right-[-30px] top-[16%] z-20 w-32 sm:w-40 pointer-events-none opacity-95 transition-transform hover:scale-105">
                <LimeSpring className="w-full h-auto drop-shadow-2xl" />
              </div>

              {/* Floating "Learning Progress" Card */}
              <div className="absolute right-[-15px] sm:right-[-35px] bottom-[28%] z-30 min-w-[200px] sm:min-w-[220px] rounded-2xl bg-white p-4.5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100/90">
                <p className="text-xs font-medium text-gray-600">Learning Progress</p>
                <h4 className="mt-1 text-3xl font-extrabold text-gray-900 tracking-tight">55%</h4>
                <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[55%] rounded-full bg-[#d2fc00]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Create & Manage Courses Easily */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#f8fafc]">
        {/* Layered Soft Ambient Glows matching screenshot */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#f2ff9e]/45 blur-[140px] pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] rounded-full bg-[#dbeafe]/60 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#e0e7ff]/70 blur-[150px] pointer-events-none" />

        <div className="relative z-10 container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Creator Graphic Composition */}
          <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="relative w-full max-w-[540px] h-[480px] sm:h-[520px] flex items-center">
              
              {/* 1. Total Revenue Card (Top Left) */}
              <div className="absolute left-0 top-[6%] z-10 w-[200px] sm:w-[220px] rounded-2xl bg-[#1d4ed8] p-4.5 text-white shadow-[0_15px_35px_rgba(29,78,216,0.3)]">
                <p className="text-xs font-medium text-blue-100">Total Revenue</p>
                <p className="text-[10px] text-blue-200 mt-0.5">July 1-28</p>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">$120.29</p>
                <div className="mt-3 h-1.5 w-full bg-blue-900/40 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-[#d2fc00] rounded-full" />
                </div>
              </div>

              {/* 2. Year to Date Card (Bottom Left) */}
              <div className="absolute left-0 bottom-[16%] z-10 w-[200px] sm:w-[220px] rounded-2xl bg-[#1d4ed8] p-4.5 text-white shadow-[0_15px_35px_rgba(29,78,216,0.3)]">
                <p className="text-xs font-medium text-blue-100">Year to Date</p>
                <p className="text-[10px] text-blue-200 mt-0.5">2023</p>
                <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">$1,200.38</p>
                <div className="mt-2.5 inline-flex items-center rounded-full bg-[#d2fc00] px-2.5 py-0.5 text-xs font-extrabold text-black">
                  +12$
                </div>
              </div>

              {/* 4. Floating 3D Lime Spring Asset */}
              <div className="absolute right-[10px] sm:right-[-10px] top-[18%] z-20 w-32 sm:w-38 pointer-events-none opacity-95 transition-transform hover:scale-105">
                <LimeSpring className="w-full h-auto drop-shadow-2xl" />
              </div>

              {/* 5. Happy Students Card (Bottom Right) */}
              <div className="absolute right-[0px] sm:right-[-20px] bottom-[12%] z-30 min-w-[210px] sm:min-w-[240px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-100/90">
                <p className="text-sm font-bold text-gray-900">Happy Students</p>
                <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-gray-700">
                  <span>4.5</span>
                  <span className="text-gray-400 font-normal">(240)</span>
                  <span className="text-amber-400 text-sm">★</span>
                </div>
                {/* Student Avatars Row */}
                <div className="mt-3 flex items-center -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student 1" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student 2" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student 3" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student 4" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d2fc00] text-xs font-extrabold text-black ring-2 ring-white ml-1">
                    2K+
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 max-w-xl">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Create &amp; Manage <br /> Courses Easily.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-3.5 text-base sm:text-lg font-bold text-gray-900">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white text-xs font-bold shadow-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
