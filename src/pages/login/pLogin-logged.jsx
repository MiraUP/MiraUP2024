import React from 'react';
import Button from '../../components/button';
import Typography from '../../components/typography';
import Smilles from '../../components/smilles';
import { Link } from 'react-router-dom';
import Icons from '../../components/icon';
import { UserContext } from '../../hooks/userContext';

const PageLoginLogged = () => {
  const { data, userLogout } = React.useContext(UserContext);

  if (data)
    return (
      <section className="logged-content">
        <Smilles
          Emotion="Happy"
          EmoHover="Friendly"
          Component="button"
          alt="Foto utilizada no perfil."
          className="button-notification"
          style={{
            width: '120px',
            height: '120px',
            borderWidth: '4px',
            borderRadius: '100%',
          }}
        />
        <Typography Component="h2" className="h5 text-center">
          Bem vindo, <span className="h4">{data.name}</span>
        </Typography>
        <footer className="d-flex gap-3">
          <Button onClick={userLogout} StyleBTN="secondary">
            <Icons IconName="out" Size={1.1} />
            Sair
          </Button>
          <Link
            to="/"
            className="btn-success btn btn-ripple d-inline-flex align-items-center justify-content-center"
          >
            Entrar
            <Icons IconName="arrow-right-simple" Size={1.5} />
          </Link>
        </footer>
      </section>
    );
};

export default PageLoginLogged;
