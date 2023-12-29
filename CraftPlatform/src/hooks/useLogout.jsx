import {useAuthContext} from './useAuthContext' 

const useLogout = () => {

    const {dispatch} = useAuthContext();

    const handleLogOut = (username, password) => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'});
    };

    return { handleLogOut };

}


export default useLogout;