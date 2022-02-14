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

const api = {
  signUp,
  signIn,
  getProducts
}

export default api;