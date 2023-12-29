/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import style from "./Cart.module.css"
import Navbar from "../../components/Navbar";
import CartData from "./Cart.json"
import { useState } from "react";   
import { Link } from "react-router-dom";

function Cart(){
    let productsInCart=CartData.Products;
    let totalPrice = 0;
    let shopsInCart=productsInCart.map(product=>product.SID)
    shopsInCart= [...new Set(shopsInCart)];
    let totalQuantity=0;

    productsInCart.map((prod)=>{
        totalQuantity+=prod.Quantity
        totalPrice+=prod.Price*prod.Quantity
    })

    const [TotalPrice,setTotalPrice]=useState(totalPrice);
    const [TotalQuantity,setTotalQuantity]=useState(totalQuantity);
    const [ProductsInCart,setProductsInCart]=useState(productsInCart);
    const [ShopsInCart,setShopsInCart]=useState(shopsInCart);

    function handleRemoveClick(prod,price, PID) {
        setTotalPrice(TotalPrice-price*prod.Quantity);
        setTotalQuantity(TotalQuantity-prod.Quantity);
        productsInCart=ProductsInCart.filter((product)=>{return product.PID!=PID})
        setProductsInCart(productsInCart)
        shopsInCart=productsInCart.map(product=>product.SID)
        shopsInCart= [...new Set(shopsInCart)];
        console.log(shopsInCart);
        setShopsInCart(shopsInCart)
    }

    function handlePurchaseClick(){
        console.log("Purchase Clicked")
        setTotalPrice(0);
        setTotalQuantity(0);
        setProductsInCart([]);
        setShopsInCart([]);
    }

    function reduceQuantity(prod)
    {
        prod.Quantity--;
        setTotalQuantity(TotalQuantity-1)
        setTotalPrice(TotalPrice-prod.Price)
        if(prod.Quantity==0)
        {
            productsInCart=ProductsInCart.filter((product)=>{return product.PID!=prod.PID})
            setProductsInCart(productsInCart)
            shopsInCart=productsInCart.map(product=>product.SID)
            shopsInCart= [...new Set(shopsInCart)];
            setShopsInCart(shopsInCart)
        }
    }

    return <>
    <Navbar/>
    <div className={style.Container}>
        <div className={style.CartItems}>
            {
                ShopsInCart.map((shop)=>{                                   
                    let products=ProductsInCart.filter(product=>{
                        if(product.SID==shop)
                        return product
                    });
                          
                    return <div key={shop}  className={style.ShopContainer}>  
                    {/* display Shop data   */}
                    <div className={style.ShopInfo}>
                    <img src={products[0].logo_URL} className={style.Logo}/>           
                    <h2>{products[0].Shop_Name}</h2>
                    </div>
                    <div className={style.ShopItems}>
                        {    
                        products.map(product=>{                     
                        return <div key={product.PID} className={style.ProductInfo}>
                            <img src={product.image_URL} className={style.ProductImg}/>
                            <div>
                                <p>{product.Name}</p>
                                <p>{product.PDescription}</p>
                                <div className={style.row}>
                                    <p>Quantity:</p>
                                    <p>{product.Quantity}</p>
                                    <button onClick={()=>reduceQuantity(product)}>-</button>
                                </div>
                            </div>
                            <div className={style.PriceRemove}>
                                <p>{product.Price} $</p>
                                <button className={style.RemoveButton} onClick={() => {handleRemoveClick(product,product.Price,product.PID)}}>Remove</button>
                            </div>
                        </div>
                        })}
                    </div>
                    </div>
                })}
        </div>

        <div className={style.Total}>
        <div className={style.row}>
            <p>Total Price: </p>
            <p> {TotalPrice} $</p>
        </div>
        <div className={style.row}>
            <p>Total Quantity: </p>
            <p>{TotalQuantity}</p>
        </div>
        <Link to={'/ConfirmOrder'}>
            <button className={style.PurchaseButton} onClick={()=> {handlePurchaseClick()}}>Proceed To Purchase</button>
        </Link>
        </div>
    </div>
    </>
}
export default Cart;