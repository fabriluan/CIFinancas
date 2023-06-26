import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import * as style from '../SingIn/style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';
import { auth, db } from '../../service/firebaseConnection';
import { registerUser } from '../../redux/user/slice';

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        const { uid } = value.user;
        await setDoc(doc(db, 'users', uid), {
          name,
          avatarUrl: null,
        })
          .then(() => {
            const data = {
              uid,
              email: value.user.email,
              name,
            };

            dispatch(registerUser(data));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

          <style.ButtonForm
            type="submit"
            isVerif={name && email && password}
            onClick={handleSubmit}
          >
            Criar
          </style.ButtonForm>
          <Link to="/login">Já possui conta? Entre agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingUp;
