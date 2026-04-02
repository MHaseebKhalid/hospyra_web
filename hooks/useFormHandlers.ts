'use client';

import { useState, useEffect } from 'react';
import { apolloClient } from '@/lib/apolloClient';
import { GET_FORM_HANDLERS_BY_BRAND_ID } from '@/graphql/queries/formHandler';
import { FormHandler } from '@/types/formHandler';

interface UseFormHandlersOptions {
  brandId: number | null;
  isBusiness?: boolean;
}

export const useFormHandlers = ({ brandId, isBusiness }: UseFormHandlersOptions) => {
  const [formHandlers, setFormHandlers] = useState<FormHandler[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFormHandlers = async (id: number, isBiz?: boolean) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apolloClient.query({
        query: GET_FORM_HANDLERS_BY_BRAND_ID,
        variables: { brandId: id, isBusiness: isBiz },
        fetchPolicy: 'network-only',
      });

      if (response.data?.getFormHandlersByBrandId) {
        setFormHandlers(response.data.getFormHandlersByBrandId);
      }
    } catch (err) {
      console.error('fetchFormHandlers error:', err);
      setError('Could not load form.');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (brandId) {
      fetchFormHandlers(brandId, isBusiness);
    }
  }, [brandId, isBusiness]);

  return {
    formHandlers,
    isLoading,
    error,
    refetch: (id: number, isBiz?: boolean) => fetchFormHandlers(id, isBiz),
  };
};
