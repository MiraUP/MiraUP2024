import React from 'react';
import { Tooltip } from 'bootstrap';
import PropTypes from 'prop-types';

function TooltipComponent({ children, Title, Placement, Trigger, Offset }) {
  const tooltipRef = React.useRef();

  React.useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title: `${Title}`,
      placement: `${Placement}`,
      trigger: `${Trigger}`,
      offset: `${Offset}`,
    });
  });

  return (
    <>
      <span ref={tooltipRef}>{children}</span>
    </>
  );
}

const Tooltips = ({ children, Title, Placement, Trigger, Offset }) => {
  const [mounted, setMounted] = React.useState(true);

  Title === undefined ? (Title = 'Informe o "Title".') : (Title = Title);
  Placement === undefined ? (Placement = 'bottom') : (Placement = Placement);
  Trigger === undefined ? (Trigger = 'hover') : (Trigger = Trigger);
  Offset === undefined ? (Offset = '0, 0') : (Offset = Offset);

  return (
    <>
      {mounted && (
        <TooltipComponent
          Title={Title}
          Placement={Placement}
          Trigger={Trigger}
          Offset={Offset}
        >
          {children}
        </TooltipComponent>
      )}
    </>
  );
};

Tooltips.propTypes = {
  Title: PropTypes.string,
  Placement: PropTypes.string,
  Trigger: PropTypes.string,
  Offset: PropTypes.string,
};

export default Tooltips;
