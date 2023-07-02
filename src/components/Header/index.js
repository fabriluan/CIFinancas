import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import * as style from './style';
import Center from '../Center';
import profile from '../../assets/about.webp';
import { auth } from '../../service/firebaseConnection';
import { logoutUser } from '../../redux/user/slice';

export default function Header() {
  const dispatch = useDispatch();

  const storage = localStorage.getItem('@CIF');
  const { avatarUrl } = JSON.parse(storage);
  const [show, setShow] = useState(false);
  const { innerWidth: width } = window;

  const handleMenu = () => {
    setShow(!show);
  };

  const handleLogout = async () => {
    await signOut(auth);

    dispatch(logoutUser(false));
  };

  const animateMenu = {
    open: {
      width: width > 1000 ? '35vw' : '100vw', display: 'flex', left: 0, transition: { duration: 0.5, when: 'beforeChildren' },
    },
    closed: {
      width: '0vw', left: width > 1000 ? '-35vw' : '-100vw', transition: { duration: 0.7, when: 'afterChildren' }, transitionEnd: { display: 'none' },
    },
  };

  const animateLink = {
    open: {
      opacity: 1, fontSize: '1.8rem',
    },
    closed: {
      opacity: 1, fontSize: '0rem',
    },
  };

  const Links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Relatorios', href: '/transaction' },
    { name: 'Perfil', href: '/profile' },
  ];

  return (
    <style.HeaderDashboard animate={show ? 'open' : 'closed'} variants={show}>
      <Center>
        <style.HeaderMenu onClick={handleMenu}>
          <AiOutlineMenu />
        </style.HeaderMenu>

        <style.HeaderMenuShow variants={animateMenu}>
          <style.HeaderMenu isMargin onClick={handleMenu}>
            <IoCloseOutline />
          </style.HeaderMenu>

          <style.HeaderMenuUl>
            {Links.map((link) => (
              <motion.li variants={animateLink}><Link to={link.href}>{link.name}</Link></motion.li>
            ))}
          </style.HeaderMenuUl>

          <style.HeaderLogout onClick={handleLogout}>
            <BiLogOutCircle />

            <span>Sair</span>
          </style.HeaderLogout>
        </style.HeaderMenuShow>

        <style.HeaderProfile>
          <h2>Fabricio Luan</h2>

          <img src={avatarUrl ? `${avatarUrl}` : `${profile}`} alt="foto de perfil" />
        </style.HeaderProfile>

      </Center>
    </style.HeaderDashboard>
  );
}
