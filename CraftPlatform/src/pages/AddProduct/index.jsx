//components
import { useState } from "react"
import Navbar from "../../components/Navbar"

//style
import styles from './addProduct.module.css'

export default function AddProduct() {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [availableQuantity, setAvailableQuantity] = useState('')
    const [keywords, setKeywords] = useState('')
    const [productUrl, setProductUrl] = useState('')
    return (
    <div>
            <Navbar createShop={false}/>
            <div className={styles.inputs}>
                <h2>Add Product</h2>
                <div>
                    <label>available Quantity</label>
                    <input type='text' name='availableQuantity' value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)}/>
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
                    <button className='lightBtn'>Add product</button>
                    <button className='lightBtn'>Cancel</button>
                </div>
            </div>
    </div>
    )
}