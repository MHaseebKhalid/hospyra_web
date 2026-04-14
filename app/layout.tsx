import type { Metadata } from "next";
import { Antonio } from "next/font/google";
import "./globals.css";
import RootWrapper from "./RootWrapper";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hospyra - Restaurant Growth, Media & Execution Partner",
  description:
    "Hospyra is the all-in-one growth, media, and execution partner for restaurants...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/effra-trial"
          rel="stylesheet"
        />
      </head>
      <body className={`${antonio.variable} font-effra antialiased`}>
        <RootWrapper>{children}</RootWrapper>
      </body>
    </html>
  );
}