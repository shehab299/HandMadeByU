import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "../Signup/forms.module.css"


function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email , password);
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Login</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to={"/signUp"} className={styles.signUp} >Sign Up now</Link></p>
            </form>
        </div>
    );
}

export default Login;