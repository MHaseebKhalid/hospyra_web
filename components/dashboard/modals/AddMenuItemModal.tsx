'use client';

import { useState } from 'react';
import GlobalButton from '@/components/buttons/GlobalButton';
import DashInput from '@/components/dashboard/DashInput';
import { Modal, ModalPanel } from '@/components/ui/modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type AddMenuItemModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AddMenuItemModal = ({ open, onOpenChange }: AddMenuItemModalProps) => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const clearForm = () => {
    setItemName('');
    setCategory('');
    setCost('');
    setPrice('');
    setDescription('');
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleSubmit = () => {
    clearForm();
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Add New Menu Item"
        headingClassName="text-2xl"
        className="max-w-xl rounded-3xl p-6 overflow-hidden"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-[#52525B] font-effra text-base md:text-lg">
            Add a new item to your menu with cost and pricing information.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <DashInput
              label="Item Name"
              isRequired
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., Grilled Salmon"
              inputClassName="px-5"
            />

            <div>
              <label className="mb-2 block text-[#111827] font-effra text-sm font-medium">
                Category *
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-10! w-full rounded-md border border-transparent bg-[#F3F4F6] px-5 text-sm font-effra">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Appetizers">Appetizers</SelectItem>
                  <SelectItem value="Mains">Mains</SelectItem>
                  <SelectItem value="Desserts">Desserts</SelectItem>
                  <SelectItem value="Drinks">Drinks</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DashInput
              label="Cost per Item"
              isRequired
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="0.00"
              inputClassName="px-5"
            />

            <DashInput
              label="Menu Price"
              isRequired
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              inputClassName="px-5"
            />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-[#111827] font-effra text-sm font-medium">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of the menu item..."
              rows={4}
              className="w-full resize-none rounded-md border border-transparent bg-[#F3F4F6] px-5 py-3 text-sm text-[#111827] placeholder:text-[#71717A] font-effra outline-none focus:border-[#1E50C1]"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-end gap-3">
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
              title="Add Menu Item"
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

export default AddMenuItemModal;
