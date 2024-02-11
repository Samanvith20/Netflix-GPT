import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"User",
    initialState:[],
    // state is usually an object, not an array. 
    reducers:{
        addUser:(state,action)=>{
            //state.push(action.payload)
             return action.payload
        
        },
        removeUser:()=>{
            return null
        },
    }
},
  
)
export const{addUser,removeUser}=userSlice.actions
 export default userSlice.reducer