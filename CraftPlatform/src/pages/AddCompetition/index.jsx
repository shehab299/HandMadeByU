import Navbar from "../../components/Navbar";
import styles from "../ShopSettings/shopSettings.module.css"
import { useState } from "react";

function AddCompetition(params) {
    const [title, setTitle] = useState('');
    const [discount , setDiscount] = useState('');
    const [status , setStatus] = useState('');
    const [creationDate , setCreationDate] = useState('');
    const [endDate , setEndDate] = useState('');
    const [description , setDescription] = useState('');

    return (
    <div>
         <Navbar createShop={false}/>
            <div className={styles.inputs}>
                <h2>Add competition</h2>
                <div className={styles.nameFields}>
                    <label>Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Discount</label>
                    <input type='text' name='discount' value={discount} onChange={(e) => setDiscount(e.target.value)}/>
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
                    <button className='lightBtn'>Save</button>
                    <button className='lightBtn'>Cancel</button>
                </div>
            </div>
    </div>
    );
}

export default AddCompetition