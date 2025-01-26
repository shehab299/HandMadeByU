import React , {useState} from "react";
import styles from "../Signup/forms.module.css"
import api from "../../services/api.js"
import {useAuthContext} from "../../hooks/useAuthContext.jsx"


function CreateShop() {

    const [shopName , setShopName] = useState('');
    const [description , setDescription] = useState('');
    const {userId} = useAuthContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {shopName, description,userId};
        console.log(payload)
        api.createShop(payload);
    }
    
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Create your own shop</h1>
                    <input type="text" placeholder="Shop name" onChange={(e) => setShopName(e.target.value)} value={shopName} />
                    <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    <button type="submit">Sign Up</button>
            </form>

        </div>
    );
}

export default CreateShop;