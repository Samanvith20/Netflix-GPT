import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
      NowPlayingMovies:null,
      popularMovies:null,
      TopRatedMovies:null,
      UpComingMovies:null,
      TrailerPlayingVideo:null,
      
      tvShows:null,
    },
    reducers:{
        addmovies:(state,action)=>{
              state.NowPlayingMovies=action.payload
        },
        addpopular:(state,action)=>{
          state.popularMovies=action.payload
        },
        addRatedmovies:(state,action)=>{
          state.TopRatedMovies=action.payload
        },

        addNewvideos:(state,action)=>{
          state.UpComingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
          state.TrailerPlayingVideo=action.payload
        },
       
        addTvShows:(state,action)=>{
          state.tvShows=action.payload
        }
    }
})
 export const {addmovies,addpopular,addRatedmovies, addNewvideos,addTrailerVideo,addTvShows}=movieSlice.actions
 export default movieSlice.reducer