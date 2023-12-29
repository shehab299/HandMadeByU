import { useState } from "react";
import {useAuthContext} from './useAuthContext' 
import api from '../services/api.js'

const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const {dispatch} = useAuthContext();

    const handleLogin = async (username, password) => {

        try {
            const payload = {};
            setLoading(true);
            payload.Username = username;
            payload.password = password;

            const response = await api.login(payload);

            const data = await response.json();
            console.log(data);

            
            if(data.success) {
                data.user.token = data.token;
                setLoading(false);
                dispatch({type: 'LOGIN', payload: data.user});
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            else{
                setLoading(false);
                setError(data.error);
            }


        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { error, loading, handleLogin };

}


export default useLogin;