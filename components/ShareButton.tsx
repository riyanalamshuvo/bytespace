"use client";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: document.title, url });
      else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    } catch { /* user cancelled */ }
  }
  return (
    <button onClick={share} className="btn gap-3 self-start px-8 py-3 text-xl">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4" /></svg>
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
