import React from 'react'
import Header from '../LoginComponent/Header'
import useNowplayingmovies from '../utils/CustomHooks/useNowplayingmovies'
import usePopularmovies from '../utils/CustomHooks/usePopularMovies'
import useTopRatedMovies from '../utils/CustomHooks/useTopRatedMovies'
import useUpComingmovies from '../utils/CustomHooks/useUpComingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTvShows from '../utils/CustomHooks/useTvShows'

import { useDispatch, useSelector } from 'react-redux'
import GPTSearchPage from '../Gpt Component/GptSearchPage'
import { removemovieInfo } from '../utils/Store/GptSlice'


const Browse = () => {
  useNowplayingmovies()
  usePopularmovies()
  useTopRatedMovies()
  useUpComingmovies()
  useTvShows()
  const dispatch=useDispatch()
  const gptview = useSelector((store) => store.gpt.gptSearchView);
  if(!gptview){
    dispatch(removemovieInfo())
  }
  return (
    <div className="text-white w-screen">
      <Header />
      {gptview ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
