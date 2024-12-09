import React from 'react';
import PropTypes from 'prop-types';

const headConfig = (props) => {
  React.useEffect(() => {
    if (props.title != undefined) {
      document.title = props.title + ' - MiraUP Ativos Digitais';
    }
    if (props.description != undefined) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute('content', props.description);
    }
  }, [props]);
  return <></>;
};

headConfig.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default headConfig;
