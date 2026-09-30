import React from "react";

export default function Brands() {
  return (
    <section className="w-full bg-[#f4f4f6] py-10 px-4 border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around md:justify-between gap-8 sm:gap-10 px-4">
        {/* 1. Wave Circle Logo */}
        <div className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f172a] transition-colors">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-7 12c1.5-1.5 4-1.5 5.5 0s4 1.5 5.5 0 4-1.5 5.5 0v3c-1.5 1.5-4 1.5-5.5 0s-4-1.5-5.5 0-4 1.5-5.5 0v-3zm0 7c1.5-1.5 4-1.5 5.5 0s4 1.5 5.5 0 4-1.5 5.5 0v3c-1.5 1.5-4 1.5-5.5 0s-4-1.5-5.5 0-4 1.5-5.5 0v-3z" />
          </svg>
          <span className="font-extrabold text-2xl tracking-tight text-[#475569]">Logoipsum</span>
        </div>

        {/* 2. Starburst / Sunburst Logo */}
        <div className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f172a] transition-colors">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="16" cy="16" r="4" />
            <path d="M16 0v6M16 26v6M0 16h6M26 16h6M4.686 4.686l4.243 4.243M23.071 23.071l4.243 4.243M4.686 27.314l4.243-4.243M23.071 8.929l4.243-4.243" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-extrabold text-2xl tracking-tight text-[#475569]">Logoipsum</span>
        </div>

        {/* 3. Lightning Circle Logo */}
        <div className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f172a] transition-colors">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM18 6.5L8.5 17.5H15L12 25.5L23.5 14.5H17L18 6.5Z" />
          </svg>
          <span className="font-extrabold text-2xl tracking-tight text-[#475569]">Logoipsum</span>
        </div>

        {/* 4. Four-Dot Clover Logo */}
        <div className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f172a] transition-colors">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="currentColor">
            <circle cx="10" cy="10" r="5" />
            <circle cx="22" cy="10" r="5" />
            <circle cx="10" cy="22" r="5" />
            <circle cx="22" cy="22" r="5" />
          </svg>
          <span className="font-extrabold text-2xl tracking-tight text-[#475569]">Logoipsum</span>
        </div>

        {/* 5. Spiral Ripple Circle Logo */}
        <div className="flex items-center gap-2.5 text-[#475569] hover:text-[#0f172a] transition-colors">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="16" cy="16" r="14" />
            <circle cx="16" cy="16" r="10" />
            <circle cx="16" cy="16" r="6" />
            <circle cx="16" cy="16" r="2.5" fill="currentColor" />
          </svg>
          <span className="font-extrabold text-2xl tracking-tight text-[#475569]">Logoipsum</span>
        </div>
      </div>
    </section>
  );
}
