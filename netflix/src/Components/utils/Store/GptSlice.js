import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView : false,
        movieNames:null,
        movieResults:null,
        removegptResults:null
    },
    reducers:{
        addToggle:(state,action)=>{
            state.gptSearchView = !state.gptSearchView
        },
        addmovieInfo:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.movieNames=movieName;
            state.movieResults=movieResults
        },
        removemovieInfo:(state,action)=>{
          state.movieNames=null
          state.movieResults=null
        }
    }
})
 export const{addToggle,addmovieInfo,removemovieInfo}=GptSlice.actions
 export default GptSlice.reducer