import { gql } from '@apollo/client';

export const SUBMIT_BRAND_FORM = gql`
  mutation SubmitBrandForm($formId: Int!, $brandId: Int!, $data: JSON!, $file: Upload) {
    submitBrandForm(form_id: $formId, brand_id: $brandId, data: $data, file: $file) {
      id
      form_id
      partner_id
      brand_id
      is_business
      brand {
        id
        name
        description
        image
        category_id
        domain_url
        status
        createdAt
        updatedAt
      }
      subdomain
      data
      processed
      submitted_at
      user_id
      stripe_customer_id
      stripe_client_secret
      user {
        user_id
        user_first_name
        email
        user_last_name
        user_type
        phone
        user_account_status
      }
    }
  }
`;

export const PROCESS_SUBMISSION = gql`
  mutation ProcessSubmission($submissionId: Int!, $brandId: Int!) {
    processSubmission(submission_id: $submissionId, brand_id: $brandId) {
      id
      form_id
      partner_id
      brand_id
      is_business
      data
      processed
      submitted_at
      user_id
      stripe_customer_id
      stripe_client_secret
      subscription {
        id
        user_id
        plan_id
        stripesubscriptionid
        status
        currentperiodstart
        currentperiodend
        createdAt
        updatedAt
        stripeplanid
        stripepriceid
        seats
        joining_fee_charged
        plan {
          plan_id
          name
          price
          seats_limit
          stripeplanid
          stripepriceid
          description
          monthly_fee
          per_user_joining_fee
          per_user_monthly_fee
        }
      }
      user {
        user_id
        user_first_name
        email
        user_last_name
        user_type
        phone
        user_account_status
      }
    }
  }
`;
