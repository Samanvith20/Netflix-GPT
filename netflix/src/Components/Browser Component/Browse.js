import React, { useEffect } from 'react';
import Header from '../LoginComponent/Header';
import useNowplayingmovies from '../utils/CustomHooks/useNowplayingmovies';
import usePopularmovies from '../utils/CustomHooks/usePopularMovies';
import useTopRatedMovies from '../utils/CustomHooks/useTopRatedMovies';
import useUpComingmovies from '../utils/CustomHooks/useUpComingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


import { useDispatch, useSelector } from 'react-redux';
import GPTSearchPage from '../Gpt Component/GptSearchPage';
import { removemovieInfo } from '../utils/Store/GptSlice';


const Browse = () => {
  useNowplayingmovies();
  usePopularmovies();
  useTopRatedMovies();
  useUpComingmovies();
  
  const dispatch = useDispatch();
  const gptview = useSelector((store) => store.gpt.gptSearchView);
  
  // useEffect hook to dispatch removemovieInfo action when gptview changes
  useEffect(() => {
    if (!gptview) {
      dispatch(removemovieInfo());
    }
  }, [gptview]);

 
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
  );
};

export default Browse;
