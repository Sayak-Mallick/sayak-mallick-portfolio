import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sayak Mallick — Full Stack Developer",
    template: "%s | Sayak Mallick",
  },
  description:
    "Full-stack engineer with over 3 years of experience specializing in building scalable web applications, robust APIs, and seamless user experiences.",
  keywords: [
    "Sayak Mallick",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Frontend Developer",
    "Kolkata",
  ],
  authors: [
    {
      name: "Sayak Mallick",
      url: "https://sayak-mallick-portfolio.vercel.app",
    },
  ],
  creator: "Sayak Mallick",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sayak-mallick-portfolio.vercel.app",
    title: "Sayak Mallick — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript and Node.js.",
    siteName: "Sayak Mallick Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayak Mallick — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, TypeScript and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
