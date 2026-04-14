import type { LucideIcon } from 'lucide-react';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Percent,
  AlertCircle,
  TrendingUp,
  Sparkles,
} from 'lucide-react';

export type KeyMetricItem = {
  title: string;
  value: string;
  icon: LucideIcon;
  iconClassName: string;
  iconSize?: number;
  footerText?: string;
  footerTone?: 'positive' | 'neutral';
};

export type StatusRowItem = {
  label: string;
  count?: number;
  rowClassName: string;
  badgeClassName?: string;
  alertBorderClassName?: string;
};

export type SnapshotItem = {
  label: string;
  value: number;
  rowClassName: string;
  valueClassName?: string;
};

export type InventoryHealthItem = {
  name: string;
  status: 'Low' | 'Normal' | 'High';
  rowClassName: string;
  badgeClassName: string;
};

export type NoticeItem = {
  text: string;
  rowClassName: string;
  borderClassName: string;
  iconClassName?: string;
};

export type IntelligenceInsightItem = {
  text: string;
  rowClassName: string;
  borderClassName: string;
  icon: LucideIcon;
  iconClassName: string;
};

export const keyMetricsData: KeyMetricItem[] = [
  {
    title: 'Daily Revenue',
    value: '$3,247',
    icon: DollarSign,
    iconClassName: 'text-[#2563EB]',
    iconSize: 24,
    footerText: '+12.5% vs yesterday',
    footerTone: 'positive',
  },
  {
    title: 'Monthly Revenue',
    value: '$89,450',
    icon: DollarSign,
    iconClassName: 'text-[#16A34A]',
    iconSize: 24,
  },
  {
    title: 'Avg Ticket Size',
    value: '$23.50',
    icon: ShoppingCart,
    iconClassName: 'text-[#9333EA]',
    iconSize: 24,
    footerText: '+$2.30',
    footerTone: 'positive',
  },
  {
    title: 'Total Customers Today',
    value: '138',
    icon: Users,
    iconClassName: 'text-[#EA580C]',
    iconSize: 24,
    footerText: '+18 vs yesterday',
    footerTone: 'positive',
  },
  {
    title: 'Food Cost %',
    value: '32%',
    icon: Percent,
    iconClassName: 'text-[#2563EB]',
    iconSize: 24,
    footerText: 'Target: 30%',
    footerTone: 'neutral',
  },
  {
    title: 'Labor Cost %',
    value: '28%',
    icon: Percent,
    iconClassName: 'text-[#CA8A04]',
    iconSize: 24,
    footerText: 'Target: 25%',
    footerTone: 'neutral',
  },
];

export const activeOrdersData: StatusRowItem[] = [
  {
    label: 'In Progress',
    count: 12,
    rowClassName: 'bg-[#EEF3FA]',
    badgeClassName: 'bg-[#2563EB] text-white',
  },
  {
    label: 'Delayed',
    count: 3,
    rowClassName: 'bg-[#F7EEF1]',
    badgeClassName: 'bg-[#EA0000] text-white',
  },
  {
    label: 'Delivered',
    count: 5,
    rowClassName: 'bg-[#EEF8F2]',
    badgeClassName: 'bg-[#15B34A] text-white',
  },
];

export const openRequestsData: StatusRowItem[] = [
  {
    label: 'Active',
    count: 6,
    rowClassName: 'bg-[#EEF2F7]',
    badgeClassName: 'bg-[#475569] text-white',
  },
  {
    label: 'Urgent',
    count: 2,
    rowClassName: 'bg-[#F7F2EC]',
    badgeClassName: 'bg-[#FF5A00] text-white',
  },
  {
    label: 'Pending Approval',
    count: 1,
    rowClassName: 'bg-[#F9F8EE]',
    badgeClassName: 'bg-[#D79C00] text-white',
  },
];

export const alertsData: StatusRowItem[] = [
  {
    label: 'Low inventory: Chicken',
    rowClassName: 'bg-[#F8EEF0]',
    alertBorderClassName: 'border-l-4 border-l-[#FF4D4F]',
  },
  {
    label: 'Labor over target',
    rowClassName: 'bg-[#F7F2EC]',
    alertBorderClassName: 'border-l-4 border-l-[#FF8A00]',
  },
  {
    label: 'Slow service flagged',
    rowClassName: 'bg-[#F8F7EA]',
    alertBorderClassName: 'border-l-4 border-l-[#DAB000]',
  },
];

export const requestsSnapshotData: SnapshotItem[] = [
  { label: 'New Requests', value: 4, rowClassName: 'bg-[#F3F4F6]', valueClassName: 'text-[#18181B]' },
  { label: 'In Progress', value: 6, rowClassName: 'bg-[#EEF3FA]', valueClassName: 'text-[#1E3A8A]' },
  { label: 'Completed', value: 23, rowClassName: 'bg-[#EEF8F2]', valueClassName: 'text-[#166534]' },
];

