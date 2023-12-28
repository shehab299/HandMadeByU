/* eslint-disable react/prop-types */
import style from './Product.module.css'
import { Link } from 'react-router-dom'
const Products=(props)=>{
    return  <div className={style.ShopProducts}>
        {
        props.Products.map((Product,Key)=>{
            return <div key={Key} className={style.Product}>
            <Link to={'/product'}>
            <img src={Product.image_URL} className={style.ProductImage}/>
            <div className={style.ProductInfo}>
                <p>{Product.Name}</p>
                <p>{Product.Price} $</p>
            </div>
            </Link>
            </div>
        })}
        </div>

}
export default Products;