import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const HomeBanner = () => {
    return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/home-banner-img.png"
      heading="GROW FIRST. EXPAND SMART. BUILD WHAT LASTS."
      tagline="HOSPYRA IS THE ALL-IN-ONE GROWTH, MEDIA, AND EXECUTION PARTNER FOR RESTAURANTS."
      description="We Help Restaurants Increase Visibility And Revenue First — Then Support Everything Needed To Improve, Expand, And Scale With Confidence."
      primaryButton={{
        text: "I'm Opening a Restaurant",
        href: '/contact',
      }}
      secondaryButton={{
        text: 'About Hospyra',
        href: '/about',
      }}
    />
  )
}

export default HomeBanner
