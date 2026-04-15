'use client';

import { Info, RefreshCw } from 'lucide-react';
import { CheckCircle2, Clock3, TriangleAlert } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import type { ProfileSectionCardData } from '@/components/dashboard/businessProfileData';

const statusStyles = {
  in_progress: {
    label: 'In Progress',
    className: 'bg-[#FEF8E6] text-[#FF3500]',
    icon: RefreshCw,
  },
  needs_attention: {
    label: 'Needs Attention',
    className: 'bg-[#FFE2E2] text-[#C10007] border border-[#FFC9C9]',
    icon: TriangleAlert,
  },
  synced: {
    label: 'Synced',
    className: 'bg-[#EFF6FF] text-[#1E50C1]',
    icon: CheckCircle2,
  },
} as const;

type BusinessProfileSectionCardProps = {
  data: ProfileSectionCardData;
};

const BusinessProfileSectionCard = ({ data }: BusinessProfileSectionCardProps) => {
  const Icon = data.icon;
  const status = statusStyles[data.status];
  const StatusIcon = status.icon;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1E50C1]">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold font-effra ${status.className}`}
        >
          <StatusIcon className="h-3.5 w-3.5" aria-hidden />
          {status.label}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black font-effra">{data.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-black font-effra">{data.subtitle}</p>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-black text-sm font-medium">Completion</span>
          <span className="text-black text-sm font-medium">{data.completion}%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
          <div
            className="h-full bg-[#020617]"
            style={{ width: `${Math.min(data.completion, 100)}%` }}
          />
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 font-effra">
        {data.bullets.map((line) => (
          <li key={line} className="flex items-center gap-2">
            <span className="text-block text-[#1E50C1] text-xl" aria-hidden>
              •
            </span>
            <span className='pt-1 text-sm text-black'>{line}</span>
          </li>
        ))}
      </ul>

      {data.alertMessage ? (
        <div className="mt-4 flex gap-2 rounded-lg bg-[#FEF2F2] border border-[#FFC9C9] p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#9F0712]" aria-hidden />
          <p className="text-xs leading-snug text-[#9F0712] font-effra">{data.alertMessage}</p>
        </div>
      ) : null}

      <div className="mt-auto pt-4">
        <GlobalButton
          title="Open Section"
          width="100%"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra text-sm"
        />
      </div>
    </div>
  );
};

export default BusinessProfileSectionCard;
