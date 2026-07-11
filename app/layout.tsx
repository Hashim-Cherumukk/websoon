import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter via next/font — self-hosted, no external <link> needed
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// SEO metadata, picked up by Next.js for <head>
export const metadata: Metadata = {
  title: "WebSoon | Web & App Solutions",
  description:
    "WebSoon designs and builds fast, modern websites and web apps that help businesses grow — from strategy and UI design to full-stack engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}