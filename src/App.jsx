import React from 'react';
import * as bootstrap from 'bootstrap';
import './main.min.css';
import SinglePage from './theme/single';
import PageLogin from './pages/login/page-login';

const App = () => {
  return (
    <>
      <PageLogin />
      {/* <SinglePage /> */}
    </>
  );
};

export default App;
