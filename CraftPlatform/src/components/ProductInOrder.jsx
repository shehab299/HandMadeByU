import styles from '../pages/Order/order.module.css'

function ProductInOrder(props) {
    return (
      <div className={styles.productContainer}>
        <h2>{props.productObj.productName}</h2>
        <p>Quantity: {props.productObj.quantity}</p>
        <p>Item price: {props.productObj.itemPrice}</p>
        <p>Total price: {props.productObj.totalPrice}</p>
        <p>Shop name: {props.productObj.shopName}</p>
      </div>
    );
}

export default ProductInOrder;