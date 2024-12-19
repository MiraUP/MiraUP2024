import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { LogoutURL } from '../pages/login/pLogin-logout';
import Header from '../layout/header';
import { AsideDashboard } from '../layout/aside';
import MainMenu from '../layout/mainMenu';
import PageFavorites from '../pages/favorites/page-favorites';
import HeaderDashboard from '../pages/favorites/header';
import CategoriesFavorites from '../pages/favorites/categories';
import PageNotifications from '../pages/notifications/page-notifications';

const InternalPage = () => {
  const { pathname } = useLocation();
  let PageName;
  pathname === '/favoritos'
    ? (PageName = 'favorites')
    : pathname === '/notificacoes'
    ? (PageName = 'notifications')
    : (PageName = '');

  return (
    <>
      <LogoutURL />
      <Container fluid className={`page-${PageName}`}>
        <Row className="dashboard">
          <Header noMenu />
          <AsideDashboard />
          <Col as="section" className="dashboard-content page-anima">
            <HeaderDashboard />
            {pathname === '/favoritos' && (
              <>
                <CategoriesFavorites />
                <PageFavorites />
              </>
            )}
            {pathname === '/notificacoes' && (
              <>
                <PageNotifications />
              </>
            )}
          </Col>
        </Row>
      </Container>
      <MainMenu page={`page-${PageName}-menu`} />
    </>
  );
};

export default InternalPage;
