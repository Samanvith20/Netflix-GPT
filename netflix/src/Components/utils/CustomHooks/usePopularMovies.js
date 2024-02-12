import { useEffect } from "react"
import { OPTIONS } from "../Constants"
import { useDispatch, useSelector } from "react-redux"
import { addpopular } from "../Store/movieSlice"

const usePopularmovies=()=>{
     const trendingmovies=useSelector((store)=>store?.movies?.popularMovies)
     const dispatch=useDispatch()
    useEffect(()=>{
        if(!trendingmovies){
       fetchpopularmovies()
        }
    },[])
    const fetchpopularmovies=async()=>{
        try {
            const response= await fetch( "https://api.themoviedb.org/3/movie/popular",OPTIONS)
            const data=  await response.json()
            //console.log(data.results);
            dispatch(addpopular(data.results))
        } catch (error) {
            console.error('Error fetching popular movies:', error);
        }
    }
}
 export default usePopularmovies