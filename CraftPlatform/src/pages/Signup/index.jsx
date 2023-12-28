import React , {useState} from "react";
import styles from "./forms.module.css"
import { Link } from "react-router-dom";


function SignUp() {

    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    return (
        <div className={styles.container}>
        <form className={styles.form}>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link className={styles.login}  to={"/Login"}>Login</Link></p>
        </form>

        </div>
    );
}

export default SignUp;