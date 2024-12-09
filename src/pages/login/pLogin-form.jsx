import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HeadConfig from '../../components/headConfig';
import Button from '../../components/button';
import PageLoginLogin from './pLogin-login';
import PageLoginCreate from './pLogin-create';
import PasswordLost from './pLogin-passwordLost';
import PasswordReset from './pLogin-passwordReset';

const PageLoginForm = () => {
  const [loginCreate, setLoginCreate] = React.useState('/login');
  const location = useLocation();

  React.useEffect(() => {
    setLoginCreate(location.pathname);
  }, [location]);

  return (
    <section
      className={
        loginCreate === '/login' ? 'login-form' : 'login-form create-style'
      }
    >
      <HeadConfig
        title={loginCreate === '/login' ? 'Login' : 'Criar conta'}
        description={
          loginCreate === '/login'
            ? 'Página de login do sistema de ativos digitais MiraUp.'
            : 'Crie uma conta para acessar o sistema de ativos digitais MiraUp.'
        }
      />
      <nav className="nav nav-tabs" role="tablist">
        <Button
          Component="a"
          href="/login"
          className={
            loginCreate === '/login'
              ? 'nav-link col h2 text-center active'
              : 'nav-link col text-center'
          }
          id="nav-login-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-login"
          aria-controls="nav-login"
          aria-selected={loginCreate === '/login' ? true : false}
          onClick={() => setLoginCreate('/login')}
        >
          Login
        </Button>
        <Button
          Component="a"
          href="criar-conta"
          className={
            loginCreate === '/login/criar-conta'
              ? 'nav-link col h2 text-center active'
              : 'nav-link col text-center'
          }
          id="nav-create-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-create"
          aria-controls="nav-create"
          aria-selected={loginCreate === '/login/criar-conta' ? true : false}
          onClick={() => setLoginCreate('/login/criar-conta')}
        >
          Criar uma conta
        </Button>
        <span className="diamond"></span>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <Routes>
          <Route
            path="/"
            element={
              <PageLoginLogin
                LoginCreate={loginCreate}
                SetLoginCreate={setLoginCreate}
              />
            }
          />
          <Route
            path="criar-conta"
            element={
              <PageLoginCreate
                LoginCreate={loginCreate}
                SetLoginCreate={setLoginCreate}
              />
            }
          />
          <Route path="perdi-a-senha" element={<PasswordLost />} />
          <Route path="resetar-a-senha" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default PageLoginForm;
