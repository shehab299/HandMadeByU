import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styles from "../Signup/forms.module.css"
import useLogin from "../../hooks/useLogin";

function Login() {

    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const { error, loading, handleLogin } = useLogin();


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('x');

        await handleLogin(username, password);
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUserName(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to={"/signUp"} className={styles.signUp} >Sign Up now</Link></p>
            </form>
        </div>
    );
}

export default Login;