import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const InvestorsBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/investor-banner-img.png"
      heading="INVEST IN RESTAURANTS WITH STRUCTURE, NOT GUESSWORK"
      description="Hospyra Gives Investors Access To Carefully Structured Hospitality Projects — Backed By Market Research, Proven Execution Teams, And Real Operators. We Don't Pitch Ideas. We Build Investment-Ready Restaurant Concepts And Manage Execution From Start To Scale."
      primaryButton={{
        text: 'Explore Investment Opportunities',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Talk to Hospyra About Investing',
        href: '/contact',
      }}
    />
  )
}

export default InvestorsBanner

