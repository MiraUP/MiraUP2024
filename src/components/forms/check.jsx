import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ value, setValue, Options, id, className }) => {
  id === undefined ? (id = '') : (id = id);
  className === undefined
    ? (className = 'form-check')
    : (className = 'form-check ' + className);

  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {Options.map((Options) => (
        <label key={Options} className={className} htmlFor={Options}>
          <input
            className="form-check-input me-1"
            type="checkbox"
            id={Options}
            name={id}
            aria-label={Options}
            value={Options}
            checked={value.includes(Options)}
            onChange={handleChange}
          />
          <span className="mark"></span>
          {Options}
        </label>
      ))}
    </>
  );
};

Check.propTypes = {
  value: PropTypes.array,
  setValue: PropTypes.func,
  Options: PropTypes.array,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Check;
