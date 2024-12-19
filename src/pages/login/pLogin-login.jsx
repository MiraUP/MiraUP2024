import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../hooks/userContext';
import Button from '../../components/button';
import Icon from '../../components/icon';
import Typography from '../../components/typography';
import InputField from '../../components/forms/inputfield';
import Error from '../../helper/error';

const PageLoginLogin = ({ LoginCreate, SetLoginCreate }) => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);
  const location = useLocation();

  React.useEffect(() => {
    //setLoginCreate(location.pathname);
  }, [location]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div
      className={
        location.pathname === '/login'
          ? 'tab-pane anima-fade-left show active'
          : 'tab-pane anima-fade-left'
      }
      id="nav-login"
      role="tabpanel"
      aria-labelledby="nav-login-tab"
      tabIndex="0"
      style={{ height: '340px' }}
    >
      {loading && (
        <div className="mask-loading">
          <Icon
            IconName="time-capsule"
            Animate
            Color="#fff"
            Trigger="loop"
            style={{ height: '100px', width: '100px', marginBottom: '10px' }}
            stroke={50}
          />
          <Typography Component="h3" className="h5">
            Entrando...
          </Typography>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ padding: '0 25px' }}>
          <InputField
            id="username"
            type="text"
            label="Usuário ou e-mail"
            autoComplete="username"
            icon="user"
            iconSize={1.5}
            height="49"
            {...username}
          />
          <InputField
            id="password"
            type="password"
            label="Senha"
            autoComplete="password"
            icon="lock"
            iconSize={1.5}
            height="49"
            {...password}
          />

          {error && (
            <Error
              error={
                error === 'Error: Forbidden' && 'Usuário ou senha inválidos.'
              }
              className="w-100 d-block text-center"
              style={{ maxWidth: 'calc(100% - 50px)' }}
            />
          )}
        </div>
        <Button
          Ripple
          Component="button"
          type={loading ? '' : 'submit'}
          disabled={loading ? true : false}
          className="w-100 text-white btn-submit"
          style={loading ? { padding: '32px 10px' } : {}}
        >
          {loading ? (
            <>
              <Icon
                IconName="time-capsule"
                Animate
                Color="#fff"
                Trigger="loop"
              />
              Carregando...
            </>
          ) : (
            'Acessar'
          )}
        </Button>
      </form>

      <Link to="/login/perdi-a-senha" className="link">
        <Icon IconName="question" /> Esqueci minha senha
      </Link>
    </div>
  );
};

export default PageLoginLogin;
