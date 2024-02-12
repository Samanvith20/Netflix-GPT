import React from 'react'
import Header from '../LoginComponent/Header'
import useNowplayingmovies from '../utils/CustomHooks/useNowplayingmovies'
import usePopularmovies from '../utils/CustomHooks/usePopularMovies'
import useTopRatedMovies from '../utils/CustomHooks/useTopRatedMovies'
import useUpComingmovies from '../utils/CustomHooks/useUpComingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowplayingmovies()
  usePopularmovies()
  useTopRatedMovies()
  useUpComingmovies()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
