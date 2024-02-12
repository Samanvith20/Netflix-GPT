import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
     const movies=useSelector((store)=>store?.movies?.NowPlayingMovies)
     //console.log(movies);
     if(!movies) return null
     const movieInfo=movies[0]
      const {original_title, overview, id}=movieInfo

  return (
    <div className="" >
        <Videotitle title={original_title} description={overview} />
        <VideoBackground  movieId={id} />
    
      </div>
    
  );
}

export default MainContainer
