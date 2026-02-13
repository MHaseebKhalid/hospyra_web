import type { Metadata } from "next";
import ConstructionBanner from '@/components/banners/ConstructionBanner'

export const metadata: Metadata = {
  title: "Construction Services - Hospyra",
  description: "Complete construction and renovation services for restaurants. Handle everything from new builds to renovations, ensuring your restaurant space is built to the highest standards.",
  keywords: "restaurant construction, restaurant renovation, restaurant build, construction services, restaurant remodeling",
};

const ConstructionPage = () => {
  return (
    <>
      <ConstructionBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Construction</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Complete construction and renovation services for restaurants.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our construction services handle everything from new builds to renovations, ensuring 
              your restaurant space is built to the highest standards with attention to detail.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConstructionPage

