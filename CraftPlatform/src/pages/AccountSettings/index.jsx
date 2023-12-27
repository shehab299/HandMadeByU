import Navbar from "../../components/Navbar";
import styles from "./account.module.css"

function AccountSettings(params) {
    return(
        <div>
            <Navbar  createShop={false}/>
            <div className={styles.inputs}>
                <h2>Account Settings</h2>
                <div className={styles.nameFields}>
                    <label>Name</label>
                    <input type='text' name='firstName'/>
                    <input type='text' name='middleName'/>
                    <input type='text' name='lastName'/>
                </div>
                <div>
                    <label>Date of birth</label>
                    <input type='date' name='dateOfBirth'/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type='text' name='dateOfBirth'/>
                </div>
                <div>
                    <label>Change password</label>
                    <input type='password' name='password'/>
                </div>
                <div>
                    <label>Change username</label>
                    <input type='text' name='username'/>
                </div>

                <div className={styles.btns}>
                    <button className='lightBtn'>Save</button>
                    <button className='lightBtn'>Sign Out</button>
                    <button className='lightBtn'>Delete account</button>
                </div>

            </div>


        </div>
    );
}

export default AccountSettings