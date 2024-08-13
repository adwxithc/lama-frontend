import { Home } from "lucide-react"
import Breadcrumb from "../components/ui/Bredcrumb"
import { Avatar } from "../components/ui/Avatar"
import { Input } from "../components/ui/Input"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { profileSchema } from "../schema/userSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "../components/ui/Button"
import { ChangeEvent, useState } from "react"
import { useUpdateUserMutation } from "../redux/feature/userApiSlice"
import toast from "react-hot-toast"
import { setCridentials } from "../redux/feature/userSlice"
import { MoonLoader } from "react-spinners"
import { useParams } from "react-router-dom"

function Account() {
    const { userData } = useSelector((state: RootState) => state.user)
    const {projectId} = useParams()
    const [updateUser,{isLoading}] =useUpdateUserMutation()
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState(userData?.profile)
    const [file, setFile] = useState<File | null>(null);


    const methods = useForm<{name:string}>({
        mode: 'onChange',
        resolver: zodResolver(profileSchema), // zod resolver for form validation
        defaultValues:{name:userData?.name}
    });

    const { register, handleSubmit, formState } = methods;
    const { errors, isDirty } = formState

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

    const onSave=async (data:{name:string})=>{
        const formData = new FormData();
   
        
        formData.append('image', file as Blob);
        formData.append('name',data.name)
        
        try {
            const user = await updateUser(formData).unwrap()
            dispatch(setCridentials(user.data))
            toast.success('account updated')
            setImageUrl(user.data?.profile)
        } catch {
          
            toast.error('something went wrong')
        }
       
    }

    return (
        <form className="p-10" onSubmit={handleSubmit(onSave)}>
            <div className="text-xs sm:text-xl mb-8">
                <Breadcrumb paths={[{ label: <Home size={25} />, link: '/' }, { label: 'Account', link: `/project/${projectId}/account` }]} />
            </div>
            
            <h1 className="text-primary font-bold text-2xl mb-8">Account Settings</h1>
            <div className="flex flex-col lg:flex-row gap-5 items-center w-full">
                <div className="min-w-20 md:min-w-32">
                    <label className="cursor-pointer z-20" htmlFor="profile">
                    <Avatar src={imageUrl} className=" w-20 h-20 md:w-32 md:h-32" />
                    </label>
                    <Input onChange={handleFileChange} id="profile" type="file"  className="hidden"/>
                    
                </div>

                <div className="flex flex-col md:flex-row gap-5 text-black/80 w-full ">
                    <div className="flex-1 ">
                        <label className="font-bold " htmlFor="name">User Name</label>
                        <Input {...register('name')} error={errors.name?.message} id="name" />
                    </div>
                    <div className="flex-1">
                        <label className="font-bold " htmlFor="email">Email</label>
                        <Input value={userData?.email} disabled={true} id="email" />
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                {
                    (isDirty || imageUrl!==userData?.profile) &&
                    <Button disabled={isLoading} varient={'primary'} size={'md'}>{isLoading?<MoonLoader size={20} color='white' />:'Update'}</Button>
                }
                
            </div>

           
        </form>
    )
}

export default Account
