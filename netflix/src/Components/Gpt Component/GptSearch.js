import React, { useRef } from 'react';

import {   OPTIONS } from '../utils/Constants';
import Shimmer from '../ShimmerComponent/Shimmer'
import { useDispatch  } from 'react-redux';
import { addmovieInfo } from '../utils/Store/GptSlice';
import openai from '../utils/openai';

const GptSearch = () => {
  const input = useRef();
  //console.log(input);
  const dispatch=useDispatch() 

  const tmdbMovieSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false",
      OPTIONS
    );
    const json = await data.json();
    return json;
  };
  const handleGPTSearch = async () => {
    

    const gptSearch =
      "Act as a movie recommendation system and suggest some movies for the query " +
      input.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Hera pheri, 3 idiots, hulk, dunki, red";

    try {
      const data = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptSearch }],
        model: "gpt-3.5-turbo",
      });
        //console.log(data);
        if(!data) return <Shimmer/>
        const gptMovies = data?.choices?.[0]?.message?.content.split(",");
        const movieSearch= gptMovies.map((movie) =>  tmdbMovieSearch(movie));
        const movieresult= await Promise.all(movieSearch);
        //console.log(movieSearch);
       dispatch(addmovieInfo({movieName:gptMovies, movieResults:movieresult}))

    } catch (error) {
      console.error("GPT search error:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={input}
          type="text"
          className="p-4 m-4 col-span-9 text-black"
          placeholder="Search any type of movie you want?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
