import React from 'react';
import { Col, Offcanvas } from 'react-bootstrap';
import Typography from '../../components/typography';
import Icons from '../../components/icon';
import InputField from '../../components/forms/inputfield';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

export const OffcanvasCategories = ({
  offcanvasCategorie,
  setOffcanvasCategorie,
  IconAPI,
  styleActive,
  categorieActive,
  setSelectIcon,
}) => {
  const categorieList = [
    ...new Set(
      IconAPI.map(({ list }) => list.map(({ categorie }) => categorie))[0],
    ),
  ];

  const styleList = [
    ...new Set(IconAPI.map(({ list }) => list.map(({ style }) => style))[0]),
  ];

  return (
    <Offcanvas
      show={JSON.parse(offcanvasCategorie)}
      onHide={() => setOffcanvasCategorie(false)}
      className="single-item-icon-categories"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Typography Component="h2" className="h4 fw-bold">
            <Icons IconName="folder" Size={2} /> Categorias
          </Typography>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Col className="search">
        <InputField
          id="search"
          type="search"
          autoComplete="search"
          label="Pesquisar ícones"
          icon="magnifier-zoom-search"
          iconSize="width: 40px; height: 40px;"
          iconPosition="right"
          iconAnimate
          height={15}
          className="input-field-simple"
          style={{ margin: '10px 15px 30px 15px', width: 'calc(100% - 30px)' }}
        />
      </Col>

      <div style={{ overflow: 'auto' }}>
        <Offcanvas.Body style={{ overflow: 'visible' }}>
          <ul>
            <li>
              <Link
                to={
                  styleActive === ''
                    ? `?categoria=all`
                    : `?categoria=all&estilo=${styleActive}`
                }
                className={categorieActive === 'all' ? 'active' : ''}
                onClick={() =>
                  setSelectIcon(['', '']) + setOffcanvasCategorie(false)
                }
              >
                Todas as categorias
              </Link>
            </li>
            {categorieList.map((categorie, index) => (
              <li key={index}>
                <Link
                  to={
                    styleActive === ''
                      ? `?categoria=${categorie}`
                      : `?categoria=${categorie}&estilo=${styleActive}`
                  }
                  className={categorieActive === categorie ? 'active' : ''}
                  onClick={() =>
                    setSelectIcon(['', '']) + setOffcanvasCategorie(false)
                  }
                >
                  {categorie}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <Typography Component="h2" className="h4 fw-bold">
              <Icons IconName="palette" Size={2} /> Estilos
            </Typography>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ overflow: 'visible' }}>
          <ul>
            {styleList.map((style, index) => (
              <li key={index}>
                <Link
                  to={`?categoria=${categorieActive}&estilo=${style}`}
                  className={styleActive === style ? 'btn-primary' : ''}
                  onClick={() =>
                    setSelectIcon(['', '']) + setOffcanvasCategorie(false)
                  }
                >
                  {style}
                </Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
};

export const CategoriesList = ({
  IconAPI,
  styleActive,
  categorieActive,
  setSelectIcon,
}) => {
  const categorieList = [
    ...new Set(
      IconAPI.map(({ list }) => list.map(({ categorie }) => categorie))[0],
    ),
  ];

  return (
    <div className="content-item-icon">
      <Col className="search">
        <InputField
          id="search"
          type="search"
          autoComplete="search"
          label="Pesquisar ícones"
          icon="magnifier-zoom-search"
          iconSize="width: 50px; height:50px;"
          iconPosition="right"
          iconAnimate
          height={20}
          className="input-field-simple"
          style={{ marginTop: '20px' }}
        />
      </Col>

      <nav>
        <Typography Component="h2" className="h5 title">
          <Icons IconName="folder" Size={1.8} />
          Categorias
        </Typography>

        <ul>
          <li>
            <Link
              to={
                styleActive === ''
                  ? `?categoria=all`
                  : `?categoria=all&estilo=${styleActive}`
              }
              className={categorieActive === 'all' ? 'active' : ''}
              onClick={() => setSelectIcon(['', ''])}
            >
              Todas as categorias
            </Link>
          </li>
          {categorieList.map((categorie, index) => (
            <li key={index}>
              <Link
                to={
                  styleActive === ''
                    ? `?categoria=${categorie}`
                    : `?categoria=${categorie}&estilo=${styleActive}`
                }
                className={categorieActive === categorie ? 'active' : ''}
                onClick={() => setSelectIcon(['', ''])}
              >
                {categorie}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const StyleListItens = ({
  IconAPI,
  styleActive,
  categorieActive,
  setSelectIcon,
}) => {
  const styleList = [
    ...new Set(IconAPI.map(({ list }) => list.map(({ style }) => style))[0]),
  ];

  return (
    <ul className="gap-1 d-flex">
      {styleList.map((style, index) => (
        <li key={index}>
          <Button
            href={`?categoria=${categorieActive}&estilo=${style}`}
            Size="sm"
            className={styleActive === style ? 'btn-primary' : ''}
            onClick={() => setSelectIcon(['', ''])}
          >
            {style}
          </Button>
        </li>
      ))}
    </ul>
  );
};
