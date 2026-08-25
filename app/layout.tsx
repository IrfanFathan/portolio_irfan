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
  title: "Irfan Fathan M | Embedded Systems & IoT Engineer",
  description: "Portfolio of Irfan Fathan M - Electronics and Communication Engineering Student specializing in Embedded Systems, IoT, and Robotics",
  verification: {
    google: "google28bcbe870bc1c06c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-[var(--color-primary-bg)] text-[var(--color-text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
