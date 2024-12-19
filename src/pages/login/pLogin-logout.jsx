import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';

export const LogoutURL = () => {
  const { userLogout } = React.useContext(UserContext);
  const { pathname } = useLocation();

  if (pathname === '/logout') userLogout();
};
