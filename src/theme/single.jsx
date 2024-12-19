import React from 'react';
import PageSearch from '../pages/search/page-search';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { LogoutURL } from '../pages/login/pLogin-logout';

const layoutBase = () => {
  return (
    <>
      <LogoutURL />
      <Header />
      <PageSearch />
      <Footer />
    </>
  );
};

export default layoutBase;
