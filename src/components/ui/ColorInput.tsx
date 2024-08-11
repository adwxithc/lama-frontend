import React, { useState, ChangeEvent } from 'react';
import { cn } from '../../utils/style-utils';
export interface ColorInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}
const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
    ({ className, error, ...props }, ref) => {
        const [color, setColor] = useState<string>('#ffffff'); // Default color is white

        const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            setColor(event.target.value);
        };

        return (
            <>
                <div className={cn("flex items-center space-x-2",className)}>
                    <input
                        {...props}
                        ref={ref}
                        type="text"
                        value={color}
                        onChange={handleChange}
                        className={"w-full h-10 p-2 border border-gray-400/70 rounded outline-none font-normal "}
                        placeholder="Enter color code"
                    />
                    <input
                        type="color"
                        value={color}
                        onChange={handleChange}
                        className="w-10 h-10 cursor-pointer rounded"
                        style={{ backgroundColor: color }}
                    />
                </div>
                <p className='text-red-600 ml-1 mt-1  text-xs text-left'>{error}</p>
            </>
        );
    }
)

export default ColorInput;
