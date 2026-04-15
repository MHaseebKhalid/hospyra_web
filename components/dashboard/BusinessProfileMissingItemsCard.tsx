'use client';

import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import { missingItemsData } from '@/components/dashboard/businessProfileData';

type BusinessProfileMissingItemsCardProps = {
  defaultOpen?: boolean;
};

const BusinessProfileMissingItemsCard = ({
  defaultOpen = true,
}: BusinessProfileMissingItemsCardProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[14px] border overflow-clip border-[#EEDFDB] bg-[#F8F2EF]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center p-4 border-b justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <h2 className="text-xl font-semibold text-[#18181B] font-effra">Missing Items</h2>
          <p className="mt-1 text-sm text-black font-effra">
            {missingItemsData.length} items need your attention.
          </p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-[#64748B] transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div className=" grid gap-5 sm:grid-cols-2 p-5">
          {missingItemsData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 rounded-[10px] bg-white px-4 py-3"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <Info size={18} stroke='#F54900' />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#18181B] font-effra">{item.title}</p>
                    <p className="text-xs text-[#64748B] font-effra">{item.category}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="shrink-0 cursor-pointer text-sm font-semibold text-black font-effra hover:underline"
                >
                  Fix
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default BusinessProfileMissingItemsCard;
