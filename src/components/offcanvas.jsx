import React from 'react';
import Typography from '../components/typography';
import Button from '../components/button';
import PropTypes from 'prop-types';

const Offcanvas = ({ Header, Body, Footer, Short, Title, children }) => {
  if (Header === true) {
    Header = (
      <div className="offcanvas-header">
        <Typography
          Component="h2"
          className="offcanvas-title h4 fw-semibold"
          id={'offcanvas' + Short + 'Label'}
        >
          {Title}
        </Typography>
        <Button
          Component="button"
          className="button-close"
          Icon="close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
    );
  } else {
    Header = '';
  }

  if (Body === true) {
    Body = <div className="offcanvas-body">{children}</div>;
  } else {
    Body = '';
  }

  if (Footer === true) {
    Footer = <div className="offcanvas-footer">{children}</div>;
  } else {
    Footer = '';
  }

  return (
    <>
      {Header}
      {Body}
      {Footer}
    </>
  );
};

Offcanvas.propTypes = {
  Header: PropTypes.bool,
  Body: PropTypes.bool,
  Footer: PropTypes.bool,
  Short: PropTypes.string,
  Title: PropTypes.string,
};

export default Offcanvas;
