import React from 'react';
import { useLocation } from 'react-router-dom';
import { USER_POST } from '../../api/api';
import { UserContext } from '../../hooks/userContext';
import useForm from '../../hooks/useForm';
import { Stepper, StepperSection } from '../../components/Stepper';
import InputField from '../../components/forms/inputfield';
import useFetch from '../../hooks/useFetch';
import Error from '../../helper/error';
import Icons from '../../components/icon';
import Typography from '../../components/typography';

const PageLoginCreate = ({ LoginCreate, SetLoginCreate }) => {
  const [stepper, setStepper] = React.useState('create-user-stepper-1');
  const location = useLocation();

  const nameCreate = useForm();
  const userCreate = useForm('user');
  const emailCreate = useForm('email');
  const passwordCreate = useForm('password');
  const passwordRepeatCreate = useForm('password');

  const inputName = document.getElementById('name');
  const inputUser = document.getElementById('user-create');
  const inputEmail = document.getElementById('email-create');
  const inputPassword = document.getElementById('password-create');
  const inputPasswordRepeat = document.getElementById('password-repeat-create');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (stepper === 'create-user-stepper-1') {
      if (inputName.value === '') {
        inputName.focus();
      } else if (userCreate.error || inputUser.error) {
        inputUser.focus();
      } else {
        setStepper('create-user-stepper-2');
      }
    }

    if (stepper === 'create-user-stepper-2') {
      if (emailCreate.error || inputEmail.value === '') {
        inputEmail.focus();
      } else {
        setStepper('create-user-stepper-3');
      }
    }

    if (stepper === 'create-user-stepper-3') {
      if (inputPassword.error || inputPassword.value === '') {
        inputPassword.focus();
      } else {
        if (inputPassword.value === inputPasswordRepeat.value) {
          const { url, options } = USER_POST({
            displayname: nameCreate.value,
            username: userCreate.value,
            email: emailCreate.value,
            password: passwordCreate.value,
          });
          const { response } = await request(url, options);
          if (response.ok) {
            userLogin(userCreate.value, passwordCreate.value);
            //setStepper('create-user-stepper-4');
          }
        } else {
          inputPassword.focus();
          //setError('Senhas diferentes');
        }
      }
    }
  }

  return (
    <section
      className={
        location.pathname === '/login/criar-conta'
          ? 'tab-pane anima-fade-right show active'
          : 'tab-pane fade anima-fade-right'
      }
      id="nav-create"
      role="tabpanel"
      aria-labelledby="nav-create-tab"
      tabIndex="0"
      style={{ height: '340px' }}
    >
      <form onSubmit={handleSubmit} className="section-create">
        <Stepper style={{ height: '340px' }}>
          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            order={1}
          >
            <InputField
              id="name"
              type="text"
              label="Diga seu nome ou apelido *"
              autoComplete="name"
              icon="smile"
              iconSize={1.5}
              height="49"
              {...nameCreate}
            />

            <InputField
              id="user-create"
              type="text"
              label="Crie um usuário *"
              autoComplete="username"
              icon="user"
              iconSize={1.5}
              height="49"
              {...userCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            order={2}
          >
            <InputField
              id="email-create"
              type="email"
              label="Informe um e-mail *"
              autoComplete="email"
              icon="email"
              iconSize={1.5}
              height="109.5"
              {...emailCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            btnNext="Cadastrar"
            order={3}
          >
            <InputField
              id="password-create"
              type="password"
              label="Informe uma senha *"
              autoComplete="password"
              icon="lock"
              iconSize={1.5}
              height="49"
              {...passwordCreate}
            />
            <InputField
              id="password-repeat-create"
              type="password"
              label="Repita a senha *"
              autoComplete="password"
              icon="lock"
              iconSize={1.5}
              height="49"
              {...passwordRepeatCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            btnNext="none"
            btnBack="none"
            order={4}
            end
          >
            Mensagem de sucesso!
          </StepperSection>
        </Stepper>
        {loading && (
          <div className="mask-loading">
            <Icons
              IconName="time-capsule"
              Animate
              Color="#fff"
              Trigger="loop"
              style={{ height: '100px', width: '100px', marginBottom: '10px' }}
              stroke={50}
            />
            <Typography Component="h3" className="h5">
              Criando seu usuário...
            </Typography>
          </div>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default PageLoginCreate;
