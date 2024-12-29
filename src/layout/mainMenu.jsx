import React from 'react';
import Typography from '../components/typography';
import { ItemsMainMenu, ItemsMainMenuMobile } from './itemsMainMenu';

const MenuPrimary = ({ page }) => {
  page != undefined ? (page = page + ' ') : (page = '');

  return (
    <nav
      id="mainMenu"
      className={page + 'modal fade'}
      aria-labelledby="mainMenuLabel"
      data-bs-backdrop="static"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="container">
            <header className="row head">
              <div className="col me-auto">
                <Typography
                  Component="h2"
                  className="modal-title text-center fw-semibold"
                >
                  Menu de Ativos Digitais
                </Typography>
              </div>
              <div className="col-auto col-btn-close">
                <button
                  className="button-close icon-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="row justify-content-md-center">
                <div className="col col-md-8">
                  <hr className="hr-rectangle hr-_primary" />
                </div>
              </div>
            </header>
          </div>
          <div className="navegation">
            <div className="container">
              <div className="row">
                <ItemsMainMenu />
                <ItemsMainMenuMobile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuPrimary;
