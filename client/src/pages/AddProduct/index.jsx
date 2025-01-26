//conmponents
import Navbar from "../../components/Navbar";

//styles
import styles from "../ShopSettings/shopSettings.module.css"

//react
import { useState } from "react";

function AddProduct(params) {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [availableQuantity, setAvailableQuantity] = useState('')
    const [keywords, setKeywords] = useState('')
    const [productUrl, setProductUrl] = useState('')

    function handleCancel() {
        setAvailableQuantity('')
        setDescription('')
        setKeywords('')
        setProductName('')
        setProductUrl('')
    }

    return (
    <div>
        <form className={styles.inputs}>
            <h2>Add Product</h2>
            <div>
                <label>Available Quantity</label>
                <input type='number' min={1} name='availableQuantity' value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)}/>
            </div>
            <div className={styles.nameFields}>
                <label>Product name</label>
                <input type='text' name='productName' value={productName} onChange={(e) => setProductName(e.target.value)}/>
            </div>
            <div>
                <label>keywords</label>
                <input type='text' name='keywords' value={keywords} onChange={(e) => setKeywords(e.target.value)}/>
            </div>

            <div>
                <label>Description</label>
                <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div>
                <label>Product URL</label>
                <input type='url' name='productUrl' value={productUrl} onChange={(e) => setProductUrl(e.target.value)}/>
            </div>
            <div className={styles.btns}>
                <button type='submit' className='lightBtn'>Save</button>
                <button className='lightBtn' onClick={()=>handleCancel}>Cancel</button>
            </div>
        </form>
    </div>
    );
}

export default AddProduct