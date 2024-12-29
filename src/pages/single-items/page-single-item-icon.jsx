import React from 'react';
import HeadConfig from '../../components/headConfig';
import Header from './header';
import IconList from './iconList';
import Description from './description';

const IconAPI = [
  {
    id: '1',
    name: 'Título do pacote de ícones',
    package: '#link-de-download',
    list: [
      {
        id: '1',
        icon: '3d',
        tags: ['3d', 'icon', 'modelagem'],
        categorie: 'Design',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: '3d',
          },
          {
            fileType: 'png',
            link: '3d',
          },
          {
            fileType: 'jpeg',
            link: '3d',
          },
        ],
      },
      {
        id: '2',
        icon: 'ae',
        tags: ['ae', 'icon', 'After Effect'],
        categorie: 'Aplicativo',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'ae',
          },
          {
            fileType: 'png',
            link: 'ae',
          },
          {
            fileType: 'jpeg',
            link: 'ae',
          },
        ],
      },
      {
        id: '3',
        icon: 'ai',
        tags: ['ai', 'icon', 'Adobe Illustrator'],
        categorie: 'Aplicativo',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'ai',
          },
          {
            fileType: 'png',
            link: 'ai',
          },
          {
            fileType: 'jpeg',
            link: 'ai',
          },
        ],
      },
      {
        id: '4',
        icon: 'airplay',
        tags: ['airplay', 'icon', 'Transmição ao vivo'],
        categorie: 'Internet',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'airplay',
          },
          {
            fileType: 'png',
            link: 'airplay',
          },
          {
            fileType: 'jpeg',
            link: 'airplay',
          },
        ],
      },
      {
        id: '5',
        icon: 'android',
        tags: ['android', 'icon', 'Sistema operacional', 'mobile', 'celular'],
        categorie: 'Dipositivo',
        style: 'Preenchido',
        downloads: [
          {
            fileType: 'svg',
            link: 'android',
          },
          {
            fileType: 'png',
            link: 'android',
          },
          {
            fileType: 'jpeg',
            link: 'android',
          },
        ],
      },
      {
        id: '6',
        icon: 'apple',
        tags: ['apple', 'icon', 'Sistema operacional', 'mobile', 'celular'],
        categorie: 'Dipositivo',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'apple',
          },
          {
            fileType: 'png',
            link: 'apple',
          },
          {
            fileType: 'jpeg',
            link: 'apple',
          },
        ],
      },
      {
        id: '7',
        icon: 'archive',
        tags: ['archive', 'icon', 'arquivos'],
        categorie: 'Sistema',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'archive',
          },
          {
            fileType: 'png',
            link: 'archive',
          },
          {
            fileType: 'jpeg',
            link: 'archive',
          },
        ],
      },
      {
        id: '8',
        icon: 'arrow-fullscreen',
        tags: ['Arrow fullscreen', 'icon', 'Seta fullscreen'],
        categorie: 'Setas',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'arrow-fullscreen',
          },
          {
            fileType: 'png',
            link: 'arrow-fullscreen',
          },
          {
            fileType: 'jpeg',
            link: 'arrow-fullscreen',
          },
        ],
      },
      {
        id: '9',
        icon: 'arrow-down-simple',
        tags: ['Arrow down simple', 'icon', 'Seta para baixo simples'],
        categorie: 'Setas',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'arrow-down-simple',
          },
          {
            fileType: 'png',
            link: 'arrow-down-simple',
          },
          {
            fileType: 'jpeg',
            link: 'arrow-down-simple',
          },
        ],
      },
      {
        id: '10',
        icon: 'arrow-down-square',
        tags: ['Arrow down square', 'icon', 'Seta para baixo quadrado'],
        categorie: 'Setas',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'arrow-down-square',
          },
          {
            fileType: 'png',
            link: 'arrow-down-square',
          },
          {
            fileType: 'jpeg',
            link: 'arrow-down-square',
          },
        ],
      },
      {
        id: '11',
        icon: 'arrow-down',
        tags: ['Arrow down', 'icon', 'Seta para baixo'],
        categorie: 'Setas',
        style: 'Linear',
        downloads: [
          {
            fileType: 'svg',
            link: 'arrow-down',
          },
          {
            fileType: 'png',
            link: 'arrow-down',
          },
          {
            fileType: 'jpeg',
            link: 'arrow-down',
          },
        ],
      },
    ],
  },
];

const PageSingleItemIcon = ({ setShowOfficanvasComments }) => {
  return (
    <>
      <HeadConfig
        title="Nome do Ativo"
        description="Nome do ativo - descrição do ativo"
      />
      <section className="page-single-items page-single-item-icon first-content">
        <Header setShowOfficanvasComments={setShowOfficanvasComments} />
        <IconList IconAPI={IconAPI} />
        <Description />
      </section>
    </>
  );
};

export default PageSingleItemIcon;
