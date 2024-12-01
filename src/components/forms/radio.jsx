import React from 'react';

const Radio = ({ value, setValue, Options, id, className }) => {
  return (
    <>
      {Options.map((Options) => (
        <label
          key={Options}
          className={'form-radio-input ' + className}
          htmlFor={Options}
        >
          <input
            className="me-1"
            type="radio"
            id={Options}
            name={id}
            aria-label={Options}
            value={Options}
            checked={value === Options}
            onChange={({ target }) => setValue(target.value)}
          />
          <span className="mark"></span>
          {Options}
        </label>
      ))}
    </>
  );
};

export default Radio;
