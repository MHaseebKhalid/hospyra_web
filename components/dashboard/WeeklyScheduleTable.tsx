'use client';

import type { WeeklyScheduleTableItem } from '@/components/dashboard/TablesStaticData';

const WeeklyScheduleTable = ({ rows }: { rows: WeeklyScheduleTableItem[] }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-190">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F4F6] border-b border-t border-[#E5E7EB]">
            <tr className="text-left text-sm text-[#52525B] font-effra">
              <th className="px-5 py-4 font-medium">Day</th>
              <th className="px-5 py-4 font-medium">Lunch Shift</th>
              <th className="px-5 py-4 font-medium">Dinner Shift</th>
              <th className="px-5 py-4 font-medium">Total Staff</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#E5E7EB] text-sm text-[#27272A] font-effra">
                <td className="px-5 py-4">{row.day}</td>
                <td className="px-5 py-4">{row.lunchShift}</td>
                <td className="px-5 py-4">{row.dinnerShift}</td>
                <td className="px-5 py-4">{row.totalStaff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyScheduleTable;
