import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ Component, children, ...props }) => {
  let ComponentName;
  Component === undefined ? (ComponentName = 'p') : (ComponentName = Component);
  return <ComponentName {...props}>{children}</ComponentName>;
};

Typography.propTypes = {
  Component: PropTypes.string,
};

export default Typography;
