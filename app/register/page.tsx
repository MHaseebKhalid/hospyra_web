'use client';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SupplyPartnerList } from '@/components/register/SupplyPartnerList';
import { PartnerRegistrationForm } from '@/components/register/PartnerRegistrationForm';
import { minimalSupplyPartner } from '@/lib/registerPartnerUtils';
import type { SupplyPartner } from '@/types/supplyPartner';

function RegisterContent() {
  const searchParams = useSearchParams();
  const [selectedPartner, setSelectedPartner] = useState<SupplyPartner | null>(null);

  const email = searchParams.get('email') || '';
  const name = searchParams.get('name') || '';
  const phone = searchParams.get('phone') || searchParams.get('phoneNumber') || '';
  const referralCode =
    searchParams.get('invite_code') ||
    searchParams.get('inviteCode') ||
    searchParams.get('referral_code') ||
    searchParams.get('referralCode') ||
    '';
  const userId = searchParams.get('userId') || searchParams.get('user_id') || '';
  const partnerIdFromUrl =
    searchParams.get('partnerId') || searchParams.get('partner_id') || '';
  const partnerNameFromUrl = searchParams.get('partnerName') || '';

  const mergedInitialValues = useMemo(
    () => ({
      email,
      name,
      phone,
      referralCode,
      userId,
    }),
    [email, name, phone, referralCode, userId],
  );

  useEffect(() => {
    const id = parseInt(partnerIdFromUrl, 10);
    if (!Number.isFinite(id) || id < 1) return;
    const displayName =
      partnerNameFromUrl.trim() ||
      process.env.NEXT_PUBLIC_REGISTER_PARTNER_16_NAME ||
      (id === 16 ? 'Supply Partner' : `Partner ${id}`);
    setSelectedPartner(minimalSupplyPartner(id, displayName));
  }, [partnerIdFromUrl, partnerNameFromUrl]);

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-linear-to-b from-[#FFF7F5] via-white to-[#F8F7F7] px-[4%] py-10 md:py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#FF6B35] font-effra mb-2">
            Registration
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#27272A] font-effra tracking-tight">
            Supply partner registration
          </h1>
          <p className="mt-3 text-base text-[#52525b] font-effra max-w-xl leading-relaxed">
            Choose your supply partner, then complete the registration form. Your progress is sent
            securely through Hospyra.
          </p>
        </div>

        {!selectedPartner ? (
          <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 ring-1 ring-black/4">
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h2 className="text-xl font-bold text-[#27272A] font-effra">
                Choose a supply partner
              </h2>
              <p className="mt-2 text-sm text-[#52525b] font-effra leading-relaxed">
                Select who you are registering with. The form fields are loaded for that partner.
              </p>
            </div>
            <SupplyPartnerList
              onPartnerSelect={setSelectedPartner}
              selectedPartner={selectedPartner}
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-lg shadow-gray-200/50 ring-1 ring-black/4">
            <PartnerRegistrationForm
              partner={selectedPartner}
              onBack={() => setSelectedPartner(null)}
              initialValues={mergedInitialValues}
            />
          </div>
        )}

        <div className="mt-10 flex justify-center pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium font-effra text-[#27272A] shadow-sm hover:border-[#1E50C1]/30 hover:bg-[#1E50C1]/5 hover:text-[#1E50C1] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-linear-to-b from-[#FFF7F5] to-white">
          <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#FF6B35] border-t-transparent" />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
