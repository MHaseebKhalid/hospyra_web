'use client';

import React from 'react';
import TitleCard from './TitleCard';
import Image from 'next/image';
import MediaDrivenImg from "@/public/assets/pngs/media-driven.png";
import { Utensils, DollarSign, Users, Shield, TrendingUp } from 'lucide-react';

const MediaDrivenCard = () => {
  const items = [
    { icon: <Utensils className="w-6 h-6 text-[#27272A]" />, title: "Hospitality-only focus" },
    { icon: <DollarSign className="w-6 h-6 text-[#27272A]" />, title: "Media and growth at the core" },
    { icon: <Users className="w-6 h-6 text-[#27272A]" />, title: "Real operators, not agencies" },
    { icon: <Shield className="w-6 h-6 text-[#27272A]" />, title: "One accountable partner" },
    { icon: <TrendingUp className="w-6 h-6 text-[#27272A]" />, title: "Built for long-term brand value" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-[#F6F6F6] rounded-[32px] overflow-hidden">
      <div className="flex flex-col gap-4 p-5 max-lg:order-1">
        <TitleCard
          className="text-left"
          title="A Media-Driven, Operator-Led Approach"
          orangeLabel="WHY HOSPYRA WORKS"
        />
        <div className="flex flex-col gap-3 mt-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {item.icon}
              <p className="text-2xl font-antonio font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src={MediaDrivenImg}
        alt="media driven"
        className="w-full h-130 object-cover"
      />
    </div>
  );
};

export default MediaDrivenCard;
