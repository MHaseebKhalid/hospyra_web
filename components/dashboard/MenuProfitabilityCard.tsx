import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

const menuProfitabilityRows = [
  {
    item: 'Burger',
    cost: '$4',
    price: '$12',
    margin: 'High',
    marginClassName: 'bg-[#DCFCE7] text-[#016630]',
  },
  {
    item: 'Pasta',
    cost: '$6',
    price: '$14',
    margin: 'Medium',
    marginClassName: 'bg-[#FEF9C2] text-[#894B00]',
  },
  {
    item: 'Wings',
    cost: '$7',
    price: '$13',
    margin: 'Low',
    marginClassName: 'bg-[#FFE2E2] text-[#9F0712]',
  },
] as const;

const MenuProfitabilityCard = () => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] p-4">
      <h3 className="text-lg font-semibold text-[#18181B] font-effra">
        Menu &amp; Profitability
      </h3>

      <div className="mt-5 rounded-xl">
        <div className="grid grid-cols-4 px-2 pb-4 text-xs font-medium text-[#6B7280] font-effra md:text-sm">
          <span>Item</span>
          <span>Cost</span>
          <span>Price</span>
          <span>Margin</span>
        </div>
        <div className="space-y-2">
          {menuProfitabilityRows.map((row) => (
            <div
              key={row.item}
              className="grid grid-cols-4 items-center rounded-lg bg-[#F9FAFB] p-4 text-sm text-[#2C2D2F] font-effra md:text-base"
            >
              <span>{row.item}</span>
              <span>{row.cost}</span>
              <span>{row.price}</span>
              <span className="justify-self-start">
                <span className={`rounded px-3 py-1 text-sm font-semibold ${row.marginClassName}`}>
                  {row.margin}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-[#CCE6F0] bg-[#EAF6FB] p-4">
        <div className="space-y-2">

          <p className="flex items-start gap-2 text-md text-[#1C398E] font-effra">
            <TrendingDown size={20} className={`mt-0.5 shrink-0 text-[#B12F4A]`} />
            <span><b>Wings are underpriced</b> - Consider increasing price by $2</span>
          </p>
          <p className="flex items-start gap-2 text-md text-[#1C398E] font-effra">
            <TrendingUp size={20} className={`mt-0.5 shrink-0 text-[#00A63E]`} />
            <span><b>Burger is top performer</b> - Promote more to increase revenue</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default MenuProfitabilityCard;
