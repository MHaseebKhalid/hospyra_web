'use client';

import GlobalButton from '@/components/buttons/GlobalButton';

const operatingHourRows = [
  { id: '1', label: 'Monday – Thursday', value: '11:00 AM - 10:00 PM' },
  { id: '2', label: 'Friday', value: '11:00 AM - 11:00 PM' },
  { id: '3', label: 'Saturday', value: '10:00 AM - 11:00 PM' },
  { id: '4', label: 'Sunday', value: '10:00 AM - 9:00 PM' },
] as const;

const OperatingHoursCard = () => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#18181B] font-effra">Operating Hours</h2>
      <div className="mt-6 space-y-4">
        {operatingHourRows.map((row) => (
          <div
            key={row.id}
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <p className="shrink-0 text-sm font-medium text-[#111827] font-effra sm:min-w-40">{row.label}</p>
            <input
              type="text"
              defaultValue={row.value}
              className="w-full rounded-md border border-transparent bg-[#F3F4F6] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#71717A] font-effra outline-none focus:border-[#1E50C1] sm:max-w-md"
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <GlobalButton
          title="Save Changes"
          width="100%"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="48px"
          className="font-effra text-sm"
        />
      </div>
    </div>
  );
};

export default OperatingHoursCard;
