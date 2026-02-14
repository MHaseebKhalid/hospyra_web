import React from 'react';

type props = {
  title: string,
  color?: string,
  className?: string,
  orangeLabel?: string,
  labelColor?: string,
  titleClassName?: string
}

const TitleCard = ({ title, color = "#27272A", className = "", orangeLabel, labelColor = "#F05830", titleClassName = "" }: props) => {
  return (
    <div className={`${className} text-center`}>
      {orangeLabel && <p style={{ color: labelColor }} className='uppercase'>{orangeLabel}</p>}
      <p style={{ color: color }} className={`text-[54px] max-[1024px]:text-[44px] ${titleClassName} max-[768px]:text-[32px] font-antonio font-bold text-antonio`}>{title}</p>
    </div>
  );
};

export default TitleCard;