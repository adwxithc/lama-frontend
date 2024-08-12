import React, { ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/style-utils';



const Avatar = React.forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(
    ({ className, src, ...props }, ref) => {
        return (
            <>
                {
                    src ?
                    
                    <img 
                    className={cn( 'w-24 h-24 rounded-full object-cover',className)}
                    src={src} 
                    alt={src}
                    ref={ref}
                    {...props} // Spread the rest of the props here
                />
                :
                <div 
                className={cn('h-20 w-20  rounded-full bg-gray-300/90',className)}
                ref={ref}
                ></div>
                }
               
            </>
        );
    }
);
Avatar.displayName = 'Avatar'; // Correct the display name

export { Avatar };
