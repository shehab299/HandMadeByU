/* eslint-disable react/prop-types */
import style from "./Cart.module.css"
import Carts from "./Carts.json"
function Cart(props){
    const thisCart=Carts.find(cart=>cart.CID==props.CID);
    console.log(thisCart);

    const productsInCart= thisCart.Products;
    console.log(productsInCart);

    let ShopsInCart=productsInCart.map(product=>product.SID)
    ShopsInCart= [...new Set(ShopsInCart)];
    console.log(ShopsInCart);


    return <div className={style.Container}>
        <div className={style.CartItems}>
            {
                ShopsInCart.map((shop)=>{                                   
                    let products=productsInCart.filter(product=>{
                        if(product.SID==shop)
                        return product
                    });

                    console.log(products);                           
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
                                     {/* display this Shop products */}
                                    <img src={product.image_URL} className={style.ProductImg}/>
                                    <div>
                                        <h3>{product.Name}</h3>
                                        <h3>{product.PDescription}</h3>
                                        <div className={style.row}>
                                            <h3>Quantity:</h3>
                                            <h3>{product.Quantity}</h3>
                                        </div>
                                    </div>
                                    <div className={style.PriceRemove}>
                                        <h3>{product.Price} $</h3>
                                        <button className={style.RemoveButton}>Remove</button>
                                    </div>
                                </div>
                        })}
                    </div>
                    </div>
                })}
        </div>

        <div className={style.Total}>
        <div className={style.row}>
            <h2>Total Price: </h2>
            <h2> {thisCart.TotalPrice} $</h2>
        </div>
        <div className={style.row}>
            <h2>Total Quantity: </h2>
            <h2>{thisCart.TotalQuantity}</h2>
        </div>
        <button className={style.PurchaseButton}><h2>Proceed To Purchase</h2></button>
        </div>
    </div>
}
export default Cart;