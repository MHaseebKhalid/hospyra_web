import type { Metadata } from "next";
import ConstructionBanner from '@/components/banners/ConstructionBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import TitleCard from '@/components/cards/TitleCard'
import FeatureCard from '@/components/cards/FeatureCard'
import { ArrowRight, Phone } from 'lucide-react'
import ConstructionService_img_1 from "@/public/assets/pngs/construction-service-1.png";
import ConstructionService_img_2 from "@/public/assets/pngs/construction-service-2.png";
import ConstructionService_img_3 from "@/public/assets/pngs/construction-service-3.png";
import ConstructionService_img_4 from "@/public/assets/pngs/construction-service-4.png";
import ConstructionService_img_5 from "@/public/assets/pngs/construction-service-5.png";

export const metadata: Metadata = {
  title: "Construction Services - Hospyra",
  description: "Complete construction and renovation services for restaurants. Handle everything from new builds to renovations, ensuring your restaurant space is built to the highest standards.",
  keywords: "restaurant construction, restaurant renovation, restaurant build, construction services, restaurant remodeling",
};

const ConstructionPage = () => {
  const constructionServices = [
    {
      image: ConstructionService_img_1,
      title: 'New Restaurant Build-Outs',
    },
    {
      image: ConstructionService_img_2,
      title: 'Renovations & Remodels',
    },
    {
      image: ConstructionService_img_3,
      title: 'Kitchen Layout Optimization',
    },
    {
      image: ConstructionService_img_4,
      title: 'FFE Sourcing & Installation',
    },
    {
      image: ConstructionService_img_5,
      title: 'Budget & Timeline Management',
    },
  ]

  return (
    <>
      <ConstructionBanner />
      <div className="bg-white py-14 px-[4%]">
        <TitleCard title="CONSTRUCTION SERVICES" className="mb-4" />
        <p className="text-center text-lg text-[#27272A] mb-12">
          Direct Professionals Only
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionServices.map((service, index) => (
            <FeatureCard
              key={index}
              image={service.image}
              title={service.title}
              className="w-full h-96"
              priority={index < 3}
            />
          ))}
        </div>
      </div>
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

