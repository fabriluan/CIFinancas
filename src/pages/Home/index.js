import React, { useState } from 'react';
// import { Link as Links } from 'react-scroll';
// import { Link } from 'react-router-dom';
import {
  AiOutlineClose, AiOutlineMenu, AiFillCalculator, AiFillControl,
} from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as LinkS } from 'react-scroll';
import * as style from './style';
import Center from '../../components/Center';
import banner from '../../assets/banner_home.webp';
import about1 from '../../assets/about.webp';
import about2 from '../../assets/about2.webp';
import about3 from '../../assets/about3.webp';
import icone from '../../assets/icone.webp';
import Benefit from '../../components/Benefit';

function Home() {
  const benefits = [
    {
      icons: <AiFillCalculator />, title: 'Controle Financeiro', text: 'Por meio de conteúdo interativo, ferramentas e calculadoras, o site pode oferecer orientação personalizada para as pessoas avaliarem sua situação financeira atual.', id: 1,
    },
    {
      icons: <FaMoneyBillWave />, title: 'Gestão de Orçamento', text: 'O site pode fornecer recursos e modelos para auxiliar as pessoas a criar e gerenciar um orçamento eficaz.', id: 2,
    },
    {
      icons: <AiFillControl />, title: 'Planejamento Financeiro', text: 'Por meio de guias e artigos, o site pode ajudar as pessoas a desenvolver um plano financeiro abrangente para atingir objetivos de longo prazo', id: 3,
    },
    {
      icons: <AiFillCalculator />, title: 'Controle Financeiro', text: 'Por meio de conteúdo interativo, ferramentas e calculadoras, o site pode oferecer orientação personalizada para as pessoas avaliarem sua situação financeira atual.', id: 4,
    },
    {
      icons: <FaMoneyBillWave />, title: 'Gestão de Orçamento', text: 'O site pode fornecer recursos e modelos para auxiliar as pessoas a criar e gerenciar um orçamento eficaz.', id: 5,
    },
    {
      icons: <AiFillControl />, title: 'Planejamento Financeiro', text: 'Por meio de guias e artigos, o site pode ajudar as pessoas a desenvolver um plano financeiro abrangente para atingir objetivos de longo prazo', id: 6,
    },
  ];

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  const animateMenu = {
    open: {
      width: '100%', display: 'flex', left: 0, transition: { duration: 0.3, when: 'beforeChildren' },
    },
    closed: {
      width: '0%', left: -20, transition: { duration: 0.3, when: 'afterChildren' }, transitionEnd: { display: 'none' },
    },
  };

  const animateLink = {
    open: {
      opacity: 1, fontSize: '1.4rem',
    },
    closed: {
      opacity: 1, fontSize: '0rem',
    },
  };

  return (
    <>
      <style.HomeHeader animate={show ? 'open' : 'closed'} variants={show}>
        <Center>
          <h2>CIFinanças</h2>

          <style.UlDesktop>
            <li><LinkS to="about" offset={-80} smooth>Sobre</LinkS></li>
            <li><LinkS to="benefit" offset={-80} smooth>Beneficios</LinkS></li>
            <li><Link to="/login">Entrar</Link></li>
          </style.UlDesktop>

          <style.MenuIcons onClick={handleMenu}>

            {show ? (
              <AiOutlineClose />
            ) : (
              <AiOutlineMenu />
            ) }
          </style.MenuIcons>

        </Center>

        <style.UlMenu variants={animateMenu}>
          <motion.li variants={animateLink}><LinkS onClick={handleMenu} to="about" offset={-80} smooth>Sobre</LinkS></motion.li>
          <motion.li variants={animateLink}><LinkS onClick={handleMenu} to="benefit" offset={-80} smooth>Beneficios</LinkS></motion.li>
          <motion.li variants={animateLink}><Link to="/login">Entrar</Link></motion.li>
        </style.UlMenu>

      </style.HomeHeader>

      <style.HomeBanner $isBanner={banner}>
        <Center>
          <style.BannerText>
            <span>está com problemas com suas contas?</span>
            <h2>Comece a gerenciar as suas contas agora!</h2>
            <Link to="/login"> Gerencie </Link>
          </style.BannerText>
        </Center>
      </style.HomeBanner>

      <style.HomeAbout id="about">
        <Center>
          <style.AboutImg>
            <img src={about1} alt="foto de calcu" />
            <img src={about2} alt="foto de calcu" />
            <img src={about3} alt="foto de calcu" />
          </style.AboutImg>

          <style.AboutInfo>
            <style.AboutText>
              <h2>Conheça sobre a CIFinanças</h2>
              <p>A Capital Inteligente Finanças (CIF) é uma empresa especializada em gerenciamento de finanças e oferece serviços abrangentes para ajudar indivíduos e empresas a alcançar uma gestão financeira inteligente e eficiente. A sigla CIF representa a abreviação do nome da empresa.</p>
            </style.AboutText>

            <img src={icone} alt="foto de calcu" />
          </style.AboutInfo>
        </Center>
      </style.HomeAbout>

      <style.HomeBenefit id="benefit">
        <Center>
          <h2>Beneficios</h2>

          <style.BenefitInfo>

            {benefits.map((benefit) => (
              <Benefit key={benefit.id} title={benefit.title} text={benefit.text}>
                {benefit.icons}
              </Benefit>
            ))}
          </style.BenefitInfo>

        </Center>
      </style.HomeBenefit>
    </>
  );
}

export default Home;
