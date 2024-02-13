import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Videotitle = ({ title,description }) => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);

  return (
    <div className="pt-24 md:pt-48 px-10 md:px-20 w-full absolute text-neutral-50  ">
      <h1 className="text-lg font-medium  md:text-5xl md:font-bold  ">{title}</h1>
      <p className="py-5 hidden md:inline-block text-lg w-1/3 ">{description}</p>
      <div className="flex  md:gap-4 my-3">
        <Link to ={"/movie/" + movies[1]?.id}
          className="bg-white text-black bg-opacity-80 py-1 px-2 md:p-3 md:px-10 font-medium md:text-xl md:font-semibold rounded-md hover:bg-opacity-60 "
          
        >
            ▶️ Play
        </Link>
        <button className="bg-black hidden md:inline-block text-white bg-opacity-80 p-3 px-5  text-xl font-semibold rounded-md hover:bg-opacity-100  ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default Videotitle;