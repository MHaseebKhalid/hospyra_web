'use client';

import { useState } from 'react';
import GlobalButton from '@/components/buttons/GlobalButton';
import DashInput from '@/components/dashboard/DashInput';
import { Modal, ModalPanel } from '@/components/ui/modal';

type AddInventoryItemModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const AddInventoryItemModal = ({ open, onOpenChange }: AddInventoryItemModalProps) => {
  const [itemName, setItemName] = useState('');
  const [supplier, setSupplier] = useState('');
  const [costPerUnit, setCostPerUnit] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [unit, setUnit] = useState('');
  const [reorderPoint, setReorderPoint] = useState('');

  const handleClose = () => onOpenChange(false);

  const handleSubmit = () => {
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Add Inventory Item"
        headingClassName="text-2xl"
        className="max-w-xl rounded-3xl p-6 overflow-hidden"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-[#52525B] font-effra text-sm">
            Add a new item to track in your inventory with supplier and reorder information.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <DashInput
              label="Item Name"
              isRequired
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="e.g., Chicken Breast"
            />
            <DashInput
              label="Supplier"
              isRequired
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="e.g., Fresh Farms Co"
            />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <DashInput
              label="Cost Per Unit"
              isRequired
              value={costPerUnit}
              onChange={(e) => setCostPerUnit(e.target.value)}
              placeholder="0.00"
            />
            <DashInput
              label="Current Stock"
              isRequired
              value={currentStock}
              onChange={(e) => setCurrentStock(e.target.value)}
              placeholder="0"
            />
            <DashInput
              label="Unit"
              isRequired
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <DashInput
              label="Reorder Point"
              isRequired
              value={reorderPoint}
              onChange={(e) => setReorderPoint(e.target.value)}
              placeholder="Minimum stock level before reordering"
            />
            <p className="mt-2 text-sm text-[#71717A] font-effra">
              You&apos;ll be alerted when stock falls below this level
            </p>
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
              title="Add Item"
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

export default AddInventoryItemModal;
