import api from '../services/api';
import { createContext, useState } from 'react';

const TOKEN_KEY = "@todoapp-Token";
const login = token => localStorage.setItem(TOKEN_KEY, token);
const logout = () => localStorage.removeItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [errorRegister, setErrorRegister] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  async function registerUser(name, email, password, confirmPassword) {
    await api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');

    api.post('http://127.0.0.1:8000/api/register', {
      name: name,
      email: email,
      password: password,
      confirm_password: confirmPassword
    }).then(res => {
        login(res.data.access_token);
        setErrorRegister(null);
        console.log(res);
      })
      .catch(err => {
        setErrorRegister(err.response.data.errors);
        console.log(err);
      })
  }

  async function signIn(email, password) {
    await api.get('http://127.0.0.1:8000/sanctum/csrf-cookie');

    return api.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password
    }).then(res => {
        login(res.data.access_token);
        setErrorLogin(null);
        console.log(res);
      })
      .catch(err => {
        setErrorLogin(err.response.data.errors);
        console.log(err);
      })
  }

  async function signOut() {
    return api.post('http://127.0.0.1:8000/api/logout')
      .then(res => {
        logout();
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        errorLogin,
        errorRegister,
        getToken,
        isAuthenticated,
        registerUser,
        signIn,
        signOut
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}
