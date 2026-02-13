import type { Metadata } from "next";
import ConstructionBanner from '@/components/banners/ConstructionBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Construction Services - Hospyra",
  description: "Complete construction and renovation services for restaurants. Handle everything from new builds to renovations, ensuring your restaurant space is built to the highest standards.",
  keywords: "restaurant construction, restaurant renovation, restaurant build, construction services, restaurant remodeling",
};

const ConstructionPage = () => {
  return (
    <>
      <ConstructionBanner />
      <UnstoppableCard
      headingMaxWidth="1000px"
        heading="READY TO BUILD YOUR VISION?"
        description="Let's Discuss How We Can Bring Your Hospitality Project To Life"
        backgroundColor="#F05830"
        buttons={[
          {
            title: "Plan My Build",
            bgColor: "#387660",
            color: "white",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
          {
            title: "Talk to a Construction Expert",
            bgColor: "white",
            color: "#27272A",
            href: "/contact",
            icon: <Phone className="w-5 h-5" />,
          },
        ]}
      />
    </>
  )
}

export default ConstructionPage

