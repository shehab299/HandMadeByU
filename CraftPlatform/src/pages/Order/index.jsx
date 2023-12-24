import productsData from "./ProductInOrder.json";
import ProductInOrder from "./ProductInOrder";
import styles from './order.module.css'
import Navbar from "../../components/Navbar";

function Order() {
    return (
        <div className={styles.container}>
        <Navbar />
        <div className={styles.orderContainer}>
              <div>
                {productsData.map((productObj ,index) => (
                    <ProductInOrder productObj = {productObj} key = {index}/>
                ))}
            </div>

            <div className={styles.orderInfo}>
                <h2>Order ID</h2>
                <p>customer name</p>
                <p>customer ID</p>
                <p>number of Items</p>
                <p>total price</p>
                <p>order date</p>
                <p>phone number</p>
                <p>Address</p>
            </div>
        </div>
        </div>
    );
}

export default Order