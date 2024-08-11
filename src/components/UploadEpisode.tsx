import { X } from "lucide-react"
import Button from "./ui/Button"
import { Input } from "./ui/Input"
import { useForm } from "react-hook-form"
import { episodeSchema } from "../schema/projectSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextArea } from "./ui/TextArea"
import { useParams } from "react-router-dom"
import { useAddEpisodeMutation } from "../redux/feature/userApiSlice"
import { isHttpError } from "../utils/error-utils"
import toast from "react-hot-toast"
import { MoonLoader } from "react-spinners"

interface IEpisodesForm{
    name:string,
    description:string
}

interface UploadEpisodeProps {
    icon: string
    title: string,
    method:'youtube'|'spotify'| 'rss'
    closeModal: () => void
}

function UploadEpisode({ icon, title,method, closeModal }: UploadEpisodeProps) {

    const  [addEpisode,{isLoading}] =useAddEpisodeMutation()
    const { projectId='' } = useParams(); 
    const methods = useForm<IEpisodesForm>({
        mode: 'onChange',
        resolver: zodResolver(episodeSchema), // zod resolver for form validation
    });

    const { register, handleSubmit, formState, reset, setError } = methods;
    const { errors } = formState

    const onSubmit =async (data:IEpisodesForm)=>{
        try {
            await addEpisode({...data,method,projectId})
            handleCloseModal()
        } catch (error) {
            if (isHttpError(error) && error.status == 400) {
                setError('name', { message: error.data.errors[0]?.message })       
            } else {
                toast.error('something went wrong');
            }
            
        }
    }

    const handleCloseModal = ()=>{
        reset()
        closeModal()
    }

    return (
        <div className="p-3">
            <p className="flex justify-end"><X className="cursor-pointer" onClick={handleCloseModal} /></p>
            <div className="flex items-center gap-2 text-2xl capitalize font-semibold mb-3">
                <img width={40} height={40} src={icon} alt={title} />
                <h2>{title}</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="text-sm font-semibold text-black/90">
                <div className="mb-4">
                    <label htmlFor="name">Name</label>
                    <Input className="mt-1"  {...register('name')} error={errors.name?.message} id='name' />
                </div>
                <div >
                    <label  htmlFor="description">Description</label>
                    <TextArea className="mt-1" {...register('description')} error={errors.description?.message} rows={3} id='description' />
                </div>


                <div className="flex justify-end">
                    <Button disabled={isLoading} varient={'primary'} size={'md'}>{isLoading?<MoonLoader size={20} color='white' />:'Save'}</Button>
                </div>
            </form>

        </div>
    )
}

export default UploadEpisode
