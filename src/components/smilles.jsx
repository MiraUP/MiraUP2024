import React from 'react';

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

export default Smilles;
