import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
      NowPlayingMovies:null,
      popularMovies:null,
      TopRatedMovies:null,
      UpComingMovies:null,
      TrailerPlayingVideo:null,
      movieDetails:null,
      tvShows:null,
      movieCharacters:null,
      movieInfoview:false
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
        },
        addMovieDetails:(state,action)=>{
          state.movieDetails=action.payload
        },
        addMovieCharacter:(state,action)=>{
          state.movieCharacters=action.payload
        },
        addToogle:(state,action)=>{
          state.movieInfoview=!state.movieInfoview
        }
    }
})
 export const {addmovies,addpopular,addRatedmovies, addNewvideos,addTrailerVideo,addTvShows,addMovieDetails,addMovieCharacter,addToogle}=movieSlice.actions
 export default movieSlice.reducer