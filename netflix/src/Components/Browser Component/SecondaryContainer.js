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
    <div className='bg-black '>
    <div className=' -mt-2 md:-mt-64 relative z-20 ' >
      <MovieList title={"Now Playing"} movies={movies?.NowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"UpComing"} movies={movies?.UpComingMovies}/>
      <MovieList title={"Tv Shows"} movies={movies?.tvShows}/>
    </div>
   </div>
  )
}

export default SecondaryContainer
