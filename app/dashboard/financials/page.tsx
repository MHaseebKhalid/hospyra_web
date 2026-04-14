'use client';

import dynamic from 'next/dynamic';
import { AlertTriangle, CircleAlert } from 'lucide-react';
import ExpenseBreakdown from '@/components/dashboard/ExpenseBreakdown';
import ProcessingFees from '@/components/dashboard/ProcessingFees';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const trendOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    colors: ['#4A3CF0'],
  },
  dataLabels: { enabled: false },
  markers: {
    size: 4,
    colors: ['#FFFFFF'],
    strokeColors: '#4A3CF0',
    strokeWidth: 2,
    hover: { size: 5 },
  },
  tooltip: {
    theme: 'dark',
    x: { show: true },
    y: {
      formatter: (value: number) => `Revenue: $ ${value.toLocaleString()}`,
    },
  },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 0,
  },
  xaxis: {
    categories: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    labels: {
      style: {
        colors: '#52525B',
        fontFamily: 'Effra Trial, sans-serif',
        fontSize: '12px',
      },
    },
    axisBorder: { color: '#E5E7EB' },
    axisTicks: { color: '#E5E7EB' },
  },
  yaxis: {
    min: 0,
    max: 120000,
    tickAmount: 4,
    labels: {
      formatter: (value: number) => `${Math.round(value)}`,
      style: {
        colors: '#52525B',
        fontFamily: 'Effra Trial, sans-serif',
        fontSize: '12px',
      },
    },
  },
};

const trendSeries = [
  {
    name: 'Revenue',
    data: [86000, 92000, 105000, 89000, 96000, 98000],
  },
];

const topStats = [
  {
    id: '1',
    label: 'Monthly Revenue',
    value: '$98,000',
    delta: '- 3.2% from last month',
    deltaClass: 'text-[#16A34A]',
    iconClass: 'text-[#16A34A]',
  },
  {
    id: '2',
    label: 'Total Expenses',
    value: '$88,000',
    delta: '+ 18% from last month',
    deltaClass: 'text-[#B12F4A]',
    iconClass: 'text-[#B12F4A]',
  },
  {
    id: '3',
    label: 'Net Profit',
    value: '$10,000',
    delta: '- 5.4% from last month',
    deltaClass: 'text-[#16A34A]',
    iconClass: 'text-[#4A3CF0]',
  },
  {
    id: '4',
    label: 'Profit Margin',
    value: '10.2%',
    delta: '+ 0.3% from last month',
    deltaClass: 'text-[#16A34A]',
    iconClass: 'text-[#2563EB]',
  },
] as const;

const financialInsights = [
  {
    id: '1',
    text: 'Labor cost at 32% - target is 30%. Consider optimizing schedules.',
    className: 'bg-[#FEFCE8]',
    icon: AlertTriangle,
    iconClassName: 'text-[#D08700]',
  },
  {
    id: '2',
    text: 'Credit card fees higher than industry average (2.9% vs. 2.6%)',
    className: 'bg-[#FEF2F2]',
    icon: CircleAlert,
    iconClassName: 'text-[#E7000B]',
  },
  {
    id: '3',
    text: 'Packaging costs increased 18% - explore bulk suppliers',
    className: 'bg-[#EFF6FF]',
    icon: CircleAlert,
    iconClassName: 'text-[#155DFC]',
  },
] as const;

const expenseRows = [
  { id: '1', name: 'Food Cost', percent: 33, amount: '$32,500' },
  { id: '2', name: 'Labor', percent: 32, amount: '$31,500' },
  { id: '3', name: 'Rent', percent: 8, amount: '$6,000' },
  { id: '4', name: 'Utilities', percent: 4, amount: '$3,500' },
  { id: '5', name: 'Marketing', percent: 3, amount: '$2,500' },
  { id: '6', name: 'Supplies', percent: 4, amount: '$4,200' },
  { id: '7', name: 'Other', percent: 6, amount: '$5,800' },
] as const;

const processingFees = [
  { id: '1', title: 'POS System', subtitle: '2.5% per transaction', amount: '$450', unit: 'per month' },
  { id: '2', title: 'Credit Card Processing', subtitle: '2.9% per transaction', amount: '$1250', unit: 'per month' },
  { id: '3', title: 'Online Ordering', subtitle: '3.5% per transaction', amount: '$380', unit: 'per month' },
] as const;

const FinancialsPage = () => {
  return (
    <section>
      <div className="mt-1 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {topStats.map((card) => (
          <div key={card.id} className="rounded-2xl border border-[#EEDFDB] bg-linear-to-b from-[#F9F8F8] to-[#F8F2EF] p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs text-[#52525B] font-effra">{card.label}</p>
              <span className={`text-xl font-semibold font-effra ${card.iconClass}`}>$</span>
            </div>
            <p className="mt-1 text-3xl font-semibold text-[#18181B] font-effra">{card.value}</p>
            <p className={`mt-1 text-xs font-effra ${card.deltaClass}`}>{card.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-4">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Financial Insights</h3>
        <div className="mt-4 space-y-3">
          {financialInsights.map((item) => (
            <div key={item.id} className={`rounded-lg p-4 ${item.className}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm text-[#27272A] font-effra">
                  <item.icon size={18} className={item.iconClassName} />
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB]">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra p-4">Revenue Trend (6 Months)</h3>
        <ReactApexChart options={trendOptions} series={trendSeries} type="line" height={270} />
      </div>

      <ExpenseBreakdown rows={expenseRows} totalAmount="$88,000" />

      <ProcessingFees rows={processingFees} totalAmount="$2,080" />
    </section>
  );
};

export default FinancialsPage;
