//styles
import styles from "../ShopSettings/shopSettings.module.css"

//react
import { useState } from "react";

function EditCompetition(props) {
    const [title, setTitle] = useState(props.title);
    const [discount , setDiscount] = useState(props.discount);
    const [status , setStatus] = useState(props.status);
    const [creationDate , setCreationDate] = useState(props.creationDate);
    const [endDate , setEndDate] = useState(props.endDate);
    const [description , setDescription] = useState(props.description);

    function handleCancel() {
        setTitle(props.title)
        setDiscount(props.discount)
        setStatus(props.status)
        setCreationDate(props.creationDate)
        setEndDate(props.endDate)
        setDescription(props.description)
    }

    return (
    <div>
            <form className={styles.inputs}>
                <h2>Edit competition</h2>
                <div className={styles.nameFields}>
                    <label>Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Discount</label>
                    <input type='number' min={1} step={0.01} name='discount' value={discount} onChange={(e) => setDiscount(e.target.value)}/>
                </div>
                <div>
                    <label>Status</label>
                    <input type='text' name='status' value={status} onChange={(e) => setStatus(e.target.value)}/>
                </div>
                <div>
                    <label>Creation Date</label>
                    <input type='date' name='creationDate' value={creationDate} onChange={(e) => setCreationDate(e.target.value)}/>
                </div>

                <div>
                    <label>End Date</label>
                    <input type='date' name='endDate' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>

                <div>
                    <label>Description</label>
                    <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
    

                <div className={styles.btns}>
                    <button type="submit" className='lightBtn'>Save</button>
                    <button className='lightBtn' onClick={()=>handleCancel}>Cancel</button>
                </div>
            </form>
    </div>
    );
}

export default EditCompetition