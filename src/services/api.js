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

function getProducts() {
  try {
    const productsPromise = axios.get(`${BASE_URL}/products`);
    return productsPromise;
  } catch (error) {
    console.log(error, '!erro! ao obter produtos');
    return;
  } 
}

function getCartItens(token) {
  const promisse = axios.get(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

function updateCart(cartItens, token) {
  const promisse = axios.post(`${BASE_URL}/cart`, cartItens, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return promisse;
}

function cleanCart(token) {
  const promisse = axios.delete(`${BASE_URL}/cart/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

function postPurchase(purchasedItens, token) {
  const promisse = axios.post(`${BASE_URL}/purchase`, purchasedItens, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

const api = {
  signUp,
  signIn,
  getProducts,
  getCartItens,
  updateCart,
  cleanCart,
  postPurchase,
}

export default api;