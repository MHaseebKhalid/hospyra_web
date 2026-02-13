import type { Metadata } from "next";
import PartnerBanner from '@/components/banners/PartnerBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'

export const metadata: Metadata = {
  title: "Partner - Hospyra",
  description: "Partner with Hospyra to unlock new opportunities in the restaurant industry. Join our network of hospitality professionals and grow together.",
  keywords: "restaurant partnership, hospitality partner, restaurant network, business partnership",
};

const PartnerPage = () => {
  return (
    <>
      <PartnerBanner />
      <UnstoppableCard
        heading="READY TO WORK ON SERIOUS HOSPITALITY PROJECTS?"
        description="Join Hospyra's Network Of Trusted Direct Hospitality Professionals"
        backgroundColor="#27272A"
        textColor="white"
        buttons={[
          {
            title: "Apply as a Hospyra Professional",
            bgColor: "white",
            color: "#27272A",
            borderColor: "#27272A",
            borderWidth: "1px",
            href: "/contact",
          },
          {
            title: "Talk to Hospyra",
            bgColor: "#27272A",
            color: "white",
            borderColor: "white",
            borderWidth: "1px",
            href: "/contact",
          },
        ]}
      />
    </>
  )
}

export default PartnerPage

