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
      <div className="py-30 text-center text-8xl">
        Coming Soon
      </div>
    </>
  )
}

export default VendorsSuppliesPage

