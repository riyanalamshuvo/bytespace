import Link from "next/link";

export const ByteSpaceLogo = ({
  textColor = "text-white",
  iconColor = "#d2fc00",
  cutoutColor = "#0039e6",
}: {
  textColor?: string;
  iconColor?: string;
  cutoutColor?: string;
}) => (
  <div className="flex items-center gap-2.5 group cursor-pointer">
    <svg
      width="34"
      height="34"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform group-hover:scale-105"
    >
      <path
        d="M9 2C5.686 2 3 4.686 3 8V28C3 31.314 5.686 34 9 34H19C25.627 34 31 28.627 31 22C31 16.2 26.9 11.38 21.4 10.3C21.8 9.57 22 8.8 22 8C22 4.686 19.314 2 16 2H9Z"
        fill={iconColor}
      />
      <path d="M13.5 16.5L22.5 22L13.5 27.5V16.5Z" fill={cutoutColor} />
    </svg>
    <span className={`font-display text-2xl font-black tracking-tight ${textColor}`}>
      ByteSpace
    </span>
  </div>
);

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-8 md:px-12">
      {/* Brand Logo */}
      <Link href="/">
        <ByteSpaceLogo textColor="text-white" iconColor="#d2fc00" cutoutColor="#0039e6" />
      </Link>

      {/* Main Nav Links */}
      <nav className="hidden items-center gap-10 md:flex" aria-label="Main Navigation">
        <Link href="/" className="text-base font-semibold text-white transition-colors">
          Home
        </Link>
        <Link href="/courses" className="text-base font-medium text-white/80 hover:text-white transition-colors">
          Courses
        </Link>
        <Link href="/creators/purepearl-studio" className="text-base font-medium text-white/80 hover:text-white transition-colors">
          Creators
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-8 text-base font-medium text-white">
        <Link href="/login" className="text-white/90 hover:text-white transition-colors">
          Sign In
        </Link>
        <Link href="/signup" className="text-white/90 hover:text-white transition-colors">
          Join Us
        </Link>
        <button
          aria-label="Shopping Cart"
          className="flex items-center justify-center text-white hover:text-white/80 transition-transform active:scale-95"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </button>
      </div>
    </header>
  );
}


