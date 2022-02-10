import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;


function signUp(formData) {
  const promisse = axios.post(`${BASE_URL}/auth/sign-up`, formData);

  return promisse;
}

async function signIn(formData) {
  await axios.post(`${BASE_URL}/auth/sign-in`, formData);
}

const api = {
  signUp,
  signIn,
}

export default api;