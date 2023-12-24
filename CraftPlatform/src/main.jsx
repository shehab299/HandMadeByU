import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Shop from './pages/Shop' 
import Cart from './pages/Cart'   

const router = createBrowserRouter([
  {
    path : '/' ,
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path : '/Shop' ,
    element:<Shop SID={1} IsSeller={1}/>,
  },
  {
    path : '/Cart' ,
    element:<Cart CID={1234}/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
