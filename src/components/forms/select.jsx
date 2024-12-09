import React from 'react';
import Icons from '../../components/icon';
import PropTypes from 'prop-types';

const Select = ({
  value,
  setValue,
  id,
  className,
  placeholder,
  Icon,
  Options,
  ...props
}) => {
  id === undefined ? (id = '') : (id = id);
  className === undefined ? (className = '') : (className = className);
  placeholder === undefined ? (Placeholder = '') : (Placeholder = placeholder);

  return (
    <>
      <div className="input-group-select">
        {Icon === undefined ? (
          ''
        ) : (
          <span className="input-group-text">
            <Icons IconName={Icon} style={{ marginRight: '5px' }} />
          </span>
        )}
        <span className={'form-floating ' + className} {...props}>
          <button
            className="form-select"
            id={id}
            type="button"
            data-bs-toggle="dropdown"
            data-bs-offset={Icon === undefined ? '0,0' : '-46,0'}
            aria-expanded="false"
          >
            <span
              className={
                value === ''
                  ? 'placeholder-select'
                  : 'placeholder-select active'
              }
            >
              {Placeholder}
            </span>
            <span className="select-option">{value}</span>
          </button>
          <div
            className="dropdown-form-select dropdown-menu dropdown-menu-dark dropdown-menu-center"
            style={
              Icon === undefined
                ? { width: '100%' }
                : { width: 'calc(100% + 46px)' }
            }
          >
            <ul>
              <li style={{ opacity: '.5' }} onClick={(event) => setValue('')}>
                {Placeholder}
              </li>
              {Options.map((Options) => (
                <li
                  key={Options}
                  onClick={(event) => setValue(Options)}
                  style={
                    value === Options
                      ? { boxShadow: '0 0 0 5px rgba(72, 218, 250, .3)' }
                      : {}
                  }
                >
                  {Options}
                </li>
              ))}
            </ul>
          </div>
        </span>
      </div>
    </>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  id: PropTypes.string,
  Options: PropTypes.array,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  Icon: PropTypes.string,
};

export default Select;
