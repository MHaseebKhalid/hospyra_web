import type { Metadata } from "next";
import DesignBanner from '@/components/banners/DesignBanner'

export const metadata: Metadata = {
  title: "Design Services - Hospyra",
  description: "Interior and exterior design solutions for your restaurant. Create stunning, functional spaces that reflect your brand identity and enhance the dining experience for your guests.",
  keywords: "restaurant design, interior design, restaurant branding, space design, restaurant architecture",
};

const DesignPage = () => {
  return (
    <>
      <DesignBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Design</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Interior and exterior design solutions for your restaurant.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our design services create stunning, functional spaces that reflect your brand identity 
              and enhance the dining experience for your guests.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignPage

