import React from 'react';

const headConfig = (props) => {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector('meta["description"]')
      .setAttribute('content', props.description);
  }, [props]);
  return <></>;
};

export default headConfig;
