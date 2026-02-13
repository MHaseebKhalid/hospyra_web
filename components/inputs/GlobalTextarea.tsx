"use client"
import React, { useState } from "react";

type props = {
  id?: any;
  ref?: any;
  value?: any;
  title?: string;
  className?: any;
  width?: string;
  height?: string;
  bgColor?: string;
  labelFont?: string;
  placeholder?: string;
  borderRadius?: string;
  labelColor?: string;
  inputClassName?: any;
  error?: undefined | any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  rows?: number;
  required?: boolean;
};

const GlobalTextarea = ({
  id,
  value,
  ref,
  title,
  error,
  onChange,
  onKeyDown,
  onFocus,
  disabled,
  className,
  placeholder,
  inputClassName,
  width = "100%",
  height = "120px",
  labelFont = '400',
  bgColor = "transparent",
  labelColor = "#364153",
  borderRadius = '10px',
  rows = 4,
  required = false,
}: props) => {

  return (
    <div className={`w-full ${className}`} >
      <label style={{ color: labelColor, fontWeight: labelFont }} className="text-[14px]">
        {title}
      </label>
      <textarea
        id={id}
        ref={ref}
        value={value}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        required={required}
        style={{ width: width, height: height, backgroundColor: bgColor, borderRadius: borderRadius }}
        className={`globalinput-placeholder placeholder:text-[13px] mt-1 text-[14px] text-black autofill:text-[#A6A6A6] placeholder:text-[#0A0A0A80] border focus:outline-none block placeholder:font-light border-[#D1D5DC] px-4 py-3 resize-none ${inputClassName}`}
      />
      {error && (
        <div className={`${error ? "mb-1" : ""}`}>
          <span className="text-sm text-red-500 px-1">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default GlobalTextarea;

