import React from 'react';
import Icons from '../../components/icon';

const Textarea = ({
  value,
  setValue,
  id,
  row,
  className,
  placeholder,
  Icon,
}) => {
  id === undefined ? (id = '') : (id = id);
  row === undefined ? (row = '5') : (row = row);
  className === undefined ? (className = '') : (className = className);
  placeholder === undefined ? (placeholder = '') : (placeholder = placeholder);
  Icon === undefined
    ? (Icon = '')
    : (Icon = <Icons IconName={Icon} style={{ marginRight: '5px' }} />);

  return (
    <span className={'form-floating ' + className}>
      <textarea
        className="form-control"
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

export default Textarea;
