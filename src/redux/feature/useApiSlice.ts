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
        getProjects:builder.query<IResponse<{projects:IProject[], lastPage:number, totalPages:number}>,{page:number}>({
            query:(data)=>`${USER_URL}/projects?limit=9&page=${data.page}`,
            providesTags: ["Projects"],
        }),
        createProject:builder.mutation<IResponse<IProject>,{name:string}>({
            query:(data)=>({
                url:`${USER_URL}/project`,
                method: 'POST',
                body:data,
            }),
            invalidatesTags: ['Projects'],
        })
    }),
});



export const {
   useLoginMutation,
    useGetProjectsQuery,
    useCreateProjectMutation
} = authApiSlice;
