type ProcessingFeeRow = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  unit: string;
};

type ProcessingFeesProps = {
  rows: readonly ProcessingFeeRow[];
  totalAmount: string;
};

const ProcessingFees = ({ rows, totalAmount }: ProcessingFeesProps) => {
  return (
    <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-4">
      <h3 className="text-xl font-semibold text-[#18181B] font-effra">Processing Fees</h3>
      <div className="mt-4 space-y-4">
        {rows.map((fee) => (
          <div key={fee.id} className="flex rounded-xl items-center justify-between bg-[#F9FAFB] px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-[#18181B] font-effra">{fee.title}</p>
              <p className="mt-1 text-xs text-[#71717A] font-effra">{fee.subtitle}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold text-[#18181B] font-effra">{fee.amount}</p>
              <p className="text-[11px] text-[#71717A] font-effra">{fee.unit}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-md font-semibold text-[#18181B] font-effra">Total Processing Fees</p>
        <p className="text-xl font-semibold text-[#18181B] font-effra">{totalAmount}</p>
      </div>
    </div>
  );
};

export default ProcessingFees;
