'use client';

import Image from 'next/image';
import type { SupplyPartner } from '@/types/supplyPartner';

interface SupplyPartnerCardProps {
  supplyPartner: SupplyPartner;
  onClick: () => void;
  isSelected?: boolean;
}

export function SupplyPartnerCard({
  supplyPartner,
  onClick,
  isSelected,
}: SupplyPartnerCardProps) {
  const raw = (supplyPartner.image || supplyPartner.brand?.image || '').trim();
  const imageSrc = raw || '/Hospyra.png';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-xl border-2 p-4 transition-all hover:border-[#1E50C1] hover:shadow-md ${
        isSelected ? 'border-[#FF6B35] bg-orange-50/50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex gap-4 items-center">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="56px"
            unoptimized={imageSrc.startsWith('http')}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[#27272A] font-effra truncate">{supplyPartner.name}</h3>
          {supplyPartner.description ? (
            <p className="text-sm text-gray-600 font-effra line-clamp-2 mt-0.5">
              {supplyPartner.description}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
