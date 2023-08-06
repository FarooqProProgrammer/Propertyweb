import React from 'react';

const LoadingModal = ({ isOpen }) => {
  return (
    <div
      className={`fixed z-50 inset-0 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="absolute z-40 inset-0 bg-gray-500 opacity-75"></div>
      <div className="z-50 bg-white w-64 p-4 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></span>
          <span className="font-bold">Loading...</span>
        </div>
        <p className="text-sm text-gray-800">Please wait while we process your request.</p>
      </div>
    </div>
  );
};



export default LoadingModal;
