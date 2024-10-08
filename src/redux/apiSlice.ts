import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';


const BASE_URL = import.meta.env.VITE_BACKEND_URL

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' });

console.log(BASE_URL);


export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['Projects', 'User', 'Episodes', 'Widget'],
    endpoints: () => ({}),
});



