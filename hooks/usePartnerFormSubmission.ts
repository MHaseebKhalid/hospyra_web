'use client';

import { useState } from 'react';
import { apolloClient } from '@/lib/apolloClient';
import { SUBMIT_FORM, PROCESS_SUBMISSION } from '@/graphql/mutations/formSubmission';
import type { FormDataRecord, UploadFile } from '@/types/common';

interface SubmitFormParams {
  formId: number;
  brandId: number;
  data: FormDataRecord;
  file?: UploadFile | null;
}

interface ProcessSubmissionParams {
  submissionId: number;
  brandId: number;
}

interface SubmitPartnerPayload {
  id?: number;
  brand_id?: number;
  stripe_client_secret?: string | null;
  user_id?: number | null;
  [key: string]: unknown;
}

export function usePartnerFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (params: SubmitFormParams) => {
    const result = await apolloClient.mutate({
      mutation: SUBMIT_FORM,
      variables: {
        formId: params.formId,
        brandId: params.brandId,
        data: params.data,
        file: params.file ?? null,
      },
      errorPolicy: 'all',
    });

    if (result.errors?.length) {
      throw new Error(result.errors[0]?.message || 'GraphQL error during submitForm');
    }

    return result.data?.submitForm as SubmitPartnerPayload | undefined;
  };

  const processSubmission = async (params: ProcessSubmissionParams) => {
    const result = await apolloClient.mutate({
      mutation: PROCESS_SUBMISSION,
      variables: {
        submissionId: params.submissionId,
        brandId: params.brandId,
      },
      errorPolicy: 'all',
    });

    if (result.errors?.length) {
      console.error('processSubmission GraphQL errors:', result.errors);
      return null;
    }

    return result.data?.processSubmission as SubmitPartnerPayload | null;
  };

  const submitAndProcessForm = async (params: SubmitFormParams) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const submitResult = await submitForm(params);

      if (submitResult?.id != null) {
        const submissionId = submitResult.id;
        const submissionBrandId = submitResult.brand_id;
        if (submissionBrandId == null) {
          const msg = 'Submission missing brand id.';
          setError(msg);
          return { ok: false as const, error: msg };
        }

        if (submitResult.stripe_client_secret) {
          localStorage.setItem('clientSecret', String(submitResult.stripe_client_secret));
        }
        if (submitResult.user_id != null) {
          localStorage.setItem('userId', String(submitResult.user_id));
        }

        const processResult = await processSubmission({
          submissionId,
          brandId: submissionBrandId,
        });

        if (processResult?.stripe_client_secret) {
          localStorage.setItem('clientSecret', String(processResult.stripe_client_secret));
        }
        if (processResult?.user_id != null) {
          localStorage.setItem('userId', String(processResult.user_id));
        }

        return { ok: true as const, submitResult, processResult };
      }

      const msg = 'Form submission failed — no submission id returned.';
      setError(msg);
      return { ok: false as const, error: msg };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Error submitting form';
      setError(message);
      return { ok: false as const, error: message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitAndProcessForm,
    isSubmitting,
    error,
  };
}
