import Navbar from "../../components/Navbar";
import styles from "./account.module.css"

function AccountSettings(params) {
    return(
        <div>
            <Navbar />
            <div className={styles.inputs}>
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
            </div>


        </div>
    );
}

export default AccountSettings