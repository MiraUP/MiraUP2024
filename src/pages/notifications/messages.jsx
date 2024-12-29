import React from 'react';
import Icons from '../../components/icon';
import { Col, Modal, Row } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import Typography from '../../components/typography';
import Tooltips from '../../components/tooltip';
import Button from '../../components/button';
import Footer from '../../layout/footer';

const messagesList = [
  {
    id: 1,
    title: 'Mensagem 1',
    date: '01/01/2021',
    user: 'Nome do autor',
    read: true,
    marker: true,
  },
  {
    id: 2,
    title: 'Mensagem 2',
    date: '01/01/2022',
    user: 'Nome do autor',
    read: true,
    marker: true,
  },
  {
    id: 3,
    title: 'Mensagem 3',
    date: '01/01/2023',
    user: 'Nome do autor',
    read: false,
    marker: true,
  },
  {
    id: 4,
    title: 'Mensagem 4',
    date: '01/01/2024',
    user: 'Nome do autor',
    read: false,
    marker: false,
  },
  {
    id: 5,
    title: 'Mensagem 5',
    date: '01/01/2025',
    user: 'Nome do autor',
    read: false,
    marker: false,
  },
];

const MessagesNotifications = ({ categorie }) => {
  const [deleteShow, setDeleteShow] = React.useState(false);
  const [deleteItem, setDeleteItem] = React.useState(0);
  const [deleteItemName, setDeleteItemName] = React.useState('');
  const [searchParams] = useSearchParams();
  const [tabContent, setTabContent] = React.useState('pinados');

  React.useEffect(() => {
    if (deleteItem != 0) {
      setDeleteShow(true);
    }
  }, [deleteItem, deleteItemName]);

  React.useEffect(() => {
    if (searchParams.get('categoria') != null) {
      setTabContent(searchParams.get('categoria'));
    } else {
      setTabContent('pinados');
    }
  }, [searchParams]);

  return (
    <div className="message anima-fade-left">
      {messagesList.map(({ id, title, date, user, read, marker }) => (
        <Row
          className={
            read != false
              ? 'message-item-no-read message-item'
              : 'message-item-read message-item'
          }
          key={id}
        >
          <Col
            xs="auto"
            className="message-actions-left d-flex flex-column justify-content-between align-items-center"
          >
            <button
              className="button-bookmark bookmark-message"
              id={'bookmark-message-' + id}
            >
              <input
                type="checkbox"
                id={'button-bookmark-' + id}
                name="bookmark"
                data-id={id}
                defaultChecked={marker}
              />
              <label htmlFor={'button-bookmark-' + id}></label>
            </button>
            <Link
              to={'?categoria=' + tabContent + '&mensagem=' + id}
              className="message-content d-flex align-items-center"
            >
              <span
                className={read != false ? 'notification-new d-block' : ''}
                style={{ padding: '0px 0px 25px 20px' }}
              ></span>
            </Link>
            <Icons
              IconName="bin"
              Size={1.5}
              onClick={() => setDeleteItem(id) + setDeleteItemName(title)}
            />
          </Col>
          <Col>
            <Link
              to={'?categoria=' + tabContent + '&mensagem=' + id}
              className="message-content d-flex align-items-center"
            >
              <div className="thumb">
                <figure></figure>
              </div>
              <div className="detail">
                <Typography Component="h2" className="h5">
                  Categoria: {categorie} | {title}
                </Typography>
                <Typography Component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit eos libero, alias nisi earum officiis. Qui,
                  sapiente ad doloribus iure alias, autem labore sunt,
                  repellendus ea nam accusamus distinctio ipsum!
                </Typography>
              </div>
            </Link>
          </Col>
          <Col
            xs="auto"
            className="message-actions-right d-flex flex-column justify-content-between"
          >
            <Tooltips Title={date} Placement="left" Offset="0, 10">
              <Icons IconName="calendar" Size={1.5} />
            </Tooltips>
            <Tooltips Title={user} Placement="left" Offset="0, 10">
              <Icons IconName="user" Size={1.5} />
            </Tooltips>
          </Col>
        </Row>
      ))}

      <Footer />

      <Modal
        className="message-modal-delete"
        show={deleteShow}
        onHide={() => setDeleteShow(false) + setDeleteItem(0)}
        size="md"
        aria-labelledby="box-modal-delete-item-message"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="title-modal-delete">
            Gostaria de excluir a mensagem "{deleteItemName}"?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ao confirmar a exclusão, essa mensagem irá para a aba de excluídos.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setDeleteShow(false) + setDeleteItem(0)}>
            Cancelar
          </Button>
          <Button onClick={() => setDeleteShow(false) + setDeleteItem(0)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MessagesNotifications;
