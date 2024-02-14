import React, { useRef } from 'react';
import OpenAI from 'openai';
import { OPENAI_KEY, OPTIONS } from '../utils/Constants';
import Shimmer from '../ShimmerComponent/Shimmer'
import { useDispatch  } from 'react-redux';
import { addmovieInfo } from '../utils/Store/GptSlice';

const GptSearch = () => {
  const input = useRef(null);
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
    const openai = new OpenAI({
      apiKey: "",
      dangerouslyAllowBrowser: true,
    });

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
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-11/12 xl:w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto"
    >
      <input
        type="text"
        className="xl:text-base lg:text-base md:text-sm sm:text-sm text-xs rounded-l-full font-normal text-black border-black xl:pl-5 md:pl-4 sm:pl-4 pl-3 lg:pl-5 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:w-9/12 md:w-10/12 w-9/12 sm:w-10/12 lg:w-9/12"
        placeholder="Search any type of movie you want?"
        ref={input}
      />
      <button
        onClick={handleGPTSearch}
        className="bg-red-700 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 py-1.5 xl:px-8 sm:px-4 px-2 md:px-6 lg:px-8 font-semibold xl:text-base lg:text-base md:text-sm sm:text-sm text-xs  xl:w-3/12 md:w-2.5/12 sm:w-2/12 w-1.5/12 lg:w-3/12 rounded-r-full"
      >
        Search
      </button>
    </form>
  );
};

export default GptSearch;
