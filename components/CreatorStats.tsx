"use client";
import { useState } from "react";

export default function CreatorStats({ products, followers }: { products: number; followers: number }) {
  const [following, setFollowing] = useState(false);
  const stat = "rounded-full bg-white px-7 py-4 text-xl text-ink";
  return (
    <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
      <div className="flex flex-wrap gap-5">
        <p className={stat}><span className="mr-2 text-brand">{products}</span>Products</p>
        <p className={stat}><span className="mr-2 text-brand">{followers + (following ? 1 : 0)}</span>Followers</p>
      </div>
      <button onClick={() => setFollowing(f => !f)} aria-pressed={following} className="btn px-9 py-4 text-xl">{following ? "Following" : "Follow"}</button>
    </div>
  );
}
