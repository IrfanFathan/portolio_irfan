import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import GsapProvider from "@/components/GsapProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Irfan Fathan — Network Engineer | Linux | Cloud | Security Portfolio",
  description: "Personal Portfolio & Engineering Labs of Irfan Fathan — Aspiring Network Engineer specializing in Cisco IOS, OSPF, VLANs, Linux Administration, AWS Cloud VPCs, and Network Security.",
  keywords: [
    "Network Engineer",
    "Network Engineering Portfolio",
    "Cisco Networking",
    "CCNA",
    "Linux Administrator",
    "Cloud Networking",
    "AWS VPC",
    "Network Security",
    "Irfan Fathan"
  ],
  authors: [{ name: "Irfan Fathan" }],
  openGraph: {
    title: "Irfan Fathan — Network Engineer Portfolio",
    description: "Network Infrastructure, Cisco Routing & Switching, Linux Administration, AWS Cloud VPCs, and Technical Labs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan Fathan — Network Engineer Portfolio",
    description: "Cisco IOS, Linux Administration, AWS Cloud VPCs, and Network Security Labs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Irfan Fathan",
    "jobTitle": "Network Engineer",
    "alumniOf": "APJ Abdul Kalam Technological University",
    "knowsAbout": [
      "Computer Networking",
      "Cisco IOS",
      "Linux Administration",
      "AWS Cloud VPC",
      "Network Security",
      "OSPF",
      "VLANs"
    ],
    "email": "mailto:irfanfathan.m@gmail.com",
    "sameAs": [
      "https://github.com/irfanfathan",
      "https://linkedin.com/in/irfanfathan"
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300`}
      >
        <ThemeProvider>
          <GsapProvider>
            {children}
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
