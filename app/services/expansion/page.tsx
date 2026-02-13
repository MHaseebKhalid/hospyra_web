import type { Metadata } from "next";
import ExpansionBanner from '@/components/banners/ExpansionBanner'

export const metadata: Metadata = {
  title: "Expansion Services - Hospyra",
  description: "Strategic planning for restaurant expansion and growth. Comprehensive strategic planning to help your restaurant grow successfully, whether you're opening new locations or scaling your operations.",
  keywords: "restaurant expansion, restaurant growth, scaling restaurants, opening new locations, restaurant strategy",
};

const ExpansionPage = () => {
  return (
    <>
      <ExpansionBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Expansion</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Strategic planning for restaurant expansion and growth.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="text-foreground">
              Our expansion services provide comprehensive strategic planning to help your restaurant 
              grow successfully, whether you're opening new locations or scaling your operations.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpansionPage

