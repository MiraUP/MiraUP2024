import React from 'react';
import Icons from '../../components/icon';
import PropTypes from 'prop-types';

const Textarea = ({
  value,
  setValue,
  id,
  row,
  className,
  placeholder,
  Icon,
  ...props
}) => {
  id === undefined ? (id = '') : (id = id);
  row === undefined ? (row = '5') : (row = row);
  className === undefined ? (className = '') : (className = className);
  placeholder === undefined ? (placeholder = '') : (placeholder = placeholder);
  Icon === undefined
    ? (Icon = '')
    : (Icon = <Icons IconName={Icon} style={{ marginRight: '5px' }} />);

  return (
    <span
      className={'form-floating form-floating-textarea ' + className}
      {...props}
    >
      <textarea
        className="form-control scrollbar-simple"
        id={id}
        value={value}
        rows={row}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
      />
      <label htmlFor={id}>
        {Icon}
        {placeholder}
      </label>
    </span>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  id: PropTypes.string,
  row: PropTypes.number,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  Icon: PropTypes.string,
};

export default Textarea;
