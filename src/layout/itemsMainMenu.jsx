import React from 'react';
import Typography from '../components/typography';
import Button from '../components/button';

const itensMenu = [
  {
    content: 'Navegação',
    short: 'Navegacao',
    item: [
      { name: 'Downloads', href: '#' },
      { name: 'Favoritos', href: '#' },
      { name: 'Login', href: '#' },
      { name: 'Novidades', href: '#' },
      { name: 'Processos de criação', href: '#' },
      { name: 'Referências', href: '#' },
      { name: 'Sua conta', href: '#' },
      { name: 'Templates', href: '#' },
    ],
  },
  {
    content: 'Categorias',
    short: 'Categorias',
    item: [
      { name: 'Downloads', href: '#' },
      { name: 'Favoritos', href: '#' },
      { name: 'Login', href: '#' },
      { name: 'Novidades', href: '#' },
      { name: 'Processos de criação', href: '#' },
      { name: 'Referências', href: '#' },
      { name: 'Sua conta', href: '#' },
      { name: 'Templates', href: '#' },
    ],
  },
  {
    content: 'Bancos',
    short: 'Bancos',
    item: [
      { name: 'Downloads', href: '#' },
      { name: 'Favoritos', href: '#' },
      { name: 'Login', href: '#' },
      { name: 'Novidades', href: '#' },
      { name: 'Processos de criação', href: '#' },
      { name: 'Referências', href: '#' },
      { name: 'Sua conta', href: '#' },
      { name: 'Templates', href: '#' },
    ],
  },
];

const ItemsMainMenu = ({ Mobile }) => {
  let Menu;
  Mobile === true
    ? (Menu = (
        <>
          <div className="col-lg-12 text-center d-block d-lg-none">
            <div className="accordion" id="accordionMenuMobile">
              {itensMenu.map(({ short, content, item }, index) => (
                <div className="accordion-item" key={short}>
                  <Typography
                    Component="h3"
                    className="accordion-header"
                    id={'heading' + short}
                  >
                    <Button
                      Component="button"
                      className={
                        index === 0
                          ? 'accordion-button'
                          : 'accordion-button collapsed'
                      }
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={'#collapse' + short}
                      aria-expanded={index === 0 ? true : false}
                      aria-controls={'collapse' + short}
                    >
                      {content}
                    </Button>
                  </Typography>
                  <div
                    id={'collapse' + short}
                    className={
                      index === 0
                        ? 'accordion-collapse collapse show'
                        : 'accordion-collapse collapse'
                    }
                    aria-labelledby={'heading' + short}
                    data-bs-parent="#accordionMenuMobile"
                  >
                    <div className="accordion-body">
                      <ul>
                        {item.map(({ name, href }, index) => (
                          <li className="page_item" key={index}>
                            <Button Component="a" StyleBTN="link" href={href}>
                              {name}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))
    : (Menu = (
        <>
          {itensMenu.map(({ short, content, item }) => (
            <div
              className="col-lg-4 col-md-12 text-center d-none d-lg-block"
              key={short}
            >
              <Typography Component="h3" className="h3">
                {content}
              </Typography>
              <div className="menu">
                <ul>
                  {item.map(({ name, href }, index) => (
                    <li className="page_item" key={index}>
                      <Button Component="a" StyleBTN="link" href={href}>
                        {name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </>
      ));

  return <>{Menu}</>;
};

export default ItemsMainMenu;
