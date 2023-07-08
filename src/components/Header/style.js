import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const HeaderDashboard = motion(styled.header`
  z-index: 99;
  background-color: ${(props) => props.theme.layout};
  color: ${(props) => props.theme.textLigth};
  padding: 10px 0;

  > .center{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`);

export const HeaderMenu = styled.button`
  display: flex;
  background-color: transparent;
  color: ${(props) => props.theme.textLigth};
  font-size:${(props) => (props.isMargin ? '3.2rem' : '2.5rem')};
  border: 0;
  margin-left: ${(props) => (props.isMargin ? 'auto' : '0')};
  margin-right: ${(props) => (props.isMargin ? '15px' : '0')};
`;

export const HeaderMenuShow = motion(styled.section`
  position: absolute;
  padding: 20px 0;
  left: 0;
  top: 0;
  width: 0vw;
  height: 100vh;
  display: none;
  flex-direction: column;
  background-color: ${(props) => props.theme.layout};
  border: 1px solid ${(props) => (props.theme.contentDark)} !important;
`);

export const HeaderMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  list-style-type: none;
  font-size: 1.8rem;
  font-weight: 300;

  li{
    width: 100%;

    a{
      display: flex;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid ${(props) => (props.theme.textLigth)};
      padding: 20px 10px;

      &:hover{
        transition: 0.7s;
        background-color: ${(props) => (props.theme.layoutHover)};
      }
    }

    &:nth-child(1){
      border-top: 1px solid ${(props) => (props.theme.textLigth)};
    }
  }
`;

export const HeaderLogout = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.textLigth};
  font-size: 2rem;

  span{
    font-size: 1.4rem;
    font-weight: 100;
    margin-left: 5px;
  }

  &:hover{
    transition: 0.7s;
    scale: 1.02;
  }
`;

export const HeaderProfile = styled.a`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  padding: 4px 10px;

  h2{
    font-size: 1.4rem;
    margin-right: 15px;
  }

  img{
    width: 45px;
    height: 45px;
    border-radius: 2.5rem;
  }

  &:hover{
    transition: 0.7s;
    background-color: ${(props) => props.theme.layoutHover};
    scale: 1.01;
  }
`;
