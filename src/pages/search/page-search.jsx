import React from 'react';
import HeadConfig from '../../components/headConfig';
import BannerSinglePage from './pSearch-bannerSinglePage';
import Search from './pSearch-search';
import GalleryNav from './pSearch-galleryNav';
import GalleryMain from './pSearch-galleryMain';

const layoutBase = () => {
  return (
    <>
      <HeadConfig
        title="Home"
        description="Pesquisa e listagem dos ativos digitais."
      />
      <BannerSinglePage />
      <Search />
      <GalleryNav />
      <GalleryMain />
    </>
  );
};

export default layoutBase;
