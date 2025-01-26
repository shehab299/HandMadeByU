import styles from "../ShopSettings/shopSettings.module.css"
import { useState } from "react";

function AddPost(params) {
    const [content , setContent] = useState('');
    const [attachment , setAttachment] = useState('');

    function handleCancel() {
        setContent('')
        setAttachment('')
    }

    return (
    <div>
            <form className={styles.inputs}>
                <h2>Add Post</h2>
                <div className={styles.nameFields}>
                    <label>Content</label>
                    <input type='text' name='content' value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div>
                    <label>Attachment</label>
                    <input type='url' name='attachment' value={attachment} onChange={(e) => setAttachment(e.target.value)}/>
                </div>
    

                <div className={styles.btns}>
                    <button type="submit" className='lightBtn'>Save</button>
                    <button className='lightBtn' onClick={()=>handleCancel}>Cancel</button>
                </div>
            </form>
    </div>
    );
}

export default AddPost