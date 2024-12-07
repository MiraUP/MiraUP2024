import React from 'react';
import * as bootstrap from 'bootstrap';
import './main.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePage from './theme/single';
import PageLogin from './pages/login/page-login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="login" element={<PageLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
