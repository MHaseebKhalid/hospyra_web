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
      className={`w-full text-left rounded-xl border p-4 transition-all duration-200 bg-white shadow-sm hover:border-[#1E50C1] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E50C1]/30 focus-visible:ring-offset-2 ${
        isSelected
          ? 'border-[#1E50C1] bg-[#F8FAFF] ring-1 ring-[#1E50C1]/20'
          : 'border-[#1E50C1]/35 hover:bg-[#FAFBFF]'
      }`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-gray-200/80">
          <Image
            src={imageSrc}
            alt=""
            width={44}
            height={44}
            className="object-contain"
            unoptimized={imageSrc.startsWith('http')}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-[#27272A] font-effra text-base truncate">{supplyPartner.name}</h3>
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
