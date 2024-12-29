import React from 'react';
import { MouseParallax } from 'react-just-parallax';
import { Container, Col, Row } from 'react-bootstrap';
import Typography from '../../components/typography';
import Graphic01 from '../../assets/img/graphic/graphic-01.png';
import Graphic02 from '../../assets/img/graphic/graphic-02.png';
import Graphic03 from '../../assets/img/graphic/graphic-03.png';
import Icons from '../../components/icon';
import Button from '../../components/button';

const Header = ({ setShowOfficanvasComments }) => {
  const [btnFavorite, setBtnFavorite] = React.useState(false);

  function handleFavorite({ target }) {
    setBtnFavorite(target.checked);
  }

  return (
    <>
      <Container as="header" className="header">
        <Row>
          <Col lg={2} md={12} className="position-relative">
            <MouseParallax enableOnTouchDevice strength={0.05}>
              <img
                src={Graphic01}
                alt="Grafismo da identidade MiraUP em forma de piramide."
                className="parallax-graphics-01"
              />
            </MouseParallax>
            <MouseParallax enableOnTouchDevice lerpEase={0.014} strength={0.1}>
              <img
                src={Graphic02}
                alt="Grafismo da identidade MiraUP em forma de piramide."
                className="parallax-graphics-02"
              />
            </MouseParallax>
          </Col>
          <Col lg={8} md={12} className="title">
            <hgroup>
              <Typography Component="h1" className="h1 text-center">
                Título do ativo
              </Typography>
              <Typography className="text-center">
                Subtítulo do ativo
              </Typography>
            </hgroup>
            <hr className="hr-rectangle hr-_primary" />
          </Col>
          <Col lg={2} md={12} className="position-relative">
            <MouseParallax enableOnTouchDevice lerpEase={0.014} strength={0.04}>
              <img
                src={Graphic03}
                alt="Grafismo da identidade MiraUP em forma de piramide."
                className="parallax-graphics-03"
              />
            </MouseParallax>
          </Col>
        </Row>
        <Row className="header-detailing">
          <Col lg={3} md={6} className="data d-flex align-content-center ">
            <ul>
              <li className="categorie">
                <p>
                  Categoria <b>Nome</b>
                </p>
              </li>
              <li>
                <p>
                  Desenvolvedor(es) <b>Nome 1, Nome 2</b>
                </p>
              </li>
              <li>
                <p>
                  Origem <b>UI 8</b>
                </p>
              </li>
              <li>
                <p>
                  Atualizado <b>23/07/2022 | Versão 1.2</b>
                </p>
              </li>
            </ul>
          </Col>
          <Col
            md={6}
            className="compatibility d-flex justify-content-center align-content-center align-items-center flex-wrap gap-3"
          >
            <Icons IconName="react" Size={2.5} />
            <Icons IconName="flutter" Size={2.5} />
            <Icons IconName="css3" Size={2.5} />
            <Icons IconName="html-5" Size={2.5} />
            <Icons IconName="figma" Size={2.5} />
            <Icons IconName="sass" Size={2.5} />
            <Icons IconName="svg" Size={2.5} />
            <Icons IconName="psd" Size={2.5} />
            <Icons IconName="ai" Size={2.5} />
          </Col>
          <Col
            lg={3}
            md={12}
            className="btn-actions d-flex align-content-center align-items-center order-first order-lg-last"
          >
            <ul className="d-flex align-content-center align-items-center justify-content-center w-100">
              <li className="download">
                <Button href="#download" Ripple>
                  <Icons IconName="download" Size={2} />
                </Button>
              </li>
              <li className="favorite">
                <button
                  className="button-heart button-heart-white favorite-post"
                  id="favorite-post"
                >
                  <input
                    type="checkbox"
                    id="button-heart"
                    name="favorite"
                    value="favorite"
                    checked={btnFavorite}
                    onChange={handleFavorite}
                  />
                  <label htmlFor="button-heart"></label>
                </button>
              </li>
              <li className="comments">
                <Button
                  Component="a"
                  Ripple
                  onClick={() => setShowOfficanvasComments(true)}
                >
                  <Icons IconName="comment" Size={2} />
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
