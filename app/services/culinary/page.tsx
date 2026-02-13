import type { Metadata } from "next";
import CulinaryBanner from '@/components/banners/CulinaryBanner'

export const metadata: Metadata = {
  title: "Culinary Services - Hospyra",
  description: "Expert culinary consulting and menu development services. Create exceptional dining experiences through expert menu development, recipe creation, and culinary consulting tailored to your restaurant's unique vision.",
  keywords: "culinary consulting, menu development, restaurant menu, recipe creation, culinary services, food consulting",
};

const CulinaryPage = () => {
  return (
    <>
      <CulinaryBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Culinary</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Expert culinary consulting and menu development services.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our culinary services help you create exceptional dining experiences through expert menu development, 
              recipe creation, and culinary consulting tailored to your restaurant's unique vision.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CulinaryPage

