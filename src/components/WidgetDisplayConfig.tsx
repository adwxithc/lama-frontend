import { ChangeEvent, useEffect, useState } from "react"
import ColorInput from "./ui/ColorInput"
import { Input } from "./ui/Input"
import ToggleButton from "./ui/ToggleButton"
import DropDown from "./ui/DropDown"
import Button from "./ui/Button"
import { Upload } from "lucide-react"
import { Avatar } from "./ui/Avatar"
import { useParams } from "react-router-dom"
import { useGetWidgetQuery, useUpdateDisplayWidgetMutation } from "../redux/feature/userApiSlice"
import { useForm } from "react-hook-form"
import { displayConfigSchema, IDisplayConfigForm } from "../schema/widgetSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { MoonLoader, RingLoader } from "react-spinners"
import { iconPositions, iconSizeOptions } from "../datas/datas"
import toast from "react-hot-toast"


function WidgetDisplayConfig() {
    const { projectId = '' } = useParams()
    const  [updateDisplayWidget,{isLoading}] = useUpdateDisplayWidgetMutation()

    const { data, isLoading: dataLoading } = useGetWidgetQuery({ projectId })


    const [toggle, setToggle] = useState(false)
    const [primaryColor, setPrimaryColor] = useState('#00ff33')
    const [fontColor, setFontColor] = useState('#000000')
    const [imageUrl, setImageUrl] = useState('')
    const [file, setFile] = useState<File | null>(null);

    
  

    const methods = useForm<IDisplayConfigForm>({
        mode: 'onChange',
        resolver: zodResolver(displayConfigSchema), // zod resolver for form validation
        defaultValues: {}
    });

    const { register, handleSubmit, formState, reset} = methods;
    const { errors } = formState

    useEffect(()=>{
        console.log(data?.data);
        
        reset(data?.data||{})
        setToggle(Boolean(data?.data?.showSource))
        setPrimaryColor(data?.data?.primaryColor||'#00ff33')
        setFontColor(data?.data?.fontColor||'#000000')
    },[data?.data, reset])

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Create a URL for the selected image file
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            setFile(file);
            // Clean up the object URL when the component is unmounted
            return () => URL.revokeObjectURL(url);
        }
    };


    const onSubmit = async (data: IDisplayConfigForm) => {
    

        const formData = new FormData();
        
        formData.append('image', file as Blob);
        formData.append('projectId',projectId)
        formData.append('primaryColor', primaryColor);
        formData.append('fontColor', fontColor);
        formData.append('showSource', toggle ? 'true' : 'false');
        Object.entries(data).forEach(([key,val]) => formData.append(key,val));

        try {
            updateDisplayWidget({data:formData,projectId})
            toast.success('configuration updated')
        } catch {
            toast.error('something went wrong')
            
        }
        
    }

    return (
        <div>
        <form className="text-black/80 p-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  gap-y-4 gap-x-16 md:grid-cols-2 font-bold text-sm mb-5">
                <div>
                    <label htmlFor="primary-color"  >Primary Color</label>
                    <ColorInput {...{color:primaryColor, setColor:setPrimaryColor}}  className="mt-2" id="primary-color" />
                </div>
                <div>
                    <label htmlFor="font-color">Font Color</label>
                    <ColorInput {...{color:fontColor, setColor:setFontColor}} className="mt-2" id="font-color" />


                </div>
                <div>
                    <label htmlFor="font-size">Font Size (in px)</label>
                    <Input type="number" {...register('fontSize')} error={errors.fontSize?.message}  className="mt-2" id="font-size" />

                </div>
                <div>
                    <label htmlFor="font-size">Chat Height (in % of total screen)</label>
                    <Input type="number" {...register('chatHeight')} error={errors.chatHeight?.message}  className="mt-2" id="font-size" />

                </div>
            </div>
            <div className="flex justify-between border-b-2 pb-8 mb-5">
                <div>
                    <span className="block font-bold ">Show Sources</span>
                    <span className="text-xs">Show sources of the widget</span>
                </div>
                <div>
                    <ToggleButton value={toggle} toggle={() => setToggle(p => !p)} />
                </div>

            </div>

            <div className="mb-3">
                <h3 className=" font-bold text-primary mb-5">Chat Icon</h3>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                    <div>
                        <label className="font-bold" htmlFor="chat-icon-size">Chat Icon Size</label>
                        <DropDown {...register('IconSize')}  className="mt-2" id="chat-icon-size" options={iconSizeOptions} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="chat-icon-size">Position On Screen</label>
                        <DropDown {...register('position')} className="mt-2" id="chat-icon-size" options={iconPositions} />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="distance-bottom">Distance from Bottom (in px)</label>
                        <Input type="number" {...register('distanceFromBottom')} error={errors.distanceFromBottom?.message}  id="distance-bottom" />
                    </div>
                    <div>
                        <label className="font-bold" htmlFor="distance-horizontal">Horizontal Distance (in px)</label>
                        <Input type="number" {...register('horizontalDistance')} error={errors.horizontalDistance?.message}  id="distance-horizontal" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar src={imageUrl} />
                        <input onChange={handleFileChange} type="file" id="icon" className="hidden" />
                        <label htmlFor="icon" className="flex gap-2 p-2 px-3 bg-primary cursor-pointer rounded text-white items-center">Upload Image <Upload size={20} /></label>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <Button disabled={isLoading} varient={'primary'} size={'md'} >{isLoading?<MoonLoader size={20} color='white' />:'Save'}</Button>
            </div>
        </form>
        {
            dataLoading && 
            <div className="absolute inset-0 flex justify-center items-center bg-neutral-100/50 rounded">
                <RingLoader />
            </div>

        }
        </div>
    )
}

export default WidgetDisplayConfig
