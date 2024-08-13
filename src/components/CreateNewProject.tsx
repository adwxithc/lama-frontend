import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from 'lucide-react'
import { useState } from 'react'

import Button from './ui/Button'
import Modal from './ui/Modal'
import { Input } from './ui/Input'
import { projectSchema } from '../schema/projectSchema';
import { useCreateProjectMutation } from '../redux/feature/userApiSlice';
import { isHttpError } from '../utils/error-utils';
import toast from 'react-hot-toast';
import { MoonLoader } from 'react-spinners';



function CreateNewProject({refetch}:{refetch:() => void}) {
    const [open, setOpen] = useState(false)

    const [createProject,{isLoading}] = useCreateProjectMutation()

    const methods = useForm<{ name: string }>({
        mode: 'onChange',
        resolver: zodResolver(projectSchema), // zod resolver for form validation
    });

    const { register, handleSubmit, formState, setError, reset } = methods;
    const { errors } = formState

    const onSubmit = async (data: { name: string }) => {
        try {
            const res =await createProject(data).unwrap()
            refetch()
            toast.success(res.message as string)
            reset()
            setOpen(false)
        } catch (error) {
            if (isHttpError(error) && error.status == 400) {
                setError('name', { message: error.data.errors[0]?.message })       
            } else {
                toast.error('something went wrong');
            }
        }
    }

    return (
        <>
            <Button
                onClick={() => setOpen(prev => !prev)}
                varient={"dark"} size={"lg"}>
                <span className="rounded-full bg-white text-dark"><Plus /></span>
                <span className="ml-2">Create New Project</span>

            </Button>
            {
                open &&
                <Modal >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='font-bold text-lg text-black/80 mb-5'>Create Project</h2>
                        <div className='mb-8'>
                            <label className='text-sm text-black/50 font-semibold' htmlFor="name">Enter Project Name:</label>
                            <Input className='mt-1' {...register('name')} error={errors.name?.message} id='name' placeholder='Type here' />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <Button disabled={isLoading} type='button' className='text-red-500' onClick={() => setOpen(false)}>Cancel</Button>
                            <Button disabled={isLoading} type='submit' varient={'primary'} size={'md'}>{isLoading?<MoonLoader size={20} color='white' />:'Create'}</Button>
                        </div>


                    </form>
                </Modal>
            }

        </>
    )
}

export default CreateNewProject
