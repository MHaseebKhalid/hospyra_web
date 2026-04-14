'use client';

import { useState } from 'react';
import { AlertTriangle, Box, TriangleAlert } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import SummaryStatCard from '@/components/dashboard/SummaryStatCard';
import SupplierComparisonTable from '@/components/dashboard/SupplierComparisonTable';
import InventoryStockTable from '@/components/dashboard/InventoryStockTable';
import AddInventoryItemModal from '@/components/dashboard/modals/AddInventoryItemModal';
import {
  inventoryStockRowsData,
  supplierComparisonRowsData,
} from '@/components/dashboard/TablesStaticData';

type InventoryStat = {
  label: string;
  value: string;
  valueClassName?: string;
};

const inventoryStats: InventoryStat[] = [
  { label: 'Total Items', value: '10' },
  { label: 'Low Stock Items', value: '3', valueClassName: 'text-[#E75B3B]' },
  { label: 'Monthly Spend', value: '$12,450' },
  { label: 'Overstock Items', value: '2', valueClassName: 'text-[#E75B3B]' },
];

const insights = [
  {
    id: '1',
    text: 'Overpaying for chicken - switch supplier could save $200/month',
    className: 'bg-[#F8F7E8]',
    icon: AlertTriangle,
    iconClassName: 'text-[#D4A100]',
  },
  {
    id: '2',
    text: '4 items below reorder threshold',
    className: 'bg-[#F9F1F2]',
    icon: TriangleAlert,
    iconClassName: 'text-[#B12F4A]',
  },
  {
    id: '3',
    text: 'Excess waste detected in vegetables - 12% spoilage rate',
    className: 'bg-[#EEF3FA]',
    icon: TriangleAlert,
    iconClassName: 'text-[#2563EB]',
  },
] as const;

const InventoryPage = () => {
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
        {inventoryStats.map((card) => (
          <SummaryStatCard
            key={card.label}
            label={card.label}
            value={card.value}
            valueClassName={card.valueClassName}
          />
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-5">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Menu Insights</h3>
        <div className="mt-4 space-y-3">
          {insights.map((item) => (
            <div key={item.id} className={`rounded-xl p-3 ${item.className}`}>
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

      <div className="mt-5 rounded-2xl overflow-clip border border-[#EEDFDB]">
        <h3 className="text-2xl font-semibold text-[#18181B] px-5 pt-5 pb-4 font-effra">Supplier Comparison</h3>
        <SupplierComparisonTable rows={supplierComparisonRowsData} />
      </div>

      <div className="mt-5 rounded-2xl overflow-clip border border-[#EEDFDB]">
        <InventoryStockTable rows={inventoryStockRowsData} />
      </div>

      <AddInventoryItemModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
    </section>
  );
};

export default InventoryPage;
