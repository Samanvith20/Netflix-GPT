import React from 'react'
import  { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from '../LoginComponent/Login'
import Browse from '../Browser Component/Browse'

import Movies from '../Browser Component/Movies'

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
    }
])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
