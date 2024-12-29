import React from 'react';
import { Col, Tab } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import HeadConfig from '../../components/headConfig';
import Icons from '../../components/icon';
import MessagesNotifications from './messages';
import HeaderNotifications from './header';
import MessageSingle from './message-single';

const categoriesList = [
  {
    id: 1,
    name: 'Pinados',
    icon: 'pin-stuck',
    short: 'pinados',
  },
  {
    id: 2,
    name: 'Novidades',
    icon: 'star',
    short: 'novidades',
  },
  {
    id: 3,
    name: 'Sistema',
    icon: 'gear',
    short: 'sistema',
  },
  {
    id: 4,
    name: 'Pessoal',
    icon: 'user',
    short: 'pessoal',
  },
  {
    id: 5,
    name: 'Excluídos',
    icon: 'bin',
    short: 'excluidos',
  },
];

const PageNotifications = () => {
  const [searchParams] = useSearchParams();
  const [tabContent, setTabContent] = React.useState('pinados');
  const [messageID, setMessageID] = React.useState(null);

  React.useEffect(() => {
    if (searchParams.get('categoria') != null) {
      setTabContent(searchParams.get('categoria'));
    } else {
      setTabContent('pinados');
    }

    if (searchParams.get('mensagem') != null) {
      setMessageID(searchParams.get('mensagem'));
    }
  }, [searchParams]);

  return (
    <>
      <HeadConfig
        title="Notificações"
        description="Gerencie suas notificações"
      />
      <Tab.Container
        id="notifications"
        className="page-notifications"
        defaultActiveKey="pinados"
      >
        <Col as="section" sm={3} className="page-notifications-categories">
          <nav className="flex-column">
            <HeaderNotifications />
            <ul className="nav">
              {categoriesList.map(({ id, name, icon, short }) => (
                <li
                  className={
                    tabContent === short ? 'active nav-item' : 'nav-item'
                  }
                  key={id}
                >
                  <Link
                    className="nav-link"
                    to={'?categoria=' + short}
                    onClick={() => setMessageID(null)}
                  >
                    <Icons IconName={icon} Size={2} />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Col>
        <Col as="section" sm={9} className="content">
          <section className="tab-content">
            {categoriesList.map(
              ({ id, short, name }) =>
                tabContent === short &&
                (searchParams.get('mensagem') === null ? (
                  <MessagesNotifications categorie={name} key={id} />
                ) : (
                  <MessageSingle key={id} />
                )),
            )}
          </section>
        </Col>
      </Tab.Container>
    </>
  );
};

export default PageNotifications;
