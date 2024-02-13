
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";

const store = configureStore({
 reducer: {
   user: userReducer,
   movies:movieSlice,
   gpt:GptSlice,
 }
});

export default store;
