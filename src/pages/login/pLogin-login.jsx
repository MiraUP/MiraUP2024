import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../../components/button';
import Input from '../../components/forms/input';
import Check from '../../components/forms/check';

const PageLoginLogin = ({ LoginCreate, SetLoginCreate }) => {
  const userLogin = useForm('email');
  const userPassword = useForm();
  const rememberMe = useForm();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/');
    if (valueUserLogin.validate()) {
      console.log('enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <div
      className={
        LoginCreate === 'Login' ? 'tab-pane fade show active' : 'tab-pane fade'
      }
      id="nav-login"
      role="tabpanel"
      aria-labelledby="nav-login-tab"
      tabIndex="0"
    >
      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          type="text"
          customError="Informe seu usuário"
          autoComplete="username"
          placeholder="Usuário ou e-mail"
          icon="user"
          style={{ marginTop: '25px' }}
          errorMessage="Informe seu usuário."
          {...userLogin}
        />
        <hr className="hr-gradient-right" />
        <Input
          id="password"
          type="password"
          autoComplete="password"
          placeholder="Digite sua senha"
          icon="lock"
          errorMessage="Digite sua senha."
          {...userPassword}
        />
        <Check
          id="rememberme"
          className=" w-100"
          Options={['Lembre-se de mim']}
          {...rememberMe}
        />
        <hr
          className="hr-gradient-center"
          style={{ marginTop: '25px', marginBottom: '0' }}
        />
        <Button
          Ripple
          Component="button"
          type="submit"
          className="w-100 text-white btn-submit"
        >
          Acessar
        </Button>
      </form>

      <Button Icon="question" Component="a" Size="sm" className="link">
        Esqueci minha senha
      </Button>
    </div>
  );
};

export default PageLoginLogin;
