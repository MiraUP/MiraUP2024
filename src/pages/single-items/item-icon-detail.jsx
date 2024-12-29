import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { UserContext } from '../../hooks/userContext';
import Typography from '../../components/typography';
import Icons from '../../components/icon';
import Button from '../../components/button';

export const ItemIconModalDetail = ({ IconAPI, selectIcon }) => {
  const { toastData, setToastData } = React.useContext(UserContext);
  const [contrastIcon, setContrastIcon] = React.useState(false);

  function handleContrastIcon() {
    setContrastIcon(!contrastIcon);
  }

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes do ícone "{selectIcon[1]}"</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {IconAPI.map(({ list }) =>
          list
            .filter((list) => list.id === selectIcon[0])
            .map(({ id, icon, tags, downloads }) => (
              <div key={id} className="anima-fade-right">
                <Row className="preview-icon">
                  <Col xs={1}></Col>
                  <Col
                    xs={10}
                    className={contrastIcon != false && 'contrast'}
                    style={{ textAlign: 'center' }}
                  >
                    <Icons IconName={icon} Size={9} />
                  </Col>
                  <Col xs={1} className="btn-contrast">
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      checked={contrastIcon}
                      onChange={handleContrastIcon}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col
                    className="btn-edit d-flex justify-content-evenly"
                    style={{ paddingTop: '20px' }}
                  >
                    <Button Icon="edit" StyleBTN="secondary">
                      Editar
                    </Button>
                    <Button
                      Icon="copy"
                      StyleBTN="secondary"
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
                    >
                      Copiar
                    </Button>
                  </Col>
                </Row>
                <hr className="hr" />
                <Row className="downloads-icon">
                  <Col>
                    <Typography Component="h3" className="h5 title">
                      <Icons
                        IconName="download"
                        style={{ marginRight: '15px', fontSize: '2rem' }}
                      />
                      Download
                    </Typography>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {downloads.map(({ fileType, link }, index) => (
                        <Button
                          key={index}
                          href={`/src/assets/img/icon/${fileType}/${link}.${fileType}`}
                          download={`/src/assets/img/icon/${fileType}/${link}.${fileType}`}
                          className="btn-download"
                          Size="lg"
                          StyleBTN="primary"
                          target="_blank"
                        >
                          {fileType}
                        </Button>
                      ))}
                    </div>
                  </Col>
                </Row>
                <hr className="hr" />
                <Row className="tags-icon" style={{ paddingBottom: '20px' }}>
                  <Col>
                    <Typography Component="h3" className="h5 title">
                      <Icons
                        IconName="bookmark"
                        style={{ marginRight: '15px', fontSize: '2rem' }}
                      />
                      Tags
                    </Typography>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {tags.map((tags, index) => (
                        <span className="tag" key={index}>
                          {tags}
                        </span>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            )),
        )}
      </Modal.Body>
    </>
  );
};

export const ItemIconAsideDetail = ({ IconAPI, selectIcon }) => {
  const [contrastIcon, setContrastIcon] = React.useState(false);

  function handleContrastIcon() {
    setContrastIcon(!contrastIcon);
  }

  if (selectIcon[0] != '' && document.body.clientWidth > 991) {
    return IconAPI.map(({ list }) =>
      list
        .filter((list) => list.id === selectIcon[0])
        .map(({ id, icon, tags, downloads }) => (
          <div key={id} className="anima-fade-right">
            <Row>
              <Col>
                <Typography Component="h3" className="h5 title">
                  {icon}
                </Typography>
              </Col>
              <Col xs="auto" className="btn-contrast">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  checked={contrastIcon}
                  onChange={handleContrastIcon}
                />
              </Col>
            </Row>
            <Row className="preview-icon">
              <Col className={contrastIcon != false && 'contrast'}>
                <Icons IconName={icon} Size={9} />
              </Col>
            </Row>
            <Row>
              <Col className="btn-edit">
                <Button Icon="edit" Size="sm" StyleBTN="secondary">
                  Editar
                </Button>
              </Col>
            </Row>
            <Row className="downloads-icon">
              <Col>
                <Typography Component="h3" className="h5 title">
                  <Icons IconName="download" Size={2} />
                  Download
                </Typography>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {downloads.map(({ fileType, link }, index) => (
                    <Button
                      key={index}
                      href={`/src/assets/img/icon/${fileType}/${link}.${fileType}`}
                      download={`/src/assets/img/icon/${fileType}/${link}.${fileType}`}
                      className="btn-download"
                      Size="sm"
                      StyleBTN="primary"
                      target="_blank"
                    >
                      {fileType}
                    </Button>
                  ))}
                </div>
              </Col>
            </Row>
            <Row className="tags-icon">
              <Col>
                <Typography Component="h3" className="h5 title">
                  <Icons IconName="bookmark" Size={2} />
                  Tags
                </Typography>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {tags.map((tags, index) => (
                    <span className="tag" key={index}>
                      {tags}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        )),
    );
  }

  if (selectIcon[0] === '' && document.body.clientWidth > 991) {
    return (
      <div className="anima-fade-right">
        <Row>
          <Col>
            <Typography Component="h3" className="h5 title">
              <Icons IconName="image" Size={2} />
              Clique nos ícone
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Icons
              IconName="computer-mouse"
              Animate
              Trigger="loop"
              Style="width:200px; height:200px;"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Typography Component="small" style={{ textAlign: 'center' }}>
              Clique em algum ícone para ver os detalhes.
            </Typography>
          </Col>
        </Row>
      </div>
    );
  } else return null;
};
