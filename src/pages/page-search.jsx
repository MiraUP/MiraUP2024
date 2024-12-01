import React from 'react';
import Header from '../components/header';
import BannerSinglePage from '../layout/bannerSinglePage';
import Search from '../components/search';
import GalleryNav from '../layout/galleryNav';
import GalleryMain from '../layout/galleryMain';
import Footer from '../layout/footer';

const layoutBase = () => {
  return (
    <>
      <Header />
      <BannerSinglePage />
      <Search />
      <GalleryNav />
      <GalleryMain />
      <Footer />
    </>
  );
};

export default layoutBase;
