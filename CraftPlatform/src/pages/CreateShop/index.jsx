import React , {useState} from "react";
import styles from "../Signup/forms.module.css"

function CreateShop() {

    const [shopName , setShopName] = useState('');
    const [businessType , setBusinessType] = useState('');
    const [description , setDescription] = useState('');
    const [policies , setPolicies] = useState('');
    
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                    <h1>Create your own shop</h1>
                    <input type="text" placeholder="Shop name" onChange={(e) => setBusinessType(e.target.value)} value={businessType} />
                    <input type="text" placeholder="Business type" onChange={(e) => setShopName(e.target.value)} value={shopName} />
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <input type="text" placeholder="Policies" onChange={(e) => setPolicies(e.target.value)} value={policies} />
                    <button type="submit">Sign Up</button>
            </form>

        </div>
    );
}

export default CreateShop;