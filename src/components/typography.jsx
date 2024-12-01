import React from 'react';

const Typography = ({ Component, children, ...props }) => {
  let ComponentName;
  Component === undefined ? (ComponentName = 'p') : (ComponentName = Component);
  return <ComponentName {...props}>{children}</ComponentName>;
};

export default Typography;
