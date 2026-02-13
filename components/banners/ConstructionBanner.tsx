import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const ConstructionBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/construction-banner-img.png"
      heading="HOSPITALITY CONSTRUCTION DONE RIGHT"
      tagline=""
      topLabel="BUILD & CONSTRUCTION"
      primaryButton={{
        text: 'Plan My Build',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Talk to a Construction Expert',
        href: '/contact',
        withPhoneIcon: true,
      }}
      description='Restaurants Require Speed, Compliance, And Durability. Hospyra Manages Builds With Teams Who Understand Real Operations.'
    />
  )
}

export default ConstructionBanner

