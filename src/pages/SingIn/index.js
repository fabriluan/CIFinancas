import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import * as style from './style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';
import { auth, db } from '../../service/firebaseConnection';
import { registerUser } from '../../redux/user/slice';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        const { uid } = value.user;

        const docRef = doc(db, 'users', uid);
        const userProfile = await getDoc(docRef);

        const data = {
          uid,
          email: value.user.email,
          name: userProfile.data().nome,
          avatarUrl: userProfile.data().avatarUrl,
        };

        dispatch(registerUser(data));
      })
      .catch(() => {

      });
  };

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

          <style.ButtonForm type="submit" isVerif={email && password} onClick={handleSubmit}>Entrar</style.ButtonForm>
          <Link to="/register">Não possui conta? Crie uma agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingIn;
