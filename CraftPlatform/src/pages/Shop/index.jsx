/* eslint-disable react/prop-types */
import shop from "./Shop.json"
import style from "./Shop.module.css"
import Navbar from "../../components/Navbar";
import Products from "../../components/Product";

const ShopInfo=(props)=>{
    return <>
        <img src={shop.Banner_URL} className={style.Banner}/>
        <div className={style.ShopInfo}>
            <img src={shop.logo_URL} className={style.Logo}/>
            <div >
                <h1>{shop.Shop_Name}</h1>
                <h3>{shop.Description}</h3>
                {(!props.IsSeller)?<button className={style.Buttons}>Follow  &#10084;</button>:null}
            </div>
            {(props.IsSeller) ? <button className={style.EditPhoto}>&#x1F4F7;</button>:null}
        </div>
        {(props.IsSeller)? <button className={style.Buttons}>EditBanner &#x1F4F7;</button>:null}
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



function Shop(props)
{
    let thisProducts=shop.Products;
    let categories=shop.Categories;

    return <>
    <Navbar/>
    <ShopInfo IsSeller={props.IsSeller}/>
    <div className={style.Container}>
    <Categories Categories={categories} IsSeller={props.IsSeller}/>
    <Products Products={thisProducts}/>
    </div>
    </>
}

export default Shop;
