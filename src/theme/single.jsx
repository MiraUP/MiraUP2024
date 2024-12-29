import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { UserContext } from '../hooks/userContext';
import { LogoutURL } from '../pages/login/pLogin-logout';
import Header from '../layout/header';
import Footer from '../layout/footer';
import PageSearch from '../pages/search/page-search';
import PageSingleItems from '../pages/single-items/page-single-items';
import PageSingleItemIcon from '../pages/single-items/page-single-item-icon';
import OffcanvasComments from '../pages/single-items/offcanvas-comments';
import Typography from '../components/typography';
import Button from '../components/button';
import Toast from '../components/toast';

const layoutBase = () => {
  const url = useLocation();
  const [stickyMenuTitle, setStickyMenuTitle] = React.useState(false);
  const { toastData, setToastData } = React.useContext(UserContext);
  const [showOffcanvasComments, setShowOfficanvasComments] =
    React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 350) {
      setStickyMenuTitle(true);
    } else {
      setStickyMenuTitle(false);
    }
  };

  let PageName;
  url.pathname === '/ativo' ? (PageName = 'single-assets') : (PageName = '');

  return (
    <>
      <LogoutURL />
      <Header />
      {url.pathname === '/' ? (
        <PageSearch />
      ) : (
        <>
          <nav
            className={
              stickyMenuTitle != true
                ? 'header-detailing-fixed'
                : 'header-detailing-fixed show'
            }
          >
            <Container>
              <Row>
                <Col>
                  <Typography Component="h2" className="h3">
                    Título do ativo
                  </Typography>
                </Col>
                <Col className="d-flex gap-1 col-auto align-items-center">
                  <Button Icon="download" Size="sm" StyleBTN="primary">
                    Download
                  </Button>
                  <Button
                    Icon="comment"
                    Size="sm"
                    StyleBTN="success"
                    onClick={() => setShowOfficanvasComments(true)}
                  >
                    Comentários
                  </Button>
                </Col>
              </Row>
            </Container>
          </nav>

          <div className={`page-${PageName} single-page page-anima`}>
            <div className="single">
              {url.pathname === '/ativo' && (
                <PageSingleItems
                  setShowOfficanvasComments={setShowOfficanvasComments}
                />
              )}
              {url.pathname === '/ativo/icone' && (
                <PageSingleItemIcon
                  setShowOfficanvasComments={setShowOfficanvasComments}
                />
              )}
            </div>
          </div>
        </>
      )}
      <Footer />
      <OffcanvasComments
        show={showOffcanvasComments}
        setShow={setShowOfficanvasComments}
      />
      <Toast toastData={toastData} setToastData={setToastData} />
    </>
  );
};

export default layoutBase;
