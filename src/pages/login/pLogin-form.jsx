import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import HeadConfig from '../../components/headConfig';
import Button from '../../components/button';
import PageLoginLogin from './pLogin-login';
import PageLoginCreate from './pLogin-create';
import PasswordLost from './pLogin-passwordLost';
import PasswordReset from './pLogin-passwordReset';
import PageLoginLogged from './pLogin-logged';

const PageLoginForm = () => {
  const location = useLocation();
  const { login } = React.useContext(UserContext);

  return (
    <section
      className={
        location.pathname === '/login'
          ? 'login-form'
          : 'login-form create-style'
      }
    >
      <HeadConfig
        title={location.pathname === '/login' ? 'Login' : 'Criar conta'}
        description={
          location.pathname === '/login'
            ? 'Página de login do sistema de ativos digitais MiraUp.'
            : 'Crie uma conta para acessar o sistema de ativos digitais MiraUp.'
        }
      />
      <nav className="nav nav-tabs" role="tablist">
        <Button
          Component="a"
          href="/login"
          className={
            location.pathname === '/login'
              ? 'nav-link col h2 text-center active'
              : 'nav-link col text-center'
          }
          id="nav-login-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-login"
          aria-controls="nav-login"
          aria-selected={location.pathname === '/login' ? true : false}
        >
          {login === true ? 'Conta logada' : 'Fazer login'}
        </Button>

        {login != true && (
          <>
            <Button
              Component="a"
              href="/login/criar-conta"
              className={
                location.pathname === '/login/criar-conta'
                  ? 'nav-link col h2 text-center active'
                  : 'nav-link col text-center'
              }
              id="nav-create-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-create"
              aria-controls="nav-create"
              aria-selected={
                location.pathname === '/login/criar-conta' ? true : false
              }
            >
              Criar uma conta
            </Button>
          </>
        )}
        <span className="diamond"></span>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        {location.pathname === '/login' &&
          (login === true ? <PageLoginLogged /> : <PageLoginLogin />)}
        {location.pathname === '/login/criar-conta' && <PageLoginCreate />}
        {location.pathname === '/login/perdi-a-senha' && <PasswordLost />}
        {location.pathname === '/login/resetar-a-senha' && <PasswordReset />}
      </div>
    </section>
  );
};

export default PageLoginForm;
