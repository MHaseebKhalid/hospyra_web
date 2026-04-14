import Link from 'next/link';
import { ArrowRight, FileText, Users } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#FF6B35] font-effra">
          Overview
        </p>
        <h2 className="mt-1 text-2xl font-bold text-[#27272A] font-effra md:text-3xl">
          Welcome back
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[#52525b] font-effra md:text-base">
          This is your dashboard shell—add charts, tables, and partner tools here as you connect
          data.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { label: 'Active partners', value: '—', hint: 'Connect your data source' },
          { label: 'Open tasks', value: '—', hint: 'No tasks yet' },
          { label: 'Last updated', value: 'Today', hint: 'Local preview' },
          { label: 'Active partners', value: '—', hint: 'Connect your data source' },
          { label: 'Open tasks', value: '—', hint: 'No tasks yet' },
          { label: 'Last updated', value: 'Today', hint: 'Local preview' },
          { label: 'Active partners', value: '—', hint: 'Connect your data source' },
          { label: 'Open tasks', value: '—', hint: 'No tasks yet' },
          { label: 'Last updated', value: 'Today', hint: 'Local preview' },
        ].map((card, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ring-1 ring-black/4"
          >
            <p className="text-sm font-medium text-[#52525b] font-effra">{card.label}</p>
            <p className="mt-2 text-3xl font-bold text-[#27272A] font-effra">{card.value}</p>
            <p className="mt-2 text-xs text-[#71717a] font-effra">{card.hint}</p>
          </div>
        ))}
      </div>


      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/4">
          <div className="flex items-center gap-2 text-[#27272A] font-effra">
            <Users className="h-5 w-5 text-[#1E50C1]" aria-hidden />
            <h3 className="text-lg font-semibold">Quick actions</h3>
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/register"
                className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 text-sm font-medium text-[#27272A] font-effra transition-colors hover:border-[#1E50C1]/30 hover:bg-[#1E50C1]/5"
              >
                Supply partner registration
                <ArrowRight className="h-4 w-4 text-[#1E50C1]" aria-hidden />
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 text-sm font-medium text-[#27272A] font-effra transition-colors hover:border-[#1E50C1]/30 hover:bg-[#1E50C1]/5"
              >
                Contact Hospyra
                <ArrowRight className="h-4 w-4 text-[#1E50C1]" aria-hidden />
              </Link>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/4">
          <div className="flex items-center gap-2 text-[#27272A] font-effra">
            <FileText className="h-5 w-5 text-[#1E50C1]" aria-hidden />
            <h3 className="text-lg font-semibold">Recent activity</h3>
          </div>
          <p className="mt-6 text-sm text-[#71717a] font-effra">
            Activity will appear here when your backend or integrations are connected.
          </p>
        </div>
      </div>
    </div>
  );
}
