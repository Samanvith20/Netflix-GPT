import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 ">
      <h1 className="text-xl md:text-3xl py-4 md:py-10 text-white font-semibold ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex lg:gap-4 md:gap-3 gap-2 sm:gap-2">
          {movies?.map((movie) => (
            <Link to ={"/movie/" + movie?.id} key={movie?.id}>
              <MovieCard 
                MovieDetails={movie}
                 poster={movie?.poster_path || movie?.profile_path} 
                 title={movie?.title || movie?.original_name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;