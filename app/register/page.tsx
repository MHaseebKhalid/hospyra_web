'use client';

import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
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
    <main className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-gray-50 to-white px-[4%] py-10 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#27272A] font-effra tracking-tight">
            Supply partner registration
          </h1>
          <p className="mt-2 text-gray-600 font-effra text-sm md:text-base max-w-xl">
            Choose your supply partner, then complete the registration form. Your progress is sent
            securely through Hospyra.
          </p>
        </div>

        {!selectedPartner ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#27272A] font-effra mb-1">
              Choose a supply partner
            </h2>
            <p className="text-sm text-gray-600 font-effra mb-5">
              Select who you are registering with. The form fields are loaded for that partner.
            </p>
            <SupplyPartnerList
              onPartnerSelect={setSelectedPartner}
              selectedPartner={selectedPartner}
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <PartnerRegistrationForm
              partner={selectedPartner}
              onBack={() => setSelectedPartner(null)}
              initialValues={mergedInitialValues}
            />
          </div>
        )}

        <p className="mt-8 text-center text-sm text-gray-500 font-effra">
          <Link href="/" className="text-[#1E50C1] hover:underline">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#FF6B35] border-t-transparent" />
        </div>
      }
    >
      <RegisterContent />
    </Suspense>
  );
}
