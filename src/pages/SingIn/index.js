import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import * as style from './style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Entrar</h2>

        <style.Form>
          <style.GroupInput>
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </style.GroupInput>

          <style.GroupInput>
            <FaLock />
            <input
              type="text"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </style.GroupInput>

          <Enter />

          <style.ButtonForm type="submit" isVerif={email && password}>Entrar</style.ButtonForm>
          <Link to="/register">Não possui conta? Crie uma agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingIn;
