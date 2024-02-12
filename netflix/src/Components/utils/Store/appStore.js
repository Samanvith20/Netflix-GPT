
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
 reducer: {
   user: userReducer,
   movies:movieSlice
 }
});

export default store;
