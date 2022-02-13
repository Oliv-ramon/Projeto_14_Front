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

function getProducts(categoryFilter) {
  let queryURL = BASE_URL + '/products';
  if (categoryFilter !== '') {
    queryURL = queryURL + `?cat=${categoryFilter}`;
  }
  const productsPromise = axios.get(queryURL);
  return productsPromise;
}

const api = {
  signUp,
  signIn,
  getProducts
}

export default api;