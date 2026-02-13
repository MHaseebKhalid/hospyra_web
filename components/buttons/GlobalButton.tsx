'use client'
import React from "react";

type Props = {
  title: string;
  width?: string;
  height?: string;
  font?: string;
  color?: string;
  icon?: React.ReactElement; 
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderRadius?: string;
  className?: string;
  onClick?: (e: React.FormEvent) => void;
};

const GlobalButton = ({
  width,
  title,
  height = '50px',
  className,
  borderColor,
  borderWidth,
  icon,
  font = "400",
  color = "#27272A",
  borderRadius = '50px',
  bgColor,
  onClick,
}: Props) => {

  const defaultBg = bgColor || "#fff";

  return (
    <div
      style={{
        width,
        height,
        color,
        borderRadius,
        fontWeight: font,
        background: defaultBg,
        border: `${borderWidth || "0px"} solid ${borderColor || "transparent"}`,
        userSelect: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={`gap-2 ${className} text-[15px] max-[540px]:text-[13px] tracking-[0.1px]`}
      onClick={onClick}
    >
      {title}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </div>
  );
};

export default GlobalButton;