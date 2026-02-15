import React from 'react'
import Image from 'next/image'
import TitleCard from '@/components/cards/TitleCard'
import why_growth_1 from '@/public/assets/pngs/why-growth-comes-first-1.png'
import why_growth_2 from '@/public/assets/pngs/why-growth-comes-first-2.png'
import why_growth_3 from '@/public/assets/pngs/why-growth-comes-first-3.png'
import why_growth_4 from '@/public/assets/pngs/why-growth-comes-first-4.png'

const WhyGrowthComesFirst = () => {
  const problems = [
    {
      image: why_growth_1,
      title: 'Empty Seats',
      alt: 'Empty restaurant tables',
    },
    {
      image: why_growth_2,
      title: 'Low Repeat Customers',
      alt: 'Elegant empty dining hall',
    },
    {
      image: why_growth_3,
      title: 'Discount Dependency',
      alt: 'People using tablets and phones in cafe',
    },
    {
      image: why_growth_4,
      title: 'Inconsistent Demand',
      alt: 'Waiter at counter',
    },
  ]

  return (
    <div className='bg-[#fffdfb] py-14'>
      <div className="px-[4%]">
        <TitleCard
          title="WHY GROWTH COMES FIRST"
          className="mb-4"
        />
        <p className="text-center text-base text-[#27272A]">
          Most Restaurant Problems Are Symptoms Of Weak Growth:
        </p>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-4 gap-6 pt-14 pb-4 px-[4%]">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] overflow-hidden shadow-md shrink-0 max-lg:w-70"
          >
            <div className="relative w-full h-45">
              <Image
                src={problem.image}
                alt={problem.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="p-6 text-2xl font-antonio font-bold text-[#27272A] text-center">
              {problem.title}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WhyGrowthComesFirst
