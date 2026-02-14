import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Hospyra",
  description: "Comprehensive solutions for your restaurant business needs. From culinary consulting to construction, design, expansion, vendors & supplies, and entertainment services.",
  keywords: "restaurant services, culinary services, restaurant design, restaurant construction, restaurant expansion, hospitality services",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

