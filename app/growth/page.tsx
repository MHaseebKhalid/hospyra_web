import type { Metadata } from "next";
import GrowthBanner from '@/components/banners/GrowthBanner'

export const metadata: Metadata = {
  title: "Growth - Hospyra",
  description: "Discover how Hospyra can help your restaurant business grow and expand. We provide strategic growth planning, market positioning, and revenue-focused strategies for restaurants.",
  keywords: "restaurant growth, restaurant expansion, growth strategy, restaurant marketing, hospitality growth",
};

const GrowthPage = () => {
  return (
    <>
      <GrowthBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Growth</h1>
          <p className="text-lg text-muted-foreground">
            Discover how HOSPYRA can help your restaurant business grow and expand.
          </p>
        </div>
      </div>
    </>
  )
}

export default GrowthPage

