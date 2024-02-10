import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        removeUser:(state,action)=>{
            return null
        },
    }
},
  
)
export const{addUser,removeUser}=userSlice.actions
 export default userSlice.reducer