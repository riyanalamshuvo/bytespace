const avatarUrls = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80",
];

export const Placeholder = ({ className = "", label }: { className?: string; label?: string }) => (
  <div aria-hidden className={`bg-gradient-to-br from-slate-300 to-slate-100 ${className}`}>{label}</div>
);

export const Avatars = ({ n = 4, dark }: { n?: number; dark?: boolean }) => (
  <div className="flex items-center -space-x-2">
    {Array.from({ length: n }).map((_, i) => (
      <img
        key={i}
        src={avatarUrls[i % avatarUrls.length]}
        alt="Student avatar"
        className="h-8 w-8 rounded-full border-2 border-white object-cover"
      />
    ))}
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-full ${
        dark ? "bg-black text-white" : "bg-[#d2fc00] text-black"
      } text-xs font-bold ring-2 ring-white ml-0.5`}
    >
      26+
    </span>
  </div>
);

export const FloatCard = ({ title, children, blue, className = "" }: { title: string; children: React.ReactNode; blue?: boolean; className?: string }) => (
  <div className={`rounded-2xl p-4 shadow-lg ${blue ? "bg-brand text-white" : "bg-white text-ink"} ${className}`}>
    <p className="text-sm">{title}</p>{children}
  </div>
);

