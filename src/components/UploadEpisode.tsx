import { X } from "lucide-react"
import Button from "./ui/Button"
import { Input } from "./ui/Input"
import { useForm } from "react-hook-form"
import { episodeSchema } from "../schema/projectSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextArea } from "./ui/TextArea"

interface IEpisodesForm{
    name:string,
    description:string
}

interface UploadEpisodeProps {
    icon: string
    title: string,
    closeModal: () => void
}

function UploadEpisode({ icon, title, closeModal }: UploadEpisodeProps) {

    const methods = useForm<IEpisodesForm>({
        mode: 'onChange',
        resolver: zodResolver(episodeSchema), // zod resolver for form validation
    });

    const { register, handleSubmit, formState } = methods;
    const { errors } = formState

    const onSubmit =(data:IEpisodesForm)=>{
        
    }

    return (
        <div className="p-3">
            <p className="flex justify-end"><X className="cursor-pointer" onClick={closeModal} /></p>
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
                    <Button varient={'primary'} size={'md'}>Save</Button>
                </div>
            </form>

        </div>
    )
}

export default UploadEpisode
