import type { Metric } from '../lib/publication';

// Only selected public-safe evidence references belong here. Originals stay outside Git.
export const metrics: Metric[] = [
  {
    id: 'roblox-pending-oct5', value: '190,969', label: 'pending Robux',
    date: 'October 5, 2023', kind: 'balance',
    definition: 'Pending group balance visible in the supplied screenshot. Date displayed in Apple Photos; not lifetime earnings.',
    reportingPeriod: 'Snapshot; the dashboard’s Day filter is visible.',
    source: '/images/roblox-oct05.webp', verified: true, publicApproved: true,
  },
  {
    id: 'konvo-downloads', value: '1,500+', label: 'first-time downloads',
    date: 'September 21, 2026', kind: 'count',
    definition: 'Reported total; screenshot shows a rounded 1.5K. Original date filter is unresolved.',
    source: '', verified: false, publicApproved: false,
  },
  {
    id: 'konvo-revenue', value: '1,066', label: 'gross revenue',
    date: 'September 21, 2026', kind: 'money',
    definition: 'Reported RevenueCat gross revenue. Matthew confirmed USD and September 21, 2026 as the snapshot date; absolute dates of the Last 28 days reporting window remain unresolved.',
    currency: 'USD',
    source: '', verified: false, publicApproved: false,
  },
];
