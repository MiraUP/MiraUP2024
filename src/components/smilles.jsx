import React from 'react';
import PropTypes from 'prop-types';

const Smilles = ({ Component, Emotion, EmoHover, className, ...props }) => {
  let Tag;
  Component === undefined ? (Tag = 'div') : (Tag = Component);
  EmoHover === undefined
    ? (EmoHover = '')
    : (EmoHover = ' EmoHover EmoHover-' + EmoHover);

  return (
    <>
      <Tag
        className={'smille smille-' + Emotion + EmoHover + ' ' + className}
        {...props}
      />
    </>
  );
};

Smilles.propTypes = {
  Component: PropTypes.string,
  Emotion: PropTypes.string,
  EmoHover: PropTypes.string,
  className: PropTypes.string,
};

export default Smilles;
