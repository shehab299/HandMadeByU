//styles
import styles from "../ShopSettings/shopSettings.module.css"

//react
import { useState } from "react";

function EditProduct(props) {
    const [productName, setProductName] = useState(props.productName)
    const [description, setDescription] = useState(props.description)
    const [availableQuantity, setAvailableQuantity] = useState(props.availableQuantity)
    const [keywords, setKeywords] = useState(props.keywords)
    const [productUrl, setProductUrl] = useState(props.productUrl)

    function handleCancel() {
        setAvailableQuantity(props.productName)
        setDescription(props.description)
        setKeywords(props.availableQuantity)
        setProductName(props.keywords)
        setProductUrl(props.productUrl)
    }

    return (
    <div>
        <form className={styles.inputs}>
            <h2>Edit Product</h2>
            <div>
                <label>Available Quantity</label>
                <input type='number' min={1} max={props.availableQuantity} name='availableQuantity' value={availableQuantity} onChange={(e) => setAvailableQuantity(e.target.value)}/>
            </div>
            <div>
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

export default EditProduct