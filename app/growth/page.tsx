import type { Metadata } from "next";
import GrowthBanner from '@/components/banners/GrowthBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: "Growth - Hospyra",
  description: "Discover how Hospyra can help your restaurant business grow and expand. We provide strategic growth planning, market positioning, and revenue-focused strategies for restaurants.",
  keywords: "restaurant growth, restaurant expansion, growth strategy, restaurant marketing, hospitality growth",
};

const GrowthPage = () => {
  return (
    <>
      <GrowthBanner />
      <UnstoppableCard
        heading={"READY TO DRIVE REAL GROWTH?"}
        headingMaxWidth="1000px"
        description="Let's Build A Strategy That Turns Your Restaurant Into A Revenue-Generating Machine."
        backgroundColor="#EF5B3B"
        buttons={[
          {
            title: "Start With Growth",
            bgColor: "#387660",
            color: "white",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
          {
            title: "Book a Growth Strategy Call",
            bgColor: "white",
            color: "#27272A",
            borderColor: "white",
            borderWidth: "1px",
            href: "/contact",
            icon: <Phone className="w-5 h-5" />,
          },
        ]}
      />
    </>
  )
}

export default GrowthPage

