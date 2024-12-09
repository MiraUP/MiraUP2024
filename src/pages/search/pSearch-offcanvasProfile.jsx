import React from 'react';
import Offcanvas from '../../components/offcanvas';
import Button from '../../components/button';
import Smilles from '../../components/smilles';
import Typography from '../../components/typography';
import Icon from '../../components/icon';
import Tooltip from '../../components/tooltip';

const OffcanvasProfile = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasProfile"
      aria-labelledby="offcanvasProfileLabel"
    >
      <Offcanvas Header Short="Profile" Title="Olá, Fulano" />

      <Offcanvas Body>
        <div className="text-center">
          <Smilles
            Emotion="Happy"
            EmoHover="Friendly"
            Component="button"
            alt="Foto utilizada no perfil."
            className="button-notification"
            style={{
              width: '120px',
              height: '120px',
              borderWidth: '5px',
              borderRadius: '100%',
            }}
          />
          <Icon IconName="" />
          <div style={{ marginTop: '20px' }}>
            <Tooltip Title="Click para editar seu email" Offset="0, 13">
              <Typography Component="a" className="link" href="#">
                email@email.com <Icon IconName="edit" />
              </Typography>
            </Tooltip>
          </div>
        </div>
        <div className="dates">
          <div className="uploads fw-light">
            <Typography Component="p">
              <Typography Component="span" className="value h4 fw-semibold">
                75k
              </Typography>
              Itens enviados
            </Typography>
          </div>
          <div className="uploads fw-light">
            <Typography Component="p">
              <Typography Component="span" className="value h4 fw-semibold">
                15k
              </Typography>
              Cadastros
            </Typography>
          </div>
          <div className="uploads fw-light">
            <Typography Component="p">
              <Typography Component="span" className="value h4 fw-semibold">
                29k
              </Typography>
              Downloads
            </Typography>
          </div>
        </div>

        <div className="chart">
          <Typography Component="h3" className="h4 fw-semibold">
            Itens enviados
          </Typography>
          <Typography Component="p">75k / 100k</Typography>
        </div>

        <ul className="list-registration list-group list-group-flush">
          <li className="list-group-item animated-icon d-flex justify-content-between align-items-center">
            <div className="col me-auto">
              <Icon
                Animate
                Trigger="hover"
                IconName="drawing-tablet"
                style={{ width: '60px', height: '60px' }}
                className="icon-animate-text"
                Stroke={80}
              >
                <Typography
                  Component="span"
                  className="itens d-block align-items-center"
                  style={{ width: '155px' }}
                >
                  <Typography Component="h4" className="fw-bold h5">
                    Ilustration
                  </Typography>
                  15k enviados
                </Typography>
              </Icon>
            </div>
            <div className="col-auto">
              <Button
                Component="button"
                StyleBTN="primary"
                Size="sm"
                Ripple
                RippleColor="#80BADA"
              >
                Ver todos
              </Button>
            </div>
          </li>
        </ul>
      </Offcanvas>

      <Offcanvas Footer>
        <Button
          Component="a"
          Ripple
          className="btn-primary waves-effect waves-light"
          Icon="edit"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Editar perfil
        </Button>

        <Button
          Component="span"
          href="login"
          Ripple
          className="btn-secondary waves-effect waves-light"
          Icon="out"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          Fazer logout
        </Button>
      </Offcanvas>
    </div>
  );
};

export default OffcanvasProfile;
