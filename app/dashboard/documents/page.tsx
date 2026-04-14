'use client';

import { useState } from 'react';
import { FileText, Search, Upload } from 'lucide-react';
import GlobalButton from '@/components/buttons/GlobalButton';
import DocumentsTable from '@/components/dashboard/DocumentsTable';
import UploadDocumentModal from '@/components/dashboard/modals/UploadDocumentModal';
import SummaryStatCard from '@/components/dashboard/SummaryStatCard';
import { documentsTableRowsData } from '@/components/dashboard/TablesStaticData';

type DocumentStat = {
  label: string;
  value: string;
};

const documentStats: DocumentStat[] = [
  { label: 'Total Documents', value: '10' },
  { label: 'Recent Uploads', value: '3' },
  { label: 'Total Storage', value: '12.8 MB' },
  { label: 'Categories', value: '8' },
];

const documentCategories = [
  { label: 'All Documents', count: 10 },
  { label: 'Invoices', count: 2 },
  { label: 'Contracts', count: 2 },
  { label: 'Reports', count: 2 },
  { label: 'Menus', count: 1 },
  { label: 'Other', count: 5 },
] as const;

const DocumentsPage = () => {
  const [search, setSearch] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const filteredRows = documentsTableRowsData.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="flex flex-wrap items-center justify-end gap-3">
        <GlobalButton
          title="Upload Document"
          bgColor="#020617"
          color="white"
          borderRadius="8px"
          height="40px"
          className="font-effra px-3"
          icon={<Upload size={16} />}
          onClick={() => setIsUploadModalOpen(true)}
        />
      </div>

      <div className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {documentStats.map((card) => (
          <SummaryStatCard key={card.label} label={card.label} value={card.value} />
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-5">
        <h3 className="text-xl font-semibold text-[#18181B] font-effra">Categories</h3>
        <div className="mt-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {documentCategories.map((item) => (
            <div key={item.label} className="rounded-xl bg-[#F9FAFB] px-5 py-5 text-center">
              <div className="flex justify-center">
                <FileText size={26} className="text-[#1D4ED8]" />
              </div>
              <p className="mt-2 text-sm font-semibold text-[#18181B] font-effra">{item.label}</p>
              <span className="mt-2 inline-flex rounded-full bg-[#E5E7EB] px-3 py-1 text-sm text-[#111827] font-effra">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#EEDFDB] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 flex-1 items-center gap-2 rounded-md bg-[#F3F4F6] px-3">
            <Search size={16} className="text-[#94A3B8]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents..."
              className="h-full w-full bg-transparent text-sm text-[#111827] placeholder:text-[#A1A1AA] font-effra outline-none"
            />
          </div>
          <GlobalButton
            title="Filter"
            borderRadius="8px"
            height="40px"
            bgColor="#1D4ED8"
            color="#FFFFFF"
            className="font-effra px-6"
          />
        </div>
      </div>

      <div className="mt-5 rounded-2xl overflow-clip border border-[#EEDFDB]">
        <DocumentsTable rows={filteredRows} />
      </div>

      <UploadDocumentModal open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen} />
    </section>
  );
};

export default DocumentsPage;
