
import { Input } from './ui/Input'
import Button from './ui/Button'
import { useForm } from 'react-hook-form';
import { ILoginformValue, loginSchema } from '../schema/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoonLoader } from 'react-spinners';
import { useLoginMutation } from '../redux/feature/userApiSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setCridentials } from '../redux/feature/userSlice';


function Login() {

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    const methods = useForm<ILoginformValue>({
        mode: 'onChange',
        resolver: zodResolver(loginSchema), // zod resolver for form validation
    });

    const { register, handleSubmit, formState } = methods;
    const { errors } = formState

    const onSubmit = async (data: ILoginformValue) => {
        try {
            const res =await login(data).unwrap()
            dispatch(setCridentials(res.data))
            toast.success("Sucessfully Logedin.")
        } catch {
            toast.error('something went wrong');
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className='font-bold text-lg text-black/80 mb-5'>Login to continue further</h2>
            <div className='mb-5'>
                <label className='text-sm text-black/50 font-semibold' htmlFor="name">Enter Name:</label>
                <Input {...register('name')} error={errors.name?.message} className='mt-1' id='name' placeholder='Type here' />
                <label className='text-sm text-black/50 font-semibold' htmlFor="email">Enter Email:</label>
                <Input {...register('email')} error={errors.email?.message} className='mt-1' id='email' placeholder='Type here' />
            </div>
            <div className='flex justify-end gap-2'>

                <Button disabled={isLoading} type='submit' varient={'primary'} size={'md'}> {isLoading ? <MoonLoader size={20} color='white' /> : 'Login'}  </Button>
            </div>

        </form>
    )
}

export default Login
