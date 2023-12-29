// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../hooks/useAuthContext';

// styles
import styles from './navbar.module.css'

//
import { Link } from 'react-router-dom';


function Navbar(props) {

    const id = useAuthContext().userId;

    const {createdShop} = props;
    return (
        <div className={styles.container}>
            <Link to={'/'}><h1>LOGO</h1></Link>
            <div className={styles.categories}>
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                <p>Categories</p>
            </div>
            <div className={styles.search}>
                <input className={styles.searchBox} type="search" placeholder="search.."/>
            </div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faHeart} />
                <Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} /></Link>
                <Link to={'/AccountSettings'}><FontAwesomeIcon icon={faUser} /></Link>
                {createdShop ? <Link to= {`/shop-seller/${id}`} ><FontAwesomeIcon icon={faStore} /></Link> : <Link to='/CreateShop'><FontAwesomeIcon icon={faStore} /></Link>}
                <FontAwesomeIcon icon={faBell} />
            </div>
        </div>
    );
}

export default Navbar