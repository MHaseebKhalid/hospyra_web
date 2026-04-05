'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ open, onOpenChange, children }: ModalProps) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/60"
        onClick={() => onOpenChange(false)}
        aria-hidden
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">{children}</div>
    </div>
  );
};

type ModalPanelProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
  headingText: string;
  onClose: () => void;
  headingClassName?: string;
};

const ModalPanel = React.forwardRef<HTMLDivElement, ModalPanelProps>(
  ({ className, children, onClose, headingText, headingClassName, ...props }, ref) => (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      className={cn(
        'relative z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-xl px-6 py-4',
        className
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h2
            className={cn(
              'text-xl font-bold font-effra text-[#27272A]',
              headingClassName
            )}
          >
            {headingText}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md opacity-70 transition-opacity hover:opacity-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {children}
    </div>
  )
);

ModalPanel.displayName = 'ModalPanel';

export { Modal, ModalPanel };
