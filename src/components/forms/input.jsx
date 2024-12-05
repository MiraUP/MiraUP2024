import React from 'react';
import Icons from '../icon';

const Input = ({
  id,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  className,
  autoComplete,
  icon,
  errorMessage,
  style,
}) => {
  placeholder === undefined
    ? (placeholder = 'Informe o "placeholder"')
    : (placeholder = placeholder);
  className === undefined ? (className = '') : (className = ' ' + className);
  autoComplete === undefined
    ? (autoComplete = 'off')
    : (autoComplete = autoComplete);

  const [types, setTypes] = React.useState(type);
  function actionPassword() {
    if (type === 'password') {
      return (
        <Icons
          Component="a"
          className="action-password"
          IconName={types === 'password' ? 'eye' : 'eye-close'}
          onClick={() =>
            setTypes(
              types === 'password'
                ? 'text'
                : types === 'text'
                ? 'password'
                : '',
            )
          }
        />
      );
    } else {
      return '';
    }
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
    <>
      <div
        className={error ? 'error input-group' : 'input-group'}
        style={style}
      >
        {icon === undefined ? (
          ''
        ) : (
          <span className="input-group-text">
            <Icons IconName={icon} />
          </span>
        )}
        <span className={'form-floating' + className}>
          <input
            type={types}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="form-control"
          />
          <label htmlFor={id}>{' ' + placeholder}</label>
          {actionPassword()}
          {errorValidateMessage()}
        </span>
      </div>
    </>
  );
};

export default Input;
