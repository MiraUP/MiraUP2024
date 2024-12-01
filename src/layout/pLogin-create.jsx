import React from 'react';
import useForm from '../hooks/useForm';
import Input from '../components/forms/input';
import Icons from '../components/icon';
import Button from '../components/button';

const PageLoginCreate = ({ LoginCreate, SetLoginCreate }) => {
  const [sectionCreate, setSectionCreate] = React.useState('section1');

  const nameCreate = useForm();
  const userCreate = useForm();
  const emailCreate = useForm('email');
  const passwordCreate = useForm('password');
  const passwordRepeatCreate = useForm('passwordRepeat');

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
      <form onSubmit={() => ''} className="section-create">
        <div className="section-group">
          <div
            className={
              sectionCreate === 'section1' ? 'section1 active' : 'section1'
            }
            style={
              sectionCreate === 'section1'
                ? { transform: 'translateX(0)' }
                : sectionCreate === 'section2'
                ? { transform: 'translateX(-100%)' }
                : sectionCreate === 'section3'
                ? { transform: 'translateX(-200%)' }
                : { transform: 'translateX(0)' }
            }
          >
            <Input
              type="text"
              placeholder="Diga seu nome ou apelido"
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
              placeholder="Crie um usuário"
              icon="user"
              id="user-create"
              autoComplete="username"
              {...userCreate}
            />

            <hr className="hr-gradient-center" />
            <Button
              Ripple
              Component="a"
              className="w-100 text-white btn-submit"
              onClick={() => setSectionCreate('section2')}
            >
              Próximo
              <Icons IconName="arrow-right" Size="1.5" />
            </Button>
          </div>
          <div
            className={
              sectionCreate === 'section2' ? 'section2 active' : 'section2'
            }
            style={
              sectionCreate === 'section1'
                ? { transform: 'translateX(100%)' }
                : sectionCreate === 'section2'
                ? { transform: 'translateX(0%)' }
                : sectionCreate === 'section3'
                ? { transform: 'translateX(-100%)' }
                : { transform: 'translateX(0)' }
            }
          >
            <Input
              type="text"
              style={{ margin: '94px 0' }}
              placeholder="Informe um e-mail"
              icon="email"
              id="email-create"
              autoComplete="email"
              {...emailCreate}
            />

            <hr className="hr-gradient-center" />
            <Button
              Ripple
              Component="a"
              className="w-50 text-white btn-submit"
              onClick={() => setSectionCreate('section1')}
            >
              <Icons
                IconName="arrow-left"
                Size="1.5"
                className="d-inline-block"
              />
              Voltar
            </Button>
            <Button
              Ripple
              Component="a"
              className="w-50 text-white btn-submit"
              onClick={() => setSectionCreate('section3')}
            >
              Próximo <Icons IconName="arrow-right" Size="1.5" />
            </Button>
          </div>
          <div
            className={
              sectionCreate === 'section3' ? 'section3 active' : 'section3'
            }
            style={
              sectionCreate === 'section1'
                ? { transform: 'translateX(200%)' }
                : sectionCreate === 'section2'
                ? { transform: 'translateX(100%)' }
                : sectionCreate === 'section3'
                ? { transform: 'translateX(0)' }
                : { transform: 'translateX(0)' }
            }
          >
            <Input
              type="password"
              style={{ margin: '26.5px 0', position: 'relative' }}
              placeholder="Informe uma senha"
              icon="lock"
              id="password-create"
              autoComplete="password"
              {...passwordCreate}
            />

            <hr className="hr-gradient-right" />

            <Input
              type="password"
              style={{ margin: '26.5px 0', position: 'relative' }}
              placeholder="Repita a senha"
              icon="lock"
              id="password-repeat-create"
              autoComplete="password"
              {...passwordRepeatCreate}
            />

            <hr className="hr-gradient-center" />
            <Button
              Ripple
              Component="a"
              className="w-50 text-white btn-submit"
              onClick={() => setSectionCreate('section2')}
            >
              <Icons
                IconName="arrow-left"
                Size="1.5"
                className="d-inline-block"
              />
              Voltar
            </Button>
            <Button
              Ripple
              StyleBTN="success"
              Component="button"
              className="w-50 text-white btn-submit"
            >
              Cadastrar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageLoginCreate;
