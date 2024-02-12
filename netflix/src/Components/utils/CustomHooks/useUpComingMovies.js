import { useEffect } from "react"
import { OPTIONS } from "../Constants"
import { useDispatch, useSelector } from "react-redux"
import { addNewvideos, addpopular } from "../Store/movieSlice"

const useUpComingmovies=()=>{
     const UpComingmovies=useSelector((store)=>store?.movies?.UpComingmovies)
     const dispatch=useDispatch()
    useEffect(()=>{
        if(!UpComingmovies){
       fetchUpComingmovies()
        }
    },[])
    const fetchUpComingmovies=async()=>{
        try {
            const response= await fetch( "https://api.themoviedb.org/3/movie/popular",OPTIONS)
            const data=  await response.json()
            //console.log(data.results);
            dispatch( addNewvideos(data.results))
        } catch (error) {
            console.error('Error UpComing movies:', error);
        }
    }
}
 export default useUpComingmovies