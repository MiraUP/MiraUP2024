import React from 'react';
import Icons from '../../components/icon';
import Button from '../../components/button';

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
      {children}
      {btnBack != 'none' && btnNext != 'none' && (
        <hr className="hr-gradient-center" />
      )}
      <footer className="d-flex">
        {order != '1' && btnBack != 'none' && (
          <Button
            Ripple
            type="button"
            Component="button"
            className="w-50 text-white btn-submit"
            onClick={() => setStepper(name + '-stepper-' + orderBack)}
          >
            <Icons IconName="arrow-left" Size="1.5" />
            {btnBack}
          </Button>
        )}
        {btnNext != 'none' && (
          <Button
            Ripple
            type="submit"
            Component="button"
            className={
              order === '1'
                ? 'w-100 text-white btn-submit'
                : 'w-50 text-white btn-submit'
            }
            //onClick={() => end === undefined && setStepper(name + '-stepper-' + orderNext) }
          >
            {btnNext}
            {end === undefined && <Icons IconName="arrow-right" Size="1.5" />}
          </Button>
        )}
      </footer>
    </section>
  );
};
