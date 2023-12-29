//styles
import styles from './dashboard.module.css'
import navbarStyle from '../../components/navbar.module.css'

//react
import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Navbar from '../../components/Navbar'
import Products from "../../components/Products";
import ShopOrders from '../../components/ShopOrders';
import ShopCompetitions from '../../components/ShopCompetitions';

//pages
import ShopSettings from '../ShopSettings'

//json
import shop from "../Shop/Shop.json"

export default function Dashboard() {
    const [display, setDisplay] = useState('shopSettings')
    const [visibale, setVisibale] = useState(false)
    const thisProducts= shop.Products;
    return (
    <>
        <div className={[styles.navbar]}>
            <button onClick={()=>setDisplay('shopSettings')}>Shop Settings</button>
            <button onClick={()=>setDisplay('product')}>Products</button>
            <button onClick={()=>setDisplay('competition')}>Competitions</button>
            <button onClick={()=>setDisplay('orders')}>Orders</button>
            <Link to={'/'}><button>Home</button></Link>
        </div>
        <div className={styles.mainContent}>
            {display=='shopSettings' ? 
            <ShopSettings /> : 
            (display=='product' ? 
            <div>
                <Products isSeller={true} sellerView={true} Products={thisProducts}/>
                <Link to={'/AddProduct'}><button className='blackBtn'>Add Product</button></Link>
            </div> : 
            (display=='competition' ? 
            <ShopCompetitions /> : 
            <ShopOrders/>
            )) }
        </div>
    </>
    )
}