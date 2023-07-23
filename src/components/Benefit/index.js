import React from 'react';
import { PropTypes } from 'prop-types';
import BenefitSt from './style';

export default function Benefit({ children, title, text }) {
  return (
    <BenefitSt>
      {children}

      <h1>{title}</h1>

      <span>{text}</span>

      <a href="login">Ver mais</a>
    </BenefitSt>
  );
}

Benefit.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
