/* eslint-disable react/prop-types */
import shop from "./Shop.json"
import style from "./Shop.module.css"
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import { useState } from "react";

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



function Shop(props)
{
    let thisProducts=shop.Products;
    let categories=shop.Categories;

    const [FollowButtonText,setFollowButtonText]=useState("Follow");

    function handleFollowClick(e)
    {
        if(FollowButtonText=="Follow")
        setFollowButtonText("Unfollow")
        else
        setFollowButtonText("Follow")
    }

    return <>
    <Navbar/>

    <img src={shop.Banner_URL} className={style.Banner}/>
        <div className={style.ShopInfo}>
            <img src={shop.logo_URL} className={style.Logo}/>
            <div >
                <h1>{shop.Shop_Name}</h1>
                <h3>{shop.Description}</h3>
                {(!props.IsSeller)?<button className={style.Buttons} onClick={()=>handleFollowClick()}>{FollowButtonText}{(FollowButtonText=="Follow")?<span>&#10084;</span>:null}</button>:null}
            </div>
        </div>
    <div className={style.Container}>
    <Categories Categories={categories} IsSeller={props.IsSeller}/>
    <Products Products={thisProducts} IsSeller={props.IsSeller}/>
    </div>
    </>
}

export default Shop;
