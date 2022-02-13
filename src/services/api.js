import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;


function signUp(formData) {
  const promisse = axios.post(`${BASE_URL}/auth/sign-up`, formData);

  return promisse;
}

function signIn(formData) {
  const promisse = axios.post(`${BASE_URL}/auth/sign-in`, formData);

  return promisse;
}

function getCartItens(token) {
  const promisse = axios.get(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

function deleteCartItem( itemId, token) {
  const promisse = axios.delete(`${BASE_URL}/cart/${itemId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

const api = {
  signUp,
  signIn,
  getCartItens,
  deleteCartItem,
}

export default api;