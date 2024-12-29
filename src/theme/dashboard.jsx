import React from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { LogoutURL } from '../pages/login/pLogin-logout';
import Header from '../layout/header';
import { AsideDashboard } from '../layout/aside';
import MainMenu from '../layout/mainMenu';
import PageFavorites from '../pages/favorites/page-favorites';
import PageNotifications from '../pages/notifications/page-notifications';
import PageProfile from '../pages/profile/page-profile';
import PageAccount from '../pages/account/page-account';

const InternalPage = () => {
  const url = useLocation();
  //const [searchParams] = useSearchParams();

  let PageName;
  url.pathname === '/favoritos'
    ? (PageName = 'favorites')
    : url.pathname === '/notificacoes'
    ? (PageName = 'notifications')
    : url.pathname === '/conta'
    ? (PageName = 'account')
    : url.pathname === '/perfil'
    ? (PageName = 'profile')
    : (PageName = '');
  return (
    <>
      <LogoutURL />
      <Container fluid className={`page-${PageName} dashboard-page page-anima`}>
        <Row className="dashboard">
          <Header noMenu />
          <AsideDashboard />
          <Col as="section" className="dashboard-content page-anima">
            {url.pathname === '/favoritos' ? (
              <PageFavorites />
            ) : url.pathname === '/notificacoes' ? (
              <PageNotifications />
            ) : url.pathname === '/conta' ? (
              <PageAccount />
            ) : url.pathname === '/perfil' ? (
              <PageProfile />
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Container>
      <MainMenu page={`page-${PageName}-menu`} />
    </>
  );
};

export default InternalPage;
