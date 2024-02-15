import  { useEffect } from 'react'
import { OPTIONS } from '../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieCharacter } from '../Store/movieSlice'

const useMovieCharacter = (id) => {
   
    const dispatch=useDispatch()
  useEffect(()=>{
      fetchcharactersdata()
  },[])
   const fetchcharactersdata=async()=>{
    try{
        const fetching= await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, OPTIONS)
        const data=await fetching.json()
       //console.log(data.cast);
         dispatch(addMovieCharacter(data))
      }catch(error){
        console.error("Error for fetching character data",error)
      }
   }
}

export default useMovieCharacter
