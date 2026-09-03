import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Bell } from "lucide-react";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationModal({
  isOpen,
  onClose,
}: NotificationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black/60 p-2 backdrop-blur-sm sm:p-6"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="notification-title"
        className="flex h-full max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* Fixed Header */}
        <div className="flex shrink-0 items-center justify-between border-b bg-white px-5 py-4">
          <div className="flex items-center gap-2">
            <Bell size={22} className="text-warm-700 shrink-0" />
            <h2 id="notification-title" className="text-lg font-semibold text-gray-900 sm:text-xl">
              Notifications
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close notifications"
          >
            <X size={20} />
          </button>
        </div>

    
        <div className="flex flex-1 items-center justify-center overflow-y-auto p-6">
          <div className="text-center text-gray-500">
            <Bell size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-base font-medium">
              You don't have any new notifications.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}