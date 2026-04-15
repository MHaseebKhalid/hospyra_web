import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Cpu,
  DollarSign,
  FileUp,
  Globe,
  Package,
  Settings,
  Truck,
  Users,
  Utensils,
  Info,
  MapPin,
} from 'lucide-react';

export type ProfileSectionStatus = 'in_progress' | 'needs_attention' | 'synced';

export type ProfileSectionCardData = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  status: ProfileSectionStatus;
  completion: number;
  bullets: [string, string, string, string];
  alertMessage: string | null;
};

export const profileCompletion = {
  percent: 70,
  badgeLabel: 'Strong Profile',
  sectionsCompleted: { current: 0, total: 12 },
  syncedAccounts: 1,
  needsAttention: 6,
} as const;

export const missingItemsData = [
  {
    id: '1',
    title: 'Add cuisine type',
    category: 'General Information',
  },
  {
    id: '2',
    title: 'Upload latest menu',
    category: 'Menu & Products',
  },
  {
    id: '3',
    title: 'Connect Instagram',
    category: 'Marketing & Online Presence',
  },
  {
    id: '4',
    title: 'Add processing fee details',
    category: 'Financials',
  },
  {
    id: '5',
    title: 'Set inventory thresholds',
    category: 'Inventory & Supply',
  },
  {
    id: '6',
    title: 'Confirm business address',
    category: 'Business & Location',
  },
  {
    id: '7',
    title: 'Add vendor contracts',
    category: 'Vendors & Purchasing',
  },
  {
    id: '8',
    title: 'Upload staff handbook',
    category: 'Team & Staffing',
  },
] as const;

export const profileSectionCards: ProfileSectionCardData[] = [
  {
    id: '1',
    title: 'General Information',
    subtitle: 'Core business identity and basics visitors and partners see first.',
    icon: Info,
    status: 'in_progress',
    completion: 65,
    bullets: ['Business type', 'Cuisine', 'Locations', 'Hours'],
    alertMessage: 'Missing cuisine sub-category',
  },
  {
    id: '2',
    title: 'Business & Location',
    subtitle: 'Where you operate and how the neighborhood affects traffic.',
    icon: MapPin,
    status: 'needs_attention',
    completion: 60,
    bullets: ['Address', 'Neighborhood', 'Foot traffic', 'Competitors'],
    alertMessage: 'Address verification pending',
  },
  {
    id: '3',
    title: 'Team & Staffing',
    subtitle: 'How your team is structured and scheduled day to day.',
    icon: Users,
    status: 'in_progress',
    completion: 70,
    bullets: ['Front of house', 'Back of house', 'Total team', 'Scheduling'],
    alertMessage: null,
  },
  {
    id: '4',
    title: 'Menu & Products',
    subtitle: 'Menu coverage, costing, and pricing completeness.',
    icon: Utensils,
    status: 'needs_attention',
    completion: 45,
    bullets: ['Menu items', 'Items with cost', 'Missing cost', 'Missing price'],
    alertMessage: 'Several items missing plate cost',
  },
  {
    id: '5',
    title: 'Vendors & Purchasing',
    subtitle: 'Suppliers you buy from and how purchasing is organized.',
    icon: Truck,
    status: 'in_progress',
    completion: 55,
    bullets: ['Vendors added', 'Invoices uploaded', 'Categories', 'Missing vendors'],
    alertMessage: null,
  },
  {
    id: '6',
    title: 'Inventory & Supply',
    subtitle: 'Stock levels, alerts, and reorder discipline.',
    icon: Package,
    status: 'needs_attention',
    completion: 30,
    bullets: ['Categories tracked', 'Reorder cycle', 'Stock alerts', 'Thresholds'],
    alertMessage: 'Thresholds not set for key SKUs',
  },
  {
    id: '7',
    title: 'Marketing & Online Presence',
    subtitle: 'Channels, reputation, and how often you show up online.',
    icon: Globe,
    status: 'needs_attention',
    completion: 45,
    bullets: ['Connected platforms', 'Google rating', 'Reviews', 'Posting activity'],
    alertMessage: 'Instagram not connected',
  },
  {
    id: '8',
    title: 'Financials',
    subtitle: 'Revenue signals and major cost buckets we can benchmark.',
    icon: DollarSign,
    status: 'in_progress',
    completion: 65,
    bullets: ['Revenue', 'Expense categories', 'Labor cost', 'Fixed cost'],
    alertMessage: null,
  },
  {
    id: '9',
    title: 'Operations',
    subtitle: 'Service model and how the floor runs at peak times.',
    icon: Settings,
    status: 'in_progress',
    completion: 50,
    bullets: ['Service model', 'Peak hours', 'Bottlenecks', 'Common issues'],
    alertMessage: null,
  },
  {
    id: '10',
    title: 'Technology Systems',
    subtitle: 'POS, payments, and integrations that power the business.',
    icon: Cpu,
    status: 'synced',
    completion: 80,
    bullets: ['POS', 'Processor', 'Integrations', 'Online ordering'],
    alertMessage: null,
  },
  {
    id: '11',
    title: 'Customer & Traffic',
    subtitle: 'Who comes in, when, and typical visit patterns.',
    icon: BarChart3,
    status: 'needs_attention',
    completion: 35,
    bullets: ['Daily avg', 'Weekly avg', 'Traffic patterns', 'Customer type'],
    alertMessage: 'Traffic data older than 90 days',
  },
  {
    id: '12',
    title: 'Documents Upload',
    subtitle: 'Menus, invoices, reports, and contracts on file.',
    icon: FileUp,
    status: 'needs_attention',
    completion: 30,
    bullets: ['Menu', 'Invoices', 'Reports', 'Contracts'],
    alertMessage: 'Latest menu PDF not uploaded',
  },
];

export const recentlyUpdatedData = [
  { id: '1', section: 'Team & Staffing', source: 'System Auto-sync', time: '2 hours ago' },
  { id: '2', section: 'Technology Systems', source: 'Olivia M.', time: 'Yesterday' },
  { id: '3', section: 'Financials', source: 'System Auto-sync', time: '3 days ago' },
] as const;

export const intelligenceCtaBullets = [
  'More accurate business scoring',
  'Smarter inventory and labor suggestions',
  'Better marketing and financial benchmarks',
] as const;
