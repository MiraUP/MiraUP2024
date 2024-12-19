import React from 'react';
import {
  Col,
  Row,
  Figure,
  OverlayTrigger,
  Tooltip,
  Card,
} from 'react-bootstrap';
import { UserContext } from '../../hooks/userContext';
import Footer from '../../layout/footer';
import Icons from '../../components/icon';
import { Link } from 'react-router-dom';

const Path = 'src/assets/img/banner/';
const favItems = [
  {
    id: '1',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + '1_1630599912156.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: '#',
    favorite: true,
  },
  {
    id: '2',
    title:
      'Ai Powered Propertify Real Estate Marketplace App UI Kit Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle:
      'Ai real estate Marketplace mobile app templates Ai real estate Marketplace mobile app templates Ai real estate Marketplace mobile app templates Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'fitness_pro-preview_1_1620747741392.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: '#',
    favorite: true,
  },
  {
    id: '3',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'preview_01_1616943936661.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '4',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'preview_01_1625216203522.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '5',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'preview-01_1610599939230.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '6',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'preview-3_1636636114453.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '7',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'slice-1_1621426038602.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '8',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + 'ui8-details-6_1649773709276.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '19',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + '1_1630599912156.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '11',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + '1_1630599912156.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
  {
    id: '12',
    title: 'Ai Powered Propertify Real Estate Marketplace App UI Kit',
    subtitle: 'Ai real estate Marketplace mobile app templates',
    thumbs: Path + '1_1630599912156.png',
    categorie: 'Categoria',
    developer: 'Desenvolvevor',
    url: 'url/item',
    favorite: true,
  },
];

const PageFavorites = () => {
  const { asideMenu, setAsideMenu, data } = React.useContext(UserContext);

  return (
    <>
      <div className="content">
        <Row className="g-5">
          {favItems.map(
            ({
              id,
              title,
              subtitle,
              thumbs,
              categorie,
              developer,
              url,
              favorite,
            }) => (
              <Col key={id} md={6} lg={4}>
                <Card className="favorite-item">
                  <button
                    className="button-heart button-heart-white favorite-post"
                    id={'favorite-post-' + id}
                  >
                    <input
                      type="checkbox"
                      id={'button-heart-' + id}
                      name="favorite"
                      data-id={id}
                      defaultChecked={favorite}
                    />
                    <label htmlFor={'button-heart-' + id}></label>
                  </button>
                  <Link to={url}>
                    {thumbs != undefined && (
                      <figure>
                        <Card.Img variant="top" alt={title} src={thumbs} />
                      </figure>
                    )}
                    <Card.Body className="favorite-item-body">
                      <Card.Title as="h2" className="h4">
                        {title}
                      </Card.Title>
                      <Card.Text as="p">{subtitle}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex  favorite-item-footer">
                      <Col>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              Categoria
                              <small className="d-lg-block d-none">
                                {categorie}
                              </small>
                            </Tooltip>
                          }
                        >
                          <small>
                            <Icons IconName="grid" />
                          </small>
                        </OverlayTrigger>
                      </Col>
                      <Col>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              Desenvolvedor:
                              <small className="d-lg-block d-none">
                                {developer}
                              </small>
                            </Tooltip>
                          }
                        >
                          <small>
                            <Icons IconName="user" />
                          </small>
                        </OverlayTrigger>
                      </Col>
                    </Card.Footer>
                  </Link>
                </Card>
              </Col>
            ),
          )}
        </Row>

        <button className="loading">
          <Icons IconName="arrow-circling anima-rotate" Size={2} />
          Carregando...
        </button>
        <Footer />
      </div>
    </>
  );
};

export default PageFavorites;
