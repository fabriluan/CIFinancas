import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import * as style from './style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';

function SingIn() {
  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Entrar</h2>

        <style.Form>
          <style.GroupInput>
            <MdEmail />
            <input type="text" placeholder="Email" />
          </style.GroupInput>

          <style.GroupInput>
            <FaLock />
            <input type="text" placeholder="Senha " />
          </style.GroupInput>

          <Enter />

          <button type="submit">Entrar</button>
          <Link to="/register">Não possui conta? Crie uma agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingIn;
