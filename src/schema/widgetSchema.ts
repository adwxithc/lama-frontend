import { z } from 'zod';
import { IconPosition, IconSize } from '../types/data';


export interface IGeneralConfigForm{
    chatbotName:string,
    welcomeMessage:string;
    inputPlaceholder:string
}


// General Configuration Schema
export const generalConfigSchema = z.object({
    chatbotName: z.string().min(1, 'Chatbot name is required'),
    welcomeMessage: z.string().min(1, 'Welcome message is required'),
    inputPlaceholder: z.string().min(1, 'Input Placeholder is required'),
});


// Enum Definitions
const IconPositionSchema = z.enum([
    IconPosition.TopLeft,
    IconPosition.TopRight,
    IconPosition.BottomLeft,
    IconPosition.BottomRight,
    IconPosition.Center,
    IconPosition.TopCenter,
    IconPosition.BottomCenter,
    IconPosition.LeftCenter,
    IconPosition.RightCenter
]);

const IconSizeSchema = z.enum([
    IconSize.Small,
    IconSize.Medium,
    IconSize.Large
]);

export interface IDisplayConfigForm{
 
    fontSize:number,
    chatHeight:number,
    IconSize:IconSize,
    position:IconPosition,
    distanceFromBottom:number,
    horizontalDistance:number,
    

}

// Display Configuration Schema
export const displayConfigSchema = z.object({
    fontSize: z.coerce.number().min(0, 'Font Size must be a positive number'), 
    chatHeight: z.coerce.number().min(0, 'Chat height must be a positive number'),
    IconSize: IconSizeSchema,
    position: IconPositionSchema,
    distanceFromBottom: z.coerce.number().min(0, 'Distance from bottom must be a positive number').optional(),
    horizontalDistance: z.coerce.number().min(0, 'Horizontal distance must be a positive number').optional(), 
});