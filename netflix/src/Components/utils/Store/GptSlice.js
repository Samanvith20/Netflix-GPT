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
        },
        addmovieInfo:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.movieNames=movieName;
            state.movieResults=movieResults
        }
    }
})
 export const{addToggle,addmovieInfo}=GptSlice.actions
 export default GptSlice.reducer