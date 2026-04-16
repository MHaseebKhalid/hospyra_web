'use client';

import { useState } from 'react';
import {
  AlertTriangle,
  Hammer,
  Megaphone,
  Plus,
  Users,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import RequestsTable from '@/components/dashboard/RequestsTable';
import SubmitRequestModal from '@/components/dashboard/modals/SubmitRequestModal';
import SummaryStatCard from '@/components/dashboard/SummaryStatCard';
import { requestsTableRowsData } from '@/components/dashboard/TablesStaticData';

type RequestStat = {
  label: string;
  value: string;
  valueClassName?: string;
};

const requestStats: RequestStat[] = [
  { label: 'Total Requests', value: '7' },
  { label: 'Pending', value: '3', valueClassName: 'text-[#FF3600]' },
  { label: 'In Progress', value: '2' },
  { label: 'Avg Response Time', value: '4 hrs' },
];

const requestCategories = [
  { label: 'Food', activeCount: 1, icon: '🍽️' },
  { label: 'Staffing', activeCount: 1, icon: '👥' },
  { label: 'Marketing', activeCount: 2, icon: '📢' },
  { label: 'Construction', activeCount: 1, icon: '🔨' },
  { label: 'Equipment', activeCount: 1, icon: '⚙️' },
  { label: 'Emergency', activeCount: 1, icon: '🚨' },
] as const;

const RequestsPage = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  return (
    <section>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <GlobalButton
          title="New Request"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra px-3"
          icon={<Plus size={16} />}
          onClick={() => setIsSubmitModalOpen(true)}
        />
      </div>

      <div className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {requestStats.map((card) => (
          <SummaryStatCard
            key={card.label}
            label={card.label}
            value={card.value}
            valueClassName={card.valueClassName}
          />
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-5">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Request Categories</h3>
        <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {requestCategories.map((item) => (
            <div key={item.label} className="rounded-xl bg-[#F9FAFB] px-5 py-8 text-center">
              <div className="flex text-3xl justify-center">
               {item.icon}
              </div>
              <p className="mt-3 text-md font-semibold text-[#18181B] font-effra">{item.label}</p>
              <span className="mt-3 inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-sm text-[#111827] font-effra">
                {item.activeCount} active
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl overflow-clip border border-[#EEDFDB]">
        <h3 className="text-xl font-semibold text-[#18181B] px-5 pt-5 font-effra">All Requests</h3>
        <RequestsTable rows={requestsTableRowsData} />
      </div>

      <SubmitRequestModal open={isSubmitModalOpen} onOpenChange={setIsSubmitModalOpen} />
    </section>
  );
};

export default RequestsPage;
