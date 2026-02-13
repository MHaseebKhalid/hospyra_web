import type { Metadata } from "next";
import EntertainmentBanner from '@/components/banners/EntertainmentBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Entertainment Services - Hospyra",
  description: "Entertainment solutions to enhance your restaurant experience. Create memorable experiences for your guests through live music, events, and entertainment programming.",
  keywords: "restaurant entertainment, live music, restaurant events, entertainment programming, restaurant experience",
};

const EntertainmentPage = () => {
  return (
    <>
      <EntertainmentBanner />
      <UnstoppableCard
        heading="READY TO CREATE UNFORGETTABLE EXPERIENCES?"
        description="Let's Transform Your Restaurant Into A Destination People Talk About"
        backgroundColor="#F05830"
        buttons={[
          {
            title: "Upgrade My Experience",
            bgColor: "#387660",
            color: "white",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
          {
            title: "Plan My Opening Event",
            bgColor: "white",
            color: "#27272A",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
        ]}
      />
    </>
  )
}

export default EntertainmentPage

