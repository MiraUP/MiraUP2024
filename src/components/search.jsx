import React from 'react';
import Icon from './icon';
import OffcanvasSearch from '../layout/offcanvasSearch';
import Tooltip from './tooltip';
import { left } from '@popperjs/core';

const CategoryNav = [
  {
    short: 'codigos',
    name: 'Códigos',
    amount: 4,
  },
  {
    short: 'icones',
    name: 'Ícones',
    amount: 2,
  },
  {
    short: 'Ilustracoes',
    name: 'Ilustrações',
    amount: 10,
  },
  {
    short: 'mockups',
    name: 'Mochups',
    amount: 3,
  },
  {
    short: 'uikit',
    name: 'UI Kit',
    amount: 3,
  },
];

const Search = () => {
  const [inputSearch, setInputSearch] = React.useState('');

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
      <OffcanvasSearch Categorys={CategoryNav} />
      <section className="container search-main">
        <div className="row">
          <div className="col">
            <div className="search-main-box">
              <nav
                className="search-main-filter btn-group category-post"
                role="group"
                aria-label="Filtro de pesquisa"
              >
                <button type="button" className="btn btn-link">
                  <input
                    type="radio"
                    className="btn-check btn-category-all"
                    id="allCategory"
                    name="filterSearch"
                    autoComplete="off"
                    value="all"
                    defaultChecked
                  />
                  <label
                    className="btn allCategory btn-category"
                    htmlFor="allCategory"
                    data-category-name="all"
                  >
                    <span>Categorias: </span> Todas
                  </label>
                </button>

                <div className="scrollMobile-h">
                  {CategoryNav.map(({ short, name }) => (
                    <button type="button" className="btn btn-link" key={short}>
                      <input
                        type="radio"
                        className={'btn-check btn-category-' + short}
                        name="filterSearch"
                        id={'btn-category-' + short + '-filter'}
                        autoComplete="off"
                      />

                      <label
                        className={'btn btn-' + short}
                        htmlFor={'btn-category-' + short + '-filter'}
                        data-category-name={short}
                      >
                        {name}
                      </label>
                    </button>
                  ))}
                </div>

                <button type="button" className="btn btn-link">
                  <input
                    type="radio"
                    className="btn-check more"
                    id="more"
                    name="filterSearch"
                    autoComplete="off"
                  />
                  <label
                    className="btn more"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSearch"
                    aria-controls="offcanvasSearch"
                    htmlFor="more"
                  >
                    <Tooltip Title="Ver todas as categorias" Offset="0, 25">
                      <Icon IconName="more-v" />
                    </Tooltip>
                  </label>
                </button>
              </nav>
              <form role="search" id="search-container" className="search-form">
                <div className="row input-text">
                  <div className="col me-auto">
                    <span className="form-floating">
                      <input
                        type="search"
                        name="s"
                        className="form-control"
                        id="search-main"
                        placeholder="Pesquisar"
                        value={inputSearch}
                        onChange={handleChange}
                      />
                      <label htmlFor="search-main">Pesquisar</label>
                    </span>
                  </div>
                  <div className="col-auto">
                    <label htmlFor="search-main" className="button-search">
                      <Icon
                        Animate
                        IconName="magnifier-zoom-search"
                        Trigger="hover"
                        Stroke="100"
                        style={{ width: '65px', height: '65px' }}
                        Class={inputSearch === '' ? 'fade-in' : 'fade-out'}
                      />
                      <Icon
                        Animate
                        IconName="erase"
                        Trigger="hover"
                        Stroke="100"
                        style={{
                          width: '50px',
                          height: '50px',
                          margin: '7.5px',
                          cursor: 'pointer',
                          position: 'absolute',
                          left: '0',
                        }}
                        onClick={() => setInputSearch('')}
                        Class={inputSearch === '' ? 'fade-out' : 'fade-in'}
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;