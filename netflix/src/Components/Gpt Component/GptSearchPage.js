import {  BG_IMAGE } from "../utils/Constants"
import GptResult from "./GptResult";
import GptSearch from "./GptSearch";



const GPTSearchPage = () => {
  return (
    <>
    <div className=" fixed -z-10  left-0 top-0  w-full h-full">
      <img className=" brightness-[.4] lg:scale-110 md:scale-x-125 sm:scale-x-150  sm:scale-y-110 object-cover md:h-[600px] sm:h-[600px] h-screen lg:h-[700px]  w-full" 
      src={BG_IMAGE} alt="logo" />
    </div>
    <div className="">
      <GptSearch />
      <GptResult />
    </div>
  </>
  );
};
export default GPTSearchPage;