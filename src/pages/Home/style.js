import { styled } from 'styled-components';

export const HomeHeader = styled.header`
  display: flex;
  width: 100%;
  min-height: 80px;
  /* padding: 10px; */
  background-color: ${(props) => props.theme.layout};
  color: ${(props) => props.theme.textLigth};

  > .center {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2{
    font-size: 1.75rem;
    font-weight: 700;
  }

`;

export const UlDesktop = styled.ul`
  list-style: none;
  display: flex;

    li{
      margin: 0 10px;

      a{
        position: relative;
        padding: 5px 10px;
        font-size: 1.3rem;

        &::after{
          position: absolute;
          content: '';
          bottom: 0;
          left: 50%;
          width: 0%;
          height: 1px;
          background-color: white;
        }

        &:hover{
          transition: 0.7s;
          font-size: 1.4rem;

          &::after{
            transition: 0.7s;
            left: 0;
            width: 100%;
          }
        }
      }
    }

    @media screen and (max-width: 750px){
      display: none;
    }
`;

export const MenuIcons = styled.div`
  display: none;
  font-size: 2.2rem;
  cursor: pointer;

  @media screen and (max-width: 750px){
    display: flex;
  }
`;

export const UlMenu = styled.ul`
  display: none;
  top: 80px;
  position: absolute;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  list-style: none;
  background-color: ${(props) => props.theme.layout};
  border-top: 1px solid ${(props) => props.theme.textLigth};

  li{
    width: 100%;

    a{
      font-size: 1.4rem;
      padding: 25px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.textLigth};

      &:hover{
        transition: 0.7s;
        font-size: 1.6rem;
        background-color: ${(props) => props.theme.layoutHover};
      }
    }
  }

  @media screen and (max-width: 750px){
    display: flex;
  }
`;

export const HomeBanner = styled.section`
  width: 100%;
  height: 85vh;
  min-height: 740px;
  background-color: red;
  background-image: url(${(props) => props.isBanner});
  background-size: 100% 130%;
  background-position: 100%;

  > .center{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 1000px){
    background-size: 200% 130%;
    background-position: 25%;
  }

  @media screen and (max-width: 750px){
    background-size: 260% 150%;
  }

  @media screen and (max-width: 500px){
    background-size: 300% 180%;
  }
  }
`;

export const BannerText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  span{
    font-size: 1.4rem;
    font-weight: 300;
  }

  h2{
    font-size: 3.5rem;
  }

  a{
    display: flex;
    /* margin: 0 auto; */
    margin-top: 25px;
    font-size: 1.5rem;
    padding: 10px 0;
    width: 250px;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.layout};
    color: ${(props) => props.theme.textLigth};

    &:hover{
      transition: 0.7s;
      transform: scale(1.01);
      background-color: ${(props) => props.theme.layoutHover};
    }
  }

  @media screen and (max-width: 1000px){
    width: 100%;
  }

  @media screen and (max-width: 750px){
    justify-content: center;
    align-items: center;

    h2{
      text-align: center;
    }
  }

  @media screen and (max-width: 500px){
    h2{
      font-size: 2.8rem;
    }

    span{
      text-align: center;
    }
  }
`;

export const HomeAbout = styled.section`
  padding: 40px 10px;
`;

export const AboutImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  img{
    width: 31%;
  }
`;

export const AboutInfo = styled.section`
  padding: 10px;
  display: flex;
  margin-top: 25px;
  justify-content: space-between;
  align-items: center;

  img{
    width: 35%;
    height: 300px;
  }

  @media screen and (max-width: 850px){
    flex-direction: column;

    img{
      margin-top: 30px;
      width: 60%;
      /* height: 400px; */
    }
  }

  @media screen and (max-width: 500px){
    img{
      width: 100%;
    }
  }
`;

export const AboutText = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2.45rem;
    font-weight: 400;
    margin-bottom: 10px;
  }

  p{
    padding-right: 20px;
    font-size: 1.3rem;
    font-weight: 300;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 750px){
    justify-content: center;
    align-items: center;

    p, h2{
      text-align: center;
    }
  }

  @media screen and (max-width: 500px){
    h2{
      font-size: 2.1rem;
    }
    p{
      padding-right: 0;
      font-size: 1.25rem;
    }
  }
`;

export const HomeBenefit = styled.article`
  background-color: ${(props) => props.theme.content};
  color: ${(props) => props.theme.textLigth};
  padding: 30px 0 50px 0;

  > .center{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  h2{
    font-size: 2.8rem;
    font-weight: 200;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const BenefitInfo = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;


  @media screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
