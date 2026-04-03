'use client';

import { useState, useEffect, useCallback } from 'react';
import { apolloClient } from '@/lib/apolloClient';
import { GET_FORM_HANDLERS_BY_PARTNER_ID } from '@/graphql/queries/formHandler';
import type { PartnerFormHandler } from '@/types/formHandler';

export function useFormHandlersByPartnerId(partnerId: number | null) {
  const [formHandlers, setFormHandlers] = useState<PartnerFormHandler[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFormHandlers = useCallback(async (id: number) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await apolloClient.query({
        query: GET_FORM_HANDLERS_BY_PARTNER_ID,
        variables: { partnerId: id },
        fetchPolicy: 'network-only',
      });

      if (response.data?.getFormHandlersByPartnerId) {
        setFormHandlers(response.data.getFormHandlersByPartnerId);
      } else {
        setFormHandlers([]);
      }
    } catch (err) {
      console.error('useFormHandlersByPartnerId:', err);
      setError('Could not load registration form.');
      setFormHandlers([]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (partnerId) {
      fetchFormHandlers(partnerId);
    } else {
      setFormHandlers([]);
    }
  }, [partnerId, fetchFormHandlers]);

  return {
    formHandlers,
    isLoading,
    error,
    refetch: fetchFormHandlers,
  };
}
