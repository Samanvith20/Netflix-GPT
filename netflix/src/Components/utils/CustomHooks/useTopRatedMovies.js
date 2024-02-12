import { useEffect } from "react"
import { OPTIONS } from "../Constants"
import { useDispatch, useSelector } from "react-redux"
import { addRatedmovies,  } from "../Store/movieSlice"

const useTopRatedMovies=()=>{
     const Topmovies=useSelector((store)=>store?.movies?.TopRatedMovies)
     const dispatch=useDispatch()
    useEffect(()=>{
        if(!Topmovies){
       fetchRatedmovies()
        }
    },[])
    const fetchRatedmovies=async()=>{
        try {
            const response= await fetch( "https://api.themoviedb.org/3/movie/top_rated",OPTIONS)
            const data=  await response.json()
            //console.log(data.results);
            dispatch(addRatedmovies(data.results))
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }
    }
}
 export default useTopRatedMovies