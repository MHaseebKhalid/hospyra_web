import type { Metadata } from "next";
import GrowthBanner from '@/components/banners/GrowthBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import TitleCard from '@/components/cards/TitleCard'
import { ArrowRight, Phone, ChefHat, MapPin, Building2 } from 'lucide-react'
import WhyGrowthComesFirst from "@/components/sections/WhyGrowthComesFirst";
import GrowthFocus from "@/components/sections/GrowthFocus";

export const metadata: Metadata = {
  title: "Growth - Hospyra",
  description: "Discover how Hospyra can help your restaurant business grow and expand. We provide strategic growth planning, market positioning, and revenue-focused strategies for restaurants.",
  keywords: "restaurant growth, restaurant expansion, growth strategy, restaurant marketing, hospitality growth",
};

const GrowthPage = () => {
  const idealFor = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'EXISTING RESTAURANTS',
      iconColor: '#F05830',
      iconBg: '#FEECE7',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'UNDERPERFORMING LOCATIONS',
      iconColor: '#00BD72',
      iconBg: '#E0F2F1',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'RESTAURANTS PREPARING FOR EXPANSION',
      iconColor: '#F05830',
      iconBg: '#FEECE7',
    },
  ]

  return (
    <div className="bg-[#fffdfb]">
      <GrowthBanner />
      <WhyGrowthComesFirst />
      <GrowthFocus/>

      <div className='pt-14'>
        <TitleCard title={'IDEAL FOR'} />
        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-3 gap-6 px-[4%] py-10">
          {idealFor.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow shrink-0 max-md:w-66"
            >
              <div
                style={{ background: item.iconBg }}
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              >
                <div style={{ color: item.iconColor }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold font-antonio text-[#27272A] uppercase">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

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
    </div>
  )
}

export default GrowthPage

