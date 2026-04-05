'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import type { FormField } from '@/types/formHandler'

type Option = NonNullable<FormField['options']>[number]

function normalizeOptions(options?: Option[]): { value: string; label: string }[] {
  if (!options?.length) return []
  const out: { value: string; label: string }[] = []
  for (const o of options) {
    const value = typeof o === 'string' ? o : String((o as { value?: string }).value ?? '')
    const label = typeof o === 'string' ? o : String((o as { label?: string }).label ?? value)
    if (value) out.push({ value, label })
  }
  return out
}

interface FormFieldSelectProps {
  fieldId: string
  label: string
  required?: boolean
  value: string
  options?: Option[]
  onValueChange: (value: string) => void
  error?: string
  /** Raise z-index so the list appears above a modal overlay */
  inModal?: boolean
  /** Outer wrapper classes (e.g. mb-4 for modal, space-y-1.5 for register) */
  className?: string
  triggerClassName?: string
}

export function FormFieldSelect({
  fieldId,
  label,
  required,
  value,
  options,
  onValueChange,
  error,
  inModal,
  className,
  triggerClassName,
}: FormFieldSelectProps) {
  const normalized = normalizeOptions(options)
  const validValues = new Set(normalized.map((o) => o.value))
  const selected = value && validValues.has(value) ? value : undefined

  if (normalized.length === 0) {
    return (
      <div className={cn('space-y-1.5', className)}>
        <label className="block text-sm font-medium text-[#27272A] font-effra">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <p className="text-sm text-gray-500 font-effra rounded-lg border border-dashed border-gray-200 px-3 py-2.5">
          No options available for this field.
        </p>
        {error ? (
          <p className="text-xs text-red-600 font-effra">{error}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className={cn('space-y-1.5', className)}>
      <label className="block text-sm font-medium text-[#27272A] font-effra">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Select value={selected} onValueChange={onValueChange}>
        <SelectTrigger
          className={cn(
            'w-full h-auto min-h-10 py-2.5 font-effra border-gray-300 bg-white shadow-sm',
            'focus:ring-2 focus:ring-[#1E50C1]/30 focus:border-[#1E50C1]',
            error && 'border-red-500 focus:ring-red-500/20',
            triggerClassName
          )}
        >
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent
          className={cn(
            'font-effra max-h-[min(280px,var(--radix-select-content-available-height))]',
            inModal && 'z-200'
          )}
          position="popper"
        >
          {normalized.map((opt) => (
            <SelectItem key={`${fieldId}-${opt.value}`} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error ? (
        <p className="text-xs text-red-600 font-effra">{error}</p>
      ) : null}
    </div>
  )
}
