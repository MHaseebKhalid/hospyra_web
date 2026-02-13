import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const DesignBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/design-banner-img.png"
      heading="DESIGN THAT WORKS NOT JUST LOOKS GOOD"
      description="Hospyra Designs Restaurant Brands And Spaces That Communicate Value Instantly And Operate Efficiently."
      topLabel="Identity, Space & Experience"
      primaryButton={{
        text: 'Design My Restaurant',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Talk to a Design Specialist',
        href: '/contact',
        withPhoneIcon: true,
      }}
    />
  )
}

export default DesignBanner

