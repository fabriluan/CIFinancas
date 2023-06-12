import React from 'react';
import { PropTypes } from 'prop-types';
import CenterSt from './style';

export default function Center({ children }) {
  return (
    <CenterSt className="center">
      {children}
    </CenterSt>
  );
}

Center.propTypes = {
  children: PropTypes.string.isRequired,
};
