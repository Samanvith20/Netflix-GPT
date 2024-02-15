import React from 'react';
import useMovieCharacter from '../utils/CustomHooks/useMovieCharacter';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCharacter = ({ id }) => {
  useMovieCharacter(id);
  const movieCharacters = useSelector((store) => store?.movies?.movieCharacters);

  if (movieCharacters === null) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center overflow-x-scroll no-scrollbar">
      {movieCharacters.cast.map((item) => {
        if (item.profile_path === null) return null;
        return (
          <div key={item.id} className="text-white flex-row m-2">
            <div className="bg-black w-36 rounded-2xl p-3">
              <img className="rounded-lg" alt="cast profiles" src={IMG_CDN_URL + item.profile_path}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCharacter;
