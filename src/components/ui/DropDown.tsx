import React from 'react';
import { cn } from '../../utils/style-utils'; // Utility function for conditional class names

export interface DropDownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { val: string; label: string }[];
  error?: string;
}

const DropDown = React.forwardRef<HTMLSelectElement, DropDownProps>(
  ({ className, options, error, ...props }, ref) => {
    return (
      <div className="flex flex-col items-start w-full">
        <select
          className={cn(
            'flex h-11 w-full rounded-md border px-2 py-1 text-black border-gray-300 bg-white outline-none shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((item) => (
            <option key={item.val} value={item.val}>
              {item.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-600 ml-1 mt-1 text-xs text-left">{error}</p>
        )}
      </div>
    );
  }
);

DropDown.displayName = 'DropDown';

export default DropDown;
