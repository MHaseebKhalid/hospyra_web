import type { Metadata } from "next";
import AboutBanner from '@/components/banners/AboutBanner'

export const metadata: Metadata = {
  title: "About - Hospyra",
  description: "Learn more about Hospyra and our mission to transform the restaurant industry. We unify growth, media, and execution under one roof to help restaurants succeed.",
  keywords: "about Hospyra, restaurant partner, hospitality company, restaurant consulting",
};

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about HOSPYRA and our mission to transform the restaurant industry.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage

