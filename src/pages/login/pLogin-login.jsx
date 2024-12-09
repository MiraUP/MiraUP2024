import React from 'react';
import useForm from '../../hooks/useForm';
import { UserContent } from '../../hooks/userContext';
import Button from '../../components/button';
import Input from '../../components/forms/input';

const PageLoginLogin = ({ LoginCreate, SetLoginCreate }) => {
  const username = useForm();
  const password = useForm();
  const { userLogin } = React.useContext(UserContent);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div
      className={
        LoginCreate === '/login'
          ? 'tab-pane anima-fade-left show active'
          : 'tab-pane anima-fade-left'
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
          {...username}
        />
        <hr className="hr-gradient-right" />
        <Input
          id="password"
          type="password"
          autoComplete="password"
          placeholder="Digite sua senha"
          icon="lock"
          errorMessage="Digite sua senha."
          {...password}
        />
        {/* <Check
          id="rememberme"
          className=" w-100"
          Options={['Lembre-se de mim']}
        /> */}
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

      <Button
        Icon="question"
        Component="a"
        href="perdi-a-senha"
        Size="sm"
        className="link"
      >
        Esqueci minha senha
      </Button>
    </div>
  );
};

export default PageLoginLogin;
