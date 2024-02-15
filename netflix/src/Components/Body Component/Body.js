import React from 'react'
import  { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from '../LoginComponent/Login'
import Browse from '../Browser Component/Browse'

import Movies from '../Browser Component/Movies'
import MovieDetails from '../Browser Component/MovieDetails'

const Body = () => {
    const appRouter=  createBrowserRouter([
        {
         path:"/",
         element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
      path: "/movie/:id",
      element:<Movies/>
    },
    {
      path:"/detail",
      element:<MovieDetails />
    }
    
])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
