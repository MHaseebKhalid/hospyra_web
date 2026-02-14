'use client'

import React from 'react'
import { TrendingUp, Target, Users, Shield } from 'lucide-react'
import TitleCard from '@/components/cards/TitleCard'

const WhyWeDifferent = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'GROWTH FOCUSED',
      description: 'Every Decision Is Made With Your Long-Term Success In Mind',
      bgColor: '#F0F0F0',
      iconColor: '#F05830',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'RESULTS DRIVEN',
      description: 'We Prioritize Execution And Measurable Outcomes Over Theory',
      bgColor: '#E5F8F1',
      iconColor: '#00BD72',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'PARTNERSHIP MODEL',
      description: "We're In It For The Long Haul, Not Just A Quick Transaction",
      bgColor: '#F0F0F0',
      iconColor: '#F05830',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'INDUSTRY EXPERIENCE',
      description: 'Built By People Who Understand Hospitality From The Inside',
      bgColor: '#E5F8F1',
      iconColor: '#00BD72',
    },
  ]

  return (
    <div className="bg-[#F9F8F6] py-12 lg:py-16">
      <TitleCard
        title="WHY WE'RE DIFFERENT"
        className="mb-4 px-[4%]"
      />
      <p className="text-base text-[#27272A] text-center px-4">
        Real Operators Solving Real Problems In Hospitality.
      </p>

      <div className="flex max-lg:overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 gap-6 px-[4%] py-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] p-6 shadow-md shrink-0 max-lg:w-70"
          >
            <div style={{ background: feature.bgColor }} className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <div style={{ color: feature.iconColor }}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-2xl font-antonio font-bold text-[#27272A] uppercase mb-3">
              {feature.title}
            </h3>
            <p className="text-base text-[#27272A]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyWeDifferent
