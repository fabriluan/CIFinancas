import React from 'react';
import { PropTypes } from 'prop-types';
import CenterSt from './style';

export default function Center({ children, class1 }) {
  return (
    <CenterSt className={`center ${class1}`}>
      {children}
    </CenterSt>
  );
}

Center.propTypes = {
  children: PropTypes.node.isRequired,
  class1: PropTypes.string,
};

Center.defaultProps = {
  class1: '',
};
