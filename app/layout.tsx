import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: "C2 Unlimited | Sales, Leadership & Service Training",
  description: "Custom sales, leadership, and service training for home improvement retailers and their teams. Trusted by Home Depot, Lowe's, and more.",
  openGraph: {
    title: "C2 Unlimited | Sales, Leadership & Service Training",
    description: "Custom sales, leadership, and service training for home improvement retailers and their teams.",
    url: "https://c2unlimited.com",
    siteName: "C2 Unlimited",
    images: [
      {
        url: "/images/og-image.png",
        width: 500,
        height: 500,
        alt: "C2 Unlimited - Coaching & Training",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "C2 Unlimited | Sales, Leadership & Service Training",
    description: "Custom sales, leadership, and service training for home improvement retailers and their teams.",
    images: ["/images/og-image.png"],
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
