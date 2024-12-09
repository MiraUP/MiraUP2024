import React from 'react';
import PropTypes from 'prop-types';

const Ripple = ({ Component, Color, children }) => {
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.background = `${Color}`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  let Tag;
  Component === undefined ? (Tag = 'div') : (Tag = Component);

  return (
    <Tag className="btn-ripple" onClick={createRipple}>
      {children}
    </Tag>
  );
};

Ripple.propTypes = {
  Component: PropTypes.string,
  Color: PropTypes.string,
};

export default Ripple;
