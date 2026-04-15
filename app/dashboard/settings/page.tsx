'use client';

import GlobalButton from '@/components/buttons/GlobalButton';
import BillingSubscriptionCard from '@/components/dashboard/BillingSubscriptionCard';
import DangerZoneCard from '@/components/dashboard/DangerZoneCard';
import DashInput from '@/components/dashboard/DashInput';
import OperatingHoursCard from '@/components/dashboard/OperatingHoursCard';
import { Switch } from '@/components/ui/switch';

const businessDefaults = {
  businessName: 'Restaurant Name',
  businessType: 'Fine Dining Restaurant',
  address: '123 Main Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'contact@restaurant.com',
} as const;

const contactDefaults = {
  ownerName: 'John Doe',
  ownerEmail: 'john@restaurant.com',
  managerName: 'Jane Smith',
  managerPhone: '+1 (555) 987-6543',
} as const;

const notificationItems = [
  {
    id: '1',
    title: 'Critical Alerts',
    description: 'Get notified about urgent issues',
    defaultChecked: true,
  },
  {
    id: '2',
    title: 'Daily Summary',
    description: 'Receive daily performance reports',
    defaultChecked: true,
  },
  {
    id: '3',
    title: 'Order Updates',
    description: 'Track delivery status',
    defaultChecked: true,
  },
  {
    id: '4',
    title: 'Staff Changes',
    description: 'Updates about team members',
    defaultChecked: false,
  },
  {
    id: '5',
    title: 'Marketing Insights',
    description: 'Weekly marketing performance',
    defaultChecked: true,
  },
] as const;

const DashboardSettingsPage = () => {
  return (
    <section className=" space-y-6">
      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Business Information</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DashInput label="Business Name" placeholder={businessDefaults.businessName} />
          <DashInput label="Business Type" placeholder={businessDefaults.businessType} />
        </div>
        <div className="mt-5">
          <DashInput label="Address" placeholder={businessDefaults.address} />
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <DashInput label="Phone Number" placeholder={businessDefaults.phone} />
          <DashInput label="Email" type="email" placeholder={businessDefaults.email} />
        </div>
        <div className="mt-6">
          <GlobalButton
            title="Save Changes"
            bgColor="#020617"
            color="white"
            borderRadius="8px"
            height="42px"
            className="font-effra px-5 w-35"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Contact Preferences</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DashInput label="Owner Name" placeholder={contactDefaults.ownerName} />
          <DashInput label="Owner Email" type="email" placeholder={contactDefaults.ownerEmail} />
          <DashInput label="Manager Name" placeholder={contactDefaults.managerName} />
          <DashInput label="Manager Phone" placeholder={contactDefaults.managerPhone} />
        </div>
        <div className="mt-6">
          <GlobalButton
            title="Save Changes"
            bgColor="#020617"
            color="white"
            borderRadius="8px"
            height="42px"
            className="font-effra px-5 w-35"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#18181B] font-effra">Notification Preferences</h2>
        <div className="mt-6 divide-y divide-[#E5E7EB]">
          {notificationItems.map((item) => (
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

      <OperatingHoursCard />

      <BillingSubscriptionCard />

      <DangerZoneCard />
    </section>
  );
};

export default DashboardSettingsPage;
