import React, { useState } from 'react';
// import { Link as Links } from 'react-scroll';
// import { Link } from 'react-router-dom';
import {
  AiOutlineClose, AiOutlineMenu, AiFillCalculator, AiFillControl,
} from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    { icons: <AiFillCalculator />, title: 'Controle Financeiro', text: 'Por meio de conteúdo interativo, ferramentas e calculadoras, o site pode oferecer orientação personalizada para as pessoas avaliarem sua situação financeira atual.' },
    { icons: <FaMoneyBillWave />, title: 'Gestão de Orçamento', text: 'O site pode fornecer recursos e modelos para auxiliar as pessoas a criar e gerenciar um orçamento eficaz.' },
    { icons: <AiFillControl />, title: 'Planejamento Financeiro', text: 'Por meio de guias e artigos, o site pode ajudar as pessoas a desenvolver um plano financeiro abrangente para atingir objetivos de longo prazo' },
    { icons: <AiFillCalculator />, title: 'Controle Financeiro', text: 'Por meio de conteúdo interativo, ferramentas e calculadoras, o site pode oferecer orientação personalizada para as pessoas avaliarem sua situação financeira atual.' },
    { icons: <FaMoneyBillWave />, title: 'Gestão de Orçamento', text: 'O site pode fornecer recursos e modelos para auxiliar as pessoas a criar e gerenciar um orçamento eficaz.' },
    { icons: <AiFillControl />, title: 'Planejamento Financeiro', text: 'Por meio de guias e artigos, o site pode ajudar as pessoas a desenvolver um plano financeiro abrangente para atingir objetivos de longo prazo' },
  ];

  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <style.HomeHeader>
        <Center>
          <h2>CIFinanças</h2>

          <style.UlDesktop>
            <li><a href="id">Sobre</a></li>
            <li><a href="f">Beneficios</a></li>
            <li><Link to="/login">Entrar</Link></li>
          </style.UlDesktop>

          <style.MenuIcons>

            {show ? (
              <AiOutlineClose onClick={handleMenu} />
            ) : (
              <AiOutlineMenu onClick={handleMenu} />
            ) }
          </style.MenuIcons>

        </Center>

        {show ? (
          <style.UlMenu>
            <li><a href="id">Sobre</a></li>
            <li><a href="f">Beneficios</a></li>
            <li><a href="/home">Entrar</a></li>
          </style.UlMenu>

        ) : (
          <>
          </>
        )}
      </style.HomeHeader>

      <style.HomeBanner isBanner={banner}>
        <Center>
          <style.BannerText>
            <span>está com problemas com suas contas?</span>
            <h2>Comece a gerenciar as suas contas agora!</h2>
            <a href> Gerencie </a>
          </style.BannerText>
        </Center>
      </style.HomeBanner>

      <style.HomeAbout>
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

      <style.HomeBenefit>
        <Center>
          <h2>Beneficios</h2>

          <style.BenefitInfo>

            {benefits.map((benefit) => (
              <Benefit title={benefit.title} text={benefit.text}>
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
