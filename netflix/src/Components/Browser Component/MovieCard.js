import React from 'react'
import { IMG_CDN_URL } from "../utils/Constants"

const MovieCard = ({ poster , title}) => { 
 if(!poster) return null
  return (
    <div className='w-40 md:w-48 pr-4' >
        <img src={IMG_CDN_URL + poster} alt='Movie Card' />
        <h2 className='text-white p-2' >{title}</h2>
    </div>
  )
}

export default MovieCard