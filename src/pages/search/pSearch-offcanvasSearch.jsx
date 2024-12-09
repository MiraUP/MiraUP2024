import React from 'react';
import Offcanvas from '../../components/offcanvas';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Button from '../../components/button';

const OffcanvasSearch = ({ Categorys }) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasSearch"
      aria-labelledby="offcanvasSearchLabel"
    >
      <Offcanvas Header Short="Search" Title="Filtro de Pesquisa" />

      <Offcanvas Body>
        <div className="category-options">
          <Typography
            Component="h3"
            className="h5 offcanvas-title-icons fw-semibold"
          >
            <Icon IconName="grid" />
            Categorias
          </Typography>
          <div className="btn-group btn-group-vertical btn-group-transparent w-100 btn-group-category category-post">
            <input
              type="radio"
              className="btn-check btn-category-all"
              id="btn-category-all"
              name="btn-category"
              autoComplete="off"
              value="all"
              defaultChecked="true"
            />
            <Button
              Ripple
              RippleColor="#80BADA"
              Component="label"
              StyleBTN="outline-primary"
              className="text-white waves-effect waves-light btn-category"
              htmlFor="btn-category-all"
              data-category-name="all"
            >
              <div className="row gx-0">
                <div className="col text-start">Todas</div>
                <div className="col-auto"></div>
              </div>
            </Button>
          </div>
        </div>

        {Categorys.map(({ short, name, amount }, index) => (
          <div
            key={index}
            className="btn-group btn-group-vertical btn-group-transparent w-100 btn-group-category category-post"
          >
            <input
              type="radio"
              className={'btn-check btn-' + short}
              id={'btn-' + short}
              name="btn-category"
              autoComplete="off"
              value="all"
              defaultChecked=""
            />
            <Button
              Ripple
              RippleColor="#80BADA"
              Component="label"
              StyleBTN="outline-primary"
              className="text-white waves-effect waves-light btn-category"
              htmlFor={'btn-' + short}
              data-category-name="all"
            >
              <div className="row gx-0">
                <div className="col text-start">{name}</div>
                <div className="col-auto">({amount})</div>
              </div>
            </Button>
          </div>
        ))}
      </Offcanvas>

      <Offcanvas Footer>
        <Button
          Component="button"
          Ripple
          RippleColor="#6f42c1"
          className="btn-secondary w-100"
          Icon="eraser"
        >
          Limpar configurações
        </Button>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasSearch;
