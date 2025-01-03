import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/userContext';
import { MouseParallax } from 'react-just-parallax';
import Brand from '../../components/brand';
import Icon from '../../components/icon';
import Graphic02 from '../../assets/img/graphic/graphic-02.png';
import Graphic03 from '../../assets/img/graphic/graphic-03.png';

const PageLoginBrand = () => {
  const { login } = React.useContext(UserContext);

  return (
    <section
      className="login-brand text-center"
      style={{ position: 'relative' }}
    >
      <MouseParallax enableOnTouchDevice strength={0.05}>
        <img
          src={Graphic02}
          alt=""
          style={{ position: 'absolute', top: '-100px', left: '-50px' }}
        />
      </MouseParallax>
      {login && (
        <>
          <Link to="/">
            <Icon
              Component="i"
              IconName="arrow-left"
              Size={2.5}
              className="d-inline-block"
            />
          </Link>
        </>
      )}
      <Brand
        Version="Extended"
        className="logo-extend-white d-inline-block"
        style={{ width: '250px', marginLeft: '30px' }}
      />
      <MouseParallax enableOnTouchDevice lerpEase={0.014} strength={0.04}>
        <img
          src={Graphic03}
          alt=""
          style={{ position: 'absolute', top: '-200px', right: '-250px' }}
        />
      </MouseParallax>
    </section>
  );
};

export default PageLoginBrand;
