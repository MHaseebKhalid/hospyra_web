'use client'

import Image from 'next/image'
import Link from 'next/link'
import ForBusinessOwnersInvestorsImg from "@/public/assets/pngs/for-business-owners-investor-img.png"
import AmbassadorCanIcon_1 from "@/public/assets/svgs/amb-can-1.svg"
import AmbassadorCanIcon_2 from "@/public/assets/svgs/amb-can-2.svg"
import AmbassadorCanIcon_3 from "@/public/assets/svgs/amb-can-3.svg"
import AmbassadorCanIcon_4 from "@/public/assets/svgs/amb-can-4.svg"

const ambassadorItems = [
  {
    icon: AmbassadorCanIcon_1,
    text: 'Introduce Businesses And Partners To The Platform',
  },
  {
    icon: AmbassadorCanIcon_2,
    text: 'Build A Network',
  },
  {
    icon: AmbassadorCanIcon_3,
    text: 'Earn Ongoing Passive Income',
  },
  {
    icon: AmbassadorCanIcon_4,
    text: 'Be Part Of The Growth Of Hospitality And Many Other Industries',
  },
]

const ForBusinessOwnersInvestorsWithBg = () => {
  return (
    <div className="relative min-h-125 lg:min-h-150 text-white lg:rounded-t-[70px] overflow-hidden">
      <Image
        src={ForBusinessOwnersInvestorsImg}
        alt="Operations background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 h-full px-[4%] py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold">
            For Business Owners & Investors
          </h2>
          <p className="text-base md:text-lg mt-5">
            Let Others Know About Hosperra
          </p>

          <div className="mt-10 lg:mt-14 p-6 md:p-8 rounded-xl lg:rounded-[60px] bg-white/20 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-white/95 leading-relaxed">
              Hosperra Is Powered By A Larger Ecosystem (Zoiax) That Allows You To Grow Beyond Operations.
            </p>
            <h3 className="text-lg md:text-xl font-bold mt-6 mb-4">
              Ambassadors Can:
            </h3>
            <div className="grid max-[670px]:grid-cols-1 grid-cols-2 gap-6 text-left">
              {ambassadorItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Image src={item.icon} alt="" width={24} height={24} />
                  </div>
                  <p className="text-sm md:text-base text-white/90 pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid max-[670px]:grid-cols-1 grid-cols-2 max-w-212.5 mx-auto gap-4 mt-8">
            <Link
              href="/partner"
              className="w-full px-8 py-3 rounded-lg bg-white border-white border text-[#27272A] font-medium hover:bg-white/90 transition-colors text-center"
            >
              Apply To Become An Ambassador
            </Link>
            <Link
              href="/about"
              className="w-full px-8 py-3 rounded-lg border border-white/60 bg-white/40 text-white font-medium hover:bg-white/10 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForBusinessOwnersInvestorsWithBg;
