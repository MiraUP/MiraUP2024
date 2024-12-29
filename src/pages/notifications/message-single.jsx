import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Col, Tab, Breadcrumb } from 'react-bootstrap';
import Icons from '../../components/icon';
import Typography from '../../components/typography';
import Footer from '../../layout/footer';

const MessageSingle = () => {
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
      <div className="message-single anima-fade-left">
        <header>
          <Link to={'?categoria=' + searchParams.get('categoria')}>
            <Icons IconName="arrow-left" Size={3} />
          </Link>
        </header>
        <main>
          <section>
            <Breadcrumb>
              <span className="breadcrumb-item">
                <Link to="/">Ínicio</Link>
              </span>
              <span className="breadcrumb-item">
                <Link to={'?categoria=' + searchParams.get('categoria')}>
                  Notificações {searchParams.get('categoria')}
                </Link>
              </span>
              <span className="breadcrumb-item active">mensagem</span>
            </Breadcrumb>
            <Typography Component="h2" className="h2">
              Titulo da mensagem
              <span>Subtitulo</span>
            </Typography>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae suscipit sint, reprehenderit labore laudantium
              facilis. Nostrum, inventore possimus minus quidem ea mollitia
              unde? Officiis eveniet ipsam facilis! Voluptates, distinctio
              numquam!
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MessageSingle;
