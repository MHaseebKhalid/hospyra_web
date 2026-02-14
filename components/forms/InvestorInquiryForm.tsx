'use client'

import React, { useState } from 'react'
import GlobalInput from '@/components/inputs/GlobalInput'
import GlobalTextarea from '@/components/inputs/GlobalTextarea'
import GlobalButton from '@/components/buttons/GlobalButton'
import TitleCard from '@/components/cards/TitleCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight } from 'lucide-react'

const InvestorInquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentInterestRange: '',
    preferredMarkets: '',
    riskProfile: '',
    investmentTimeline: '',
    priorExperience: '',
  })

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const investmentRanges = [
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000+',
  ]

  const riskProfiles = [
    'Conservative',
    'Moderate',
    'Aggressive',
  ]

  const investmentTimelines = [
    '0-6 months',
    '6-12 months',
    '1-2 years',
    '2+ years',
  ]

  return (
    <div className="px-[4%] py-8 md:py-12 bg-[#F9F8F6]">
      <TitleCard
        title="INVESTOR INQUIRY FORM"
        className="mb-8"
      />

      <form onSubmit={handleSubmit} className="space-y-6 max-w-200 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlobalInput
            title="Full Name *"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
          />
          <GlobalInput
            title="Email Address *"
            type="email"
            placeholder="john@restaurant.com"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
        </div>

        <GlobalInput
          title="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleInputChange('phone')}
        />

        <div>
          <label className="text-[13px] mb-2 block text-[#364153] font-medium">
            Investment Interest Range *
          </label>
          <Select value={formData.investmentInterestRange} onValueChange={(value) => setFormData(prev => ({ ...prev, investmentInterestRange: value }))}>
            <SelectTrigger className="w-full h-11.5! border-[#D1D5DC] rounded-[10px] text-[14px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {investmentRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <GlobalInput
          title="Preferred Markets"
          placeholder="e.g., New York, Los Angeles, Miami"
          value={formData.preferredMarkets}
          onChange={handleInputChange('preferredMarkets')}
        />

        <div>
          <label className="text-[13px] mb-2 block text-[#364153] font-medium">
            Risk Profile *
          </label>
          <Select value={formData.riskProfile} onValueChange={(value) => setFormData(prev => ({ ...prev, riskProfile: value }))}>
            <SelectTrigger className="w-full h-11.5! border-[#D1D5DC] rounded-[10px] text-[14px]">
              <SelectValue placeholder="Select risk profile" />
            </SelectTrigger>
            <SelectContent>
              {riskProfiles.map((profile) => (
                <SelectItem key={profile} value={profile}>
                  {profile}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-[13px] mb-2 block text-[#364153] font-medium">
            Investment Timeline *
          </label>
          <Select value={formData.investmentTimeline} onValueChange={(value) => setFormData(prev => ({ ...prev, investmentTimeline: value }))}>
            <SelectTrigger className="w-full h-11.5! border-[#D1D5DC] rounded-[10px] text-[14px]">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {investmentTimelines.map((timeline) => (
                <SelectItem key={timeline} value={timeline}>
                  {timeline}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <GlobalTextarea
          title="Prior Hospitality Experience"
          placeholder="Please describe any previous experience with restaurant or hospitality investments..."
          value={formData.priorExperience}
          onChange={handleInputChange('priorExperience')}
          rows={4}
          height="120px"
        />

        <GlobalButton
          title="Apply to Become a Hospyra Partner"
          bgColor="#F05830"
          color="white"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={handleSubmit}
          className="w-full py-4 mt-6"
          height="50px"
        />
      </form>
    </div>
  )
}

export default InvestorInquiryForm
