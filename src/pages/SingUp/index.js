import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import * as style from '../SingIn/style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Criar</h2>

        <style.Form>
          <style.GroupInput>
            <FaUserAlt />
            <input
              type="text"
              placeholder="Nome de usuário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </style.GroupInput>

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

          <style.ButtonForm type="submit" isVerif={name && email && password}>Criar</style.ButtonForm>
          <Link to="/login">Já possui conta? Entre agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingUp;
