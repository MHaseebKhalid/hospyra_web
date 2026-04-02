'use client';

import { useState } from 'react';
import { apolloClient } from '@/lib/apolloClient';
import { SUBMIT_BRAND_FORM, PROCESS_SUBMISSION } from '@/graphql/mutations/formSubmission';
import { FormDataRecord, UploadFile } from '@/types/common';

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

interface SubmitResult {
  submitResult: Record<string, unknown> | null;
  processResult: Record<string, unknown> | null;
}

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBrandForm = async (params: SubmitFormParams) => {
    try {
      const result = await apolloClient.mutate({
        mutation: SUBMIT_BRAND_FORM,
        variables: {
          formId: params.formId,
          brandId: params.brandId,
          data: params.data,
          file: params.file || null,
        },
        errorPolicy: 'all',
      });

      if (result.errors?.length) {
        console.error('submitBrandForm GraphQL errors:', result.errors);
        throw new Error(result.errors[0]?.message || 'GraphQL error during form submission');
      }

      return result.data?.submitBrandForm;
    } catch (err) {
      console.error('submitBrandForm error:', err);
      throw err;
    }
  };

  const processSubmission = async (params: ProcessSubmissionParams) => {
    try {
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

      return result.data?.processSubmission;
    } catch (err) {
      console.error('processSubmission error:', err);
      return null;
    }
  };

  const submitAndProcessForm = async (params: SubmitFormParams): Promise<SubmitResult | null> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const submitResult = await submitBrandForm(params);

      if (submitResult?.id) {
        const submissionId = submitResult.id;
        const submissionBrandId = submitResult.brand_id;

        if (submitResult.stripe_client_secret) {
          localStorage.setItem('clientSecret', submitResult.stripe_client_secret);
        }
        if (submitResult.user_id) {
          localStorage.setItem('userId', submitResult.user_id.toString());
        }

        const processResult = await processSubmission({
          submissionId,
          brandId: submissionBrandId,
        });

        if (processResult?.stripe_client_secret) {
          localStorage.setItem('clientSecret', processResult.stripe_client_secret);
        }
        if (processResult?.user_id) {
          localStorage.setItem('userId', processResult.user_id.toString());
        }

        return { submitResult, processResult };
      }

      setError('Form submission failed — no submission ID returned.');
      return null;
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error submitting form';
      setError(errorMessage);
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitAndProcessForm,
    isSubmitting,
    error,
  };
};
