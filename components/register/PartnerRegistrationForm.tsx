'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { useFormHandlersByPartnerId } from '@/hooks/useFormHandlersByPartnerId';
import { usePartnerFormSubmission } from '@/hooks/usePartnerFormSubmission';
import type { SupplyPartner } from '@/types/supplyPartner';
import type { FormField } from '@/types/formHandler';
import type { FormDataRecord, FieldValue } from '@/types/common';

interface PartnerRegistrationFormProps {
  partner: SupplyPartner;
  onBack?: () => void;
  initialValues?: {
    email: string;
    name: string;
    phone: string;
    referralCode: string;
    userId?: string;
  };
}

export function PartnerRegistrationForm({
  partner,
  onBack,
  initialValues,
}: PartnerRegistrationFormProps) {
  const router = useRouter();
  const partnerId = partner.partner_id ? parseInt(partner.partner_id, 10) : NaN;
  const validPartnerId = Number.isFinite(partnerId) && partnerId > 0 ? partnerId : null;

  const { formHandlers, isLoading, error } = useFormHandlersByPartnerId(validPartnerId);
  const [formData, setFormData] = useState<FormDataRecord>({});
  const [parsedFields, setParsedFields] = useState<FormField[]>([]);
  const [localError, setLocalError] = useState<string | null>(null);

  const { submitAndProcessForm, isSubmitting } = usePartnerFormSubmission();

  const mapUrlParamToFieldName = (fieldName: string): string[] => {
    const nameLower = fieldName.toLowerCase();
    if (nameLower.includes('email')) return ['email'];
    if (nameLower.includes('name') && !nameLower.includes('username')) {
      if (nameLower.includes('first')) return ['firstName', 'first_name'];
      if (nameLower.includes('last')) return ['lastName', 'last_name'];
      if (nameLower.includes('full')) return ['fullName', 'full_name'];
      return ['name'];
    }
    if (
      nameLower.includes('phone') ||
      nameLower.includes('mobile') ||
      nameLower.includes('tel')
    ) {
      return ['phone', 'phoneNumber', 'phone_number', 'mobile', 'telephone'];
    }
    if (
      nameLower.includes('invite') ||
      nameLower.includes('referral') ||
      (nameLower.includes('code') && !nameLower.includes('zip'))
    ) {
      return ['inviteCode', 'invite_code', 'referralCode', 'referral_code', 'code'];
    }
    return [];
  };

  const normalizeFormElements = (elements: FormField[]): FormField[] =>
    elements.map((element, index) => ({
      id: element.id || `element_${index}`,
      type: element.type || 'text',
      label: element.label || element.name || `Field ${index + 1}`,
      name: element.name,
      placeholder: element.placeholder || '',
      required: element.required || false,
      value: element.value || '',
      options: element.options || [],
      validation: element.validation || {},
      style: element.style || {},
      isSystemField: element.isSystemField || false,
      showOnlyInPreview: element.showOnlyInPreview || false,
    }));

  useEffect(() => {
    setFormData({});
    setParsedFields([]);
    setLocalError(null);

    if (!formHandlers?.length) return;

    const first = formHandlers[0];
    if (!Array.isArray(first.form_data)) return;

    const normalized = normalizeFormElements(first.form_data);
    setParsedFields(normalized);

    const initial: FormDataRecord = {};
    normalized.forEach((field) => {
      initial[field.id] = field.value || '';
      if (!initialValues) return;
      const fieldName = field.name || field.label || '';
      const keys = mapUrlParamToFieldName(fieldName);
      if (keys.includes('email') && initialValues.email) initial[field.id] = initialValues.email;
      else if (keys.includes('name') && initialValues.name) initial[field.id] = initialValues.name;
      else if (
        keys.some((k) =>
          ['phone', 'phoneNumber', 'phone_number', 'mobile', 'telephone'].includes(k),
        ) &&
        initialValues.phone
      ) {
        initial[field.id] = initialValues.phone;
      } else if (
        keys.some((k) =>
          ['inviteCode', 'invite_code', 'referralCode', 'referral_code', 'code'].includes(k),
        ) &&
        initialValues.referralCode
      ) {
        initial[field.id] = initialValues.referralCode;
      }
    });
    setFormData(initial);
  }, [formHandlers, initialValues]);

  const handleInputChange = (fieldId: string, value: FieldValue) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);

    if (!formHandlers?.length) return;

    const handler = formHandlers[0];
    const formId = handler.id;
    const brandId = handler.brand_id || 1;

    const result = await submitAndProcessForm({
      formId,
      brandId,
      data: { ...formData },
      file: null,
    });

    if (!result.ok) {
      setLocalError(result.error);
      return;
    }

    router.push('/');
  };

  if (!validPartnerId) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 font-effra text-sm">
        No valid partner ID was provided.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#FF6B35] border-t-transparent" />
        <span className="ml-3 text-gray-600 font-effra text-sm">Loading form…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800 font-effra text-sm">
        {error}
      </div>
    );
  }

  if (!formHandlers?.length) {
    return (
      <p className="text-center py-10 text-gray-500 font-effra text-sm">
        No registration form is configured for this partner yet.
      </p>
    );
  }

  const renderField = (field: FormField) => {
    const fieldId = field.id;
    const rawValue = formData[fieldId];
    const fieldValue =
      rawValue === null || rawValue === undefined
        ? ''
        : typeof rawValue === 'boolean'
          ? rawValue.toString()
          : rawValue instanceof Date
            ? rawValue.toISOString().split('T')[0]
            : String(rawValue);
    const isChecked = rawValue === true || fieldValue === 'true';
    const fieldType = field.type || 'text';

    const inputClass =
      'w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-effra shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E50C1]/30 focus:border-[#1E50C1]';

    switch (fieldType) {
      case 'text':
      case 'email':
      case 'password':
      case 'tel':
      case 'url':
        return (
          <div key={field.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={fieldType}
              value={fieldValue}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={field.placeholder || ''}
              required={field.required}
              className={inputClass}
            />
          </div>
        );

      case 'textarea':
        return (
          <div key={field.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              value={fieldValue}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={field.placeholder || ''}
              required={field.required}
              rows={4}
              className={inputClass}
            />
          </div>
        );

      case 'select':
      case 'dropdown':
        return (
          <div key={field.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <select
              value={fieldValue}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              required={field.required}
              className={inputClass}
            >
              <option value="">Select {field.label}</option>
              {field.options?.map((option, index) => {
                const optionValue = typeof option === 'string' ? option : String(option.value ?? '');
                const optionLabel =
                  typeof option === 'string' ? option : String(option.label ?? optionValue);
                return (
                  <option key={index} value={optionValue}>
                    {optionLabel}
                  </option>
                );
              })}
            </select>
          </div>
        );

      case 'checkbox':
        return (
          <div key={field.id} className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => handleInputChange(fieldId, e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1E50C1] focus:ring-[#1E50C1]"
            />
            <span className="text-sm text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </span>
          </div>
        );

      case 'radio':
        return (
          <div key={field.id} className="space-y-2">
            <span className="block text-sm font-medium text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </span>
            <div className="space-y-2">
              {field.options?.map((option, index) => {
                const optionValue = typeof option === 'string' ? option : String(option.value ?? '');
                const optionLabel =
                  typeof option === 'string' ? option : String(option.label ?? optionValue);
                return (
                  <label key={index} className="flex items-center gap-2 font-effra text-sm">
                    <input
                      type="radio"
                      name={fieldId}
                      value={optionValue}
                      checked={fieldValue === optionValue}
                      onChange={(e) => handleInputChange(fieldId, e.target.value)}
                      className="h-4 w-4 border-gray-300 text-[#1E50C1] focus:ring-[#1E50C1]"
                    />
                    {optionLabel}
                  </label>
                );
              })}
            </div>
          </div>
        );

      default:
        return (
          <div key={field.id} className="space-y-1.5">
            <label className="block text-sm font-medium text-[#27272A] font-effra">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              value={fieldValue}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={field.placeholder || ''}
              required={field.required}
              className={inputClass}
            />
          </div>
        );
    }
  };

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="mb-6 flex items-center justify-between gap-3">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#27272A] hover:bg-gray-100"
            aria-label="Back to partners"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        ) : (
          <span className="w-10" />
        )}
        <h2 className="text-center text-lg font-semibold text-[#27272A] font-effra">
          Register with {partner.name}
        </h2>
        <span className="w-10" />
      </div>

      {localError && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 font-effra">
          {localError}
        </div>
      )}

      {parsedFields.length > 0 ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {parsedFields.map((field) => renderField(field))}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-lg py-3 text-sm font-medium font-effra text-white transition-colors ${
                isSubmitting
                  ? 'cursor-not-allowed bg-gray-400'
                  : 'bg-[#1E50C1] hover:bg-[#1a47a8]'
              }`}
            >
              {isSubmitting ? 'Submitting…' : 'Submit registration'}
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
