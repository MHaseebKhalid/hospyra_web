'use client'

import { Layers, Calendar, AlertCircle, Clock } from 'lucide-react'
import TitleCard from '@/components/cards/TitleCard'

const ProfessionalCoordination = () => {
  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Central Coordination',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Timeline Alignment',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Escalation Handling',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Emergency Support',
    },
  ]

  return (
    <div className="bg-white py-12 md:py-20 px-[4%]">
      <div className="bg-[#F05830] rounded-3xl px-6 xl:px-12 py-12 xl:py-16 text-center">
        <TitleCard
          title="24/7 PROFESSIONAL COORDINATION"
          color="white"
          orangeLabel=""
          className="mb-4"
        />
        <p className="text-xl md:text-2xl text-white mb-8 md:mb-12">
          Because Hospitality Never Sleeps
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-white border-l border-r border-white"
            >
              <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
              <p className="text-2xl font-antonio font-bold text-center whitespace-nowrap">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCoordination
