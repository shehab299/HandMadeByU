/* eslint-disable react/prop-types */
import Shops from "./Shops.json"
import style from "./Shop.module.css"

function ShopCustomerView(props)
{
    let thisShop=Shops.find(shop=>shop.SID==props.SID);
    let thisProducts=thisShop.Products;
    console.log(thisProducts)
    let categories=thisProducts.map(product=>product.catagery)
    categories = [...new Set(categories)];
    console.log(categories);


    const ShopInfo=()=>{
        if(!props.IsSeller)
        return <>
            <img src={thisShop.Banner_URL} className={style.Banner}/>
            <div className={style.ShopInfo}>
                <img src={thisShop.logo_URL} className={style.Logo}/>
                <div >
                    <h1>{thisShop.Shop_Name}</h1>
                    <h2>{thisShop.Description}</h2>
                    <button className={style.Buttons}>Follow  &#10084;</button>
                </div>
            </div>
        </>
        else
             return <>
            <img src={thisShop.Banner_URL} className={style.Banner}/>
            <div className={style.ShopInfo}>
                <img src={thisShop.logo_URL} className={style.Logo}/>
                <div >
                    <h1>{thisShop.Shop_Name}</h1>
                    <h2>{thisShop.Description}</h2>
                </div>
                <button className={style.Buttons}>EditBanner &#x1F4F7;</button>
            </div>
                <button1 className={style.EditPhoto}>&#x1F4F7;</button1>
            </>
    }


    return <>
    <ShopInfo/>
    <div className={style.Container}>

    <div className={style.ShopCategories}>
    {
    categories.map((category)=>{
        return <div key={category} className={style.Category}>
            <h2>{category}</h2>
        </div>
    })}
    </div>

    <div className={style.ShopProducts}>
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

    </div>
    </>

}
function ShopSellerView()
{
    return <div className={style.SellerOptions}>
    <button className={style.Buttons}>Add Product</button>
    <button className={style.Buttons}>Add Compitetion</button>
    <button className={style.Buttons}>Add Category</button>
    <button className={style.Buttons}>Edit Product</button>
    <button className={style.Buttons}>Edit Compitetion</button>
    <button className={style.Buttons}>Edit Categories</button>
    <button className={style.Buttons}>Shop Settings</button>
    </div>
}

function ShopPage(props)
{
    if(props.IsSeller)
    {
        return <div>
            <ShopCustomerView SID={props.SID} IsSeller={props.IsSeller}/>
            <ShopSellerView/>
        </div>
    }
    else
    return <ShopCustomerView SID={props.SID}/>

}
export default ShopPage;
