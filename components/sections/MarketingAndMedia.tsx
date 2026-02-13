'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import TitleCard from '../cards/TitleCard'
import GlobalButton from '../buttons/GlobalButton'
import { ArrowRight, Target, Eye, BarChart, Megaphone, TrendingUp, Camera, Sparkles, Users } from 'lucide-react'

const MarketingAndMedia = () => {
  const router = useRouter()

  const whatWeImprove = [
    { icon: Target, text: 'Weak Market Positioning' },
    { icon: Eye, text: 'Low Customer Discovery' },
    { icon: BarChart, text: "Menus That Don't Convert" },
    { icon: Megaphone, text: 'Limited Brand Visibility' },
  ]

  const whatYouGet = [
    { icon: TrendingUp, text: 'Revenue-Focused Growth Strategy' },
    { icon: Camera, text: 'Food & Lifestyle Content Creation' },
    { icon: Megaphone, text: 'Social & Digital Campaigns' },
    { icon: Sparkles, text: 'Influencer & Launch Activations' },
    { icon: Users, text: 'Product & Menu Optimization For Sales' },
  ]

  return (
    <div className="bg-[#F6F6F6] py-12 md:py-16 lg:py-20 px-[4%]">

      <div className="max-w-4xl mx-auto">
        <TitleCard
          orangeLabel="GROWTH, MEDIA & PRODUCT VISIBILITY"
          title="MARKETING AND MEDIA THAT DRIVE REAL DEMAND"
          className="mb-6 lg:px-20"
        />
        <p className="text-center text-xl lg:text-2xl text-[#27272A]">
          Growth Today Starts With Media. Hospyra Focuses On How Your Food, Brand, And Experience Are Presented Because Restaurants That Show Up Consistently Win Attention, Traffic, And Loyalty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <div className="bg-[#00BD72] rounded-[24px] md:rounded-2xl p-8 md:p-10 lg:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase font-antonio mb-6 md:mb-8">
            WHAT WE IMPROVE
          </h3>
          <ul className="space-y-4 md:space-y-5">
            {whatWeImprove.map((item, index) => {
              const IconComponent = item.icon
              return (
                <li key={index} className="flex items-start gap-4">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white shrink-0 mt-1" />
                  <span className="text-white text-lg lg:text-xl">
                    {item.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="bg-[#F05830] rounded-xl md:rounded-2xl p-6 lg:p-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase font-antonio mb-6 md:mb-8">
            WHAT YOU GET
          </h3>
          <ul className="space-y-4 md:space-y-5">
            {whatYouGet.map((item, index) => {
              const IconComponent = item.icon
              return (
                <li key={index} className="flex items-start gap-4">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white shrink-0 mt-1" />
                  <span className="text-white text-lg lg:text-xl">
                    {item.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
        <GlobalButton
          title="Learn More About Growth & Media"
          bgColor="#27272A"
          color="white"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => router.push('/growth')}
          className="w-full sm:w-82.5"
        />
        <GlobalButton
          title="Talk to a Growth Expert"
          bgColor="white"
          color="black"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => router.push('/contact')}
          className="w-full sm:w-57.5"
        />
      </div>
    </div>
  )
}

export default MarketingAndMedia
