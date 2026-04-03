import { gql } from '@apollo/client';

export const GET_FORM_HANDLERS_BY_PARTNER_ID = gql`
  query GetFormHandlersByPartnerId($partnerId: Int!) {
    getFormHandlersByPartnerId(partnerId: $partnerId) {
      id
      partner_id
      service_id
      brand_id
      service_url
      form_data
      created_at
      updated_at
    }
  }
`;

export const GET_FORM_HANDLERS_BY_BRAND_ID = gql`
  query GetFormHandlersByBrandId($brandId: Int!, $isBusiness: Boolean) {
    getFormHandlersByBrandId(brandId: $brandId, is_business: $isBusiness) {
      id
      partner_id
      service_id
      brand_id
      is_business
      brand {
        id
        name
        description
        image
        category_id
        domain_url
        createdAt
        updatedAt
      }
      service_url
      form_data
      created_at
      updated_at
    }
  }
`;
