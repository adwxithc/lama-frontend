import { ILoginformValue } from '../../schema/userSchema';
import { IGeneralConfigForm } from '../../schema/widgetSchema';
import {
    ICreateEpisode,
    IEpisode,
    IPaginatedResponse,
    IProject,
    IResponse,
    IUser,
    IWidget,
} from '../../types/data';
import { apiSlice } from '../apiSlice';

const USER_URL = '/api/user';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IResponse<IUser>, ILoginformValue>({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        getProjects: builder.query<
            IPaginatedResponse<IProject>,
            { page: number }
        >({
            query: (data) => `${USER_URL}/projects?limit=9&page=${data.page}`,
            providesTags: ['Projects'],
        }),
        createProject: builder.mutation<IResponse<IProject>, { name: string }>({
            query: (data) => ({
                url: `${USER_URL}/project`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Projects'],
        }),
        addEpisode: builder.mutation<IResponse<IEpisode>, ICreateEpisode>({
            query: (data) => ({
                url: `${USER_URL}/episode`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Episodes', 'Projects'],
        }),
        getEpisodes: builder.query<
            IPaginatedResponse<IEpisode>,
            { projectId: string; page: number }
        >({
            query: (data) =>
                `${USER_URL}/project/${data.projectId}/episodes?limit=5&page=${data.page}`,
            providesTags: ['Episodes'],
        }),
        deleteEpisode: builder.mutation<
            IResponse<IEpisode>,
            { projectId: string; episodeId: string }
        >({
            query: (data) => ({
                url: `${USER_URL}/project/${data.projectId}/episode/${data.episodeId}/delete`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Episodes', 'Projects'],
        }),
        editEpisode: builder.mutation<
            IResponse<IEpisode>,
            { projectId: string; episodeId: string; description: string }
        >({
            query: (data) => ({
                url: `${USER_URL}/project/${data.projectId}/episode/${data.episodeId}/edit`,
                body: { description: data.description },
                method: 'PATCH',
            }),
            invalidatesTags: ['Episodes'],
        }),
        updateGeneralWidget: builder.mutation<IResponse<IWidget>,{projectId:string}&IGeneralConfigForm>({
            query: (data) => ({
                url: `${USER_URL}/project/${data.projectId}/widget-config/general`,
                body: data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Widget'],
        }),
        updateDisplayWidget: builder.mutation<IResponse<IWidget>,{projectId:string,data:FormData}>({
            query: (data) => ({
                url: `${USER_URL}/project/${data.projectId}/widget-config/display`,
                body: data.data,
                method: 'PATCH',
            }),
            invalidatesTags: ['Widget'],
        }),
        getWidget: builder.query<IResponse<IWidget>,{projectId:string}>({
            query: (data) =>`${USER_URL}/project/${data.projectId}/widget-config`,
            providesTags: ['Widget'],
        })
    }),
});

export const {
    useLoginMutation,
    useGetProjectsQuery,
    useCreateProjectMutation,
    useAddEpisodeMutation,
    useGetEpisodesQuery,
    useDeleteEpisodeMutation,
    useEditEpisodeMutation,
    useUpdateGeneralWidgetMutation,
    useGetWidgetQuery,
    useUpdateDisplayWidgetMutation
} = authApiSlice;
