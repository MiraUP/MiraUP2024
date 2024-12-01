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

const Brand = ({ Version, Color, ...props }) => {
  Color === undefined ? (Color = '#DFE0E4') : (Color = Color);

  let Logo;
  if (Version === undefined) {
    Logo = <ExtendedLogo fill={Color} className={'brand'} {...props} />;
  } else if (Version === 'Extended') {
    Logo = <ExtendedLogo fill={Color} className={'brand'} {...props} />;
  } else if (Version === 'Signature') {
    Logo = <SignatureLogo fill={Color} className={'brand'} {...props} />;
  } else {
    Logo =
      'Non-existent version brand. Choose "Extended" or "Signature" options.';
  }

  return <>{Logo}</>;
};

export default Brand;
