import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Allura } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Dr. Maya Reynolds",
  description: "Clinical Psychologist - In-Person Therapy in Santa Monica & Telehealth Across California",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${allura.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
