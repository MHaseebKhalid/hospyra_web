export interface Country {
  id: string;
  country_name: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface City {
  id: string;
  city_name: string;
  city_country_name: string;
  countryid: string;
  status: string;
  city_image: string;
  city_documents: string;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: string;
  location_type: string;
  country: Country;
  city: City;
  state: string;
}

export interface Service {
  service_id?: string;
  service_name: string;
  domain_url: string;
  description: string;
  status?: string;
  service_image: string;
  brand_id?: string;
  pricing: number;
  duration: string;
  availability_slots: string;
  locations?: Location[];
  category_id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface SupplyPartnerBrand {
  id: string;
  name: string;
  description: string;
  image: string;
  category_id: string;
  domain_url: string;
  status: string;
}

export interface SupplyPartner {
  partner_id: string;
  name: string;
  description: string;
  service: Service;
  brand_id: string;
  brand: SupplyPartnerBrand;
  image: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  created_at: string;
  updated_at: string;
  service_id: string;
}
