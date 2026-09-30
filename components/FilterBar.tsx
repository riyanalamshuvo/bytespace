"use client";

const Icon = ({ d, children }: { d?: string; children?: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{d ? <path d={d} /> : children}</svg>
);
const pill = "inline-flex h-[60px] items-center gap-2 rounded-full border border-line bg-white px-6 text-lg transition hover:border-brand";

export default function FilterBar({ sort, onSort }: { sort: string; onSort: (v: string) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-3">
        <button className={pill}><Icon d="M3 4h18l-7 8v6l-4 2v-8z" />Filter</button>
        <button className={pill}><Icon><path d="M6 20v-6M12 20V6M18 20v-10" /></Icon>Level</button>
        <button className={pill}><Icon><rect x="3" y="13" width="7" height="7" rx="1" /><circle cx="17" cy="16.5" r="3.5" /><path d="M6.5 3l4 7h-8z" /></Icon>Category</button>
      </div>
      <label className={pill}>
        <Icon d="M4 6h16M4 12h10M4 18h6" />
        <select value={sort} onChange={e => onSort(e.target.value)} aria-label="Sort courses" className="appearance-none bg-transparent outline-none">
          <option value="relevant">Most relevant</option><option value="az">Title A–Z</option>
        </select>
      </label>
    </div>
  );
}
