import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from 'lucide-react'
import { useState } from 'react'

import Button from './ui/Button'
import Modal from './ui/Modal'
import { Input } from './ui/Input'
import { projectSchema } from '../schema/projectSchema';



function CreateNewProject() {
    const [open, setOpen] = useState(false)

    const methods = useForm<{name:string}>({
        mode: 'onChange',
        resolver: zodResolver(projectSchema), // zod resolver for form validation
      });

      const { register, handleSubmit, formState } = methods;
      const { errors } = formState

      const onSubmit =(data:{name:string})=>{
        alert(data)
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
                            <label  className='text-sm text-black/50 font-semibold' htmlFor="name">Enter Project Name:</label>
                            <Input className='mt-1' {...register('name')} error={errors.name?.message} id='name' placeholder='Type here' />
                        </div>
                        <div className='flex justify-end gap-2'>
                            <Button type='submit' className='text-red-500' onClick={()=>setOpen(false)}>Cancel</Button>
                            <Button type='button' varient={'primary'} size={'md'}>Create</Button>
                        </div>


                    </form>
                </Modal>
            }

        </>
    )
}

export default CreateNewProject
