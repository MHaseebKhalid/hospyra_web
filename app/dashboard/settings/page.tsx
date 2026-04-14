export default function DashboardSettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#FF6B35] font-effra">
        Settings
      </p>
      <h2 className="text-2xl font-bold text-[#27272A] font-effra md:text-3xl">Account</h2>
      <p className="text-sm text-[#52525b] font-effra md:text-base">
        Profile, notifications, and API keys can live in this section.
      </p>
      <div className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/[0.04]">
        <div className="border-b border-gray-100 pb-4">
          <p className="text-sm font-semibold text-[#27272A] font-effra">Display name</p>
          <p className="mt-1 text-sm text-[#71717a] font-effra">Coming soon</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#27272A] font-effra">Email</p>
          <p className="mt-1 text-sm text-[#71717a] font-effra">Coming soon</p>
        </div>
      </div>
    </div>
  );
}
