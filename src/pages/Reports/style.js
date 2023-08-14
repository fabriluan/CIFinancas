import { styled } from 'styled-components';

export const ReportsSt = styled.section`
  display: flex;
  margin: 30px 0;

  h2{
    font-size: 2.1rem;
    font-weight: 100;
  }
`;

export const ReportsButton = styled.div`
  display: flex;
  margin-top: 25px;

  button{
    width: 100%;
    max-width: 200px;
    background-color: ${(props) => props.theme.backgroundLigth};
    border-radius: 0.5rem;
    border: 0;
    font-size: 1.25rem;
    font-weight: 100;
    padding: 6px;
    margin-right: 30px;
  }
`;

export const ReportsList = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  border-radius: 0.5rem;
  /* padding: 10px 15px; */
  background-color: ${(props) => props.theme.backgroundContent};
  border-collapse: collapse;

  thead, tbody{
    margin-top: 10px;
    width: 98%;
    padding: 5px 0;
    border-radius: 2.5rem;
    background-color: ${(props) => props.theme.backgroundLigth};

    tr{
      width: 100%;
      background-color: red;
      display: flex;
      border-radius: 2.5rem;
      align-items: center;
      justify-content: space-around;
      background-color: ${(props) => props.theme.backgroundLigth};

      th, td{
        display: flex;
        justify-content: center;
        width: 100%;
        font-weight: 400;
        font-size: 1.4rem;

        & + td, & + th{
          border-left: 1px solid #000;
        }
      }
    }
  }

  tbody{
    margin-top: 15px;
    flex-direction: column;
    background-color: transparent;

    tr{
      margin: 10px 0;
      border-radius: 2.5rem;
      background-color: ${(props) => props.theme.backgroundLigth};
    }

    td{
      margin: 10px 0;
      font-size: 1.2rem !important;
      font-weight: 100 !important;

    }
  }
`;

export const ButtonEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  border: 0;
  width: 32px;
  height: 32px;
  color: white;
  background-color: #3F46FB;
  cursor: pointer;

  &:hover{
    transition: 0.7s;
    background-color: #252CFA;
  }

  &:nth-child(2){
    background-color: #FE2C26;
    margin-left: 10px;
  }

  &:nth-child(2):hover{
    transition: 0.7s;
    background-color: #FE0C05;
  }
`;

export const GenerateReports = styled.section`
  width: 100%;
  padding: 25px 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.backgroundLigth};

  button{
    background-color: ${(props) => props.theme.layout};
    color: ${(props) => props.theme.backgroundLigth};
    font-size: 1.2rem;
    padding: 8px;
    width: 220px;
    border: 0;
    border-radius: 0.5rem;

    &:hover{
      transition: 0.7s;
      background-color: ${(props) => props.theme.layoutHover};
    }
  }
`;
