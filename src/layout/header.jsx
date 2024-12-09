import React from 'react';
import Brand from '../components/brand';
import Icon from '../components/icon';
import Smilles from '../components/smilles';
import Tooltip from '../components/tooltip';
import MainMenu from './mainMenu';
import OffcanvasProfile from '../pages/search/pSearch-offcanvasProfile';
import DropdownNotification from './dropdownNotification';
import Button from '../components/button';

const Header = () => {
  const [mainMenu, setMainMenu] = React.useState(false);
  const [stickyMenu, setStickyMenu] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if (windowHeight > 1) {
        document.body.classList.add('nav-fixed');
        setStickyMenu(true);
      } else {
        document.body.classList.remove('nav-fixed');
        setStickyMenu(false);
      }
    }
  };

  return (
    <>
      <OffcanvasProfile />
      <header className="anima-fade-left nav-primary fixed-top">
        <div className="container">
          <div className="row header">
            <div className="col-auto me-auto logo">
              <a className="align-self-center">
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
              </a>
              <a className="d-sm-block d-none btn-backHome align-self-center">
                <Tooltip
                  Title="Voltar para a página inicial"
                  Placement="bottom"
                  Offset="0, 10"
                >
                  <Icon
                    IconName="home"
                    Animate
                    Trigger="hover"
                    style={{ width: '40px', height: '40px' }}
                  />
                </Tooltip>
              </a>
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
                  <Tooltip Title="Ver os favoritos" Offset="0, 5">
                    <Button Component="a" className="button-heart d-block">
                      <label></label>
                    </Button>
                  </Tooltip>
                </div>
                <div className="col align-self-center d-sm-block d-none">
                  <button
                    type="button"
                    className="button-notification position-relative notification-new"
                    data-bs-toggle="dropdown"
                    data-bs-offset="13,20"
                    aria-expanded="false"
                  >
                    <Tooltip Title="Notificações" Offset="0, 5">
                      <Icon
                        IconName="bell-notification"
                        Animate
                        Stroke={130}
                        Trigger="hover"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </Tooltip>
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
                  <button className="menu-burger"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MainMenu />
    </>
  );
};

export default Header;
