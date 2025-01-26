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

const getProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/product/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
};

const getReviews = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/product/${id}/review`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
}

const getShop = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/shop/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
}

const getShopProducts = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/shop/${id}/product`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
}

const getCompetion = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/comptetion/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
}

const getParticipations = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/comptetion/${id}/participant`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
}

const getCompetions = async () => {
  try{
    const response = await fetch(`http://localhost:4000/api/comptetion`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error fetching product:', error);
    return null;
  }
}

const getProducts = async (id) => {

  try{
    const response = await fetch(`http://localhost:4000/api/product`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error fetching product:', error);
    return null;
  }

}

const participate = async (id,user_id) => {
  try{
    const response = await fetch(`http://localhost:4000/api/comptetion/${id}/participate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error Participating', error);
    return null;
  }
}

const getCartItems = async (id) => {

  try{
    const response = await fetch(`http://localhost:4000/api/cart/${id}/cartItem`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  catch(error){
    console.error('Error fetching product:', error);
    return null;
  }
}

const createShop = async (payload) => {

  try{
    const response = await fetch(`http://localhost:4000/api/shop`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch(error){
    console.error('Error fetching product:', error);
    return null;
  }

}

const getUserShop = async (id) => {
  
    try{
      const response = await fetch(`http://localhost:4000/api/user/${id}/shop`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    }
    catch(error){
      console.error('Error fetching product:', error);
      return null;
    }
}



const api = {login,register,
             getProduct,getReviews,getShop,getShopProducts,
             getCompetion,getParticipations,getCompetions
             ,getProducts,getCartItems,createShop,getUserShop};

export default api;
