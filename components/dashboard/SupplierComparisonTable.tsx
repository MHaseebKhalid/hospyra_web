'use client';

import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { SupplierComparisonTableItem } from '@/components/dashboard/TablesStaticData';

const SupplierComparisonTable = ({ rows }: { rows: SupplierComparisonTableItem[] }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-245">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F4F6] border-b border-t border-[#E5E7EB]">
            <tr className="text-left text-sm text-[#52525B] font-effra">
              <th className="px-5 py-4 font-medium">Current Supplier</th>
              <th className="px-5 py-4 font-medium">Items</th>
              <th className="px-5 py-4 font-medium">Avg Cost</th>
              <th className="px-5 py-4 font-medium">Rating</th>
              <th className="px-5 py-4 font-medium">Alternative</th>
              <th className="px-5 py-4 font-medium">Alt Cost</th>
              <th className="px-5 py-4 font-medium">Monthly Savings</th>
              <th className="px-5 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-[#E5E7EB] text-sm text-[#27272A] font-effra">
                <td className="px-5 py-4">{row.currentSupplier}</td>
                <td className="px-5 py-4">{row.items}</td>
                <td className="px-5 py-4">{row.avgCost}</td>
                <td className="px-5 py-4">{row.rating}</td>
                <td className="px-5 py-4">{row.alternative}</td>
                <td className="px-5 py-4">{row.altCost}</td>
                <td className="px-5 py-4">{row.monthlySavings}</td>
                <td className="px-5 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button type="button" className="rounded-md p-1 hover:bg-[#F3F4F6]">
                        <MoreVertical size={18} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="font-effra">
                      <DropdownMenuItem>Switch Supplier</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierComparisonTable;
