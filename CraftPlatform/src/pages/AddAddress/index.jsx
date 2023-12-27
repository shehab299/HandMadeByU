import { useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../AccountSettings/account.module.css";

 function AddAddress()
 {
    const [Street,setStreet]=useState('');
    const [City,setCity]=useState('');
    const [Country,setCountry]=useState('');

    return <>
    <Navbar/>
    <h1>Add Address</h1>
    <form className={styles.form}>
    <div className={styles.inputs}>
        <input type="text" placeholder="Street" onChange={(e) => setStreet(e.target.value)} value={Street} />
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} value={City} />
        <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} value={Country} />
        <button type="submit">Add</button>
        </div>
    </form>
    </>
 }
 
 export default AddAddress;