export const ordersSnapshotData: SnapshotItem[] = [
  { label: 'Orders Today', value: 12, rowClassName: 'bg-[#F3F4F6]', valueClassName: 'text-[#18181B]' },
  { label: 'Deliveries Incoming', value: 3, rowClassName: 'bg-[#F3EEF8]', valueClassName: 'text-[#6B21A8]' },
  { label: 'Pending Items', value: 5, rowClassName: 'bg-[#F8F4EE]', valueClassName: 'text-[#92400E]' },
];

export const inventoryHealthData: InventoryHealthItem[] = [
  { name: 'Chicken', status: 'Low', rowClassName: 'bg-[#F3F4F6]', badgeClassName: 'bg-[#FF3500] text-white' },
  { name: 'Rice', status: 'Normal', rowClassName: 'bg-[#F3F4F6]', badgeClassName: 'bg-[#00BD72] text-white' },
  { name: 'Packaging', status: 'Low', rowClassName: 'bg-[#F3F4F6]', badgeClassName: 'bg-[#FF3500] text-white' },
  { name: 'Oil', status: 'High', rowClassName: 'bg-[#F3F4F6]', badgeClassName: 'bg-[#00BD72] text-white' },
];

export const inventoryNoticesData: NoticeItem[] = [
  {
    text: 'You may run out of chicken in 2 days based on current usage',
    rowClassName: 'bg-[#F8F7EA]',
    borderClassName: 'border-l-4 border-l-[#DAB000]',
    iconClassName: 'text-[#DAB000]',
  },
];

export const staffingSnapshotData: SnapshotItem[] = [
  { label: 'Staff Scheduled Today', value: 14, rowClassName: 'bg-[#F3F4F6]', valueClassName: 'text-[#18181B]' },
  { label: 'Missing Positions', value: 2, rowClassName: 'bg-[#F3F4F6]', valueClassName: 'text-[#6B21A8]' },
  { label: 'Overtime Alerts', value: 3, rowClassName: 'bg-[#F3F4F6]', valueClassName: 'text-[#92400E]' },
];

export const staffingNoticesData: NoticeItem[] = [
  {
    text: 'You are overstaffed during lunch hours',
    rowClassName: 'bg-[#F8F4EE]',
    borderClassName: 'border-l-4 border-l-[#F97316]',
    iconClassName: 'text-[#F97316]',
  },
  {
    text: 'Need 2 more evening staff',
    rowClassName: 'bg-[#F8EEF0]',
    borderClassName: 'border-l-4 border-l-[#FF4D4F]',
    iconClassName: 'text-[#FF4D4F]',
  },
];

export const hosperraIntelligenceData: IntelligenceInsightItem[] = [
  {
    text: 'Food cost is above target by 4%',
    rowClassName: 'bg-[#F8EEF0]',
    borderClassName: 'border-l-4 border-l-[#FF4D4F]',
    icon: AlertCircle,
    iconClassName: 'text-[#FF4D4F]',
  },
  {
    text: "Menu item 'Burger X' has low margin",
    rowClassName: 'bg-[#F8EEF0]',
    borderClassName: 'border-l-4 border-l-[#F97316]',
    icon: AlertCircle,
    iconClassName: 'text-[#F97316]',
  },
  {
    text: 'Instagram activity is low this week',
    rowClassName: 'bg-[#EEF3FA]',
    borderClassName: 'border-l-4 border-l-[#2563EB]',
    icon: TrendingUp,
    iconClassName: 'text-[#2563EB]',
  },
  {
    text: 'Switching supplier can reduce cost by 8%',
    rowClassName: 'bg-[#F3EEF8]',
    borderClassName: 'border-l-4 border-l-[#9333EA]',
    icon: Sparkles,
    iconClassName: 'text-[#9333EA]',
  },
  {
    text: 'Business shows potential for expansion',
    rowClassName: 'bg-[#EEF8F2]',
    borderClassName: 'border-l-4 border-l-[#22C55E]',
    icon: Sparkles,
    iconClassName: 'text-[#22C55E]',
  },
];

/** Intelligence dashboard page (`/dashboard/intelligence`) */

export type IntelligenceSummaryStat = {
  label: string;
  value: string;
  valueClassName?: string;
};

export type IntelligenceCriticalAlertItem = {
  id: string;
  variant: 'danger' | 'warning';
  category: string;
  title: string;
  description: string;
  impact: string;
  actionLabel: string;
};

export type IntelligenceAiRecommendationItem = {
  id: string;
  tag: string;
  priority: 'High' | 'Medium';
  title: string;
  description: string;
  benefit: string;
};

export type GrowthOpportunityItem = {
  id: string;
  title: string;
  effort: string;
  description: string;
  gain: string;
};

