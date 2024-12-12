import React from 'react';
import PageSearch from '../pages/search/page-search';
import Header from '../layout/header';
import Footer from '../layout/footer';

const layoutBase = () => {
  return (
    <>
      <Header />
      <PageSearch />
      <Footer />
    </>
  );
};

export default layoutBase;
