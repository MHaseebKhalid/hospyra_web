'use client';

import React from 'react';

interface TopBorderCardProps {
  title: string;
  icon: React.ReactElement;
  count?: string,
  className?: string
}

const TopBorderCard: React.FC<TopBorderCardProps> = ({ title, icon, count, className }) => {
  return (
    <div className={`rounded-[32px] shrink-0 border-t-2 shadow-sm border-[#F05830] p-6 flex flex-col items-center gap-4 ${className}`}>
      <div className="bg-[#F058301A] relative h-16 w-16 rounded-full flex items-center justify-center mr-auto">
        {icon}
        {count && <p className='absolute top-0 -right-1 h-5 w-5 text-[10px] text-white bg-[#F05830] rounded-full flex justify-center items-center'>{count}</p>}
      </div>
      <p className="font-antonio font-semibold text-2xl">{title}</p>
    </div>
  );
};

export default TopBorderCard;