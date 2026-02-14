import React from 'react'
import Image from 'next/image'
import TitleCard from '../cards/TitleCard'
import HospitalityWithDisciplineImg from '@/public/assets/pngs/hospitality-with-discipline.png'

const HospitalityWithDiscipline = () => {
  const benefits = [
    'Market-Driven Concepts (Not Trends)',
    'Experienced Operators And Partners',
    'Controlled Execution And Timelines',
    'Media-Driven Visibility From Day One',
    'Long-Term Brand Value, Not Short-Term Hype',
  ]

  return (
    <div className="bg-[#F9F8F6] py-12 md:py-16 lg:py-20">
      <div className="px-[4%]">
        <div className="text-center mb-12 md:mb-16">
          <TitleCard
            title="HOSPITALITY WITH DISCIPLINE"
            className="mb-6"
          />
          <p className='text-base font-regular text-[#27272A]'>Restaurants fail when execution is fragmented. <br />Hospyra removes that risk by controlling strategy, media, team, build, and growth.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 max-md:order-1">
            <h3 className="text-3xl lg:text-4xl leading-normal font-bold font-antonio text-[#27272A]">
              As An Investor, You Benefit From:
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="text-base font-semibold lg:text-lg text-[#27272A]">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src={HospitalityWithDisciplineImg}
              alt="Business professionals collaborating in a modern office"
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalityWithDiscipline
