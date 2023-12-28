//styles
import styles from "../pages/product/review.module.css"

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Review(props) {
    return (
    <div className={styles.container}>
        <div className={styles.userInfo}>
            <FontAwesomeIcon icon={faUser} className={styles.UserIcon}/>
            <p>{props.reviewObj.customerName}</p>
        </div>
        <p>{props.reviewObj.reviewDescription}</p>    
    </div>
    );
}
