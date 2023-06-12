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

  ul{
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
  }
`;

export const HomeBanner = styled.section`
  width: 100%;
  height: 85vh;
  min-height: 680px;
  background-color: red;
  background-image: url(${(props) => props.isBanner});
  background-size: 100% 130%;

  > .center{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
`;

export const AboutText = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 10px;
  }

  p{
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export const HomeBenefit = styled.article`
  background-color: ${(props) => props.theme.content};
  color: ${(props) => props.theme.textLigth};
  padding: 30px 0 50px 0;

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

`;
