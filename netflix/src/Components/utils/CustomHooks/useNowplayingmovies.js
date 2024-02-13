import { useEffect } from 'react';
import { OPTIONS } from '../Constants';
import { useDispatch, useSelector } from 'react-redux';
import { addmovies } from '../Store/movieSlice';

const useNowplayingmovies = () => {
    const nowplayingmovies = useSelector((store) => store?.movies?.NowPlayingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!nowplayingmovies) {
            fetchNowPlayingMovies();
        }
    }, []);

    const fetchNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS);
            const data = await response.json();
            
            
            dispatch(addmovies(data.results));
        } catch (error) {
            console.error('Error fetching now playing Indian movies:', error);
        }
    };
};

export default useNowplayingmovies;
