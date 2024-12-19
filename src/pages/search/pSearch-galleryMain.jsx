import React from 'react';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Tooltip from '../../components/tooltip';
import { UserContext } from '../../hooks/userContext';

const galleryItem = [
  {
    name: 'Nome',
    developer: [
      {
        developerName: 'Desenvolvedor 01',
      },
      {
        developerName: 'Desenvolvedor 02',
      },
    ],
    link: '#linkItem',
    download: '#linkDownload',
    favorite: true,
    thumbnail:
      'http://localhost/biblioteca_miraup/wp-content/uploads/2023/11/detail-image-7_1640612824149.jpg',
    fileType: [
      { fileName: 'Adobe Photoshop', fileShort: 'ps' },
      { fileName: 'Adobe Illustrator', fileShort: 'ai' },
      { fileName: 'Adobe Indesign', fileShort: 'indd' },
      { fileName: 'Adobe XD', fileShort: 'xd' },
      { fileName: 'Photoshop', fileShort: 'ps' },
      { fileName: 'Figma', fileShort: 'figma' },
      { fileName: 'Cinema 4D', fileShort: 'cinema4d' },
      { fileName: 'Sketch', fileShort: 'sketch' },
      { fileName: 'Blender', fileShort: 'blender' },
      { fileName: 'MP4', fileShort: 'mp4' },
      { fileName: 'CSS 3', fileShort: 'css3' },
      { fileName: 'HTML 5', fileShort: 'html5' },
      { fileName: 'SASS', fileShort: 'sass' },
      { fileName: 'Font Type', fileShort: 'font' },
      { fileName: 'Fonte', fileShort: 'font' },
      { fileName: 'PDF', fileShort: 'pdf' },
      { fileName: 'SVG', fileShort: 'svg' },
    ],
  },
];

const GaleryMain = () => {
  const { searchFocused } = React.useContext(UserContext);

  return (
    <section
      className={
        searchFocused === true
          ? 'anima-fade-left container gallery-main focused'
          : 'anima-fade-left container gallery-main'
      }
    >
      <div className="row">
        <div id="gallery-list" className="col-12 gallery-list">
          {galleryItem.map(
            (
              {
                name,
                link,
                developer,
                download,
                favorite,
                thumbnail,
                fileType,
              },
              index,
            ) => (
              <section className="gallery-item" key={index}>
                <div className="download-group">
                  <Tooltip Title="Download rápido">
                    <a
                      href={download}
                      target="_blank"
                      className="download-fast btn"
                    >
                      <Icon
                        IconName="download"
                        style={{ fontSize: '2rem' }}
                      ></Icon>
                    </a>
                  </Tooltip>

                  <Tooltip Title="Favorito">
                    <button
                      className="button-heart favorite-post"
                      id={'favorite-post-' + index}
                    >
                      <input
                        type="checkbox"
                        id={'button-heart-' + index}
                        name="favorite"
                        data-id={index}
                        defaultChecked={favorite}
                      />
                      <label htmlFor={'button-heart-' + index}></label>
                    </button>
                  </Tooltip>
                </div>

                <ul className="files-type">
                  <li>
                    <i className="icon icon-info"></i>
                  </li>
                  {fileType.map(({ fileName, fileShort }, index) => (
                    <li key={index}>
                      <Tooltip Title={fileName} Placement="left" Offset="0, 15">
                        <i className={'icon icon-' + fileShort}></i>
                      </Tooltip>
                    </li>
                  ))}
                </ul>

                <a href={link}>
                  <figure>
                    <img
                      src={thumbnail}
                      className="attachment-400x400 size-400x400 wp-post-image"
                      alt={'Miniatura do item "' + name + '"'}
                    />
                  </figure>
                  <div className="text">
                    <Typography Component="p" className="fw-bold title">
                      {name}
                    </Typography>
                    <Typography Component="p">
                      Desenvolvido por
                      {developer.map(({ developerName }, index) => (
                        <span className="fw-bold" key={index}>
                          {' ' + developerName}
                        </span>
                      ))}
                    </Typography>
                  </div>
                </a>
              </section>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default GaleryMain;
