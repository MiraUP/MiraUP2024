import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Brand from '../components/brand';
import Icon from '../components/icon';
import Smilles from '../components/smilles';
import Tooltip from '../components/tooltip';
import MainMenu from './mainMenu';
import OffcanvasProfile from '../pages/search/pSearch-offcanvasProfile';
import DropdownNotification from './dropdownNotification';
import Button from '../components/button';

const Header = ({ noMenu, ...props }) => {
  const [mainMenu, setMainMenu] = React.useState(false);
  const location = useLocation();
  const [stickyMenu, setStickyMenu] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  if (window.scrollY > 1) {
    document.body.classList.add('nav-fixed');
  }

  function stickNavbar() {
    let windowHeight = window.scrollY;
    if (windowHeight > 1) {
      setStickyMenu(true);
      document.body.classList.add('nav-fixed');
    } else {
      setStickyMenu(false);
      document.body.classList.remove('nav-fixed');
    }
  }

  return (
    <>
      <OffcanvasProfile />
      <header className="anima-fade-left nav-primary fixed-top" {...props}>
        <div className="container">
          <div className="row header">
            <div className="col-auto me-auto logo">
              <Link to="/" className="align-self-center">
                <Brand
                  Version="Signature"
                  className="logo-ass-white"
                  style={{ width: '40px' }}
                />
                <Brand
                  Version="Extended"
                  className="logo-extend-white"
                  style={{ width: '128px' }}
                />
              </Link>
              {location.pathname != '/' && (
                <Link
                  to="/"
                  className="d-sm-block d-none btn-backHome align-self-center"
                >
                  <Icon
                    IconName="home"
                    Animate
                    Trigger="hover"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Link>
              )}
              <button
                className="menu-burger d-sm-block d-none"
                onClick={() => setMainMenu(!mainMenu)}
                data-bs-toggle="modal"
                data-bs-target="#mainMenu"
              ></button>
            </div>
            <div className="col-auto">
              <div className="row">
                <div className="col align-self-center d-sm-block d-none">
                  <Button
                    Component="a"
                    href="/favoritos"
                    className="button-heart d-block"
                  >
                    <label></label>
                  </Button>
                </div>
                <div className="col align-self-center d-sm-block d-none">
                  <button
                    type="button"
                    className="button-notification position-relative notification-new"
                    data-bs-toggle="dropdown"
                    data-bs-offset="13,20"
                    aria-expanded="false"
                  >
                    <Icon
                      IconName="bell-notification"
                      Animate
                      Stroke={130}
                      Trigger="hover"
                      style={{ width: '40px', height: '40px' }}
                    />
                  </button>

                  <DropdownNotification />
                </div>
                <div className="col align-self-center d-sm-block d-none">
                  <Tooltip Title="Seu perfil" Offset="0, 5">
                    <Smilles
                      Emotion="Happy"
                      EmoHover="Friendly"
                      Component="button"
                      alt="Botão para abrir as informações do seu perfil."
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasProfile"
                      aria-controls="offcanvasProfile"
                    />
                  </Tooltip>
                </div>
                <div className="col align-self-center d-sm-none d-block">
                  <button
                    className="menu-burger"
                    onClick={() => setMainMenu(!mainMenu)}
                    data-bs-toggle="modal"
                    data-bs-target="#mainMenu"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {noMenu != undefined ? '' : <MainMenu />}
    </>
  );
};

export default Header;
