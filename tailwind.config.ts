import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: "#0039E6", lime: "#CCFF00", ink: "#0B0B1A", body: "#6B6B7B", surface: "#F3F3F5", line: "#E4E4E7" },
    fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)"] },
    borderRadius: { card: "32px" },
  } },
} satisfies Config;
