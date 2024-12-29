import React from 'react';
import { Offcanvas, Row, Col, Badge } from 'react-bootstrap';
import Typography from '../../components/typography';
import Button from '../../components/button';
import Textarea from '../../components/forms/textarea';
import Smilles from '../../components/smilles';
import Icons from '../../components/icon';

const OffcanvasComments = ({ show, setShow }) => {
  return (
    <Offcanvas
      show={show}
      onHide={() => setShow(false)}
      placement="end"
      name="end"
      className="offcanvas-comments"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Typography Component="h2" className="h4 fw-bold position-relative">
            Comentários
            <Badge
              pill
              bg="success"
              className="position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: '.7rem', margin: '15px 0px 0px 15px' }}
            >
              5 <span className="visually-hidden">mensagens</span>
            </Badge>
          </Typography>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex h-100">
        <Row className="flex-column position-relative">
          <Col as="section" className="offcanvas-content">
            <ul className="d-flex flex-column-reverse">
              <li>
                <Typography
                  Component="h3"
                  className="h6 data-user d-flex align-items-end"
                >
                  <Smilles
                    Emotion="Happy"
                    EmoHover="Friendly"
                    Component="button"
                    alt="Foto utilizada no perfil."
                    className="button-notification col-auto"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderWidth: '3px',
                      borderRadius: '0',
                      marginRight: '10px',
                    }}
                  />
                  <span className="col">
                    <b className="d-block">Nome do usuário 1</b>
                    <small>@userName</small>
                  </span>
                  <Icons
                    IconName="bin"
                    className="col-auto"
                    style={{ margin: 'auto 0', fontSize: '1.5rem' }}
                  />
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis. Dolore excepturi ipsam qui iure, ratione, ut
                  nisi eveniet consequatur rem impedit ipsa quo pariatur
                  dignissimos? Amet mollitia accusamus ducimus!
                </Typography>
              </li>
              <li>
                <Typography
                  Component="h3"
                  className="h6 data-user d-flex align-items-end"
                >
                  <Smilles
                    Emotion="Happy"
                    EmoHover="Friendly"
                    Component="button"
                    alt="Foto utilizada no perfil."
                    className="button-notification col-auto"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderWidth: '3px',
                      borderRadius: '0',
                      marginRight: '10px',
                    }}
                  />
                  <span className="col">
                    <b className="d-block">Nome do usuário 2</b>
                    <small>@userName</small>
                  </span>
                  <Icons
                    IconName="bin"
                    className="col-auto"
                    style={{ margin: 'auto 0', fontSize: '1.5rem' }}
                  />
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis. Dolore excepturi ipsam qui iure, ratione, ut
                  nisi eveniet consequatur rem impedit ipsa quo pariatur
                  dignissimos? Amet mollitia accusamus ducimus!
                </Typography>
              </li>
              <li>
                <Typography
                  Component="h3"
                  className="h6 data-user d-flex align-items-end"
                >
                  <Smilles
                    Emotion="Happy"
                    EmoHover="Friendly"
                    Component="button"
                    alt="Foto utilizada no perfil."
                    className="button-notification col-auto"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderWidth: '3px',
                      borderRadius: '0',
                      marginRight: '10px',
                    }}
                  />
                  <span className="col">
                    <b className="d-block">Nome do usuário 3</b>
                    <small>@userName</small>
                  </span>
                  <Icons
                    IconName="bin"
                    className="col-auto"
                    style={{ margin: 'auto 0', fontSize: '1.5rem' }}
                  />
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis. Dolore excepturi ipsam qui iure, ratione, ut
                  nisi eveniet consequatur rem impedit ipsa quo pariatur
                  dignissimos? Amet mollitia accusamus ducimus!
                </Typography>
              </li>
              <li>
                <Typography
                  Component="h3"
                  className="h6 data-user d-flex align-items-end"
                >
                  <Smilles
                    Emotion="Happy"
                    EmoHover="Friendly"
                    Component="button"
                    alt="Foto utilizada no perfil."
                    className="button-notification col-auto"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderWidth: '3px',
                      borderRadius: '0',
                      marginRight: '10px',
                    }}
                  />
                  <span className="col">
                    <b className="d-block">Nome do usuário 4</b>
                    <small>@userName</small>
                  </span>
                  <Icons
                    IconName="bin"
                    className="col-auto"
                    style={{ margin: 'auto 0', fontSize: '1.5rem' }}
                  />
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis. Dolore excepturi ipsam qui iure, ratione, ut
                  nisi eveniet consequatur rem impedit ipsa quo pariatur
                  dignissimos? Amet mollitia accusamus ducimus!
                </Typography>
              </li>
              <li>
                <Typography
                  Component="h3"
                  className="h6 data-user d-flex align-items-end"
                >
                  <Smilles
                    Emotion="Happy"
                    EmoHover="Friendly"
                    Component="button"
                    alt="Foto utilizada no perfil."
                    className="button-notification col-auto"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderWidth: '3px',
                      borderRadius: '0',
                      marginRight: '10px',
                    }}
                  />
                  <span className="col">
                    <b className="d-block">Nome do usuário 5</b>
                    <small>@userName</small>
                  </span>
                  <Icons
                    IconName="bin"
                    className="col-auto"
                    style={{ margin: 'auto 0', fontSize: '1.5rem' }}
                  />
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis. Dolore excepturi ipsam qui iure, ratione, ut
                  nisi eveniet consequatur rem impedit ipsa quo pariatur
                  dignissimos? Amet mollitia accusamus ducimus!
                </Typography>
              </li>
            </ul>
          </Col>
          <Col
            as="footer"
            xs="auto"
            className="position-fixed bottom-0"
            style={{ width: '322px', marginBottom: '30px' }}
          >
            <Textarea
              id="comments"
              placeholder="Digite seu comentário"
              className="d-block"
              style={{ marginBottom: '15px' }}
            />
            <Button StyleBTN="primary" className="w-100">
              Comentar
            </Button>
          </Col>
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasComments;
