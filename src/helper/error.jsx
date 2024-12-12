import React from 'react';

const Error = ({ error, message, className, props }) => {
  if (!error) return null;
  return (
    <span
      className={className ? `error-message ${className}` : 'error-message'}
      {...props}
    >
      {message ? message : error}
    </span>
  );
};

export default Error;
