import React from 'react';
import {
  Instagram,
  MessageCircle,
  Star,
  Users,
  Eye,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

type MarketingTrafficStat = {
  title: string;
  value: string;
  subtitle: string;
  footer: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconClassName: string;
  cardClassName: string;
  footerClassName?: string;
};

const marketingTrafficStats: MarketingTrafficStat[] = [
  {
    title: 'Instagram Followers',
    value: '12.5K',
    subtitle: 'Instagram Followers',
    footer: '+8% this month',
    icon: Instagram,
    iconClassName: 'text-[#C0267A]',
    cardClassName: 'bg-[#F9EEF4] border-[#FCCEE8]',
  },
  {
    title: 'Engagement Rate',
    value: '4.2%',
    subtitle: 'Engagement Rate',
    footer: '-2% vs last week',
    icon: MessageCircle,
    iconClassName: 'text-[#7E22CE]',
    cardClassName: 'bg-[#F3EEF8] border-[#E9D4FF]',
    footerClassName: 'text-[#E7000B]',
  },
  {
    title: 'Google Rating',
    value: '4.7',
    subtitle: 'Google Rating',
    footer: '287 reviews',
    icon: Star,
    iconClassName: 'text-[#CA8A04]',
    cardClassName: 'bg-[#F8F7EA] border-[#FFF085]',
    footerClassName: 'text-[#4A5565]'
  },
  {
    title: 'Reviews Count',
    value: '287',
    subtitle: 'Reviews Count',
    footer: '+12 this week',
    icon: Users,
    iconClassName: 'text-[#2563EB]',
    cardClassName: 'bg-[#EEF6FB] border-[#BEDBFF]',
  },
  {
    title: 'Weekly Visits',
    value: '2.8K',
    subtitle: 'Weekly Visits',
    footer: '+15% growth',
    icon: Eye,
    iconClassName: 'text-[#16A34A]',
    cardClassName: 'bg-[#EAF8EE] border-[#B9F8CF]',
  },
  {
    title: 'Traffic Trend',
    value: 'Rising',
    subtitle: 'Traffic Trend',
    footer: 'Positive momentum',
    icon: ArrowUpRight,
    iconClassName: 'text-[#C2410C]',
    cardClassName: 'bg-[#F8EFEA] border-[#FFD6A8]',
  },
];

const MarketingTrafficCard = () => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] p-4">
      <h3 className="text-lg font-semibold text-[#18181B] font-effra">
        Marketing &amp; Traffic
      </h3>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {marketingTrafficStats.map((stat) => (
          <div key={stat.title} className={`rounded-xl border p-4 ${stat.cardClassName}`}>
            <stat.icon size={18} className={stat.iconClassName} />
            <p className="mt-2 text-2xl font-bold text-[#0F172A] font-effra">{stat.value}</p>
            <p className="mt-1 text-sm text-[#3F3F46] font-effra">{stat.subtitle}</p>
            <p className={`mt-4 text-sm font-medium font-effra ${stat.footerClassName ?? 'text-black'}`}>
              {stat.footer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-[#E8DFAF] bg-[#F8F5E7] p-4">
        <div className="space-y-2 text-[#7E2A0C]">
          <div className="text-sm font-effra flex items-start gap-3">
            <TrendingDown size={20} className={`mt-0.5 shrink-0 text-[#B12F4A]`} />
            <p>
              <b>Posting frequency is low</b> - Increase to 4-5 posts/week
            </p>
          </div>
          <div className="text-sm font-effra flex items-start gap-3">
            <TrendingUp size={20} className={`mt-0.5 shrink-0 text-[#00A63E]`} />
            <p>
              <b>High potential to grow via content</b> - Focus on food photography and behind-the-scenes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTrafficCard;
