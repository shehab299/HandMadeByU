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
import { useState } from "react";


function Product() {
    const [quantity, setQuantity] = useState(1);

    return (  
    <div>
        <Navbar createShop={false}/>
        <div  className={styles.container}>
            <div className={styles.photoDescription}>
                <div className={styles.imgContainer}>
                    <img className={styles.productImg} src='../../../assets/mirrorWhite.jpg'/>
                    <p>Product Name</p>
                </div>
                <div className = {styles.productInfo}>
                    <h2>shop name</h2>
                    <p>product name</p>
                    <p>price</p>
                    <p>product description</p>
                </div>
            </div>
            <div>
                {
                    reviewsData.map((reviewObj, index) => (
                        <Review reviewObj = {reviewObj} key = {index}/>
                    ))
                }
                    <div className={styles.cart}>
                        <div>
                            <label>Quantity</label>
                            <input type="number" name="quantity" min={1} max={10} value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <button className="blackBtn">Add to cart <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFF"}} /></button>
                    </div> 
            </div>
            </div>
        </div>
    );
}

export default Product