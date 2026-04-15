'use client';

import { useRef, useState } from 'react';
import { CloudUpload } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import { Modal, ModalPanel } from '@/components/ui/modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type BusinessProfileUploadModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const BusinessProfileUploadModal = ({ open, onOpenChange }: BusinessProfileUploadModalProps) => {
  const [docType, setDocType] = useState('Menu');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClose = () => onOpenChange(false);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalPanel
        headingText="Upload Document"
        className="max-w-xl overflow-hidden rounded-2xl p-6"
        onClose={handleClose}
      >
        <div className="max-h-[calc(90vh-120px)] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className="text-sm leading-relaxed text-[#64748B] font-effra">
            Upload business documents such as menus, invoices, reports, or contracts for deeper analysis.
          </p>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#111827] font-effra">Document Type</label>
            <Select value={docType} onValueChange={setDocType}>
              <SelectTrigger className="h-11! w-full rounded-lg border border-transparent bg-[#F3F4F6] px-4 text-sm font-effra">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Menu">Menu</SelectItem>
                <SelectItem value="Invoice">Invoice</SelectItem>
                <SelectItem value="Report">Report</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#111827] font-effra">Select File</label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              className="hidden"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
            />
            <button
              type="button"
              onClick={openFilePicker}
              className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#D1D5DB] bg-[#FAFAFA] px-4 py-10 transition-colors hover:bg-[#F3F4F6]"
            >
              <CloudUpload className="h-10 w-10 text-[#64748B]" aria-hidden />
              <span className="mt-3 text-sm font-semibold text-[#2563EB] font-effra">Click to upload</span>
              <span className="mt-1 text-xs text-[#64748B] font-effra">PDF, PNG, or JPG</span>
              {fileName ? (
                <span className="mt-2 max-w-full truncate text-xs text-[#111827] font-effra">{fileName}</span>
              ) : null}
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <GlobalButton
              title="Cancel"
              borderRadius="8px"
              height="44px"
              borderWidth="1px"
              borderColor="#E5E7EB"
              bgColor="#FFFFFF"
              font='600'
              color="#111827"
              className="font-effra min-w-25 px-4 text-sm"
              onClick={handleClose}
            />
            <GlobalButton
              title="Upload"
              borderRadius="8px"
              height="44px"
              bgColor="black"
              color="#FFFFFF"
              font='600'
              className="font-effra min-w-25 px-4 text-sm"
              onClick={handleClose}
            />
          </div>
        </div>
      </ModalPanel>
    </Modal>
  );
};

export default BusinessProfileUploadModal;
