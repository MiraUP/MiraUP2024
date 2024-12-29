import React from 'react';
import HeadConfig from '../../components/headConfig';
import Header from './header';
import Previews from './previews';
import Description from './description';

const PageSingleItems = ({ setShowOfficanvasComments }) => {
  return (
    <>
      <HeadConfig
        title="Nome do Ativo"
        description="Nome do ativo - descrição do ativo"
      />
      <section className="page-single-items first-content">
        <Header setShowOfficanvasComments={setShowOfficanvasComments} />
        <Previews />
        <Description />
      </section>
    </>
  );
};

export default PageSingleItems;
