/* eslint-disable react/prop-types */
import Shops from "./Shops.json"
import style from "./Shop.module.css"

function Shop(props)
{
    let thisShop=Shops.find(shop=>shop.SID==props.SID);
    let thisProducts=thisShop.Products;
    let categories=thisShop.Categories;
    // thisProducts.map(product=>product.catagery)
    // categories = [...new Set(categories)];
    // console.log(categories);


    const ShopInfo=()=>{
        return <>
            <img src={thisShop.Banner_URL} className={style.Banner}/>
            <div className={style.ShopInfo}>
                <img src={thisShop.logo_URL} className={style.Logo}/>
                <div >
                    <h1>{thisShop.Shop_Name}</h1>
                    <h2>{thisShop.Description}</h2>
                    {(!props.IsSeller)?<button className={style.Buttons}>Follow  &#10084;</button>:null}
                </div>
                {(props.IsSeller)? <button className={style.EditPhoto}>&#x1F4F7;</button>:null}
            </div>
            {(props.IsSeller)? <button className={style.Buttons}>EditBanner &#x1F4F7;</button>:null}
        </>
    }

    const Categories=()=>
    {
       return <div className={style.ShopCategories}>
            {
            categories.map((category)=>{
                return <div key={category} className={style.Category}>
                    <h2>{category}</h2>
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

    
    const Products=()=>{
    return  <div className={style.ShopProducts}>
        {
        thisProducts.map((Product)=>{
            return <div key={Product.PID} className={style.Product}>
            <img src={Product.image_URL} className={style.ProductImage}/>
            <div className={style.ProductInfo}>
                <h3>{Product.Name}</h3>
                <h3>{Product.Price} $</h3>
            </div>
            </div>
        })}
        </div>
    }


    return <>
    <ShopInfo/>
    <div className={style.Container}>
    <Categories/>
    <Products/>
    </div>
    </>
}

export default Shop;
