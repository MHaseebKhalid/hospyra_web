import React from 'react'
import Image from 'next/image'
import TitleCard from '@/components/cards/TitleCard'
import { DollarSign, MapPin, TrendingUp, Sparkles } from 'lucide-react'
import expansion_diff_1 from '@/public/assets/pngs/expansion-diff-1.png'
import expansion_diff_2 from '@/public/assets/pngs/expansion-diff-2.png'

const services = [
  {
    Icon: Sparkles,
    title: 'CONCEPT DEVELOPMENT',
    description: [
      'Free Market-Driven Expansion Concepts',
      'Cuisine & Format Recommendations',
    ],
    iconColor: 'text-[#F05830]',
    iconBg: 'bg-[#FFF5F2]',
  },
  {
    Icon: DollarSign,
    title: 'CAPITAL & FUNDING',
    description: [
      'Investor & Hospitality Lender Matching',
      'Bank Financing Introductions',
    ],
    iconColor: 'text-[#00BD72]',
    iconBg: 'bg-[#E5F8F1]',
  },
  {
    Icon: MapPin,
    title: 'LOCATION STRATEGY',
    description: ['Location Strategy & Site Selection'],
    iconColor: 'text-[#F05830]',
    iconBg: 'bg-[#FFF5F2]',
  },
  {
    Icon: TrendingUp,
    title: 'FULL EXECUTION',
    description: ['Full Execution Support From A-Z'],
    iconColor: 'text-[#00BD72]',
    iconBg: 'bg-[#E5F8F1]',
  },
]

const WhatMakeHospyraExpansionDifferent = () => {
  return (
    <>
      <section className="bg-[#F9F8F6] py-12 md:py-16 lg:py-20">
        <TitleCard title='What Makes Hospyra Expansion Different' className='md:hidden mb-8' />
        <div className="px-[4%] lg:px-[8%] overflow-x-auto hide-scrollbar pb-6 flex md:grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-antonio font-bold my-auto leading-tight max-md:hidden">
            <span className="text-[#27272A]">WHAT MAKES </span>
            <span className="text-[#F05830]">HOSPYRA </span>
            <span className="text-[#27272A]">EXPANSION </span>
            <span className="text-[#00BD72]">DIFFERENT</span>
          </h2>

          {[
            {
              img: expansion_diff_1,
              text: "We Don’t Just Suggest Ideas.",
              alt: "Team reviewing tablet",
            },
            {
              img: expansion_diff_2,
              text: "We Help You Launch Them Successfully.",
              alt: "Business presentation screen",
            },
          ].map((card, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl max-md:w-90 shrink-0 overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative w-full h-64">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>

              <p className="p-6 text-xl lg:text-2xl font-bold font-antonio text-center text-[#27272A]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className='lg:px-[4%]'>
        <section className="bg-[#27272A] lg:rounded-[24px] py-12 md:py-16">
          <TitleCard
            title="EMERGENCY HOSPITALITY SUPPORT"
            color="white"
            className="px-[4%]"
          />

          <div className="flex overflow-x-auto hide-scrollbar lg:grid py-12 grid-cols-4 gap-6 px-[4%]">
            {services.map(({ Icon, title, description, iconBg, iconColor }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow shrink-0 max-lg:w-70.5"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${iconBg}`}
                >
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>

                <h3 className="text-xl font-bold font-antonio text-[#27272A] mb-4 uppercase">
                  {title}
                </h3>

                <ul className="space-y-2">
                  {description.map((item) => (
                    <li key={item} className="text-base text-[#27272A]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default WhatMakeHospyraExpansionDifferent