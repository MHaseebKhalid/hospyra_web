import type { Metadata } from "next";
import InvestorsBanner from '@/components/banners/InvestorsBanner'

export const metadata: Metadata = {
  title: "Investors - Hospyra",
  description: "Invest in restaurants with structure, not guesswork. Hospyra gives investors access to carefully structured hospitality projects backed by market research and proven execution teams.",
  keywords: "restaurant investment, hospitality investment, restaurant funding, investment opportunities, restaurant investors",
};

const InvestorsPage = () => {
  return (
    <>
      <InvestorsBanner />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Investors</h1>
          <p className="text-lg text-muted-foreground">
            Learn about investment opportunities with HOSPYRA.
          </p>
        </div>
      </div>
    </>
  )
}

export default InvestorsPage

