import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView : false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        addToggle:(state,action)=>{
            state.gptSearchView = !state.gptSearchView
        }
    }
})
 export const{addToggle}=GptSlice.actions
 export default GptSlice.reducer