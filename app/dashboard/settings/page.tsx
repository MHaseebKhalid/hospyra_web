'use client';

import { CreditCard } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import DashInput from '@/components/dashboard/DashInput';
import {
  settingsBilling,
  settingsBusinessDefaults,
  settingsContactDefaults,
  settingsNotificationItems,
  settingsOperatingHours,
} from '@/components/dashboard/StaticData';
import { Switch } from '@/components/ui/switch';

const DashboardSettingsPage = () => {
  return (
    <section className=" space-y-6">
      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Business Information</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DashInput label="Business Name" placeholder={settingsBusinessDefaults.businessName} />
          <DashInput label="Business Type" placeholder={settingsBusinessDefaults.businessType} />
        </div>
        <div className="mt-5">
          <DashInput label="Address" placeholder={settingsBusinessDefaults.address} />
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <DashInput label="Phone Number" placeholder={settingsBusinessDefaults.phone} />
          <DashInput label="Email" type="email" placeholder={settingsBusinessDefaults.email} />
        </div>
        <div className="mt-6">
          <GlobalButton
            title="Save Changes"
            bgColor="#020617"
            color="white"
            borderRadius="8px"
            height="40px"
            className="font-effra px-5 text-sm"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Contact Preferences</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DashInput label="Owner Name" placeholder={settingsContactDefaults.ownerName} />
          <DashInput label="Owner Email" type="email" placeholder={settingsContactDefaults.ownerEmail} />
          <DashInput label="Manager Name" placeholder={settingsContactDefaults.managerName} />
          <DashInput label="Manager Phone" placeholder={settingsContactDefaults.managerPhone} />
        </div>
        <div className="mt-6">
          <GlobalButton
            title="Save Changes"
            bgColor="#020617"
            color="white"
            borderRadius="8px"
            height="40px"
            className="font-effra px-5 text-sm"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Notification Preferences</h2>
        <div className="mt-6 divide-y divide-[#E5E7EB]">
          {settingsNotificationItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#18181B] font-effra">{item.title}</p>
                <p className="mt-0.5 text-sm text-[#6B7280] font-effra">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} aria-label={item.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Operating Hours</h2>
        <div className="mt-6 space-y-4">
          {settingsOperatingHours.map((row) => (
            <div
              key={row.id}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <p className="shrink-0 text-sm font-medium text-[#111827] font-effra sm:min-w-40">
                {row.label}
              </p>
              <input
                type="text"
                defaultValue={row.value}
                className="w-full rounded-md border border-transparent bg-[#F3F4F6] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#71717A] font-effra outline-none focus:border-[#1E50C1] sm:max-w-md"
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <GlobalButton
            title="Save Changes"
            width="100%"
            bgColor="#020617"
            color="white"
            borderRadius="8px"
            height="48px"
            className="font-effra text-sm"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Billing &amp; Subscription</h2>
        <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#EFF6FF] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-[#18181B] font-effra">{settingsBilling.planName}</p>
            <p className="mt-1 text-sm text-[#1E40AF] font-effra">{settingsBilling.planPrice}</p>
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
                <p className="text-sm font-semibold text-[#18181B] font-effra">{settingsBilling.cardMasked}</p>
                <p className="mt-0.5 text-xs text-[#6B7280] font-effra">{settingsBilling.cardExpires}</p>
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

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#E7000B] font-effra">Danger Zone</h2>
        <div className="mt-6 space-y-4">
          <div className="flex flex-col gap-4 rounded-xl bg-[#FEF2F2] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#18181B] font-effra">Export Data</p>
              <p className="mt-1 text-sm text-[#6B7280] font-effra">Download all your business data</p>
            </div>
            <GlobalButton
              title="Export"
              bgColor="#FFFFFF"
              color="#020617"
              borderColor="#020617"
              borderWidth="1px"
              borderRadius="8px"
              height="40px"
              className="font-effra shrink-0 px-5 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-[#FEF2F2] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#18181B] font-effra">Deactivate Account</p>
              <p className="mt-1 text-sm text-[#6B7280] font-effra">Temporarily disable your account</p>
            </div>
            <GlobalButton
              title="Deactivate"
              bgColor="#E7000B"
              color="white"
              borderRadius="8px"
              height="40px"
              className="font-effra shrink-0 px-5 text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSettingsPage;
