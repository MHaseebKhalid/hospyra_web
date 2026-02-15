import React from 'react'
import TitleCard from '@/components/cards/TitleCard'
import FeatureCard from '@/components/cards/FeatureCard'
import growth_focus_1 from '@/public/assets/pngs/growth-focus-1.png'
import growth_focus_2 from '@/public/assets/pngs/growth-focus-2.png'
import growth_focus_3 from '@/public/assets/pngs/growth-focus-3.png'
import growth_focus_4 from '@/public/assets/pngs/growth-focus-4.png'
import growth_focus_5 from '@/public/assets/pngs/growth-focus-5.png'
import Image from 'next/image'

const GrowthFocus = () => {
  const growthFocusItems = [
    {
      image: growth_focus_1,
      title: 'Product & Menu Positioning',
    },
    {
      image: growth_focus_2,
      title: 'Brand Visibility & Perception',
    },
    {
      image: growth_focus_3,
      title: 'Content That Drives Foot Traffic',
    },
    {
      image: growth_focus_4,
      title: 'Campaigns & Media',
    },
  ]

  const growthServices = [
    {
      image: growth_focus_1,
      title: 'Restaurant Growth Audit',
    },
    {
      image: growth_focus_5,
      title: 'Menu & Product Performance Analysis',
    },
    {
      image: growth_focus_3,
      title: 'Food & Lifestyle Content Creation',
    },
    {
      image: growth_focus_4,
      title: 'Social & Campaigns',
    },
  ]

  return (
    <>
      <div className='bg-[#27272A]'>
        <div className='bg-[#F6F6F6] py-16 rounded-b-[24px]'>
          <TitleCard title={'OUR GROWTH FOCUS'} className='mb-12' />
          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-[4%]">
            {growthFocusItems.map((item, index) => (
              <FeatureCard
                key={index}
                className='w-104 h-90 shadow'
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#27272A] rounded-b-[24px] py-14'>
        <TitleCard
          title={'GROWTH SERVICES INCLUDE'}
          color="white"
          className='mb-12'
        />
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-[4%]">
          {growthServices.map((item, index) => (
            <div className='w-95 shrink-0'>
              <div className='relative h-65'>
              <Image src={item.image} alt={item.title} fill className='object-cover rounded-[24px]' />
              </div>
              <p className='text-white py-4 font-medium text-2xl'>{item.title}</p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default GrowthFocus
