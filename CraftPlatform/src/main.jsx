import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import Shop from './pages/Shop/index.jsx' 
import Review from './components/Review.jsx'
import Product from './pages/product'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import AccountSettings from './pages/AccountSettings/index.jsx'
import ShopSettings from './pages/ShopSettings/index.jsx'
import SignUp from './pages/Signup/index.jsx'
import Login from './pages/Login/index.jsx'
import SellerSignUp from './pages/CreateShop/index.jsx'
import Cart from './pages/Cart' 
import AddCompetition from './pages/AddCompetition/index.jsx'  
import AddProduct from './pages/AddProduct/index.jsx'
import Compitetion from './pages/Competition/index.jsx'
import ConfirmOrder from './pages/ConfirmOrder/index.jsx'
import AddAddress from './pages/AddAddress/index.jsx'

const router = createBrowserRouter([
  {
    path : '/' ,
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/Review',
    element: <Review/>
  },
  {
    path: '/Product',
    element: <Product/>
  },
  {
    path: '/Order',
    element: <Order/>
  },
  {
    path: '/Navbar',
    element: <Navbar/>
  },
  {
    path: '/AccountSettings',
    element: <AccountSettings/>
  },
  {
    path: '/ShopSettings',
    element: <ShopSettings/>
  },
  {
    path: '/Signup',
    element: <SignUp/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path : '/Shop',
    element:<Shop IsSeller={0}/>,
  },
  {
    path : '/Competition',
    element:<Compitetion IsSeller={1}/>,
  },
  {
    path : '/ConfirmOrder',
    element:<ConfirmOrder/>,
  },
  {
    path : '/AddAddress',
    element:<AddAddress/>,
  },
  {
    path : '/Cart' ,
    element:<Cart CID={1234}/>,
  },
  {
    path : '/sellerSignUp',
    element:<SellerSignUp/>,
  },
  {
    path : '/AddComptetion',
    element:<AddCompetition/>,
  },
  {
    path : '/AddProduct',
    element:<AddProduct/>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
