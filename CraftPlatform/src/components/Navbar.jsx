import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './navbar.module.css'


function Navbar() {
    return (
        <div className={styles.container}>
            <h1>LOGO</h1>
            <div className={styles.categories}>
                <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                <p>Categories</p>
            </div>
            <div className={styles.search}>
                <input className={styles.searchBox} type="search" placeholder="search.."/>
            </div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faBell} />
            </div>
        </div>
    );
}

export default Navbar