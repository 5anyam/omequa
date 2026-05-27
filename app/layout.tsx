import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omequa Life Sciences — Premium Omega-3 Fish Oil",
  description:
    "4X Strength Omega-3 Fish Oil with EPA 892mg & DHA 594mg. Enhanced with Vitamin D3, E & Astaxanthin. Lab tested, sustainably sourced.",
  keywords: "omega-3, fish oil, supplement, EPA, DHA, Omequa, health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
