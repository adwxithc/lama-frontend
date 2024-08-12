import React, { ChangeEvent, Dispatch } from 'react';
import { cn } from '../../utils/style-utils';
export interface ColorInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    color:string,
    setColor:Dispatch<React.SetStateAction<string>>
}
const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
    ({ className,color, setColor , ...props }, ref) => {
        

        const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
            setColor(event.target.value);
        };

        return (
            <>
                <div className={cn("flex items-center space-x-2",className)}>
                    <input
                    disabled={true}
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
                
            </>
        );
    }
)

export default ColorInput;
