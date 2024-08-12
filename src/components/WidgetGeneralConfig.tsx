import { useForm } from "react-hook-form";
import { useGetWidgetQuery, useUpdateGeneralWidgetMutation } from "../redux/feature/userApiSlice"
import Button from "./ui/Button"
import { Input } from "./ui/Input"
import { zodResolver } from "@hookform/resolvers/zod";
import { generalConfigSchema, IGeneralConfigForm } from "../schema/widgetSchema";
import { useParams } from "react-router-dom";
import { MoonLoader, RingLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useEffect } from "react";


function WidgetGeneralConfig() {
    const { projectId = '' } = useParams()
    const [updateWidget, { isLoading }] = useUpdateGeneralWidgetMutation()


    const { data, isLoading: dataLoading } = useGetWidgetQuery({ projectId })
    

    const methods = useForm<IGeneralConfigForm>({
        mode: 'onChange',
        resolver: zodResolver(generalConfigSchema), // zod resolver for form validation
        defaultValues: {}
    });

    const { register, handleSubmit, formState, reset} = methods;
    const { errors } = formState

    useEffect(()=>{
        reset(data?.data||{})
    },[data?.data, reset])


    const onSubmit = async (data: IGeneralConfigForm) => {
        try {

            await updateWidget({ projectId, ...data });
            toast.success("confuguration updated")
        } catch {
            toast.error('something went wrong')

        }
    }

    return (
        <div className="relative p-1">
            < form className = "text-black/80" onSubmit = { handleSubmit(onSubmit) } >
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="name">Chatbot Name</label>
                <Input  {...register('chatbotName')} error={errors.chatbotName?.message}  className="mt-2" id="name" />
                <span className="text-black/50 text-xs">Enter chatbot name</span>
            </div>
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="welcome-message">Welcome Message</label>
                <Input {...register('welcomeMessage')} error={errors.welcomeMessage?.message}  className="mt-2" id="welcome-message" />
                <span className="text-black/50 text-xs">Enter Welcome Message</span>
            </div>
            <div className="mb-2">
                <label className="font-bold text-sm" htmlFor="input-placeholder">Input Placeholder</label>
                <Input {...register('inputPlaceholder')} error={errors.inputPlaceholder?.message}  className="mt-2" id="input-placeholder" />
                <span className="text-black/50 text-xs">Enter Input Placeholder</span>
            </div>

            <div className="flex justify-end">
                <Button type="submit" disabled={isLoading} varient={'primary'} size={'md'}>{isLoading?<MoonLoader size={20} color='white' />:'Save'}</Button>
            </div>

        </form >
        {
            dataLoading && 
            <div className="absolute inset-0 flex justify-center items-center bg-neutral-100/50 rounded">
                <RingLoader />
            </div>

        }
        </div>
       
    )
}

export default WidgetGeneralConfig
