import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/api';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [token, setToken] = useLocalStorage('token', '');

  const [searchFocused, setSearchFocused] = React.useState(false);
  const [asideMenu, setAsideMenu] = React.useState(true);
  const [toastData, setToastData] = React.useState({
    position: 'bottom-end',
    show: false,
    delay: 5000,
    autohide: true,
    className: '',
    variant: 'dark',
    icon: '',
    iconSize: 1,
    title: 'Informe o titulo em "setToastData(title: "Title")"',
    time: '',
    message: 'Informe a mensagem em "setToastData(title: "Text")"',
  });

  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLogin(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      setToken(token); //Local Storage
      await getUser(token);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido.');
          await getUser(token);
        } catch (erro) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login,
        searchFocused,
        setSearchFocused,
        asideMenu,
        setAsideMenu,
        toastData,
        setToastData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
