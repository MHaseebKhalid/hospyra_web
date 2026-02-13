import type { Metadata } from "next";
import PartnerBanner from '@/components/banners/PartnerBanner'

export const metadata: Metadata = {
  title: "Partner - Hospyra",
  description: "Partner with Hospyra to unlock new opportunities in the restaurant industry. Join our network of hospitality professionals and grow together.",
  keywords: "restaurant partnership, hospitality partner, restaurant network, business partnership",
};

const PartnerPage = () => {
  return (
    <>
      <PartnerBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Partner</h1>
          <p className="text-lg text-muted-foreground">
            Partner with HOSPYRA to unlock new opportunities in the restaurant industry.
          </p>
        </div>
      </div>
    </>
  )
}

export default PartnerPage

