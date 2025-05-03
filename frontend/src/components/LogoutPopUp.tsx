import { Fragment, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface LogoutPopUpProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const LogoutPopUp = ({ isOpen, onCancel, onConfirm }: LogoutPopUpProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Add keyboard listener for escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onCancel]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isOpen) {
        onCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onCancel]);

  return (
    <Fragment>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300 z-[60] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Modal */}
        <div
          ref={modalRef}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-sm w-full mx-4 transform transition-all duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Confirm Logout
            </h3>
            <button 
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Are you sure you want to log out of your account?
          </p>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
