'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import platformIcon1 from '@/public/assets/svgs/platform-1.svg'
import platformIcon2 from '@/public/assets/svgs/platform-2.svg'
import platformIcon3 from '@/public/assets/svgs/platform-3.svg'
import platformIcon4 from '@/public/assets/svgs/platform-4.svg'
import platformIcon5 from '@/public/assets/svgs/platform-5.svg'

const features = [
  {
    title: 'Dashboard Experience',
    description: 'Clear Visibility Into Your Operations, Activity, Performance, And Business Health.',
    icon: platformIcon1,
  },
  {
    title: 'Service Request System',
    description: 'Submit Any Need Across Your Business Fully Coordinated And Executed For You.',
    icon: platformIcon2,
  },
  {
    title: 'Orders & Payments',
    description: 'Track Orders, Manage Invoices, And Keep Financial Flow Structured.',
    icon: platformIcon3,
  },
  {
    title: 'Savings & Efficiency',
    description: 'Access Strong Pricing, Reduce Inefficiencies, And Improve Cost Control.',
    icon: platformIcon4,
  },
  {
    title: 'AI & Management Insights',
    description: 'Get Insights Across Food Cost, Labor, Menu Performance, And Operations While Your Team Stays Actively Involved.',
    icon: platformIcon5,
  },
]

const Platform = () => {
  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="flex flex-row items-center md:items-start justify-between mb-8 lg:mb-10 px-[4%]">
        <div>
          <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-bold font-effra text-[#27272A]">
            Platform
          </h2>
          <p className="text-base md:text-lg text-[#27272A] font-effra">
            One System. Fully Managed.
          </p>
        </div>
        <Link
          href="/growth"
          className="flex items-center gap-1 text-[#1E50C1] font-medium font-effra hover:underline"
        >
          Learn More
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-[4%]">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-linear-to-t from-[#FFF7F5] to-[#F8F7F7] p-6 md:p-8"
          >
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
              <Image src={feature.icon} alt="" width={28} height={28} />
            </div>
            <h3 className="font-bold text-[#27272A] font-effra text-lg md:text-xl">
              {feature.title}
            </h3>
            <p className="mt-2 text-[#27272A] font-effra text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Platform
