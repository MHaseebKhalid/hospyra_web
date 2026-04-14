'use client';

import { useState } from 'react';
import GlobalButton from '@/components/buttons/GlobalButton';
import DashInput from '@/components/dashboard/DashInput';
import { Modal, ModalPanel } from '@/components/ui/modal';

type AddStaffMemberModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AddStaffMemberModal = ({ open, onOpenChange }: AddStaffMemberModalProps) => {
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [shift, setShift] = useState('');
  const [hourlyWage, setHourlyWage] = useState('');
  const [weeklyHours, setWeeklyHours] = useState('');

  const handleClose = () => onOpenChange(false);

  const handleSubmit = () => {
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Add Staff Member"
        headingClassName="text-2xl"
        className="max-w-xl rounded-3xl p-6 overflow-hidden"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-[#52525B] font-effra text-base">
            Add a new employee to your team with their role, shift, and compensation details.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <DashInput
              label="Full Name"
              isRequired
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g., John Smith"
            />
            <DashInput
              label="Role"
              isRequired
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <DashInput
              label="Shift"
              isRequired
              value={shift}
              onChange={(e) => setShift(e.target.value)}
            />
            <DashInput
              label="Hourly Wage"
              isRequired
              value={hourlyWage}
              onChange={(e) => setHourlyWage(e.target.value)}
              placeholder="0.00"
            />
            <DashInput
              label="Weekly Hours"
              isRequired
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(e.target.value)}
              placeholder="40"
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <GlobalButton
              title="Cancel"
              borderRadius="10px"
              height="44px"
              borderWidth="1px"
              borderColor="#E5E7EB"
              bgColor="#FFFFFF"
              color="#111827"
              className="font-effra px-5"
              onClick={handleClose}
            />
            <GlobalButton
              title="Add Staff Member"
              borderRadius="10px"
              height="44px"
              bgColor="#020617"
              color="#FFFFFF"
              className="font-effra px-5"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </ModalPanel>
    </Modal>
  );
};

export default AddStaffMemberModal;
