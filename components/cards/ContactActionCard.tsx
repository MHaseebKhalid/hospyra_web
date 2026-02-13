'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import GlobalButton from '../buttons/GlobalButton'

interface ContactActionCardProps {
  icon: React.ReactElement
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

const ContactActionCard: React.FC<ContactActionCardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonHref,
}) => {
  const router = useRouter()

  return (
    <div className="bg-white rounded-3xl border border-[#D9D9D9] p-8 h-full">
      <div className="w-20 h-20 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-6">
        <div className="text-[#F05830]">
          {icon}
        </div>
      </div>
      <h3 className="text-3xl md:text-4xl font-antonio font-bold uppercase mb-4 text-[#27272A]">
        {title}
      </h3>
      <p className="text-base text-[#27272A] my-6">
        {description}
      </p>
      <GlobalButton
        title={buttonText}
        bgColor="#27272A"
        color="white"
        onClick={() => router.push(buttonHref)}
        className="w-50"
        height='50px'
      />
    </div>
  )
}

export default ContactActionCard

