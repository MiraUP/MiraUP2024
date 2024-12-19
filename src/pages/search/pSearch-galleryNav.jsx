import React from 'react';
import { UserContext } from '../../hooks/userContext';

const GalleryNav = () => {
  const { searchFocused } = React.useContext(UserContext);

  return (
    <nav
      className={
        searchFocused === true
          ? 'anima-fade-left container gallery-bar focused'
          : 'anima-fade-left container gallery-bar'
      }
    >
      <div className="row">
        <div className="col-md-auto me-auto col-sm-12">
          <div
            className="btn-group btn-tabs"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="galleryView"
              id="allFilterPosts"
              autoComplete="off"
              value="allFilter"
              defaultChecked
            />
            <label
              className="btn btn-transparent-group filter-button"
              htmlFor="allFilterPosts"
            >
              <span className="content">Mostrar tudo</span>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="galleryView"
              id="newPosts"
              autoComplete="off"
              value="new-post"
            />
            <label
              className="btn btn-transparent-group filter-button"
              htmlFor="newPosts"
            >
              <span className="content">Novidades</span>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="galleryView"
              id="favoritePost"
              autoComplete="off"
              value="favorite"
            />
            <label
              className="btn btn-transparent-group filter-button"
              htmlFor="favoritePost"
            >
              <span className="content">Favoritos</span>
            </label>
          </div>
        </div>

        <div className="col-md-auto col-sm-12">
          <div className="dropdown dropdown-menu-end">
            <a
              className="btn btn-transparent dropdown-toggle no-arrow btn-filter"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="content">
                Filtrar
                <i className="icon icon-filter"></i>
              </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <h3 className="h5 fw-bold title">Organizar por:</h3>
              </li>
              <li>
                <a
                  className="dropdown-item orderby-filter"
                  data-orderby="title"
                  data-order="DESC"
                >
                  <i className="icon icon-text"></i>
                  Nome
                  <i className="icon icon-arrow-down"></i>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item orderby-filter"
                  data-orderby="post_date"
                  data-order="DESC"
                >
                  <i className="icon icon-calendar"></i>
                  Data
                  <i className="icon icon-arrow-down float-end"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNav;
