/**
 * PROPERTIES ICONS
 *
 * Animate Icons
 *  > Animate*
 *  > IconName (Ex.: Home)
 *  > Color (Ex.: #FFF)
 *  > Trigger (Ex.: hover)
 *  > Stroke (Ex.: 100)
 *  > ...props (Ex.: style={{width: '35px'}})
 *
 * Static Icon
 *  > IconName (Ex.: Home)
 *  > TagName (Ex.: span)
 *  > Color (Ex.: #FFF)
 *  > Hover (Ex.: Rotation, Zoom, ZoomRotation, Float, Color, Opacity)
 *  > className (Ex.: test-class)
 *  > Size (Ex.: 1)
 *  > ...props - When using the style attribute in ...props, you must rewrite the properties fontSize: '1rem', color: '#FFF' (Ex.: style={{fontSize: '1rem', color: '#FFF'}} Title="Title icon" href="#")
 */

import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
import PropTypes from 'prop-types';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Icons = ({
  Component,
  IconName,
  Animate,
  Trigger,
  Color,
  Stroke,
  Size,
  className,
  Hover,
  children,
  ...props
}) => {
  let Icon;
  let Tag;
  Component === undefined ? (Tag = 'i') : (Tag = Component);
  Stroke === undefined ? (Stroke = 100) : (Stroke = Stroke);

  if (Animate === true) {
    Color === undefined
      ? (Color = 'primary:#DFE0E4,secondary:#DFE0E4')
      : (Color = 'primary:' + Color + ',secondary:' + Color);

    Icon = (
      <lord-icon
        trigger={Trigger}
        src={'src/assets/img/icon/animation/' + IconName + '.json'}
        colors={Color}
        stroke={Stroke}
        class={className}
        {...props}
      >
        {children}
      </lord-icon>
    );
  } else {
    Color === undefined ? (Color = '') : (Color = Color);
    className === undefined ? (className = '') : (className = ' ' + className);
    Hover === undefined ? (Hover = '') : (Hover = ' hover hover-' + Hover);

    Icon = (
      <Tag
        className={'icon icon-' + IconName + className + Hover}
        style={{ fontSize: Size + 'rem', color: Color }}
        {...props}
      />
    );
  }

  return <>{Icon}</>;
};

Icons.propTypes = {
  Component: PropTypes.string,
  IconName: PropTypes.string.isRequired,
  Animate: PropTypes.bool,
  Trigger: PropTypes.string,
  Color: PropTypes.string,
  Stroke: PropTypes.number,
  Size: PropTypes.number,
  className: PropTypes.string,
  Hover: PropTypes.string,
};

export default Icons;
