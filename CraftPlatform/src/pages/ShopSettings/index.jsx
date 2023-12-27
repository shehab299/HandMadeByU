import Navbar from "../../components/Navbar";
import styles from "./ShopSettings.module.css"

function ShopSettings(params) {
    return(
        <div>
            <Navbar createShop={true}/>
            <div className={styles.inputs}>
                <h2>Shop Settings</h2>
                <div className={styles.nameFields}>
                    <label>Shop name</label>
                    <input type='text' name='shopName'/>
                </div>
                <div>
                    <label>Slogan</label>
                    <input type='text' name='dateOfBirth'/>
                </div>
                <div>
                    <label>Seller ID</label>
                    <input type='number' name='sellerId'/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email'/>
                </div>

                <div>
                    <label>Description</label>
                    <input type='text' name='shopDescription'/>
                </div>
    

                <div className={styles.btns}>
                    <button className='lightBtn'>Save</button>
                    <button className='lightBtn'>Delete shop</button>
                </div>

            </div>


        </div>
    );
}

export default ShopSettings