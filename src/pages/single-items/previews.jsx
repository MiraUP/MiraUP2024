import React from 'react';
import { Col, Container, Modal, Row, Stack } from 'react-bootstrap';

const Path = 'src/assets/img/banner/';
const ImgsBanner = [
  { item: Path + '1_1630599912156.png' },
  { item: Path + 'fitness_pro-preview_1_1620747741392.png' },
  { item: Path + 'preview_01_1616943936661.png' },
  { item: Path + 'preview_01_1625216203522.png' },
  { item: Path + 'preview-01_1610599939230.png' },
  { item: Path + 'preview-3_1636636114453.png' },
  { item: Path + 'slice-1_1621426038602.png' },
  { item: Path + 'ui8-details-6_1649773709276.png' },
];

const Previews = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalImage, setModalImage] = React.useState('');

  return (
    <>
      <Container as="section" className="gallery-preview">
        <Row>
          {ImgsBanner.map(({ item }, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              className="gallery-preview-item"
              onClick={() => setModalShow(true) + setModalImage(item)}
            >
              <img src={item} alt="" />
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <img src={modalImage} alt="" className="modal-gallery-item" />
      </Modal>
    </>
  );
};

export default Previews;
