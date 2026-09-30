import React from "react";
import {
  LimeSpring,
  WhiteSpring,
  WhitePyramid,
  LimePyramid,
  WhiteCylinder,
  LimeTorus,
} from "./Shapes3D";

export default function CreatorCta() {
  return (
    <section className="relative bg-[#0055fe] py-28 sm:py-36 text-center text-white overflow-hidden">
      {/* Grid Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)`,
          backgroundSize: '110px 110px',
        }}
      />

      {/* Floating 3D Decorative Assets */}
      {/* 1. Top Left Lime Spring */}
      <div className="absolute left-[1%] top-[8%] z-10 w-28 sm:w-44 md:w-52 pointer-events-none opacity-95 transition-transform hover:scale-105">
        <LimeSpring className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 2. Top Left Inner White Spring */}
      <div className="absolute left-[13%] top-[10%] z-10 w-20 sm:w-28 md:w-36 pointer-events-none opacity-90">
        <WhiteSpring className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* 3. Bottom Left White Pyramid */}
      <div className="absolute left-[-2%] bottom-[12%] z-10 w-24 sm:w-36 md:w-44 pointer-events-none opacity-95">
        <WhitePyramid className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* 4. Bottom Left Lime Torus */}
      <div className="absolute left-[7%] bottom-[-8%] z-10 w-32 sm:w-44 md:w-56 pointer-events-none opacity-95">
        <LimeTorus className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 5. Top Right Lime Pyramid */}
      <div className="absolute right-[14%] top-[10%] z-10 w-24 sm:w-36 md:w-44 pointer-events-none opacity-95">
        <LimePyramid className="w-full h-auto drop-shadow-xl" />
      </div>

      {/* 6. Upper Right Outer White Cylinder */}
      <div className="absolute right-[-2%] top-[14%] z-10 w-32 sm:w-48 md:w-60 pointer-events-none opacity-95">
        <WhiteCylinder className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 7. Bottom Right Lime Spring */}
      <div className="absolute right-[2%] bottom-[-10%] z-10 w-32 sm:w-48 md:w-60 pointer-events-none opacity-95">
        <LimeSpring className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg font-normal text-white/90 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <a
          href="/signup"
          className="mt-9 inline-block rounded-full bg-[#d2fc00] px-8 py-3.5 text-base font-bold text-black transition-all hover:bg-[#bce400] hover:scale-105 shadow-xl"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
