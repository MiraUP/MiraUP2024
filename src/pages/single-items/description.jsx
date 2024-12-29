import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Typography from '../../components/typography';
import Icons from '../../components/icon';

const Description = () => {
  return (
    <Container className="description">
      <Row className="description-text">
        <Col>
          <Typography Component="h3">Descrição</Typography>
          <Typography>
            Conheça o Crypter, um kit de design de interface do usuário com
            todos os recursos para NFT Marketplace, incluindo arquivos de design
            exclusivos e belas ilustrações 3D editáveis ​​em Figma, Sketch e
            Adobe XD, além de lançarmos a versão totalmente codificada em HTML,
            CSS, JS + React.
          </Typography>
          <Typography>
            Este pacote inclui um modelo de página de destino responsivo e
            totalmente personalizado com 236 telas pré-fabricadas limpas e
            mínimas. Adicionamos muito conteúdo diferente para maximizar o
            número de opções de layout. Arraste, solte e misture diferentes
            partes para construir rapidamente seu próprio mercado NFT em questão
            de minutos.
          </Typography>
        </Col>
      </Row>
      <Row className="description-highlights">
        <Col>
          <Typography Component="h3">Destaques</Typography>
          <Row>
            <Col xs={12} md={6}>
              <ul>
                <li>HTML, CSS, JS e base de código React</li>
                <li>236 Modelos Pré-Construídos Exclusivos</li>
                <li>Mais de 200 componentes</li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <ul>
                <li>Guia de estilo global incluído</li>
                <li>136 Seções de arrastar e soltar</li>
                <li>Modo de luz brilhante + escuro</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="description-fonts">
        <Col>
          <Row>
            <Col xs={12} md={6}>
              <Typography Component="h3">Fontes usadas</Typography>
              <Typography>Poppins e DM sans. </Typography>
            </Col>
            <Col xs={12} md={6}>
              <Typography Component="h3">Arquivos</Typography>
              <Typography>874,4 MB em 2 arquivos.</Typography>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="description-compatibility">
        <Col>
          <Typography Component="h3">Compatibilidade</Typography>
          <div className="d-flex align-items-center justify-content-around flex-wrap">
            <Icons IconName="react" Size={2} />
            <Icons IconName="flutter" Size={2} />
            <Icons IconName="css3" Size={2} />
            <Icons IconName="html-5" Size={2} />
            <Icons IconName="figma" Size={2} />
            <Icons IconName="sass" Size={2} />
            <Icons IconName="sketch" Size={2} />
            <Icons IconName="svg" Size={2} />
            <Icons IconName="ai" Size={2} />
            <Icons IconName="psd" Size={2} />
            <Icons IconName="xd" Size={2} />
            <Icons IconName="movie" Size={2} />
          </div>
        </Col>
      </Row>
      <Link to="#" className="contribution">
        <Icons
          Animate
          IconName="card-heart"
          Trigger="loop"
          Style="width:40px; height:40px;"
        />
        Contribua com esse material
      </Link>
    </Container>
  );
};

export default Description;
