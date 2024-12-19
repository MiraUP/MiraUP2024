import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const CategoriesList = [
  'Ilustração',
  'Ícones',
  'Códigos',
  'Mockups',
  'UI Kit',
  'Fontes',
  'Identidade Visual',
  'Wireframe',
  'Apresentação',
  'Social Media',
];

const Categories = () => {
  return (
    <Row className="dashboard-categories">
      <Col xs={3} md="auto">
        <b>Categorias:</b>
      </Col>
      <Col xs={9} md>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {CategoriesList.map((CategoriesList) => (
            <SwiperSlide key={CategoriesList}>
              <Link>{CategoriesList}</Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  );
};

export default Categories;
