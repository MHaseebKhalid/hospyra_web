type ExpenseBreakdownRow = {
  id: string;
  name: string;
  percent: number;
  amount: string;
};

type ExpenseBreakdownProps = {
  rows: readonly ExpenseBreakdownRow[];
  totalAmount: string;
};

const ExpenseBreakdown = ({ rows, totalAmount }: ExpenseBreakdownProps) => {
  return (
    <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-5">
      <h3 className="text-xl font-semibold text-[#18181B] font-effra">Expense Breakdown</h3>
      <div className="mt-4 space-y-4">
        {rows.map((row) => (
          <div key={row.id}>
            <div className="mb-1 flex items-center justify-between text-sm font-effra">
              <p className="text-[#1F2937]">{row.name}</p>
              <p className="text-[#111827]">
                <span className="mr-2 text-[#6B7280]">{row.percent}%</span>
                <span className="font-semibold">{row.amount}</span>
              </p>
            </div>
            <div className="h-2 rounded-full bg-[#E5E7EB]">
              <div
                className="h-2 rounded-full bg-[#1E50C1]"
                style={{ width: `${Math.min(row.percent * 3, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
        <p className="text-md font-semibold text-[#18181B] font-effra">Total Expenses</p>
        <p className="text-xl font-semibold text-[#18181B] font-effra">{totalAmount}</p>
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
