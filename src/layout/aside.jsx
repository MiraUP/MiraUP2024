import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import Brand from '../components/brand';
import Icons from '../components/icon';
import Smilles from '../components/smilles';
import { UserContext } from '../hooks/userContext';
import { ItemsMainMenuAside } from '../layout/itemsMainMenu';

export const AsideDashboard = () => {
  const { data } = React.useContext(UserContext);
  const [menuAside, setMenuAside] = useLocalStorage('menu-aside', true);
  const [mainMenu, setMainMenu] = React.useState(false);

  document.body.onresize = function () {
    if (document.body.clientWidth < 992) {
      setMenuAside(false);
    }
  };

  return (
    <>
      <Col
        as="aside"
        id="asideMenu"
        className={
          JSON.parse(menuAside) === false
            ? 'dashboard-menu col-auto d-flex flex-column page-anima close'
            : 'dashboard-menu col-auto d-flex flex-column page-anima open'
        }
      >
        <Row as="header" className="align-items-center">
          <Col className="d-flex logo">
            <Link to="/" className="align-self-center">
              <Brand
                Version="Signature"
                className="logo-ass-white"
                style={{ width: '50px' }}
              />
              <Brand
                Version="Extended"
                className="logo-extend-white"
                style={{ width: '128px' }}
              />
            </Link>
            <button
              className="menu-burger"
              onClick={() => setMainMenu(!mainMenu)}
              data-bs-toggle="modal"
              data-bs-target="#mainMenu"
            ></button>
          </Col>
          <Col xxl="auto" className="btn-toggle d-none d-lg-block">
            <Icons
              IconName={
                JSON.parse(menuAside) === false
                  ? 'offcanvas-right-arrow-right'
                  : 'offcanvas-right-arrow-left'
              }
              Size={1.7}
              onClick={() => setMenuAside(!JSON.parse(menuAside))}
            />
          </Col>
        </Row>
        <nav className="dashboard-menu-nav scrollbar-simple">
          <ItemsMainMenuAside />
        </nav>
        <footer>
          <Row className="profile align-items-center">
            <Col xxl="auto">
              <Link to="/perfil">
                <Smilles
                  Emotion="Happy"
                  EmoHover="Friendly"
                  Component="button"
                  alt="Foto do seu perfil."
                />
              </Link>
            </Col>
            <Col s="p" className="data">
              <b className="name">
                <Link to="/perfil">{data.name}</Link>
              </b>
              <small className="email">
                <Link to="/perfil">{data.email}</Link>
              </small>
            </Col>
          </Row>
          <Link to="/cadastro" className="new-assets">
            <Icons IconName="file-plus" />
            Cadastrar novo ativo
          </Link>
        </footer>
      </Col>
    </>
  );
};
