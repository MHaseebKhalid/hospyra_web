import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const ExpansionBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/expansion-banner-img.png"
      heading="CONCEPTS, CAPITAL & EXECUTION"
      tagline="Your Next Location Designed, Funded & Executed"
      description="Hospyra Helps Operators Expand With Confidence By Aligning The Right Concept, Capital, Location, And Execution All Under One Roof."
      topLabel="Full Hospitality Execution Ecosystem"
      primaryButton={{
        text: 'Get a Free Expansion Plan',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Discuss My Next Location',
        href: '/contact',
        withLocationIcon: true,
      }}
    />
  )
}

export default ExpansionBanner

