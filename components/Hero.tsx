"use client";

import React from "react";
import { LimeSpring, WhiteSpring, LimeCylinder, WhitePyramid, WhiteRibbon } from "./Shapes3D";


export default function Hero() {
  return (
    <section className="relative pt-6 pb-0 text-center overflow-hidden">
      {/* 3D Floating Decorative Assets */}
      {/* 1. Top Left Lime Spring */}
      <div className="absolute left-[1%] top-[22%] z-10 w-28 sm:w-40 md:w-52 pointer-events-none opacity-95 transition-transform hover:scale-105">
        <LimeSpring className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 2. Bottom Left White Spring */}
      <div className="absolute left-[7%] bottom-[12%] z-10 w-20 sm:w-28 md:w-36 pointer-events-none opacity-90">
        <WhiteSpring className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* 3. Top Right Lime Cylinder */}
      <div className="absolute right-[0%] top-[18%] z-10 w-32 sm:w-48 md:w-60 pointer-events-none opacity-95">
        <LimeCylinder className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 4. Middle Right White Pyramid */}
      <div className="absolute right-[8%] bottom-[28%] z-10 w-24 sm:w-32 md:w-44 pointer-events-none opacity-95">
        <WhitePyramid className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* 5. Bottom Right White Ribbon */}
      <div className="absolute right-[4%] bottom-[4%] z-10 w-20 sm:w-28 md:w-36 pointer-events-none opacity-90">
        <WhiteRibbon className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* Hero Header & Subtitle */}
      <div className="relative z-20 mx-auto max-w-5xl px-4">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold text-white tracking-tight leading-[1.08]">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-normal text-white/85 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          className="mx-auto mt-9 flex max-w-2xl items-center justify-center gap-3 sm:gap-4 px-2"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* White Input Pill */}
          <div className="flex flex-1 items-center rounded-full bg-white px-5 py-3.5 shadow-2xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              aria-label="Search courses"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent pl-3 pr-2 text-base font-normal text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Neon Lime Search Button Pill */}
          <button
            type="submit"
            className="rounded-full bg-[#d2fc00] px-8 sm:px-10 py-3.5 text-base font-bold text-black transition-all hover:bg-[#bce400] hover:scale-105 shrink-0 shadow-2xl"
          >
            Search
          </button>
        </form>
      </div>

      {/* Hero Graphic: Center Portrait & Lime Semicircle Backdrop */}
      <div className="relative z-20 mx-auto mt-12 flex h-[380px] sm:h-[460px] md:h-[540px] max-w-[1100px] items-end justify-center">
        {/* Lime Semicircle Dome */}
        <div className="relative flex h-[280px] sm:h-[360px] md:h-[420px] w-[550px] sm:w-[720px] md:w-[860px] items-end justify-center rounded-t-full bg-[#d2fc00]">
          
          {/* Picture Frame */}
          <div className="relative z-10 h-[340px] sm:h-[440px] md:h-[500px] w-[260px] sm:w-[340px] md:w-[380px] rounded-t-full border-4 border-white/60 bg-white/20 backdrop-blur-sm shadow-2xl overflow-hidden bottom-0" />

          {/* Floating Card 1: UI/UX Design (Left) */}
          <div className="absolute left-2 sm:left-8 md:left-14 bottom-16 sm:bottom-24 z-30 min-w-[210px] rounded-2xl bg-white p-4 text-left shadow-2xl">
            <h4 className="font-display text-base font-bold text-gray-900">UI/UX Design</h4>
            <p className="mt-1 text-xs font-medium text-gray-500">200 Courses • 1000+ Students</p>
          </div>

          {/* Floating Card 2: Learning Progress (Right) */}
          <div className="absolute right-2 sm:right-8 md:right-14 bottom-12 sm:bottom-20 z-30 min-w-[220px] rounded-2xl bg-white p-4 text-left shadow-2xl">
            <p className="text-xs font-semibold text-gray-600">Learning Progress</p>
            <h3 className="mt-1 text-3xl font-extrabold text-gray-900">55%</h3>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#d2fc00]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
