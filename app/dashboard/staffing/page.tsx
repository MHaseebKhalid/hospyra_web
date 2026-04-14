'use client';

import { useState } from 'react';
import { AlertCircle, Box, CalendarDays, CircleAlert } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import SummaryStatCard from '@/components/dashboard/SummaryStatCard';
import WeeklyScheduleTable from '@/components/dashboard/WeeklyScheduleTable';
import StaffDirectoryTable from '@/components/dashboard/StaffDirectoryTable';
import AddStaffMemberModal from '@/components/dashboard/modals/AddStaffMemberModal';
import {
  staffDirectoryRowsData,
  weeklyScheduleRowsData,
} from '@/components/dashboard/TablesStaticData';

type StaffingStat = {
  label: string;
  value: string;
  valueClassName?: string;
};

type OpenPosition = {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  detail: string;
};

const staffingStats: StaffingStat[] = [
  { label: 'Total Staff', value: '12' },
  { label: 'Weekly Hours', value: '388' },
  { label: 'Labor Cost %', value: '32%', valueClassName: 'text-[#E75B3B]' },
  { label: 'Open Positions', value: '3' },
];

const staffingInsights = [
  {
    id: '1',
    text: 'Overstaffed during lunch hours - consider reducing by 2 staff',
    className: 'bg-[#FEFCE8]',
    icon: CircleAlert,
    iconClassName: 'text-[#D4A100]',
  },
  {
    id: '2',
    text: 'Need 2 additional night cooks for weekend demand',
    className: 'bg-[#FEF2F2]',
    icon: CircleAlert,
    iconClassName: 'text-[#B12F4A]',
  },
  {
    id: '3',
    text: 'Labor cost at 32% - target is 30%',
    className: 'bg-[#EFF6FF]',
    icon: AlertCircle,
    iconClassName: 'text-[#2563EB]',
  },
] as const;

const openPositions: OpenPosition[] = [
  { id: '1', title: 'Line Cook', priority: 'high', detail: 'Night shift - Posted 3 days ago' },
  { id: '2', title: 'Prep Cook', priority: 'medium', detail: 'Morning shift - Posted 1 week ago' },
  { id: '3', title: 'Server', priority: 'low', detail: 'Weekend shift - Posted 2 days ago' },
];

const StaffingPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <section>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <GlobalButton
          title="Add Item"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra flex-row-reverse px-3"
          icon={<Box size={18} />}
          onClick={() => setIsAddModalOpen(true)}
        />
      </div>

      <div className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {staffingStats.map((card) => (
          <SummaryStatCard
            key={card.label}
            label={card.label}
            value={card.value}
            valueClassName={card.valueClassName}
          />
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-[#EEDFDB] p-5">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Staffing Insights</h3>
        <div className="mt-4 space-y-3">
          {staffingInsights.map((item) => (
            <div key={item.id} className={`rounded-lg shadow-sm px-4 py-3 ${item.className}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm text-[#27272A] font-effra">
                  <item.icon size={16} className={item.iconClassName} />
                  {item.text}
                </p>
                <GlobalButton
                  title="Review"
                  borderRadius="8px"
                  height="32px"
                  bgColor="#FFFFFF"
                  color="#111827"
                  className="font-effra text-xs px-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl overflow-clip border border-[#EEDFDB]">
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5 pb-4">
          <h3 className="text-xl font-semibold text-[#18181B] font-effra">Weekly Schedule</h3>
          <GlobalButton
            title="View Full Schedule"
            borderRadius="8px"
            height="40px"
            borderWidth="1px"
            borderColor="#E5E7EB"
            bgColor="#FFFFFF"
            color="#111827"
            className="font-effra px-4 flex-row-reverse"
            icon={<CalendarDays size={18} />}
          />
        </div>
        <WeeklyScheduleTable rows={weeklyScheduleRowsData} />
      </div>

      <div className="mt-5 rounded-xl border border-[#EEDFDB] p-5">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Open Positions</h3>
        <div className="mt-4 space-y-3">
          {openPositions.map((position) => (
            <div key={position.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#F9FAFB] p-4">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-[#18181B] font-effra">{position.title}</p>
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${position.priority === 'high'
                      ? 'bg-[#E7003A] text-white'
                      : position.priority === 'medium'
                        ? 'bg-[#E5E7EB] text-[#27272A]'
                        : 'bg-[#F3F4F6] text-[#27272A]'
                      }`}
                  >
                    {position.priority} priority
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#4A5565] font-effra">{position.detail}</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm text-[#111827] border py-1.5 px-4 rounded-md font-effra">Edit</button>
                <GlobalButton
                  title="View Applicants"
                  borderRadius="8px"
                  height="34px"
                  bgColor="#020617"
                  color="#FFFFFF"
                  className="font-effra px-3 text-xs"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border overflow-clip border-[#EEDFDB]">
        <h3 className="text-xl font-semibold text-[#18181B] px-5 pt-5 pb-4 font-effra">Staff Directory</h3>
        <StaffDirectoryTable rows={staffDirectoryRowsData} />
      </div>

      <AddStaffMemberModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
    </section>
  );
};

export default StaffingPage;
