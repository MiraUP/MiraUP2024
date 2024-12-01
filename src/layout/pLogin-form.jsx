import React from 'react';
import Button from '../components/button';
import PageLoginLogin from './pLogin-login';
import PageLoginCreate from './pLogin-create';

const PageLoginForm = () => {
  const [loginCreate, setLoginCreate] = React.useState('Login');

  return (
    <section
      className={
        loginCreate === 'Login' ? 'login-form' : 'login-form create-style'
      }
    >
      <nav className="nav nav-tabs" role="tablist">
        <Button
          Component="button"
          className={
            loginCreate === 'Login'
              ? 'nav-link col h2 text-center active'
              : 'nav-link col text-center'
          }
          id="nav-login-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-login"
          aria-controls="nav-login"
          aria-selected={loginCreate === 'Login' ? true : false}
          onClick={() => setLoginCreate('Login')}
        >
          Login
        </Button>
        <Button
          Component="button"
          className={
            loginCreate === 'Create'
              ? 'nav-link col h2 text-center active'
              : 'nav-link col text-center'
          }
          id="nav-create-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-create"
          aria-controls="nav-create"
          aria-selected={loginCreate === 'Create' ? true : false}
          onClick={() => setLoginCreate('Create')}
        >
          Criar uma conta
        </Button>
        <span></span>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <PageLoginLogin
          LoginCreate={loginCreate}
          SetLoginCreate={setLoginCreate}
        />
        <PageLoginCreate
          LoginCreate={loginCreate}
          SetLoginCreate={setLoginCreate}
        />
        {/* */}
      </div>
    </section>
  );
};

export default PageLoginForm;
