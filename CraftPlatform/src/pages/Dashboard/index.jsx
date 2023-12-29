//styles
import styles from './dashboard.module.css'

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
    const thisProducts= shop.Products;
    return (
    <>
        <div className={styles.navbar}>
            <Navbar  createdShop={true} />
        </div>
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <button onClick={()=>setDisplay('shopSettings')}>Shop Settings</button>
            <button onClick={()=>setDisplay('product')}>Products</button>
            <button onClick={()=>setDisplay('competition')}>Competitions</button>
            <button onClick={()=>setDisplay('Orders')}>Orders</button>
        </div>
        <div className={styles.mainContent}>
            {display=='shopSettings' ? 
            <ShopSettings /> : 
            (display=='product' ? 
            <div>
                <Products Products={thisProducts}/>
                <Link to={'/AddProduct'}><button>Add Product</button></Link>
                <button>Edit Product</button>
            </div> : 
            (display=='competition' ? 
            <div>
               <ShopCompetitions />
            </div> : 
            <div>
                <ShopOrders/>
            </div>)) }
        </div>
    </div>
    </>
    )
}