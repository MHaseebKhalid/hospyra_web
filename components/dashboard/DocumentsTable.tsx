'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, FileText, MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { DocumentTableItem } from '@/components/dashboard/TablesStaticData';

const DocumentsTable = ({ rows }: { rows: DocumentTableItem[] }) => {
  const [rowsPerPage, setRowsPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = Number(rowsPerPage);
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));

  useEffect(() => {
    setCurrentPage(1);
  }, [rowsPerPage, rows.length]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const pageRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [rows, currentPage, pageSize]);

  const startEntry = rows.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endEntry = Math.min(currentPage * pageSize, rows.length);

  return (
    <div className="overflow-x-auto">
      <div className="min-w-270">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F4F6] border-b border-t border-[#E5E7EB]">
            <tr className="text-left text-sm text-[#27272A] font-effra">
              <th className="px-5 py-5 font-medium">Name</th>
              <th className="px-5 py-5 font-medium">Category</th>
              <th className="px-5 py-5 font-medium">Type</th>
              <th className="px-5 py-5 font-medium">Date</th>
              <th className="px-5 py-5 font-medium">Size</th>
              <th className="px-5 py-5 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => (
              <tr key={row.id} className="border-b border-[#E5E7EB] text-sm text-[#27272A] font-effra">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-[#64748B]" />
                    <span>{row.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex rounded-full border border-[#E5E7EB] bg-[#F5F5F5] px-2.5 py-0.5 text-xs text-[#111827] font-effra">
                    {row.category}
                  </span>
                </td>
                <td className="px-5 py-4">{row.type}</td>
                <td className="px-5 py-4">{row.date}</td>
                <td className="px-5 py-4">{row.size}</td>
                <td className="px-5 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button type="button" className="rounded-md p-1 hover:bg-[#F3F4F6]">
                        <MoreVertical size={18} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="font-effra">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-end gap-5 px-5 py-3 text-sm text-[#52525B] font-effra">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
              <SelectTrigger className="h-8 w-19 border-[#E5E7EB] bg-white font-effra">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span>
            {startEntry}-{endEntry} of {rows.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md p-1 hover:bg-[#F3F4F6] disabled:opacity-40"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              className="rounded-md p-1 hover:bg-[#F3F4F6] disabled:opacity-40"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTable;
