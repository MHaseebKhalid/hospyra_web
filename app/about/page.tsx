import type { Metadata } from "next";
import AboutBanner from '@/components/banners/AboutBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import { ArrowRight, Phone } from 'lucide-react'
import OurPhilosophy from "@/components/sections/OurPhilosophy";
import WhyWeDifferent from "@/components/sections/WhyWeDifferent";

export const metadata: Metadata = {
  title: "About - Hospyra",
  description: "Learn more about Hospyra and our mission to transform the restaurant industry. We unify growth, media, and execution under one roof to help restaurants succeed.",
  keywords: "about Hospyra, restaurant partner, hospitality company, restaurant consulting",
};

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <OurPhilosophy/>
      <WhyWeDifferent/>
      <UnstoppableCard
      headingMaxWidth="1000px"
        heading="READY TO WORK WITH A REAL PARTNER?"
        description="Let's Talk About How Hospyra Can Help Your Restaurant Grow"
        backgroundColor="#EF5B3B"
        buttons={[
          {
            title: "Talk to Hospyra",
            bgColor: "#3A806E",
            color: "white",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
          {
            title: "Book a Strategy Call",
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

export default AboutPage

