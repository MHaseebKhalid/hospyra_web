import { AlertTriangle, TriangleAlert } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import GrowthOpportunitiesCard from '@/components/dashboard/GrowthOpportunitiesCard';
import SummaryStatCard from '@/components/dashboard/SummaryStatCard';
import {
  intelligenceAiRecommendations,
  intelligenceCriticalAlerts,
  intelligenceGrowthOpportunities,
  intelligencePageStats,
} from '@/components/dashboard/StaticData';

const HosperraIntelligencePage = () => {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {intelligencePageStats.map((stat) => (
          <SummaryStatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            valueClassName={stat.valueClassName}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-[#18181B] font-effra">Critical Alerts</h2>
          <span className="rounded-full bg-[#D4183D] px-3 py-1 text-xs font-semibold text-white font-effra">
            2 High Priority
          </span>
        </div>

        <div className="mt-5 space-y-4">
          {intelligenceCriticalAlerts.map((alert) => {
            const isDanger = alert.variant === 'danger';
            return (
              <div
                key={alert.id}
                className={`flex flex-col gap-4 rounded-xl border border-[#E5E7EB] p-4 md:flex-row md:items-center md:justify-between ${isDanger
                  ? 'border-l-4 border-l-[#E7000B] bg-[#FEF2F2]'
                  : 'border-l-4 border-l-[#F59E0B] bg-[#FFFBEB]'
                  }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {isDanger ? (
                      <AlertTriangle className="h-5 w-5 shrink-0 text-[#E7000B]" aria-hidden />
                    ) : (
                      <TriangleAlert className="h-5 w-5 shrink-0 text-[#D08700]" aria-hidden />
                    )}
                    <p className="text-base font-semibold text-[#18181B] font-effra">{alert.title}</p>
                    <span className="rounded-md bg-white/80 px-2 py-0.5 text-xs font-medium text-[#52525B] font-effra ring-1 ring-[#E5E7EB]">
                      {alert.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#374151] font-effra">{alert.description}</p>
                  <p className="mt-1 text-sm text-[#6B7280] font-effra">{alert.impact}</p>
                </div>
                <div className="shrink-0 md:pl-4">
                  <GlobalButton
                    title={alert.actionLabel}
                    bgColor="#020617"
                    color="white"
                    borderRadius="8px"
                    height="40px"
                    className="font-effra whitespace-normal text-left leading-tight px-4"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-4">
        <h2 className="text-xl font-semibold text-[#18181B] font-effra">AI Recommendations</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {intelligenceAiRecommendations.map((rec) => (
            <div
              key={rec.id}
              className="flex flex-col rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-xs font-medium text-[#52525B] font-effra">{rec.tag}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold font-effra ${rec.priority === 'High'
                    ? 'bg-[#020617] text-white'
                    : 'bg-[#E5E7EB] text-[#18181B]'
                    }`}
                >
                  {rec.priority}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold text-[#18181B] font-effra">{rec.title}</p>
              <p className="mt-2 flex-1 text-sm text-[#4B5563] font-effra">{rec.description}</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-[#E5E7EB] pt-4">
                <p className="text-sm font-semibold text-[#16A34A] font-effra">{rec.benefit}</p>
                <GlobalButton
                  title="Apply"
                  bgColor="#1E50C1"
                  color="white"
                  borderRadius="8px"
                  height="36px"
                  className="font-effra px-4 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <GrowthOpportunitiesCard items={intelligenceGrowthOpportunities} />
    </section>
  );
};

export default HosperraIntelligencePage;
