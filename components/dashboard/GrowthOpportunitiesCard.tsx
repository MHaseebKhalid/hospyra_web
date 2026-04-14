import { MoveUpRight } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import type { GrowthOpportunityItem } from '@/components/dashboard/StaticData';

type GrowthOpportunitiesCardProps = {
  items: readonly GrowthOpportunityItem[];
};

const GrowthOpportunitiesCard = ({ items }: GrowthOpportunitiesCardProps) => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] bg-white p-4">
      <h2 className="text-xl font-semibold text-[#18181B] font-effra">Growth Opportunities</h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-xl bg-[#F4F4F4] p-4 md:flex-row md:justify-between"
          >
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base font-semibold text-[#18181B] font-effra">{item.title}</p>
                <span className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-[#6B7280] font-effra ring-1 ring-[#E5E7EB]">
                  {item.effort}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#4B5563] font-effra">{item.description}</p>
              <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-[#16A34A] font-effra">
                <MoveUpRight size={14} aria-hidden />
                {item.gain}
              </p>
            </div>
            <div className="shrink-0">
              <GlobalButton
                title="Learn More"
                bgColor="#020617"
                color="white"
                borderRadius="8px"
                height="40px"
                className="font-effra px-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthOpportunitiesCard;
