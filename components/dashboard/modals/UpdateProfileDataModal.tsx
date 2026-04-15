'use client';

import { CheckCircle2, RefreshCw } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import { Modal, ModalPanel } from '@/components/ui/modal';

const updateItems = [
  'Sales and revenue data',
  'Menu items and pricing',
  'Customer reviews and ratings',
  'Inventory levels',
] as const;

type UpdateProfileDataModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const UpdateProfileDataModal = ({ open, onOpenChange }: UpdateProfileDataModalProps) => {
  const handleClose = () => onOpenChange(false);

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Update Profile Data"
        className="max-w-lg overflow-hidden rounded-2xl p-6"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-sm leading-relaxed text-[#64748B] font-effra">
            Refresh all connected accounts and sync the latest data from your business systems.
          </p>

          <div className="mt-5 flex gap-3 rounded-xl border border-[#BEDBFF] bg-[#EFF6FF] px-4 py-4">
            <div className=" text-[#155DFC] mt-1">
              <RefreshCw className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#101828] font-effra">Auto-sync active</p>
              <p className="mt-1 text-sm text-[#4A5565] font-effra">
                Data from connected accounts is automatically synced every 6 hours.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm font-semibold text-[#111827] font-effra">What will be updated:</p>
          <ul className="mt-3 space-y-3">
            {updateItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[#4A5565] font-effra">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#22C55E]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <GlobalButton
              title="Cancel"
              borderRadius="8px"
              height="44px"
              borderWidth="1px"
              borderColor="#E5E7EB"
              bgColor="#FFFFFF"
              color="#111827"
              font='600'
              className="font-effra min-w-25 px-4 text-sm"
              onClick={handleClose}
            />
            <GlobalButton
              title="Update Now"
              borderRadius="8px"
              height="44px"
              bgColor="#0F172A"
              font={'600'}
              color="#FFFFFF"
              className="font-effra min-w-30 px-4 text-sm"
              onClick={handleClose}
            />
          </div>
        </div>
      </ModalPanel>
    </Modal>
  );
};

export default UpdateProfileDataModal;
