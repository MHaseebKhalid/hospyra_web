'use client';

import { CreditCard } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';

const billing = {
  planName: 'Professional Plan',
  planPrice: '$199/month',
  cardMasked: '**** **** **** 4242',
  cardExpires: 'Expires 12/2026',
} as const;

const BillingSubscriptionCard = () => {
  return (
    <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#18181B] font-effra">Billing &amp; Subscription</h2>
      <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#EFF6FF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-[#18181B] font-effra">{billing.planName}</p>
          <p className="mt-1 text-sm text-[#1E40AF] font-effra">{billing.planPrice}</p>
        </div>
        <GlobalButton
          title="Upgrade"
          bgColor="#2563EB"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra shrink-0 px-5 text-sm"
        />
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-[#111827] font-effra">Payment Method</p>
        <div className="mt-3 flex flex-col gap-4 rounded-xl border border-[#E5E7EB] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <CreditCard className="h-5 w-5 shrink-0 text-[#52525B]" aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[#18181B] font-effra">{billing.cardMasked}</p>
              <p className="mt-0.5 text-xs text-[#6B7280] font-effra">{billing.cardExpires}</p>
            </div>
          </div>
          <GlobalButton
            title="Update"
            bgColor="#FFFFFF"
            color="#020617"
            borderColor="#020617"
            borderWidth="1px"
            borderRadius="8px"
            height="40px"
            className="font-effra shrink-0 px-5 text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingSubscriptionCard;
