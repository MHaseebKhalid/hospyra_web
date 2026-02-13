'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import GlobalButton from '../buttons/GlobalButton'

interface ButtonConfig {
  title: string
  bgColor: string
  color: string
  borderColor?: string
  borderWidth?: string
  href: string
  icon?: React.ReactElement
}

interface UnstoppableCardProps {
  heading: string | string[]
  description: string
  backgroundColor?: string
  textColor?: string
  headingMaxWidth?: string
  buttons: ButtonConfig[]
}

const UnstoppableCard: React.FC<UnstoppableCardProps> = ({
  heading,
  description,
  backgroundColor = '#F05830',
  textColor = 'white',
  headingMaxWidth,
  buttons,
}) => {
  const router = useRouter()

  return (
    <div className='bg-white py-12 px-[4%]'>
      <div
        className='text-center px-6 md:px-8 py-12 md:py-20 rounded-3xl'
        style={{ backgroundColor, color: textColor }}
      >
        <p
          className='text-[76px] max-[1200px]:text-[60px] max-[1000px]:text-[48px] max-md:text-[32px] font-bold uppercase mx-auto'
          style={headingMaxWidth ? { maxWidth: headingMaxWidth } : {}}
        >
          {heading}
        </p>
        <p className='text-xl mt-4' style={{ color: textColor === 'white' ? textColor : '#27272A' }}>
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {buttons.map((button, idx) => (
            <GlobalButton
              key={idx}
              title={button.title}
              bgColor={button.bgColor}
              color={button.color}
              borderColor={button.borderColor}
              borderWidth={button.borderWidth}
              icon={button.icon}
              onClick={() => router.push(button.href)}
              className="px-8 py-4 max-sm:w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnstoppableCard;
