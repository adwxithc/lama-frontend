import {configureStore} from '@reduxjs/toolkit';
import userReducer from "./feature/userSlice"
import {apiSlice} from './apiSlice'



const store = configureStore({
    reducer:{
        user:userReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
        
        
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;