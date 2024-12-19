import React from 'react';
import './main.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from './theme/single';
import PageLogin from './pages/login/page-login';
import { UserStorage } from './hooks/userContext';
import ProtectedRouters from './helper/protectedRouters';
import Dashboard from './theme/dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRouters>
                <SinglePage />
              </ProtectedRouters>
            }
          />
          <Route
            path="/favoritos"
            element={
              <ProtectedRouters>
                <Dashboard />
              </ProtectedRouters>
            }
          />
          <Route
            path="/notificacoes"
            element={
              <ProtectedRouters>
                <Dashboard />
              </ProtectedRouters>
            }
          />
          <Route path="/login/*" element={<PageLogin />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
