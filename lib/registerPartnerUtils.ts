import type { Service, SupplyPartner, SupplyPartnerBrand } from '@/types/supplyPartner';

const emptyService: Service = {
  service_name: '',
  domain_url: '',
  description: '',
  service_image: '',
  pricing: 0,
  duration: '',
  availability_slots: '',
  category_id: '',
  categoryName: '',
  createdAt: '',
  updatedAt: '',
};

const emptyBrand: SupplyPartnerBrand = {
  id: '',
  name: '',
  description: '',
  image: '',
  category_id: '',
  domain_url: '',
  status: '',
};

/**
 * Minimal SupplyPartner when only the numeric partner id is known (deep links / overrides).
 * Dynamic form fields come from getFormHandlersByPartnerId.
 */
export function minimalSupplyPartner(partnerId: number, displayName: string): SupplyPartner {
  const idStr = String(partnerId);
  return {
    partner_id: idStr,
    name: displayName,
    description: '',
    service: emptyService,
    brand_id: '',
    brand: emptyBrand,
    image: '',
    is_active: true,
    createdAt: '',
    updatedAt: '',
    created_at: '',
    updated_at: '',
    service_id: '',
  };
}

/** Partners always listed on /register even if getSupplyPartnerByDomain omits them. */
export function getRegisterPartnerOverrides(): SupplyPartner[] {
  const name16 = process.env.NEXT_PUBLIC_REGISTER_PARTNER_16_NAME || 'Supply Partner';
  return [minimalSupplyPartner(16, name16)];
}
