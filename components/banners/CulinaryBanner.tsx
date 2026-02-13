import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const CulinaryBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/culinary-banner-img.png"
      heading="MENUS THAT SELL, SCALE & STAY PROFITABLE"
      tagline="Your Menu Is Your Most Powerful Sales Tool."
      description="Hospyra Designs Menus That Perform Financially And Operationally."
      topLabel="MENU & CULINARY"
      primaryButton={{
        text: 'Optimize My Menu',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Talk to a Culinary Expert',
        href: '/contact',
        withPhoneIcon: true,
      }}
    />
  )
}

export default CulinaryBanner

