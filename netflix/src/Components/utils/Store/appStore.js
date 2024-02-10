 import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
 const appStore=configureStore({
 reducer:{
   User:userSlice
 }
 })
  export default appStore