
import React from 'react'
import { cn } from "../../utils/style-utils";

export interface TextAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
        error?:string;
    }

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className,error, ...props }, ref) => {
        return (
            <div className='flex flex-col items-start w-full'>
            <textarea
                
                className={cn(
                    "w-full border rounded-md resize-none px-2 py-1 text-black/80 placeholder:text-black/30 placeholder:font-semibold  focus-visible:outline-none focus-visible:ring-1  disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-white ",
                    className
                )}
                ref={ref}
                {...props}
            />
            <p className='text-red-600 ml-1 mt-1  text-xs text-left'>{error}</p>
            </div>
        );
    }
);
TextArea.displayName = "TextArea";

export { TextArea };