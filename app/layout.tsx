import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
const display = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Urbanist({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = { title: "ByteSpace – Online Courses", description: "Learn from hundreds of courses or publish your own." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
