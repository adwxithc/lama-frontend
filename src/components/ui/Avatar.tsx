import React, { ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/style-utils';



const Avatar = React.forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(
    ({ className, src, ...props }, ref) => {
        return (
            <>
                {
                    src ?
                    <img 
                    className={cn( 'h-20 w-20 rounded-full',className)}
                    src={src} 
                    alt={src}
                    ref={ref}
                    {...props} // Spread the rest of the props here
                />
                :
                <span 
                className={cn('h-20 w-20 rounded-full bg-gray-300/90',className)}
                ref={ref}
                ></span>
                }
               
            </>
        );
    }
);
Avatar.displayName = 'Avatar'; // Correct the display name

export { Avatar };
