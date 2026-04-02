'use client';

import { apolloClient } from '@/lib/apolloClient';
import { GET_SUPPLY_PARTNER_BY_DOMAIN } from '@/graphql/queries/supplyPartner';
import { GET_FORM_HANDLERS_BY_BRAND_ID } from '@/graphql/queries/formHandler';
import { SUBMIT_BRAND_FORM, PROCESS_SUBMISSION } from '@/graphql/mutations/formSubmission';
import { USER_SIGN_IN } from '@/graphql/mutations/userSignIn';
import { GET_SUBSCRIPTION_PLANS } from '@/graphql/queries/subscriptionPlan';
import { CREATE_SUBSCRIPTION } from '@/graphql/mutations/subscription';

export async function fetchSupplyPartnerByDomain(domainUrl: string) {
  const response = await apolloClient.query({
    query: GET_SUPPLY_PARTNER_BY_DOMAIN,
    variables: { domainUrl },
  });
  return response.data;
}

export async function fetchFormHandlersByBrandId(
  brandId: number,
  isBusiness?: boolean
) {
  const response = await apolloClient.query({
    query: GET_FORM_HANDLERS_BY_BRAND_ID,
    variables: { brandId, isBusiness },
    fetchPolicy: 'network-only',
  });
  return response.data?.getFormHandlersByBrandId;
}

export async function submitBrandForm(variables: {
  formId: number;
  brandId: number;
  data: Record<string, unknown>;
  file?: File;
}) {
  const result = await apolloClient.mutate({
    mutation: SUBMIT_BRAND_FORM,
    variables,
  });
  return result.data?.submitBrandForm;
}

export async function processSubmission(submissionId: number, brandId: number) {
  const result = await apolloClient.mutate({
    mutation: PROCESS_SUBMISSION,
    variables: { submissionId, brandId },
  });
  return result.data;
}

export async function userSignIn(userEmail: string, userPassword: string) {
  const result = await apolloClient.mutate({
    mutation: USER_SIGN_IN,
    variables: { userEmail, userPassword },
  });
  return result.data;
}

export async function fetchSubscriptionPlans(variables?: {
  countryid?: number;
  global?: boolean;
  isambassador?: boolean;
}) {
  const response = await apolloClient.query({
    query: GET_SUBSCRIPTION_PLANS,
    variables: variables ?? {},
  });
  return response.data;
}

export async function createSubscription(userId: number, planId: number) {
  const result = await apolloClient.mutate({
    mutation: CREATE_SUBSCRIPTION,
    variables: { userId, planId },
  });
  return result.data;
}
