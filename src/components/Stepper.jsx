import React from 'react';
import Icons from './icon';
import Button from './button';
import PropTypes from 'prop-types';

export const Stepper = ({ children, ...props }) => {
  return (
    <main className="stepper" {...props}>
      {children}
    </main>
  );
};

export const StepperSection = ({
  stepper,
  setStepper,
  name,
  order,
  btnBack,
  btnNext,
  children,
  end,
}) => {
  btnBack === undefined ? (btnBack = 'Voltar') : (btnBack = btnBack);
  btnNext === undefined ? (btnNext = 'Próximo') : (btnNext = btnNext);
  const orderBack = Number(order) - 1;
  const orderNext = Number(order) + 1;
  const id = name + '-stepper-' + order;
  const translateX = -Number(stepper.replace(/\D/gim, '')) + Number(order);

  return (
    <section
      id={id}
      className={stepper === id ? 'active' : ''}
      style={{
        transform: `translateX(${translateX}00%)`,
      }}
    >
      <div style={{ padding: '0 25px' }}>{children}</div>
      {btnBack != 'none' && btnNext != 'none' && (
        <hr className="hr-gradient-center" />
      )}
      <footer className="d-flex">
        {order != '1' && btnBack != 'none' && (
          <Button
            Ripple
            Component="a"
            className="w-50 text-white btn-submit"
            onClick={() => setStepper(name + '-stepper-' + orderBack)}
          >
            <Icons IconName="arrow-left" Size={1.5} />
            {btnBack}
          </Button>
        )}
        {btnNext != 'none' && (
          <Button
            Ripple
            Component="button"
            className={
              order === 1
                ? 'w-100 text-white btn-submit'
                : 'w-50 text-white btn-submit'
            }
          >
            {btnNext}
            {end === undefined && <Icons IconName="arrow-right" Size={1.5} />}
          </Button>
        )}
      </footer>
    </section>
  );
};

StepperSection.propTypes = {
  stepper: PropTypes.string,
  setStepper: PropTypes.func,
  name: PropTypes.string,
  order: PropTypes.number,
  btnBack: PropTypes.string,
  btnNext: PropTypes.string,
  end: PropTypes.bool,
  className: PropTypes.string,
};
