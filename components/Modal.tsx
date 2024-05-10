'use client'
import React from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  heading: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, heading }) => {
  const modalClass = isOpen ? "fixed inset-0 flex items-center justify-center z-50 text-black overflow-y-scroll opacity-100 transition-opacity duration-400 delay-400" : "fixed inset-0 flex items-center justify-center z-50 text-black overflow-y-scroll opacity-0 pointer-events-none delay-400 transition-opacity duration-300";

  if (!isOpen) return null;

  return (
    <div className={modalClass}>
      <div className="fixed inset-0 bg-black opacity-90"></div>
      <div className="bg-white p-8 rounded-lg z-50 absolute top-20 right-0 w-[35%] ">
        <div className="flex justify-between">
          <h3 className="font-bold">{heading}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 border rounded-sm">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4">

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
