'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import TitleCard from '@/components/cards/TitleCard'
import GlobalButton from '@/components/buttons/GlobalButton'
import { Shield, FileText, CalendarCheck, BarChart3, Target, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import InvestorCTABg from '@/public/assets/pngs/intresting-in-investing-bg.png'

const InvestorEngagementModel = () => {
  const router = useRouter()

  const engagementFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Opportunities Shared Selectively',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Clear Use Of Funds',
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: 'Defined Execution Plan',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Regular Performance Updates',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Long-Term Mindset',
    },
  ]

  return (
    <>
      <div className="bg-white py-12 md:py-16 lg:py-20">
        <div className="px-[4%]">
          <TitleCard
            title="INVESTOR ENGAGEMENT MODEL"
            className="mb-4"
          />
          <p className="text-center text-lg md:text-xl text-[#27272A] mb-12">
            Simple, Transparent, Aligned
          </p>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 px-[4%]">
          {engagementFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow border border-gray-200 shrink-0 w-70">
              <div className="text-[#27272A] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl pr-4 font-bold text-[#27272A] leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-base md:text-lg text-[#27272A]">
          Hospyra&apos;s Success Is Tied To The Success Of The Project.
        </p>
      </div>

      <div className="relative px-[4%] mb-10">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={InvestorCTABg}
              alt="Business professionals in a meeting"
              fill
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-black/60" /> */}
          </div>

          <div className="relative z-10 text-center px-6 md:px-8 py-12">
            <TitleCard title='Interested in Investing in Real Hospitality Projects?' color='white' className='max-w-4xl mx-auto' />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <GlobalButton
                title="Request Investor Brief"
                bgColor="#F05830"
                color="white"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => router.push('/contact')}
                className="px-8 py-4 max-sm:w-full"
              />
              <GlobalButton
                title="Schedule an Investor Call"
                bgColor="white"
                color="#27272A"
                borderColor="#27272A"
                borderWidth="1px"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => router.push('/contact')}
                className="px-8 py-4 max-sm:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestorEngagementModel
