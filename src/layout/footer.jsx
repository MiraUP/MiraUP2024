import React from 'react';
import Typography from '../components/typography';
import Button from '../components/button';
import Icon from '../components/icon';

const Footer = ({ ...props }) => {
  return (
    <footer className="container" {...props}>
      <div className="row footer" style={{ padding: '20px 0' }}>
        <div className="col-md-4 col-12 text-center align-self-center">
          <Typography Component="p">Todos os direitos reservados</Typography>
        </div>
        <div className="col-md-4 col-sm-6 col-12 text-center align-self-center">
          <Typography Component="a" href="#" className="link">
            <Icon IconName="file-document" />
            Leia os termos de uso
          </Typography>
        </div>
        <div className="col-md-4 col-sm-6 col-12 text-center align-self-center">
          <Typography Component="a" href="#" className="link">
            <Icon IconName="comment" />
            Entre em contato
          </Typography>
        </div>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
