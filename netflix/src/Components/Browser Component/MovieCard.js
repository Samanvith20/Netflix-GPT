import React from 'react'
import { IMG_CDN_URL } from "../utils/Constants"
import { Link } from 'react-router-dom'

const MovieCard = ({ poster , title}) => { 
 if(!poster) return null
  return (
    <div className="relative xl:w-[170px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[90px] cursor-pointer ">
      <img className="w-full rounded-lg" src={IMG_CDN_URL + poster} alt="Loading.." />
      <Link to={"/detail"} className="absolute top-0 right-0">
        <button className="bg-black text-yellow-600 hover:bg-yellow-600 hover:text-white p-1 px-4 rounded-2xl text-sm ">
          i
        </button>
      </Link>
      <span className="text-gray-300 hidden md:block lg:text-base md:text-sm ">{title?.length > 18 ? `${title.slice(0, 18)}...` : title} </span>
      <span className="text-gray-300  md:hidden sm:text-sm text-xs">{title?.length > 12 ? `${title.slice(0, 12)}...` : title} </span>
    </div>
  )
}

export default MovieCard;
