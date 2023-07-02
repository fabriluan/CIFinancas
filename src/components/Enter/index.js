import React from 'react';
import { BsGoogle, BsLinkedin, BsGithub } from 'react-icons/bs';
import { PropTypes } from 'prop-types';
import * as style from './style';

export default function Enter({ google }) {
  return (
    <style.EnterSt>
      <h1>Entre com</h1>

      <style.EnterSocial>
        <button type="button" onClick={google}>
          <BsGoogle />
        </button>

        <button type="button">
          <BsLinkedin />
        </button>

        <button type="button">
          <BsGithub />
        </button>
      </style.EnterSocial>
    </style.EnterSt>
  );
}

Enter.propTypes = {
  google: PropTypes.func.isRequired,
};
