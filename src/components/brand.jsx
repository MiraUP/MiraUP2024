/**
 * PROPERTIES BRAND
 *
 *  > Version (Ex.: Extended, Signature)
 *  > TagName (Ex.: span)
 *  > Color (Ex.: #FFF)
 *  > ...props - When using the style attribute in ...props, you must rewrite the properties fontSize: '1rem', color: '#FFF' (Ex.: style={{fontSize: '1rem', color: '#FFF'}} Title="Title icon" href="#")
 */

import React from 'react';
import ExtendedLogo from './../assets/img/logo-extended.svg?react';
import SignatureLogo from './../assets/img/logo-signature.svg?react';
import PropTypes from 'prop-types';

const Brand = ({ Version, Color, ...props }) => {
  Color === undefined ? (Color = '#DFE0E4') : (Color = Color);

  let Logo;
  if (Version === 'Extended') {
    Logo = <ExtendedLogo fill={Color} className={'brand'} {...props} />;
  } else {
    Logo = <SignatureLogo fill={Color} className={'brand'} {...props} />;
  }

  return <>{Logo}</>;
};

Brand.propTypes = {
  Version: PropTypes.string.isRequired,
  Color: PropTypes.string,
};

export default Brand;
