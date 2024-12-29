import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Col, Figure, Modal, Row } from 'react-bootstrap';
import Typography from '../../components/typography';
import Icons from '../../components/icon';
import { UserContext } from '../../hooks/userContext';
import {
  OffcanvasCategories,
  CategoriesList,
  StyleListItens,
} from './item-icon-categories';
import { ItemIconModalDetail, ItemIconAsideDetail } from './item-icon-detail';

const IconList = ({ IconAPI }) => {
  const [categorieActive, setCategorieActive] = React.useState('all');
  const [styleActive, setStyleActive] = React.useState('');
  const [offcanvasDetails, setOffcanvasDetails] = useLocalStorage(
    'menu-details',
    true,
  );
  const [offcanvasCategorie, setOffcanvasCategorie] = useLocalStorage(
    'menu-categorie',
    true,
  );
  const [selectIcon, setSelectIcon] = React.useState(['', '']);
  const [searchParams] = useSearchParams();
  const { toastData, setToastData } = React.useContext(UserContext);

  React.useEffect(() => {
    if (searchParams.get('categoria') != null) {
      setCategorieActive(searchParams.get('categoria'));
    } else {
      setCategorieActive('all');
    }

    if (searchParams.get('estilo') != null) {
      setStyleActive(searchParams.get('estilo'));
    } else {
      setStyleActive('');
    }
  }, [searchParams]);

  function ModalDetail() {
    if (document.body.clientWidth < 992) {
      return (
        <Modal
          show={JSON.parse(offcanvasDetails)}
          onHide={() => setOffcanvasDetails(false)}
          centered
        >
          <ItemIconModalDetail IconAPI={IconAPI} selectIcon={selectIcon} />
        </Modal>
      );
    }
  }

  function ModalCategorie() {
    if (document.body.clientWidth < 992) {
      return (
        <OffcanvasCategories
          offcanvasCategorie={offcanvasCategorie}
          setOffcanvasCategorie={setOffcanvasCategorie}
          IconAPI={IconAPI}
          styleActive={styleActive}
          categorieActive={categorieActive}
          setSelectIcon={setSelectIcon}
        />
      );
    }
  }

  function ListCategorie() {
    if (document.body.clientWidth > 991) {
      return (
        <CategoriesList
          IconAPI={IconAPI}
          styleActive={styleActive}
          categorieActive={categorieActive}
          setSelectIcon={setSelectIcon}
        />
      );
    }
  }

  function ListStyle() {
    if (document.body.clientWidth > 991) {
      return (
        <StyleListItens
          IconAPI={IconAPI}
          styleActive={styleActive}
          categorieActive={categorieActive}
          setSelectIcon={setSelectIcon}
        />
      );
    }
  }

  return (
    <>
      <Row className="single-item-icon">
        <Col
          as="aside"
          className={
            JSON.parse(offcanvasCategorie) === true
              ? 'single-item-icon-categories d-none d-md-block'
              : 'single-item-icon-categories d-none d-md-block hide'
          }
        >
          {ListCategorie()}
        </Col>
        <Col as="section" className="single-item-icon-list">
          <Row>
            <Col>
              <Typography Component="h2" className="h4 title">
                <Icons
                  IconName={
                    JSON.parse(offcanvasCategorie) === true
                      ? 'offcanvas-left-arrow-left'
                      : 'offcanvas-left-arrow-right'
                  }
                  Size={2}
                  onClick={() => setOffcanvasCategorie(!offcanvasCategorie)}
                />
                {categorieActive === 'all'
                  ? 'Todas as categorias'
                  : categorieActive}
              </Typography>
            </Col>
            <Col
              xs="auto"
              className="d-none d-md-flex align-items-center btn-styles-icons"
            >
              {ListStyle()}
            </Col>
            <Col
              xs="auto"
              className="d-none d-lg-flex align-items-center btn-offcanvas-detail"
            >
              <Icons
                IconName={
                  JSON.parse(offcanvasDetails) === true
                    ? 'offcanvas-right-arrow-right'
                    : 'offcanvas-right-arrow-left'
                }
                Size={2}
                onClick={() => setOffcanvasDetails(!offcanvasDetails)}
              />
            </Col>
          </Row>
          <Row className="item-icon">
            {IconAPI.map(({ list }) =>
              list
                .filter(({ categorie }) =>
                  categorieActive != 'all' ? categorie === categorieActive : {},
                )
                .filter(({ style }) =>
                  styleActive != '' ? style === styleActive : {},
                )
                .map(({ id, icon }) => (
                  <Col
                    key={id}
                    className="anima-fade-left position-relative"
                    onClick={() =>
                      document.body.clientWidth < 992 &&
                      setOffcanvasDetails(true) + setSelectIcon([id, icon])
                    }
                  >
                    <Figure onClick={() => setSelectIcon([id, icon])}>
                      <Icons IconName={icon} Size={4} />
                      <Figure.Caption>
                        {icon}
                        <Icons
                          IconName="copy"
                          className="d-none d-lg-block"
                          onClick={() =>
                            setToastData({
                              ...toastData,
                              show: true,
                              title: `Código copiado`,
                              message: `<i class="icon icon-${icon}"></i>`,
                              position: 'bottom-center',
                              autohide: true,
                            }) +
                            navigator.clipboard.writeText(
                              `<i class="icon icon-${icon}"></i>`,
                            )
                          }
                          style={{ marginLeft: '5px' }}
                        />
                      </Figure.Caption>
                    </Figure>
                  </Col>
                )),
            )}
          </Row>
        </Col>
        <Col
          as="aside"
          className={
            JSON.parse(offcanvasDetails) === true
              ? 'single-item-icon-details d-none d-lg-block'
              : 'single-item-icon-details d-none d-lg-block hide'
          }
        >
          <div className="content-item-icon">
            <ItemIconAsideDetail IconAPI={IconAPI} selectIcon={selectIcon} />
          </div>
        </Col>
      </Row>
      {ModalDetail()}
      {ModalCategorie()}
    </>
  );
};

export default IconList;
