import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../../components/forms/input';
import { Stepper, StepperSection } from './pLogin-createStepper';

const PageLoginCreate = ({ LoginCreate, SetLoginCreate }) => {
  const [stepper, setStepper] = React.useState('create-user-stepper-1');

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

  function handleSubmit(event) {
    event.preventDefault();

    if (stepper === 'create-user-stepper-1') {
      if (inputName.value === '') {
        inputName.focus();
      } else if (inputUser.value.length < 3) {
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
        console.log('foi');
      } else {
        if (inputPassword.value === inputPasswordRepeat.value) {
          setStepper('create-user-stepper-4');
        } else {
          inputPassword.focus();
          setError('Senhas diferentes');
        }
      }
    }
  }

  return (
    <div
      className={
        LoginCreate === 'Create' ? 'tab-pane fade show active' : 'tab-pane fade'
      }
      id="nav-create"
      role="tabpanel"
      aria-labelledby="nav-create-tab"
      tabIndex="0"
    >
      <form onSubmit={handleSubmit} className="section-create">
        <Stepper style={{ height: '365px' }}>
          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            order="1"
          >
            <Input
              type="text"
              placeholder="Diga seu nome ou apelido *"
              icon="smile"
              id="name"
              autoComplete="name"
              {...nameCreate}
              style={{ margin: '34.5px 0 25px 0' }}
            />

            <hr className="hr-gradient-right" />

            <Input
              type="text"
              style={{ margin: '23px 0' }}
              placeholder="Crie um usuário *"
              icon="user"
              id="user-create"
              autoComplete="username"
              {...userCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            order="2"
          >
            <Input
              type="text"
              style={{ margin: '94px 0' }}
              placeholder="Informe um e-mail *"
              icon="email"
              id="email-create"
              autoComplete="email"
              {...emailCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            btnNext="Cadastrar"
            order="3"
          >
            <Input
              type="password"
              style={{ margin: '26.5px 0', position: 'relative' }}
              placeholder="Informe uma senha *"
              icon="lock"
              id="password-create"
              //autoComplete="password"
              {...passwordCreate}
            />

            <hr className="hr-gradient-right" />

            <Input
              type="password"
              style={{ margin: '26.5px 0', position: 'relative' }}
              placeholder="Repita a senha *"
              icon="lock"
              id="password-repeat-create"
              //autoComplete="password"
              {...passwordRepeatCreate}
            />
          </StepperSection>

          <StepperSection
            stepper={stepper}
            setStepper={setStepper}
            name="create-user"
            btnNext="none"
            btnBack="none"
            order="4"
            end
          >
            Mensagem de sucesso!
          </StepperSection>
        </Stepper>
      </form>
    </div>
  );
};

export default PageLoginCreate;
