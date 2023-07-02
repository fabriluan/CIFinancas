import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import * as style from './style';
import Center from '../../components/Center';
import Enter from '../../components/Enter';
import { auth, db } from '../../service/firebaseConnection';
import { registerUser } from '../../redux/user/slice';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);

      if (email === '') {
        setAlertEmail(true);
        throw new Error('O email está vazio!');
      }

      if (password === '') {
        setAlertPassword(true);
        throw new Error('A senha está vazia!');
      }

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
        .catch((erro) => {
          throw Error(erro.message);
        });
    } catch (error) {
      const result = error.message.split(/\(([^)]+)\)/, 2);
      const resultMsg = result[1];

      console.log(result);

      setMensagemError(error.message);
      switch (resultMsg) {
        case 'auth/invalid-email':
          setAlertEmail(true);
          setMensagemError('Digite um email válido');
          break;

        case 'auth/user-not-found':
          setAlertEmail(true);
          setMensagemError('A conta do usuário não existe');
          break;

        case 'auth/wrong-password':
          setAlertPassword(true);
          setMensagemError('A senha está incorreta');
          break;

        default:
          break;
      }
    } finally {
      setLoad(false);
    }
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (value) => {
        const { uid } = value.user;

        await setDoc(doc(db, 'users', uid), {
          nome: value.user.displayName,
          avatarUrl: value.user.photoURL,

        }).then(() => {
          const data = {
            uid,
            email: value.user.email,
            name: value.user.displayName,
            avatarUrl: value.user.photoURL,
          };

          dispatch(registerUser(data));
        });
      });
  };

  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Entrar</h2>

        <style.Form>

          {
            alertEmail && (
              <span>{mensagemError}</span>
            )
          }

          <style.GroupInput isAlertEmail={alertEmail}>
            <MdEmail />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onClick={() => setAlertEmail(false)}
              onChange={(e) => setEmail(e.target.value)}
            />
          </style.GroupInput>

          {
            alertPassword && (
              <span>{mensagemError}</span>
            )
          }

          <style.GroupInput isAlertPassword={alertPassword}>
            <FaLock />
            <input
              type="text"
              placeholder="Senha"
              name="password"
              value={password}
              onClick={() => setAlertPassword(false)}
              onChange={(e) => setPassword(e.target.value)}
            />
          </style.GroupInput>

          <Enter google={handleGoogle} />

          <style.ButtonForm type="submit" isVerif={email && password} onClick={handleSubmit}>{load ? 'Carregando...' : 'Entrar'}</style.ButtonForm>
          <Link to="/register">Não possui conta? Crie uma agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingIn;
