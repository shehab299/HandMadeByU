//components
import Review from "../../components/Review";
import Navbar from "../../components/Navbar";

//json files
import reviewsData from "./reviews.json"

//style
import styles from "./product.module.css"

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//API SERVICES

import api from "../../services/api.js"




function Product() {

    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [reviews , setReviews] = useState([]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
  
    
    const getProduct = async (id) => {
        const response = await api.getProduct(id);
        if(response.data){
            setLoading(false);
            setProduct(response.data);
        }
    }
    
    const getReviews = async (id) => {
        const response = await api.getReviews(id);
        if(response.data)
            setReviews(response.data);
    }

    //RETRIVING DATA FROM API
    useEffect(() => {
        setLoading(true);
        getProduct(id);
        getReviews(id);
    }, [id]);

    console.log(product);

    return (  
    !loading && <div>
        <Navbar createShop={false}/>
        <div  className={styles.container}>
            <div className={styles.photoDescription}>
                <div className={styles.imgContainer}>
                    <img className={styles.productImg} src='../../../assets/mirrorWhite.jpg'/>
                    <p>Product Name</p>
                </div>
                <div className = {styles.productInfo}>
                    <h2>{product.Name}</h2>
                    <p> {product.PName} </p>
                    <p> {product.Price}</p>
                    <p> {product.Description}</p>
                </div>
            </div>
            <div>
                {
                    reviews.map((reviewObj, index) => (
                        <Review reviewObj = {reviewObj} key = {index}/>
                    ))
                }
                    <div className={styles.cart}>
                        <div>
                            <label>Quantity</label>
                            <input min={1} type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <button className="blackBtn">Add to cart <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFF"}} /></button>
                    </div> 
            </div>
            </div>
        </div>
    );
}

export default Product