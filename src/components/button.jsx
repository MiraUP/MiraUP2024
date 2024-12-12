/**
 * PROPERTIES BUTTON
 *
 *  > Component (Ex.: button)
 *  > Icon (Ex.: home)
 *  > IconPosition (Ex.: left, right)
 *  > StyleBTN (Ex.: primary, secondary, success, danger, warning, info, light, dark, link, outline-)
 *  > disabled (Ex.: ...props = disabled)
 *  > className (Ex.: test-class)
 *  > Size (Ex.: lg, sm)
 *  > Ripple*
 *  > RippleColor (Ex.: #FFF)
 *  > ...props - When using the style attribute in ...props, you must rewrite the properties fontSize: '1rem', color: '#FFF' (Ex.: style={{fontSize: '1rem', color: '#FFF'}} Title="Title icon" href="#")
 */

import React from 'react';
import Icons from './icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({
  Component,
  href,
  Icon,
  IconPosition,
  StyleBTN,
  Size,
  Ripple,
  RippleColor,
  className,
  children,
  disabled,
  ...props
}) => {
  //Variables
  let Tag;
  let IconPositionLeft;
  let IconPositionRight;
  let RippleBTN;

  //If undefined
  Component === undefined ? (Tag = 'a') : (Tag = Component);
  className === undefined ? (className = '') : (className = className);
  Size === undefined ? (Size = '') : (Size = ' btn-' + Size);
  StyleBTN === undefined ? (StyleBTN = '') : (StyleBTN = ' btn-' + StyleBTN);

  //Config Icons
  if (Icon === undefined) {
    IconPositionLeft = '';
    IconPositionRight = '';
  } else {
    if (IconPosition === 'left') {
      IconPositionLeft = <Icons IconName={Icon} />;
      IconPositionRight = '';
    } else if (IconPosition === 'right') {
      IconPositionLeft = '';
      IconPositionRight = <Icons IconName={Icon} />;
    } else {
      IconPositionLeft = <Icons IconName={Icon} />;
      IconPositionRight = '';
    }
  }

  //Create Ripple Effects
  function createRipple(event) {
    const button = event.currentTarget;
    let RColor;
    RippleColor === undefined ? (RColor = '#FFF') : (RColor = RippleColor);

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.style.backgroundColor = `${RColor}`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  if (Ripple === true) {
    RippleBTN =
      href != undefined ? (
        <Link
          className={'btn-ripple btn' + StyleBTN + ' ' + className}
          onClick={createRipple}
          to={href}
        >
          <span
            className={
              'content d-flex align-items-center justify-content-center gap-2' +
              Size
            }
            style={{ minHeight: '104px' }}
            {...props}
          >
            {IconPositionLeft}
            {children}
            {IconPositionRight}
          </span>
        </Link>
      ) : (
        <Tag
          className={'btn-ripple btn' + StyleBTN + Size + ' ' + className}
          disabled={disabled ? true : false}
          onClick={createRipple}
        >
          <span
            className="content d-flex align-items-center justify-content-center gap-2"
            style={{ minHeight: '104px' }}
            {...props}
          >
            {IconPositionLeft}
            {children}
            {IconPositionRight}
          </span>
        </Tag>
      );
  } else {
    RippleBTN =
      href != undefined ? (
        <Link
          to={href}
          className={'btn-ripple btn' + StyleBTN + Size + ' ' + className}
          onClick={createRipple}
        >
          <span
            className="content d-flex align-items-center justify-content-center gap-2"
            style={{ minHeight: '104px' }}
            {...props}
          >
            {IconPositionLeft}
            {children}
            {IconPositionRight}
          </span>
        </Link>
      ) : (
        <Tag
          className={'btn' + StyleBTN + Size + ' ' + className}
          disabled={disabled ? true : false}
        >
          <span className="content" {...props}>
            {IconPositionLeft}
            {children}
            {IconPositionRight}
          </span>
        </Tag>
      );
  }

  return <>{RippleBTN}</>;
};

Button.propTypes = {
  Component: PropTypes.string,
  href: PropTypes.string,
  Icon: PropTypes.string,
  IconPosition: PropTypes.string,
  StyleBTN: PropTypes.string,
  Size: PropTypes.string,
  Ripple: PropTypes.bool,
  RippleColor: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
