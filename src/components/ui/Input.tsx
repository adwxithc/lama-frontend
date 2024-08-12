
import React from 'react'
import { cn } from "../../utils/style-utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
        error?:string;
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type,error, ...props }, ref) => {
        return (
            <div className='flex flex-col items-start w-full'>
            <input
                type={type}
                className={cn(
                    "flex  h-11 w-full rounded-md border px-2 py-1 text-black/80 border-black/15   file:border-0 file:bg-transparent file:pt-[0.34rem]  file:text-sm file:font-medium placeholder:text-black/30 placeholder:font-semibold  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
            <p className='text-red-600 ml-1 mt-1 font-normal text-xs text-left'>{error}</p>
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };