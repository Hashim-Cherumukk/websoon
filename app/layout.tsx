import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroller from "./components/layout/SmoothScroller";

// For large, bold, agency-style headings
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

// For clean, readable body text
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "WebSoon | Digital Agency",
  description:
    "We design and build modern digital experiences that help your business make a lasting first impression.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased text-brand-dark bg-white selection:bg-brand-blue selection:text-white">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}