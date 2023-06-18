import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import * as style from '../SingIn/style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';

function SingUp() {
  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Criar</h2>

        <style.Form>
          <style.GroupInput>
            <FaUserAlt />
            <input type="text" placeholder="Nome de usuário " />
          </style.GroupInput>

          <style.GroupInput>
            <MdEmail />
            <input type="text" placeholder="Email" />
          </style.GroupInput>

          <style.GroupInput>
            <FaLock />
            <input type="text" placeholder="Senha " />
          </style.GroupInput>

          <Enter />

          <button type="submit">Criar</button>
          <Link to="/login">Já possui conta? Entre agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingUp;
