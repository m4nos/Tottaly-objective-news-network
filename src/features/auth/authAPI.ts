import axios from 'axios';

const API_URL_REG = 'http://localhost:3000/register';
const API_URL_LOG = 'http://localhost:3000/login';
const API_URL_LOGOUT = 'http://localhost:3000/logout';

const register = async (userData) => {
  const response = await axios.post(API_URL_REG, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  const token = JSON.parse(localStorage.getItem('user'));
  try {
    const response = await axios.post(API_URL_LOGOUT, {
      headers: { Authorization: `Bearer ${token.token}` },
    });
    localStorage.removeItem('user');
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const login = async (userData) => {
  const response = await axios.post(API_URL_LOG, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authAPIaction = {
  register,
  logout,
  login,
};

export default authAPIaction;
