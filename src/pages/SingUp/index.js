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
  const [load, setLoad] = useState(false);
  const [alertName, setAlertName] = useState(false);
  const [alertEmail, setAlertEmail] = useState(false);
  const [alertPassword, setAlertPassword] = useState(false);
  const [mensagemError, setMensagemError] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);

      if (name === '') {
        setAlertName(true);
        throw new Error('O seu nome está vazio!');
      }

      if (email === '') {
        setAlertEmail(true);
        throw new Error('O email está vazio!');
      }

      if (password === '') {
        setAlertPassword(true);
        throw new Error('A senha está vazia!');
      }

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
              throw Error(error.message);
            });
        })
        .catch((error) => {
          throw Error(error.message);
        });
    } catch (error) {
      const result = error.message.split(/\(([^)]+)\)/, 2);

      console.log(result);

      const errorMsg = result[1];
      setMensagemError(error.message);

      switch (errorMsg) {
        case 'auth/weak-password':
          setAlertPassword(true);
          setMensagemError('A senha precisa ter no minímo 6 caracteres');
          break;

        case 'auth/email-already-in-use':
          setAlertEmail(true);
          setMensagemError('O email já está em uso');
          break;

        case 'auth/invalid-email':
          setAlertEmail(true);
          setMensagemError('Digite um email válido');
          break;

        default:
          break;
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <Center class1="classCenter">
      <style.Sing>
        <h2>Criar</h2>

        <style.Form>

          {
            alertName && (
              <span>{mensagemError}</span>
            )
          }
          <style.GroupInput isAlertName={alertName}>
            <FaUserAlt />
            <input
              type="text"
              name="name"
              placeholder="Nome de usuário"
              value={name}
              onClick={() => setAlertName(false)}
              onChange={(e) => setName(e.target.value)}
            />
          </style.GroupInput>

          {
            alertEmail && (
              <span>{mensagemError}</span>
            )
          }
          <style.GroupInput isAlertEmail={alertEmail}>
            <MdEmail />
            <input
              type="text"
              name="email"
              placeholder="Email"
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
              name="password"
              placeholder="Senha"
              value={password}
              onClick={() => setAlertPassword(false)}
              onChange={(e) => setPassword(e.target.value)}
            />
          </style.GroupInput>

          <Enter />

          <style.ButtonForm
            type="submit"
            isVerif={name && email && password}
            onClick={handleSubmit}
          >
            {load ? 'Criando' : 'Criar'}
          </style.ButtonForm>
          <Link to="/login">Já possui conta? Entre agora</Link>
        </style.Form>
      </style.Sing>
    </Center>
  );
}

export default SingUp;
