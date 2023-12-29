/* eslint-disable react/prop-types */
import shop from "./Shop.json"
import style from "./Shop.module.css"
import Navbar from "../../components/Navbar";
import Products from "../../components/Product";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api.js"



function Shop(props)
{    
    const {id} = useParams();
    const [shop, setShop] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getShop = async () => {
        const response = await api.getShop(id);
        if(response.data){
            setShop(response.data);
            console.log(response.data);
        }
    }

    const getShopProducts = async () => {
        const response = await api.getShopProducts(id);
        if(response.data){
            setProducts(response.data);
            setLoading(false);
            console.log(response.data);
        }
    }

    useEffect(() => {setLoading(true); getShop(); getShopProducts();} , [id])

    console.log(shop);
    console.log(products);

    let categories=shop.Categories;

    return <>
    <Navbar/>
    <ShopInfo IsSeller={props.IsSeller} shop={shop}/>
    <div className={style.Container}>
    <Products Products={products}/>
    </div>
    </>
}


const ShopInfo=({shop,IsSeller})=>{
    return <>
        <img src={shop.Banner_URL} className={style.Banner}/>
        <div className={style.ShopInfo}>
            <img src={shop.logo_URL} className={style.Logo}/>
            <div >
                <h1>{shop.Name}</h1>
                <h3>{shop.Description}</h3>
                {(!IsSeller)?<button className={style.Buttons}>Follow  &#10084;</button>:null}
            </div>
            {(IsSeller) ? <button className={style.EditPhoto}>&#x1F4F7;</button>:null}
        </div>
        {(IsSeller)? <button className={style.Buttons}>EditBanner &#x1F4F7;</button>:null}
    </>
}

const Categories=(props)=>
{
   return <div className={style.ShopCategories}>
        {
        props.Categories.map((category,Key)=>{
            return <div key={Key} className={style.Category}>
                <p>{category}</p>
            </div>
        })}
    {(props.IsSeller)?
        <div className={style.SellerOptions}>
            <button className={style.Buttons}>Add Product</button>
            <button className={style.Buttons}>Add Compitetion</button>
            <button className={style.Buttons}>Add Category</button>
            <button className={style.Buttons}>Edit Product</button>
            <button className={style.Buttons}>Edit Compitetion</button>
            <button className={style.Buttons}>Edit Categories</button>
            <button className={style.Buttons}>Shop Settings</button>
        </div>:null
        }
    </div>
}



export default Shop;
