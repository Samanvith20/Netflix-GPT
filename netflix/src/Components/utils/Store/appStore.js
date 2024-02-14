
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import GptSlice from "./GptSlice";
import langSlice from "./langSlice";

const store = configureStore({
 reducer: {
   user: userReducer,
   movies:movieSlice,
   gpt:GptSlice,
   language:langSlice
 }
});

export default store;
