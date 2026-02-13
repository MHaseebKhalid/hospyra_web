import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const GrowthBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/growth-banner-img.png"
      heading="RESTAURANT GROWTH THAT ACTUALLY CONVERTS"
      description="Hospyra Helps Restaurants Turn Attention Into Traffic, Traffic Into Sales, And Sales Into Repeat Customers. We Focus On Revenue-Driving Growth Not Vanity Metrics."
      topLabel="Marketing & Product Growth"
      primaryButton={{
        text: 'Start With Growth',
        href: '/contact',
      }}
      socialProof={{
        text: 'Trusted by 50+ venues',
        avatarCount: 5,
      }}
    />
  )
}

export default GrowthBanner

