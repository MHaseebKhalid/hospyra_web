import * as React from 'react';
import { cn } from '@/lib/utils';

type DashInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const DashInput = ({
  label,
  isRequired = false,
  wrapperClassName,
  labelClassName,
  inputClassName,
  ...props
}: DashInputProps) => {
  return (
    <div className={wrapperClassName}>
      <label className={cn('mb-2 block text-[#111827] font-effra text-sm font-medium', labelClassName)}>
        {label}
        {isRequired ? ' *' : ''}
      </label>
      <input
        {...props}
        className={cn(
          'w-full rounded-md border border-transparent bg-[#F3F4F6] px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#71717A] font-effra outline-none focus:border-[#1E50C1]',
          inputClassName
        )}
      />
    </div>
  );
};

export default DashInput;
