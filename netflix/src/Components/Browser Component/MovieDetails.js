import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useTrailerplayingvideos from '../utils/CustomHooks/useTrailerplayingvideos';
import { IMG_CDN_URL } from '../utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import MovieCharacter from './MovieCharacter';

const MovieDetails = () => {
    const [show, setShow] = useState(false);
    const movieDetails = useSelector((store) => store?.movies?.movieDetails);
    const Trailervideo = useSelector((store) => store?.movies?.TrailerPlayingVideo);
    //console.log(movieDetails);
    useTrailerplayingvideos(movieDetails?.id, show);

    if (!movieDetails) return null;

    return (
        <>
            <div className="bg-black">
                <div>
                    <div className="flex flex-row">
                        <div className="pt-24 sm:pt-0">
                            <img className="w-20 sm:w-full rounded-lg" src={IMG_CDN_URL + movieDetails.poster_path} alt="Movie poster" />
                            <div onClick={() => setShow(!show)} className="absolute top-1/2">
                                <FontAwesomeIcon className="text-4xl md:text-8xl text-red-700 cursor-pointer" icon={show === false ? faPlayCircle : faPauseCircle} />
                            </div>
                        </div>
                        {show === false ? (
                            <>
                                <div className="bg-black block text-white w-4/6 mt-32">
                                    <h1 className="text-yellow-500 text-center text-3xl sm:text-7xl">{movieDetails?.title||movieDetails?.original_name}</h1>
                                    <div className="text-white text-center flex flex-row justify-around pt-7 mt-4">
                                        <h2>Rating : {movieDetails?.vote_average}</h2>
                                        <h2>Release date : {movieDetails?.release_date}</h2>
                                    </div>
                                    <h1 className="text-xs sm:text-lg pt-16 text-yellow-600">{movieDetails?.overview}</h1>
                                    <MovieCharacter id={movieDetails?.id} />
                                </div>
                            </>
                        ) : (
                            <div className="w-full sm:relative sm:w-10/12 pt-20">
                                <iframe
                                    className="w-full border border-black aspect-video"
                                    src={`https://www.youtube.com/embed/${Trailervideo?.key}?&autoplay=1&unmute=0`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieDetails;
