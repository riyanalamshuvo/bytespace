import React from "react";
import Link from "next/link";
import { ByteSpaceLogo } from "./Navbar";
import { LimeTorus, LimePyramid, WhiteSpring } from "./Shapes3D";

export default function AuthShell({
  title,
  blurb,
  children,
}: {
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-[#0055fe] overflow-hidden text-white">
      {/* Grid Line Overlay Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)`,
          backgroundSize: '110px 110px',
        }}
      />

      <div className="relative z-10 container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left Column: Brand, Headline, Subtitle, & Graphic Composition */}
        <section className="flex flex-col justify-between min-h-[760px]">
          {/* Header Area */}
          <div>
            <Link href="/" aria-label="ByteSpace home">
              <ByteSpaceLogo textColor="text-white" iconColor="#d2fc00" cutoutColor="#0055fe" />
            </Link>

            <h1 className="mt-12 text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-white leading-[1.15]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg lg:text-[20px] font-normal text-white/90 leading-[1.5]">
              {blurb}
            </p>
          </div>

          {/* Graphic Composition (Desktop Preview 1:1 Matching Screenshot) */}
          <div aria-hidden className="relative mt-14 hidden lg:block h-[560px] w-full max-w-[580px]">
            
            {/* 1. Base Card 1 (Bottom Left, vertical card under Card 2) */}
            <div className="absolute left-0 bottom-[40px] sm:bottom-[60px] z-10 w-[300px] sm:w-[340px] rounded-[28px] bg-white p-5 shadow-xl border border-gray-100/90 text-gray-900">
              {/* Course Thumbnail Image */}
              <div className="relative h-[170px] sm:h-[190px] w-full overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
                  alt="Build Digital Asset"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                  17 Lessons
                </span>
              </div>
              <div className="mt-4 px-1">
                <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                  Build Digital Asset
                </h4>
                <p className="mt-1 text-xs font-semibold text-[#2563eb]">
                  by purepearl studio
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-600 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    <img className="h-6.5 w-6.5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    <img className="h-6.5 w-6.5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    <img className="h-6.5 w-6.5 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                    <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white ring-2 ring-white">
                      26+
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-[#2563eb]">$25</span>
                  <span className="text-xs font-medium text-gray-400">/lifetime</span>
                </div>
              </div>
            </div>

            {/* 2. Main Card 2 (Top Right, overlapping Card 1) */}
            <div className="absolute left-[130px] sm:left-[150px] top-[0px] z-20 w-[360px] sm:w-[400px] rounded-[28px] bg-white p-5 shadow-2xl border border-gray-100 text-gray-900">
              {/* Analytics Thumbnail Image */}
              <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                  alt="the Power of Big Data"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                    17 Lessons
                  </span>
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                    2 hours 16 mins
                  </span>
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    the Power of Big Data
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#2563eb]">
                    by <span className="hover:underline">purepearl studio</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-800">
                  <span>4.5</span>
                  <span className="text-amber-400">★</span>
                </div>
              </div>

              {/* Level & Avatars */}
              <div className="mt-3 flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>
                  Beginner
                </span>
                <div className="flex items-center -space-x-2">
                  <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <img className="h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white ring-2 ring-white">
                    26+
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-[#2563eb]">$25</span>
                <span className="text-xs font-medium text-gray-400">/lifetime</span>
              </div>
            </div>

            {/* 3. Floating Card 3: Happy Students Card (Bottom Right, 1:1 Match with Screenshot) */}
            <div className="absolute right-[-10px] sm:right-[10px] bottom-[0px] sm:bottom-[10px] z-30 w-[310px] sm:w-[340px] rounded-[28px] bg-[#d2fc00] p-5 sm:p-6 shadow-2xl text-black border border-lime-300/50">
              {/* 3D White Spring Overlapping Top-Right Corner */}
              <div className="absolute -top-12 -right-8 w-28 sm:w-32 pointer-events-none drop-shadow-xl z-10">
                <WhiteSpring className="w-full h-auto transform rotate-12" />
              </div>

              <h4 className="text-xl sm:text-[22px] font-extrabold text-gray-900 tracking-tight leading-tight">
                Happy Students
              </h4>
              
              <div className="mt-1.5 flex items-center gap-1.5 text-sm sm:text-base font-extrabold text-black">
                <span className="text-black font-extrabold">4.5</span>
                <span className="text-gray-700 font-medium text-sm">(240)</span>
                <svg className="w-5 h-5 text-[#0055fe] fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Avatar Row */}
              <div className="mt-4 flex items-center -space-x-3 sm:-space-x-3.5">
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Student 1" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Student 2" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80" alt="Student 3" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80" alt="Student 4" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80" alt="Student 5" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80" alt="Student 6" />
                <img className="h-10 w-10 sm:h-11 sm:w-11 rounded-full ring-2 ring-[#d2fc00] object-cover" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80" alt="Student 7" />
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#222226] text-xs sm:text-sm font-extrabold text-white ring-2 ring-[#d2fc00] z-10">
                  2K+
                </span>
              </div>
            </div>

            {/* 4. 3D Floating Decorative Assets */}
            {/* Top Left Lime Ring */}
            <div className="absolute left-[60px] sm:left-[80px] top-[-30px] z-30 w-28 sm:w-32 pointer-events-none drop-shadow-2xl">
              <LimeTorus className="w-full h-auto" />
            </div>

            {/* Bottom Left Lime Pyramid */}
            <div className="absolute left-[-30px] sm:left-[-40px] bottom-[-40px] z-30 w-44 sm:w-52 pointer-events-none drop-shadow-2xl">
              <LimePyramid className="w-full h-auto" />
            </div>

          </div>
        </section>

        {/* Right Column: Form Container */}
        <section className="self-start rounded-[40px] bg-white p-8 text-gray-900 shadow-2xl sm:p-12 lg:mt-16 w-full max-w-lg mx-auto lg:max-w-none">
          {children}
        </section>
      </div>
    </main>
  );
}
