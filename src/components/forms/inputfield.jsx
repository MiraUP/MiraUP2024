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
  iconPosition,
  iconAnimate,
  height,
  autoComplete,
  props,
}) => {
  const [btnAction, setBtnAction] = React.useState(false);

  let errorClass;
  let nameType;
  let iconPositionClass;
  className === undefined ? (className = '') : (className = ' ' + className);
  errorMessage === undefined
    ? (errorClass = '')
    : (errorClass = ' input-field-error');
  iconPosition === undefined
    ? (iconPositionClass = '')
    : (iconPositionClass = ' icon-' + iconPosition);

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
      className={'input-field' + className + errorClass + iconPositionClass}
      style={style === undefined ? {} : style}
    >
      <label className="input" htmlFor={id}>
        {icon != undefined &&
          iconPosition != 'right' &&
          (iconAnimate != undefined ? (
            <Icons
              Animate
              IconName={icon}
              Trigger="hover"
              Style={iconSize}
              className="input-field-icon"
            />
          ) : (
            <Icons
              IconName={icon}
              Size={iconSize}
              className="input-field-icon"
            />
          ))}
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
        <span
          className="input-field-label"
          style={
            iconPosition === 'right'
              ? { left: '0' }
              : icon === undefined
              ? { left: '0' }
              : {}
          }
        >
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

        {icon != undefined &&
          iconPosition === 'right' &&
          type != 'password' &&
          (iconAnimate != undefined ? (
            <Icons
              Animate
              IconName={icon}
              Trigger="hover"
              Style={iconSize}
              className="input-field-icon"
            />
          ) : (
            <Icons
              IconName={icon}
              Size={iconSize}
              className="input-field-icon"
            />
          ))}
      </label>
      <span className="">
        {helperText != undefined && <p className="helper-text">{helperText}</p>}

        {errorValidateMessage()}
      </span>
    </div>
  );
};

export default InputField;
