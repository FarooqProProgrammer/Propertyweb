import React from 'react';
import {ImCross} from "react-icons/im"

const ModalComponent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto top-30">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
      <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          
        </div>
        <div className="mt-2">
        <button className="p-1 transition-colors duration-200 rounded-full hover:bg-gray-200 focus:outline-none" onClick={onClose}>
            <ImCross />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
