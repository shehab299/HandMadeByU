import { useState } from "react";
import {useAuthContext} from './useAuthContext'
import api from '../services/api.js'


export const useSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSignup = async function(username, firstName, middleName ,lastName, password, confirmPassword){

        const paramNames = ['username', 'firstName', 'middleName' ,'lastName', 'password', 'confirmPassword']
        const payload = {};
 
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i])
                payload[paramNames[i]] = arguments[i]; 
        }

        try 
        {
        setError(null);
        setLoading(true)
            
        console.log('payload:', payload)
        const response = await api.register(payload);

        const data = await response.json();
    
        console.log('data:', data)

        if (!data.success) {
            setIsLoading(false)
            setError(data.error)
        }

        if(data.success) {
            //REDIRECT TO LOGIN PAGE
            setIsLoading(false)
        }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { error, loading, handleSignup };

}