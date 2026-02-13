import type { Metadata } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hospyra - Restaurant Growth, Media & Execution Partner",
  description: "Hospyra is the all-in-one growth, media, and execution partner for restaurants. We help restaurants increase visibility and revenue first, then support everything needed to improve, expand, and scale with confidence.",
  keywords: "restaurant growth, restaurant marketing, restaurant media, restaurant execution, hospitality partner, restaurant expansion",
  icons: {
    icon: [
      { url: '/Hospyra.png', type: 'image/png' },
    ],
    shortcut: '/Hospyra.png',
    apple: '/Hospyra.png',
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
        className={`${inter.variable} ${antonio.variable} font-inter antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
