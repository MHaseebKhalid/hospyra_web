'use client';

import { useState } from 'react';
import { CircleCheck, Link2, RefreshCw, Upload, Zap } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import BusinessProfileCompletionCard from '@/components/dashboard/BusinessProfileCompletionCard';
import BusinessProfileSectionCard from '@/components/dashboard/BusinessProfileSectionCard';
import BusinessProfileMissingItemsCard from '@/components/dashboard/BusinessProfileMissingItemsCard';
import {
  intelligenceCtaBullets,
  profileSectionCards,
  recentlyUpdatedData,
} from '@/components/dashboard/businessProfileData';
import BusinessProfileUploadModal from '@/components/dashboard/modals/BusinessProfileUploadModal';
import UpdateProfileDataModal from '@/components/dashboard/modals/UpdateProfileDataModal';

const BusinessProfilePage = () => {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-end gap-3">
        <GlobalButton
          title="Upload Document"
          bgColor="#FFFFFF"
          color="#111827"
          borderColor="#E5E7EB"
          borderWidth="1px"
          borderRadius="8px"
          height="40px"
          className="font-effra px-4 text-sm flex-row-reverse"
          icon={<Upload size={16} />}
          onClick={() => setUploadOpen(true)}
        />
        <GlobalButton
          title="Sync Accounts"
          bgColor="#FFFFFF"
          color="#111827"
          borderColor="#E5E7EB"
          borderWidth="1px"
          borderRadius="8px"
          height="40px"
          className="font-effra px-4 text-sm flex-row-reverse"
          icon={<Link2 size={16} />}
          onClick={() => setUpdateOpen(true)}
        />
        <GlobalButton
          title="Update Data"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra px-4 text-sm flex-row-reverse"
          icon={<RefreshCw size={16} />}
          onClick={() => setUpdateOpen(true)}
        />
      </div>

      <BusinessProfileCompletionCard />

      <BusinessProfileMissingItemsCard />

      <div>
        <h2 className="mb-4 text-xl font-semibold text-[#18181B] font-effra">Profile sections</h2>
        <div className="grid gap-4 grid-cols-1 min-[530px]:grid-cols-2 min-[930px]:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {profileSectionCards.map((card) => (
            <BusinessProfileSectionCard key={card.id} data={card} />
          ))}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#EEDFDB] bg-white p-6">
          <h2 className="text-2xl font-semibold text-[#18181B] font-effra">Recently Updated</h2>
          <ul className="mt-4 divide-y divide-[#E5E7EB]">
            {recentlyUpdatedData.map((row) => (
              <li key={row.id} className="py-3 flex justify-between first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-semibold text-[#18181B] font-effra">{row.section}</p>
                  <p className="mt-0.5 text-xs text-[#64748B] font-effra">
                    {row.source}
                  </p>
                </div>
                <p className='text-[#6A7282] text-xs'>{row.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between rounded-2xl bg-[#2563EB] p-6 text-white">
          <div>
            <div className='flex items-center gap-4'>
              <Zap />
              <h2 className="text-2xl font-semibold font-effra">Unlock Full Intelligence</h2>
            </div>
            <p className="mt-2 text-sm pl-10 leading-relaxed text-white/90 font-effra">
              Complete your profile to improve accuracy across scoring, recommendations, and benchmarks.
            </p>
            <ul className="mt-4 space-y-2 pl-10">
              {intelligenceCtaBullets.map((line) => (
                <li key={line} className="flex gap-2 text-white/95 font-effra">
                  <CircleCheck size={18} />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 pl-10">
            <GlobalButton
              title="Complete Profile Now"
              width="180px"
              bgColor="#FFFFFF"
              color="black"
              borderRadius="8px"
              height="44px"
              className="font-effra text-sm"
            />
          </div>
        </div>
      </div>

      <BusinessProfileUploadModal open={uploadOpen} onOpenChange={setUploadOpen} />
      <UpdateProfileDataModal open={updateOpen} onOpenChange={setUpdateOpen} />
    </section>
  );
};

export default BusinessProfilePage;
