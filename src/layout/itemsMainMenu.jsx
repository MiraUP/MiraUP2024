import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import Typography from '../components/typography';
import Button from '../components/button';
import Icons from '../components/icon';

const itensMenu = [
  {
    content: 'Navegação',
    short: 'Navegacao',
    iconMenu: 'list-bullet',
    item: [
      { name: 'Ínicio', href: '/', icon: 'home' },
      { name: 'Cadastrar um Ativo', href: '/cadastro', icon: 'file-plus' },
      { name: 'Meus Ativos', href: '/ativos', icon: 'file-star' },
      { name: 'Favoritos', href: '/favoritos', icon: 'heart' },
      { name: 'Notificações', href: '/notificacoes', icon: 'bell' },
      { name: 'Meu perfil', href: '/perfil', icon: 'user' },
      { name: 'Configurações', href: '/conta', icon: 'config' },
      { name: 'Fazer logout', href: '/logout', icon: 'out' },
    ],
  },
  {
    content: 'Categorias',
    short: 'Categorias',
    iconMenu: 'list',
    item: [
      { name: 'Ilustração', href: '#' },
      { name: 'Ícones', href: '#' },
      { name: 'Códigos', href: '#' },
      { name: 'Mockups', href: '#' },
      { name: 'UI Kit', href: '#' },
      { name: 'Fontes', href: '#' },
      { name: 'Identidade Visual', href: '#' },
      { name: 'Wireframe', href: '#' },
      { name: 'Apresentação', href: '#' },
      { name: 'Social Media', href: '#' },
    ],
  },
  {
    content: 'Bancos',
    short: 'Bancos',
    iconMenu: 'bank',
    item: [
      { name: 'UI 8', href: '#' },
      { name: 'LordIcon', href: '#' },
      { name: 'Evato', href: '#' },
      { name: 'Adobe Stock', href: '#' },
      { name: 'MiraUP Design', href: '#' },
      { name: 'Freepik', href: '#' },
    ],
  },
];

export const ItemsMainMenu = () => {
  return itensMenu.map(({ short, content, item }) => (
    <div
      className={'col-lg-4 col-md-12 text-center d-none d-lg-block ' + short}
      key={short}
    >
      <Typography Component="h3" className="h3">
        {content}
      </Typography>
      <div className="menu">
        <ul>
          {item.map(({ name, href, icon }, index) => (
            <li
              className={
                href === location.pathname ? 'active page_item' : 'page_item'
              }
              data-href={href}
              key={index}
            >
              <Button
                RippleColor="#48dafa"
                Component="a"
                StyleBTN="link"
                href={href}
                className={href === location.pathname ? 'active' : ''}
              >
                {icon && (
                  <Icons
                    IconName={icon}
                    Size={1.5}
                    style={{ marginRight: '10px' }}
                  />
                )}
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
};

export const ItemsMainMenuMobile = () => {
  return (
    <div className="MenuMobile d-block d-lg-none">
      <Tab.Container id="menu-mobile" defaultActiveKey="Navegacao">
        <Row>
          <Col>
            <Tab.Content>
              {itensMenu.map(({ short, item }) => (
                <Tab.Pane eventKey={short} key={short}>
                  <ul className="row justify-content-center align-items-stretch">
                    {item.map(({ name, href, icon }, index) => (
                      <li
                        className="col-6 d-flex align-items-center text-center page_item"
                        key={index}
                      >
                        <Link to={href}>
                          {icon && (
                            <Icons
                              IconName={icon}
                              Size={1.5}
                              style={{ marginRight: '10px' }}
                            />
                          )}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>

        <Nav className="flex-column">
          <Row>
            {itensMenu.map(({ short, iconMenu, content }) => (
              <Col key={short}>
                <Nav.Item>
                  <Nav.Link eventKey={short} className="text-center">
                    <Icons IconName={iconMenu} Size={2} />
                    {content}
                  </Nav.Link>
                </Nav.Item>
              </Col>
            ))}
          </Row>
        </Nav>
      </Tab.Container>
    </div>
  );
};

export const ItemsMainMenuAside = () => {
  const location = useLocation();
  return itensMenu
    .filter((menu) => menu.short === 'Navegacao')
    .map(({ short, item }) => (
      <div className={'col-md-2 text-center ' + short} key={short}>
        <div className="menu">
          <ul>
            {item.map(({ name, href, icon }, index) => (
              <li
                className={
                  href === location.pathname ? 'active page_item' : 'page_item'
                }
                data-href={href}
                key={index}
              >
                <Button
                  RippleColor="#48dafa"
                  Component="a"
                  StyleBTN="link"
                  href={href}
                  className={href === location.pathname ? 'active' : ''}
                >
                  {icon && (
                    <Icons
                      IconName={icon}
                      Size={1.5}
                      style={{ marginRight: '10px' }}
                    />
                  )}
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
};
