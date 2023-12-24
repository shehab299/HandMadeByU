import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Review from './pages/product/review'
import Product from './pages/product'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import AccountSettings from './pages/AccountSettings.jsx'


const router = createBrowserRouter([
  {
    path : '/' ,
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/review',
    element: <Review/>
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/Order',
    element: <Order/>
  },
  {
    path: '/navbar',
    element: <Navbar/>
  },
  {
    path: '/accountSettings',
    element: <AccountSettings/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
