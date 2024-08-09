import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/style-utils";



const buttonVarients = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium  hover:opacity-90 m-1 disabled:cursor-not-allowed focus:outline-none',
    {
        variants: {
            varient: {
                default: 'bg-gray-200 text-black/50 ',
                secondary:'border shadow-md  border-black/30',
                dark:"bg-dark text-white rounded",
                primary:"bg-primary text-white rounded-md"
                
            },
            size: {
                default: "h-16 px-8",
                sm: "px-3 py-1",
                md:  "px-4 py-1.5 text-base",
                lg:  "px-5 py-3 text-2xl"

            },
            
            defaultVariants: {
                variant: "default",
                size: "default",
            },
        }
    }
) 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVarients> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, varient, size, ...props }, ref) => {
       
        return (
            <button
                className={cn(buttonVarients({ varient, size, className }))}
                ref={ref}
                {...props}
            >
                
                
            </button>
        )
    });

export default Button
