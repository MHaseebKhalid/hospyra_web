import { FieldStyle, SelectOption, FieldValidation, FieldValue } from './common';

export interface FormField {
  id: string;
  name?: string;
  type: string;
  label: string;
  style?: FieldStyle;
  options?: (string | SelectOption)[];
  required?: boolean;
  validation?: FieldValidation;
  placeholder?: string;
  isSystemField?: boolean;
  showOnlyInPreview?: boolean;
  value?: FieldValue;
}

export interface Brand {
  id: number;
  name: string;
  description: string;
  image: string;
  category_id: number;
  domain_url: string;
  createdAt: string;
  updatedAt: string;
}

export interface FormHandler {
  id: number;
  partner_id: number;
  service_id: number;
  brand_id: number;
  is_business: boolean;
  brand: Brand;
  service_url: string;
  form_data: FormField[];
  created_at: string;
  updated_at: string;
}

/** Shape returned by getFormHandlersByPartnerId (may omit brand / is_business). */
export interface PartnerFormHandler {
  id: number;
  partner_id: number;
  service_id: number;
  brand_id: number;
  service_url?: string;
  form_data: FormField[];
  created_at: string;
  updated_at: string;
}
