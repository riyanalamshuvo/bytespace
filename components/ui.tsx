export const Placeholder = ({ className = "", label }: { className?: string; label?: string }) => (
  <div aria-hidden className={`bg-gradient-to-br from-slate-300 to-slate-100 ${className}`}>{label}</div>
);
export const Avatars = ({ n = 5, dark }: { n?: number; dark?: boolean }) => (
  <div className="flex items-center">
    {Array.from({ length: n }).map((_, i) => <span key={i} className="-ml-2 h-8 w-8 rounded-full border-2 border-white bg-slate-400 first:ml-0" />)}
    <span className={`-ml-2 grid h-8 w-8 place-items-center rounded-full ${dark ? "bg-ink text-white" : "bg-lime"} text-xs font-medium`}>26+</span>
  </div>
);
export const FloatCard = ({ title, children, blue, className = "" }: { title: string; children: React.ReactNode; blue?: boolean; className?: string }) => (
  <div className={`rounded-2xl p-4 shadow-lg ${blue ? "bg-brand text-white" : "bg-white text-ink"} ${className}`}>
    <p className="text-sm">{title}</p>{children}
  </div>
);
