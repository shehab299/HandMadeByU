//styles
import styles from './dashboard.module.css'

//react
import { useState } from 'react'
import { Link } from 'react-router-dom'

//components
import Navbar from '../../components/Navbar'
import Products from "../../components/Products";

//pages
import Shop from '../Shop'
import ShopSettings from '../ShopSettings'

//json
import shop from "../Shop/Shop.json"

export default function Dashboard() {
    const [display, setDisplay] = useState('shopSettings')
    const thisProducts= shop.Products;
    return (
        <>
        <Navbar createdShop={true} />
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <button onClick={()=>setDisplay('shopSettings')}>Shop Settings</button>
            <button onClick={()=>setDisplay('product')}>Products</button>
            <button onClick={()=>setDisplay('competition')}>Competitions</button>
            <button onClick={()=>setDisplay('shop')}>Shop</button>
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
                <Link to={'/AddComptetion'}><button>Add competition</button></Link>
                <button>Edit competition</button>
            </div> : null)) }
        </div>
    </div>
    </>
    )
}