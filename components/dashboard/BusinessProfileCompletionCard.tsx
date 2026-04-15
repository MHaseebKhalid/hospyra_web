'use client';

import { profileCompletion } from '@/components/dashboard/businessProfileData';

const BusinessProfileCompletionCard = () => {
  return (
    <div className="rounded-[14px] border border-black/10 bg-linear-to-b from-[#F9F8F8] to-[#F8F2EF] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-base text-[#4A5565] font-effra">Profile Completion</h2>
          <p className="mt-2 text-4xl font-bold tabular-nums text-[#18181B] font-effra">
            {profileCompletion.percent}%
          </p>
        </div>
        <span className="rounded-full bg-[#2563EB] px-3 py-1 text-xs font-semibold text-white font-effra">
          {profileCompletion.badgeLabel}
        </span>
      </div>
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="h-full bg-[#020617]"
          style={{ width: `${profileCompletion.percent}%` }}
        />
      </div>
      <div className="mt-6 grid gap-4 pt-2 sm:grid-cols-3">
        <div className='bg-white rounded-lg p-4'>
          <p className="text-sm text-[#4A5565] font-effra">Sections Completed</p>
          <p className="mt-1 text-2xl font-semibold text-[#18181B] font-effra">
            {profileCompletion.sectionsCompleted.current} / {profileCompletion.sectionsCompleted.total}
          </p>
        </div>
        <div className='bg-white rounded-lg p-4'>
          <p className="text-xs text-[#4A5565] font-effra">Synced Accounts</p>
          <p className="mt-1 text-2xl font-semibold text-[#18181B] font-effra">
            {profileCompletion.syncedAccounts}
          </p>
        </div>
        <div className='bg-white rounded-lg p-4'>
          <p className="text-xs text-[#4A5565] font-effra">Needs Attention</p>
          <p className="mt-1 text-2xl font-semibold text-[#E7000B] font-effra">
            {profileCompletion.needsAttention}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfileCompletionCard;
