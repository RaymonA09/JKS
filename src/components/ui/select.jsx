import React from "react";

// Main wrapper
export function Select({ children, className = "", ...props }) {
  return (
    <div className={`relative inline-block w-full ${className}`}>
      <select
        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

// Trigger component
export function SelectTrigger({ children, className = "" }) {
  return <div className={`cursor-pointer ${className}`}>{children}</div>;
}

// Content dropdown
export function SelectContent({ children, className = "" }) {
  return <div className={`absolute z-10 bg-white border rounded-md mt-1 ${className}`}>{children}</div>;
}

// Individual item
export function SelectItem({ children, value, className = "" }) {
  return (
    <option value={value} className={className}>
      {children}
    </option>
  );
}

// Selected value display
export function SelectValue({ children, className = "" }) {
  return <span className={`text-gray-700 ${className}`}>{children}</span>;
}
