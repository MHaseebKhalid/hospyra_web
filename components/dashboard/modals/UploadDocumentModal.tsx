'use client';

import { useRef, useState } from 'react';
import GlobalButton from '@/components/buttons/GlobalButton';
import { Modal, ModalPanel } from '@/components/ui/modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type UploadDocumentModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const UploadDocumentModal = ({ open, onOpenChange }: UploadDocumentModalProps) => {
  const [category, setCategory] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClose = () => onOpenChange(false);

  const handleSubmit = () => {
    onOpenChange(false);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Upload Document"
        headingClassName="text-2xl"
        className="max-w-xl rounded-3xl p-6 overflow-hidden"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-[#52525B] font-effra text-sm">
            Upload and organize your business documents for easy access and management.
          </p>

          <div className="mt-5">
            <label className="mb-2 block text-[#111827] font-effra text-sm font-medium">
              Document Category *
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-10! w-full rounded-md border border-transparent bg-[#F3F4F6] px-4 text-sm font-effra">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Invoices">Invoices</SelectItem>
                <SelectItem value="Contracts">Contracts</SelectItem>
                <SelectItem value="Reports">Reports</SelectItem>
                <SelectItem value="Menus">Menus</SelectItem>
                <SelectItem value="Certificates">Certificates</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-[#111827] font-effra text-sm font-medium">
              Select File *
            </label>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            />
            <button
              type="button"
              onClick={openFilePicker}
              className="w-full rounded-md border border-transparent bg-[#F3F4F6] px-4 py-2.5 text-left text-sm text-[#71717A] font-effra"
            >
              {fileName || 'Choose file to upload'}
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-[#93C5FD] bg-[#EFF6FF] p-4">
            <p className="text-lg font-semibold text-[#1F2937] font-effra">Supported formats</p>
            <p className="mt-2 text-sm text-[#374151] font-effra">
              PDF, Word (.doc, .docx), Excel (.xls, .xlsx), CSV, Images (.jpg, .png), Text (.txt)
            </p>
            <p className="mt-2 text-sm text-[#374151] font-effra">Maximum file size: 10 MB</p>
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
              title="Upload Document"
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

export default UploadDocumentModal;
