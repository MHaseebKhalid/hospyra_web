'use client';

import GlobalButton from '@/components/buttons/GlobalButton';

const DangerZoneCard = () => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#E7000B] font-effra">Danger Zone</h2>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col gap-4 rounded-xl bg-[#FEF2F2] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#18181B] font-effra">Export Data</p>
            <p className="mt-1 text-sm text-[#6B7280] font-effra">Download all your business data</p>
          </div>
          <GlobalButton
            title="Export"
            bgColor="#FFFFFF"
            color="#020617"
            borderRadius="8px"
            height="40px"
            className="font-effra shrink-0 px-5 text-sm"
          />
        </div>
        <div className="flex flex-col gap-4 rounded-xl bg-[#FEF2F2] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#18181B] font-effra">Deactivate Account</p>
            <p className="mt-1 text-sm text-[#6B7280] font-effra">Temporarily disable your account</p>
          </div>
          <GlobalButton
            title="Deactivate"
            bgColor="#D4183D"
            color="white"
            borderRadius="8px"
            height="40px"
            className="font-effra shrink-0 px-5 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default DangerZoneCard;
