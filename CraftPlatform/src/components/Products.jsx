/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import style from './Product.module.css'
import { Link } from 'react-router-dom'

const Products=(props)=>{
    return  <div className={style.ShopProducts}>
        {
        props.Products.map((Product,Key)=>{
            return <div key={Key} className={style.Product}>
            {(props.IsSeller)?<Link to={'/AddProduct'} className={style.EditButton}><FontAwesomeIcon icon={faBars} style={{color: "#000000",}} /></Link>:null}
            <Link to={'/product'} className={style.img}>
            <img src={Product.image_URL} className={style.ProductImage}/>
            </Link>
            <div className={style.ProductInfo}>
                <p>{Product.Name}</p>
                <p>Product price: {Product.Price} $</p>
                
            </div>
            <Link to={'/EditProduct'}><button className='blackBtn'>Edit</button></Link>
            </div>
        })}
        </div>

}
export default Products;