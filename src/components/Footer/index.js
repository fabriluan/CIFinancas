import React from 'react';
import {
  BsArrowRight, BsInstagram, BsLinkedin, BsGithub,
} from 'react-icons/bs';
import * as style from './style';
import Center from '../Center';

export default function Footer() {
  return (
    <style.FooterSt>
      <Center>
        <style.FooterText>
          <h2>CIFinanças</h2>
          <span>Transformando finanças, construindo futuros</span>
        </style.FooterText>

        <style.FooterEmail>
          <h2>Receba novas informações</h2>

          <style.EmailInfo>
            <input type="text" placeholder="Digite seu email" />

            <button type="submit">
              <BsArrowRight />
            </button>

          </style.EmailInfo>
        </style.FooterEmail>

        <style.FoooterSocial>
          <h2>Nos siga em</h2>

          <div>
            <a href="instagram">
              <BsInstagram />
            </a>

            <a href="instagram">
              <BsLinkedin />
            </a>

            <a href="instagram">
              <BsGithub />
            </a>
          </div>

        </style.FoooterSocial>

      </Center>

      <style.FooterCredit>
        <span>
          Site feito por
          <a href="https://www.fabriciocipriano.com.br" target="blank"> Fabricio Cipriano </a>
          &copy;
        </span>
      </style.FooterCredit>

    </style.FooterSt>
  );
}
