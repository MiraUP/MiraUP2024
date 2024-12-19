import React from 'react';
import Footer from '../../layout/footer';
import PageLoginBrand from './pLogin-brand';
import PageLoginForm from './pLogin-form';

const pageLogin = () => {
  return (
    <>
      <div className="container page-anima page-login">
        <div
          className="row align-items-center justify-content-end"
          style={{ minHeight: 'calc(100vh - 49px)' }}
        >
          <div className="col-xl-6 col-lg-5 col-12">
            <PageLoginBrand />
          </div>
          <div className="col-xl-6 col-lg-7 col-12 d-flex justify-content-center">
            <PageLoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pageLogin;
