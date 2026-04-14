'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const chartOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  stroke: {
    curve: 'smooth',
    width: 3,
    colors: ['#1E50C1'],
  },
  dataLabels: { enabled: false },
  markers: { size: 0 },
  grid: {
    borderColor: '#E5E7EB',
    strokeDashArray: 0,
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (value: number) => `Cost ($): ${value.toLocaleString()}`,
    },
  },
  xaxis: {
    categories: ['Food', 'Labor', 'Rent', 'Utilities', 'Marketing', 'Other'],
    labels: {
      style: { colors: '#3F3F46', fontSize: '14px', fontFamily: 'Effra Trial, sans-serif' },
    },
    axisBorder: { color: '#E5E7EB' },
    axisTicks: { color: '#E5E7EB' },
  },
  yaxis: {
    min: 0,
    max: 16000,
    tickAmount: 4,
    labels: {
      formatter: (value: number) => `${Math.round(value)}`,
      style: { colors: '#3F3F46', fontSize: '13px', fontFamily: 'Effra Trial, sans-serif' },
    },
  },
};

const chartSeries = [
  {
    name: 'Rent',
    data: [7400, 7800, 8000, 8900, 9200, 10300],
  },
];

const FinancialOverview = () => {
  return (
    <section className="mt-5">
      <h3 className="text-xl font-semibold text-[#18181B] font-effra">Financial Overview</h3>

      <div className="mt-4 rounded-2xl border border-[#EEDFDB] p-4">
        <h4 className="text-lg font-semibold text-[#2C2D2F] font-effra">Financial Snapshot</h4>

        <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3">
          <div className="rounded-xl border border-[#EEDFDB] p-4">
            <DollarSign size={22} className="text-[#16A34A]" />
            <p className="mt-2 text-2xl font-semibold text-[#111827] font-effra">$87,520</p>
            <p className="mt-1 text-sm text-[#27272A] font-effra">Monthly Revenue</p>
            <p className="mt-2 text-sm text-[#16A34A] font-effra">+8% vs last month</p>
          </div>

          <div className="rounded-xl border border-[#EEDFDB] p-4">
            <TrendingUp size={22} className="text-[#B12F4A]" />
            <p className="mt-2 text-2xl font-semibold text-[#111827] font-effra">$44,400</p>
            <p className="mt-1 text-sm text-[#27272A] font-effra">Total Expenses</p>
            <p className="mt-2 text-sm text-[#B12F4A] font-effra">+12% vs last month</p>
          </div>

          <div className="rounded-xl border border-[#EEDFDB] p-4">
            <PieChart size={22} className="text-[#2563EB]" />
            <p className="mt-2 text-2xl font-semibold text-[#111827] font-effra">49.3%</p>
            <p className="mt-1 text-sm text-[#27272A] font-effra">Net Margin</p>
            <p className="mt-2 text-sm text-[#16A34A] font-effra">Healthy margin</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-[#EEDFDB]">
          <h5 className="text-xl font-semibold text-[#2C2D2F] font-effra px-4 pt-4">Cost Breakdown</h5>
          <div>
            <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={260} />
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-[#EEDFDB] bg-[#F8EEF0] p-4">
          <p className="text-sm text-[#2C2D2F] font-effra">
            <span className="font-semibold">Labor cost is above target</span> - Currently at 31% vs
            28% target
          </p>
          <p className="mt-2 text-sm text-[#2C2D2F] font-effra">
            <span className="font-semibold">Packaging cost can be reduced</span> - Consider bulk
            ordering for 8% savings
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;
