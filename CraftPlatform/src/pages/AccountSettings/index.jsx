import Navbar from "../../components/Navbar";
import styles from "./account.module.css"

import { useState } from "react";

function AccountSettings({createdShop}) {
    const [firstName , setFirstName] = useState('');
    const [middleName , setMiddleName] = useState('');
    const [lastName , setLastName] = useState('');
    const [birthDate , setBirthDate] = useState('');
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');

    return(
        <div>
            <Navbar  createdShop={createdShop}/>
            <div className={styles.inputs}>
                <h2>Account Settings</h2>
                <div className={styles.nameFields}>
                    <label>Name</label>
                    <input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                    <input type='text' name='middleName' onChange={(e) => setMiddleName(e.target.value)} value={middleName}/>
                    <input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
                <div>
                    <label>Date of birth</label>
                    <input type='date' name='birthDate' onChange={(e) => setBirthDate(e.target.value)} value={birthDate}/>
                </div>
                <div>
                    <label>Gender</label>
                    <input type='text' name='gender' onChange={(e) => setGender(e.target.value)} value={gender}/>
                </div>
                <div>
                    <label>Change password</label>
                    <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <div>
                    <label>Change username</label>
                    <input type='text' name='username' onChange={(e) => setUsername(e.target.value)} value={username}/>
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