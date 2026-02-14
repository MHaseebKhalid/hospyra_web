import type { Metadata } from "next";
import InvestorsBanner from '@/components/banners/InvestorsBanner'
import InvestorInquiryForm from "@/components/forms/InvestorInquiryForm";

export const metadata: Metadata = {
  title: "Investors - Hospyra",
  description: "Invest in restaurants with structure, not guesswork. Hospyra gives investors access to carefully structured hospitality projects backed by market research and proven execution teams.",
  keywords: "restaurant investment, hospitality investment, restaurant funding, investment opportunities, restaurant investors",
};

const InvestorsPage = () => {
  return (
    <>
      <InvestorsBanner />
    
      <InvestorInquiryForm/>
    </>
  )
}

export default InvestorsPage

