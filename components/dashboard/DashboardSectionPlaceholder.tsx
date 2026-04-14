export function DashboardSectionPlaceholder({
  title,
  description = 'Content for this section will appear here.',
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <h2 className="text-2xl font-bold text-[#27272A] font-effra md:text-3xl">{title}</h2>
      <p className="max-w-2xl text-sm text-[#52525b] font-effra md:text-base">{description}</p>
      <div className="mt-8 flex min-h-50 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-[#fafafa] text-sm text-[#71717a] font-effra">
        Placeholder
      </div>
    </div>
  );
}
