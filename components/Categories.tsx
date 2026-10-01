import React from "react";

const DesignIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    <path d="m15 5 4 4" />
    <path d="m11.5 8.5 4 4" />
  </svg>
);

const DevIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="3" />
    <polyline points="9 10 7 12 9 14" />
    <polyline points="15 10 17 12 15 14" />
  </svg>
);

const ITIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const BusinessIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M9 18h6" />
  </svg>
);

const MarketingIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 18-5v12L3 13v-2z" />
    <path d="M11.6 16.8 a3 3 0 1 1-5.8-1.6" />
    <path d="M21 9a3 3 0 0 1 0 6" />
  </svg>
);

const PhotoIcon = () => (
  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const categories = [
  { name: "Design", icon: DesignIcon },
  { name: "Development", icon: DevIcon },
  { name: "IT & Software", icon: ITIcon },
  { name: "Business", icon: BusinessIcon },
  { name: "Marketing", icon: MarketingIcon },
  { name: "Photography", icon: PhotoIcon },
];

export default function Categories() {
  return (
    <section id="categories" className="container-x py-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className="mx-auto mt-5 max-w-4xl text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
      </p>
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href="#"
            className="flex flex-col items-center justify-center h-[210px] p-6 rounded-3xl bg-white border border-gray-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#d2fc00] group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#d2fc00] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <cat.icon />
            </div>
            <span className="mt-5 font-bold text-lg text-gray-900 tracking-tight group-hover:text-black">
              {cat.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
