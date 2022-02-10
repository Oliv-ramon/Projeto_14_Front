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

const api = {
  signUp,
  signIn,
}

export default api;