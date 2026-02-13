import type { Metadata } from "next";
import VendorsSuppliesBanner from '@/components/banners/VendorsSuppliesBanner'

export const metadata: Metadata = {
  title: "Vendors & Supplies - Hospyra",
  description: "Quality vendors and supply chain management solutions. Connect with trusted suppliers and manage your supply chain efficiently to ensure quality and consistency.",
  keywords: "restaurant vendors, supply chain, restaurant supplies, vendor management, restaurant procurement",
};

const VendorsSuppliesPage = () => {
  return (
    <>
      <VendorsSuppliesBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Vendors & Supplies</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Quality vendors and supply chain management solutions.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our vendors and supplies services connect you with trusted suppliers and help manage 
              your supply chain efficiently to ensure quality and consistency.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VendorsSuppliesPage

