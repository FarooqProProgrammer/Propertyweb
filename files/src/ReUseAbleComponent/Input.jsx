import React from 'react';

const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
