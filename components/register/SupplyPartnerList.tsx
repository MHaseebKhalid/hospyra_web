'use client';

import { SupplyPartnerCard } from '@/components/register/SupplyPartnerCard';
import { useSupplyPartnerList } from '@/hooks/useSupplyPartnerList';
import type { SupplyPartner } from '@/types/supplyPartner';

interface SupplyPartnerListProps {
  onPartnerSelect?: (partner: SupplyPartner) => void;
  selectedPartner?: SupplyPartner | null;
}

export function SupplyPartnerList({ onPartnerSelect, selectedPartner }: SupplyPartnerListProps) {
  const { partners, isLoading, error } = useSupplyPartnerList();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10">
        <div
          className="h-8 w-8 animate-spin rounded-full border-2 border-[#FF6B35] border-t-transparent"
          aria-hidden
        />
        <span className="ml-3 text-gray-600 font-effra text-sm">Loading partners…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800 font-effra text-sm">
        {error}
      </div>
    );
  }

  const list = partners.filter((p) => p?.name && p?.partner_id);

  if (list.length === 0) {
    return (
      <p className="text-center py-10 text-gray-500 font-effra text-sm">No supply partners available.</p>
    );
  }

  return (
    <div className="space-y-3 max-h-[28rem] overflow-y-auto pr-1">
      {list.map((partner) => (
        <SupplyPartnerCard
          key={partner.partner_id}
          supplyPartner={partner}
          onClick={() => onPartnerSelect?.(partner)}
          isSelected={selectedPartner?.partner_id === partner.partner_id}
        />
      ))}
    </div>
  );
}
