import React , {useState} from "react";
import styles from "./forms.module.css"
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup.jsx";


function SignUp() {

    const { error, loading, handleSignup } = useSignup();
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [middleName , setMiddleName] = useState(''); 
    const [lastName , setLastName] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await handleSignup(username,firstName,middleName,lastName,password,confirmPassword);
    }

    return (
        <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} value={username} required/>
                <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} required/>
                <input type="text" placeholder="Middle Name" onChange={(e) => setMiddleName(e.target.value)} value={middleName}/>
                <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} value={lastName} required/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}required />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required/>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link className={styles.login}  to={"/Login"}>Login</Link></p>
        </form>

        </div>
    );
}

export default SignUp;