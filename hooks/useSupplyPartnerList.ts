'use client';

import { useState, useEffect } from 'react';
import { apolloClient } from '@/lib/apolloClient';
import { GET_SUPPLY_PARTNER_BY_DOMAIN } from '@/graphql/queries/supplyPartner';
import { getRegisterPartnerOverrides } from '@/lib/registerPartnerUtils';
import type { SupplyPartner } from '@/types/supplyPartner';

function mergeRegisterPartnerOverrides(fetched: SupplyPartner[]): SupplyPartner[] {
  const ids = new Set(fetched.map((p) => p.partner_id));
  const merged = [...fetched];
  for (const extra of getRegisterPartnerOverrides()) {
    if (!ids.has(extra.partner_id)) {
      merged.push(extra);
      ids.add(extra.partner_id);
    }
  }
  return merged;
}

const defaultDomain = () =>
  process.env.NEXT_PUBLIC_SUPPLY_PARTNER_DOMAIN || 'https://hospyra.com';

export function useSupplyPartnerList() {
  const [partners, setPartners] = useState<SupplyPartner[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPartners = async () => {
    setIsLoading(true);
    setError(null);
    const fetchedPartners: SupplyPartner[] = [];

    try {
      const response = await apolloClient.query({
        query: GET_SUPPLY_PARTNER_BY_DOMAIN,
        variables: { domainUrl: defaultDomain() },
        fetchPolicy: 'network-only',
      });

      const raw = response.data?.getSupplyPartnerByDomain;
      if (raw) {
        const list = Array.isArray(raw) ? raw : [raw];
        for (const partner of list) {
          if (partner?.name) {
            fetchedPartners.push(partner as SupplyPartner);
          }
        }
      }
    } catch (e) {
      console.error('useSupplyPartnerList:', e);
      setError('Could not load supply partners.');
    }

    setPartners(mergeRegisterPartnerOverrides(fetchedPartners));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return { partners, isLoading, error, refetch: fetchPartners };
}
