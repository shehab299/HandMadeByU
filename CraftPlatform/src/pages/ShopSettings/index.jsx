import { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./ShopSettings.module.css"

function ShopSettings() {
    const [shopName , setShopName] = useState('');
    const [email , setEmail] = useState('');
    const [description , setDescription] = useState('');
    const [logo, setLogo] = useState('')
    const [banner, setBanner] = useState('')

    return(
        <div>
            <div className={styles.inputs}>
                <h2>Shop Settings</h2>
                <div className={styles.nameFields}>
                    <label>Shop name</label>
                    <input type='text' name='shopName' onChange={(e) => setShopName(e.target.value)} value={shopName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <div>
                    <label>Logo URL</label>
                    <input type='url' name='logo' onChange={(e) => setLogo(e.target.value)} value={logo}/>
                </div>
                <div>
                    <label>Banner URL</label>
                    <input type='url' name='banner' onChange={(e) => setBanner(e.target.value)} value={banner}/>
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