type SummaryStatCardProps = {
  label: string;
  value: string;
  valueClassName?: string;
};

const SummaryStatCard = ({ label, value, valueClassName }: SummaryStatCardProps) => {
  return (
    <div className="rounded-2xl border bg-linear-to-b from-[#F9F8F8] to-[#F8F2EF] border-[#EEDFDB] p-5">
      <p className="text-sm text-[#27272A] font-effra">{label}</p>
      <p className={`mt-4 mb-2 text-[26px] font-semibold text-[#0F172A] font-effra ${valueClassName ?? ''}`}>
        {value}
      </p>
    </div>
  );
};

export default SummaryStatCard;
