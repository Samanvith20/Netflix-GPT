import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Shimmer from '../ShimmerComponent/Shimmer'

const SecondaryContainer = () => {
     const movies = useSelector((store)=>store?.movies)
     if(!movies){
        <Shimmer/>
     }
  return (
    <div>
      <MovieList title={"Now Playing"} movie={movies?.NowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movie={movies?.popularMovies}/>
      <MovieList title={"Top Rated"} movie={movies?.TopRatedMovies}/>
      <MovieList title={"UpComing"} movie={movies?.UpComingMovies}/>
    </div>
  )
}

export default SecondaryContainer
