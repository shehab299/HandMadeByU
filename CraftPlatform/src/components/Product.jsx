/* eslint-disable react/prop-types */
import style from './Product.module.css'
const Products=(props)=>{
    return  <div className={style.ShopProducts}>
        {
        props.Products.map((Product,Key)=>{
            return <div key={Key} className={style.Product}>
            <img src={Product.image_URL} className={style.ProductImage}/>
            <div className={style.ProductInfo}>
                <p>{Product.Name}</p>
                <p>{Product.Price} $</p>
            </div>
            </div>
        })}
        </div>
}
export default Products;