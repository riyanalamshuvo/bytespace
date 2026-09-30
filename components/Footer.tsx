"use client";

import React from "react";

const cols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="container-x mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 justify-between">
          {/* Brand & Newsletter Column */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <svg
                width="34"
                height="34"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M9 2C5.686 2 3 4.686 3 8V28C3 31.314 5.686 34 9 34H19C25.627 34 31 28.627 31 22C31 16.2 26.9 11.38 21.4 10.3C21.8 9.57 22 8.8 22 8C22 4.686 19.314 2 16 2H9Z"
                  fill="#d2fc00"
                />
                <path d="M13.5 16.5L22.5 22L13.5 27.5V16.5Z" fill="#ffffff" />
              </svg>
              <span className="font-display text-2xl font-black text-gray-900 tracking-tight">ByteSpace</span>
            </div>

            {/* Subtitle */}
            <p className="mt-5 text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Form */}
            <form className="mt-6 flex flex-wrap items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-64 sm:w-72 rounded-full border border-gray-300/80 px-5 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d2fc00] px-7 py-3 text-sm font-bold text-black transition-all hover:bg-[#bce400] shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-4 text-xs text-gray-400 leading-normal max-w-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* 3 Nav Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {cols.map((col, idx) => (
              <ul key={idx} className="space-y-4">
                {col.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-800 transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
