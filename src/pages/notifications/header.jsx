import React from 'react';
import { Col, Row } from 'react-bootstrap';
import InputField from '../../components/forms/inputfield';
import Typography from '../../components/typography';
import Icons from '../../components/icon';

const HeaderNotifications = () => {
  return (
    <>
      <Row as="header" className="dashboard-header">
        <Col className="title-page">
          <Typography Component="h1" className="h1">
            Notificações
          </Typography>
        </Col>
        <Col className="search">
          <InputField
            id="search"
            type="search"
            autoComplete="search"
            label="Pesquisar notificações"
            icon="search"
            iconSize={1.5}
            iconPosition="right"
            height={10}
            className="input-field-simple d-sm-block d-none"
            style={{ marginTop: '20px' }}
          />
          <Icons
            IconName="search"
            Size={2}
            className="input-field-simple d-sm-none d-block"
            data-bs-toggle="dropdown"
            data-bs-offset="13, 20"
            aria-expanded="false"
          />
          <div className="dropdown-menu dropdown-menu-dark dropdown-menu-end fade">
            <InputField
              id="search"
              type="search"
              autoComplete="search"
              label="Pesquisar favoritos"
              icon="search"
              iconSize={1.5}
              iconPosition="right"
              height={15}
              className="input-field-simple"
              style={{ marginTop: '20px' }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeaderNotifications;
