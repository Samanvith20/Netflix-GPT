import React from 'react'
import useTrailerplayingvideos from '../utils/CustomHooks/useTrailerplayingvideos'
import { useSelector } from 'react-redux'

const VideoBackground = ({movieId}) => {
    const Trailervideo=useSelector((store)=>store?.movies?.TrailerPlayingVideo)
    useTrailerplayingvideos(movieId)
  return (
    <div className=" w-screen">
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" +
        Trailervideo?.key +
        "?&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  )
}

export default VideoBackground
