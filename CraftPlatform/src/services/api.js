const login = async (payload) => {

    const response = await fetch('http://localhost:4000/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    return response;
}

const register = async (payload) => {

    const response = await fetch('http://localhost:4000/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    return response;
}


const api = {login,register};

export default api;
