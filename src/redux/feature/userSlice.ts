import { createSlice } from "@reduxjs/toolkit";
import { userInitialState as initialState } from "./initialState";
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setCridentials:(state, action)=>{
            const data ={...state.userData,isAuth:true,...action.payload}
            state.userData=data;
            state.isAuth=true
            localStorage.setItem('userData',JSON.stringify(data))
        },
      
    }
})

export const {setCridentials} =userSlice.actions
export default userSlice.reducer