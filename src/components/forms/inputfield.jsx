import React from 'react';
import Icons from '../icon';

const InputField = ({
  id,
  type,
  label,
  className,
  style,
  helperText,
  onChange,
  value,
  error,
  errorMessage,
  onBlur,
  icon,
  iconSize,
  height,
  autoComplete,
  props,
}) => {
  const [btnAction, setBtnAction] = React.useState(false);

  let errorClass;
  let nameType;
  className === undefined ? (className = '') : (className = ' ' + className);
  errorMessage === undefined
    ? (errorClass = '')
    : (errorClass = ' input-field-error');
  if (type === 'password') {
    btnAction === false ? (nameType = 'password') : (nameType = 'text');
  }

  function errorValidateMessage() {
    if (
      error &&
      error === 'Preencha este campo.' &&
      errorMessage != undefined
    ) {
      return (
        <span className="error-message">
          <Icons IconName="info" />
          {errorMessage}
        </span>
      );
    } else if (
      error &&
      error != 'Preencha este campo.' &&
      errorMessage === undefined
    ) {
      return (
        <span className="error-message">
          <Icons IconName="info" />
          {error}
        </span>
      );
    } else if (
      error &&
      error === 'Preencha este campo.' &&
      errorMessage === undefined
    ) {
      return (
        <span className="error-message">
          <Icons IconName="info" />
          {error}
        </span>
      );
    } else if (
      error &&
      error != 'Preencha este campo.' &&
      errorMessage != undefined
    ) {
      return (
        <span className="error-message">
          <Icons IconName="info" />
          {error}
        </span>
      );
    } else {
      return '';
    }
  }

  return (
    <div
      className={'input-field' + className + errorClass}
      style={style === undefined ? {} : style}
    >
      <label className="input" htmlFor={id}>
        {icon != undefined && (
          <Icons IconName={icon} Size={iconSize} className="input-field-icon" />
        )}
        <input
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder=""
          type={type === undefined ? 'text' : nameType}
          autoComplete={autoComplete != undefined && autoComplete}
          style={height != undefined ? { padding: `${height}px 0` } : {}}
          {...props}
        />
        <span className="input-field-label">
          {label === undefined ? 'Informe um placeholder' : label}
        </span>
        {type === 'password' && (
          <Icons
            Component="a"
            IconName={btnAction ? 'eye-close' : 'eye'}
            Size={2}
            className="input-field-action"
            onClick={() => setBtnAction(!btnAction)}
          />
        )}
      </label>
      <span className="">
        {helperText != undefined && <p className="helper-text">{helperText}</p>}

        {errorValidateMessage()}
      </span>
    </div>
  );
};

export default InputField;
