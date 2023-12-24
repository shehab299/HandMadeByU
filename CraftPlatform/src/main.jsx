import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import ShopPage from './pages/ShopPage' 



const router = createBrowserRouter([
  {
    path : '/' ,
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path : '/Shop' ,
    element:<ShopPage SID={1} IsSeller={1}/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
