import { ILoginformValue } from '../../schema/userSchema';
import { IProject, IResponse, IUser } from '../../types/data';
import { apiSlice } from '../apiSlice';

const USER_URL = '/api/user';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IResponse<IUser>,ILoginformValue>({
            query:(data)=>({
                url:`${USER_URL}/login`,
                method: 'POST',
                body:data
            })
        }),
        getProjects:builder.query<IResponse<{projects:IProject[], lastPage:number}>,{page:number}>({
            query:(data)=>`${USER_URL}/projects?limit=5&page=${data.page}`,
            providesTags: ["Projects"],
        })
    }),
});



export const {
   useLoginMutation,
    useGetProjectsQuery
} = authApiSlice;