export const intelligencePageStats: IntelligenceSummaryStat[] = [
  { label: 'Active Alerts', value: '3', valueClassName: 'text-[#E7000B]' },
  { label: 'Recommendations', value: '4' },
  { label: 'Growth Opportunities', value: '4' },
  { label: 'Potential Savings', value: '$2.9K/mo' },
];

export const intelligenceCriticalAlerts: IntelligenceCriticalAlertItem[] = [
  {
    id: '1',
    variant: 'danger',
    category: 'Cost Control',
    title: 'Food cost trending up',
    description: 'Food costs increased 4% this week. Chicken prices up 12%.',
    impact: 'Impact: Could cost $800/month',
    actionLabel: 'Review supplier contracts',
  },
  {
    id: '2',
    variant: 'warning',
    category: 'Operations',
    title: 'Wait times increasing',
    description: 'Average wait time is 8 minutes longer during dinner rush.',
    impact: 'Impact: Affecting customer satisfaction',
    actionLabel: 'Add expediter during peak hours',
  },
  {
    id: '3',
    variant: 'danger',
    category: 'Staffing',
    title: 'Weekend understaffing',
    description: 'Operating at 85% staff capacity on Fridays and Saturdays.',
    impact: 'Impact: Lost revenue: ~$1,200/week',
    actionLabel: 'Hire 2 additional staff',
  },
];

export const intelligenceAiRecommendations: IntelligenceAiRecommendationItem[] = [
  {
    id: '1',
    tag: 'Pricing',
    priority: 'High',
    title: 'Adjust Wagyu Burger price',
    description: 'Current margin is 37%. Increase price by $2 to reach 45% margin.',
    benefit: '+$280/month',
  },
  {
    id: '2',
    tag: 'Staffing',
    priority: 'High',
    title: 'Reduce lunch shift staff',
    description: 'Overstaffed by 2 people during lunch. Optimize scheduling.',
    benefit: 'Save $2,400/month',
  },
  {
    id: '3',
    tag: 'Suppliers',
    priority: 'Medium',
    title: 'Switch chicken supplier',
    description: 'Poultry Plus offers same quality at 8% lower cost.',
    benefit: 'Save $200/month',
  },
  {
    id: '4',
    tag: 'Menu',
    priority: 'Medium',
    title: 'Remove underperforming items',
    description: 'Lobster Bisque has low sales and high cost. Consider seasonal rotation.',
    benefit: 'Reduce waste by 5%',
  },
];

export const intelligenceGrowthOpportunities: GrowthOpportunityItem[] = [
  {
    id: '1',
    title: 'Expand Happy Hour',
    effort: 'Low Effort',
    description: 'Current happy hour drives 18% of weekday revenue. Extend by 1 hour.',
    gain: '+$3,500/month',
  },
  {
    id: '2',
    title: 'Launch Catering Service',
    effort: 'Medium Effort',
    description: 'High demand in area. 3 competitors with 4+ star ratings.',
    gain: '+$8,000/month',
  },
  {
    id: '3',
    title: 'Add Weekend Brunch',
    effort: 'Medium Effort',
    description: 'Utilize kitchen during off-hours. Local demand shows 200+ searches/month.',
    gain: '+$5,200/month',
  },
  {
    id: '4',
    title: 'Increase Social Media',
    effort: 'Low Effort',
    description: 'Posting frequency below competitors. Boost to 4x/week.',
    gain: '+15% engagement',
  },
];

/** Settings page (`/dashboard/settings`) */

export type SettingsNotificationItem = {
  id: string;
  title: string;
  description: string;
  defaultChecked: boolean;
};

export type SettingsOperatingHourRow = {
  id: string;
  label: string;
  value: string;
};

export const settingsBusinessDefaults = {
  businessName: 'Restaurant Name',
  businessType: 'Fine Dining Restaurant',
  address: '123 Main Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'contact@restaurant.com',
} as const;

export const settingsContactDefaults = {
  ownerName: 'John Doe',
  ownerEmail: 'john@restaurant.com',
  managerName: 'Jane Smith',
  managerPhone: '+1 (555) 987-6543',
} as const;

export const settingsNotificationItems: SettingsNotificationItem[] = [
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
];

export const settingsOperatingHours: SettingsOperatingHourRow[] = [
  { id: '1', label: 'Monday – Thursday', value: '11:00 AM - 10:00 PM' },
  { id: '2', label: 'Friday', value: '11:00 AM - 11:00 PM' },
  { id: '3', label: 'Saturday', value: '10:00 AM - 11:00 PM' },
  { id: '4', label: 'Sunday', value: '10:00 AM - 9:00 PM' },
];

export const settingsBilling = {
  planName: 'Professional Plan',
  planPrice: '$199/month',
  cardMasked: '**** **** **** 4242',
  cardExpires: 'Expires 12/2026',
} as const;
