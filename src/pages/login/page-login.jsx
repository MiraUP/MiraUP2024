import React from 'react';
import Footer from '../../layout/footer';
import PageLoginBrand from './pLogin-brand';
import PageLoginForm from './pLogin-form';
import { UserContent } from '../../hooks/userContext';

const pageLogin = () => {
  const { data } = React.useContext(UserContent);

  return (
    <>
      <div className="container page-anima page-login">
        <div
          className="row align-items-center justify-content-end"
          style={{ minHeight: 'calc(100vh - 49px)' }}
        >
          <div className="col">
            <PageLoginBrand />
          </div>
          <div className="col d-flex justify-content-center">
            {data && console.log(data.email)}
            <PageLoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pageLogin;
